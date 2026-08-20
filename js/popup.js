function activeTab () {
  return new Promise(function (resolve, reject) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
        return
      }
      resolve(tabs[0])
    })
  })
}

function sendTabMessage (tabId, message) {
  return new Promise(function (resolve, reject) {
    chrome.tabs.sendMessage(tabId, message, function (response) {
      if (chrome.runtime.lastError) {
        reject(new Error('WARCreate could not access this page. Reload the page and try again.'))
        return
      }
      if (!response || !response.ok) {
        reject(new Error(response && response.error ? response.error : 'The page did not return capture data.'))
        return
      }
      resolve(response.data)
    })
  })
}

function sendRuntimeMessage (message) {
  return new Promise(function (resolve, reject) {
    chrome.runtime.sendMessage(message, function (response) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
        return
      }
      if (!response || !response.ok) {
        reject(new Error(response && response.error ? response.error : 'The background worker did not respond.'))
        return
      }
      resolve(response.capture)
    })
  })
}

function warcFileName () {
  const defaultName = (new Date().toISOString()).replace(/:|-|T|Z|\./g, '') + '.warc'
  const scheme = localStorage.getItem('filenameScheme')
  return scheme ? moment().format(scheme) + '.warc' : defaultName
}

async function fetchResource (url, binary) {
  const response = await window.fetch(url, { credentials: 'include' })
  if (!response.ok) throw new Error(`Unable to fetch ${url}: HTTP ${response.status}`)
  return {
    url: response.url || url,
    data: binary ? new Uint8Array(await response.arrayBuffer()) : await response.text()
  }
}

async function fetchTextResources (uris) {
  const results = await Promise.all(uris.map(function (url) {
    return fetchResource(url, false).catch(function (error) {
      console.warn(error.message || error)
      return null
    })
  }))
  const resources = { uris: [], data: [] }
  for (const result of results) {
    if (!result) continue
    resources.uris.push(result.url)
    resources.data.push(result.data)
  }
  return resources
}

async function fetchPageResources (pageData) {
  const textResources = await Promise.all([
    fetchTextResources(pageData.css.uris),
    fetchTextResources(pageData.js.uris)
  ])
  const images = {}
  for (const url of pageData.images) {
    try {
      const image = await fetchResource(url, true)
      images[image.url] = image.data
    } catch (error) {
      console.warn(error.message || error)
    }
  }
  pageData.css = textResources[0]
  pageData.js = textResources[1]
  pageData.images = images
  return pageData
}

function showError (error) {
  const errorText = document.getElementById('errorText')
  errorText.textContent = error.message || String(error)
  errorText.style.display = 'block'
}

async function generateCurrentPageWarc () {
  const button = document.getElementById('generateWarc')
  const status = document.getElementById('status')
  const errorText = document.getElementById('errorText')

  button.disabled = true
  errorText.style.display = 'none'

  try {
    const tab = await activeTab()
    if (!tab || !/^https?:\/\//.test(tab.url)) {
      throw new Error('WARCreate can only capture HTTP and HTTPS pages.')
    }

    status.textContent = 'Collecting page resources…'
    const pageData = await sendTabMessage(tab.id, { method: 'collectPage' })
    const capture = await sendRuntimeMessage({ method: 'getCaptureData', tabId: tab.id })

    window.setCapturedHeaders(capture)
    status.textContent = 'Fetching page resources…'
    await fetchPageResources(pageData)
    status.textContent = 'Building WARC…'
    await window.generateWarc({
      method: 'generateWarc',
      url: tab.url,
      docHtml: pageData.html,
      file: warcFileName(),
      images: pageData.images,
      css: pageData.css,
      js: pageData.js,
      outlinks: pageData.outlinks
    })
    status.textContent = 'WARC created.'
  } catch (error) {
    status.textContent = ''
    showError(error)
  } finally {
    button.disabled = false
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generateWarc').addEventListener('click', generateCurrentPageWarc)
})
