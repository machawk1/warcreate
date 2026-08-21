const PROGRESS_STEPS = ['collect', 'fetch', 'build', 'save']

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

function formatDuration (milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`
}

function createProgressController () {
  const panel = document.getElementById('progressPanel')
  const icon = document.getElementById('statusIcon')
  const title = document.getElementById('statusTitle')
  const detail = document.getElementById('statusDetail')
  const bar = document.getElementById('progressBar')
  const count = document.getElementById('progressCount')
  const elapsed = document.getElementById('elapsedTime')
  const slowHint = document.getElementById('slowHint')
  const errorText = document.getElementById('errorText')
  const steps = Array.from(document.querySelectorAll('.step'))
  let startedAt = 0
  let elapsedTimer
  let slowTimer
  let currentStep = 'collect'

  function stopTimers () {
    window.clearInterval(elapsedTimer)
    window.clearTimeout(slowTimer)
  }

  function updateElapsed () {
    elapsed.textContent = formatDuration(Date.now() - startedAt)
  }

  function markSteps (step, state) {
    const currentIndex = PROGRESS_STEPS.indexOf(step)
    for (let index = 0; index < steps.length; index++) {
      const item = steps[index]
      const marker = item.querySelector('.stepMarker')
      item.className = 'step'
      marker.textContent = String(index + 1)

      if (state === 'success' || index < currentIndex) {
        item.classList.add('done')
        marker.textContent = '✓'
      } else if (index === currentIndex) {
        item.classList.add(state === 'error' ? 'error' : 'active')
        if (state === 'error') marker.textContent = '!'
      }
    }
  }

  function update (options) {
    currentStep = options.step || currentStep
    panel.hidden = false
    icon.className = 'statusIcon running'
    icon.textContent = ''
    title.textContent = options.title
    detail.textContent = options.detail || ''
    errorText.style.display = 'none'

    if (options.indeterminate) {
      bar.removeAttribute('value')
      count.textContent = options.count || 'Working…'
    } else {
      const percentage = Math.max(0, Math.min(100, options.percent || 0))
      bar.value = percentage
      count.textContent = options.count || `${Math.round(percentage)}%`
    }
    markSteps(currentStep, 'running')
  }

  function start () {
    stopTimers()
    startedAt = Date.now()
    elapsed.textContent = '0s'
    slowHint.hidden = true
    errorText.style.display = 'none'
    elapsedTimer = window.setInterval(updateElapsed, 250)
    slowTimer = window.setTimeout(function () {
      slowHint.hidden = false
    }, 5000)
    update({
      step: 'collect',
      title: 'Reading the current page',
      detail: 'Collecting the DOM and resource URLs',
      indeterminate: true
    })
  }

  function complete (summary) {
    stopTimers()
    updateElapsed()
    slowHint.hidden = true
    panel.hidden = false
    icon.className = 'statusIcon success'
    icon.textContent = '✓'
    title.textContent = 'WARC ready'
    detail.textContent = summary
    bar.value = 100
    count.textContent = '100%'
    markSteps('save', 'success')
  }

  function fail (error) {
    stopTimers()
    updateElapsed()
    slowHint.hidden = true
    panel.hidden = false
    icon.className = 'statusIcon error'
    icon.textContent = '×'
    title.textContent = 'WARC creation stopped'
    detail.textContent = `Stopped after ${formatDuration(Date.now() - startedAt)}`
    count.textContent = 'Stopped'
    markSteps(currentStep, 'error')
    errorText.textContent = error.message || String(error)
    errorText.style.display = 'block'
  }

  return {
    start: start,
    update: update,
    complete: complete,
    fail: fail
  }
}

async function fetchResource (url, binary) {
  const response = await window.fetch(url, { credentials: 'include' })
  if (!response.ok) throw new Error(`Unable to fetch ${url}: HTTP ${response.status}`)
  return {
    url: response.url || url,
    data: binary ? new Uint8Array(await response.arrayBuffer()) : await response.text()
  }
}

async function fetchTextResources (uris, kind, report) {
  const results = await Promise.all(uris.map(function (url) {
    return fetchResource(url, false)
      .then(function (resource) {
        report(kind, true)
        return resource
      })
      .catch(function (error) {
        console.warn(error.message || error)
        report(kind, false)
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

async function fetchPageResources (pageData, onProgress) {
  const stats = {
    completed: 0,
    failed: 0,
    total: pageData.css.uris.length + pageData.js.uris.length + pageData.images.length
  }

  function report (kind, succeeded) {
    stats.completed++
    if (!succeeded) stats.failed++
    onProgress({
      completed: stats.completed,
      failed: stats.failed,
      kind: kind,
      total: stats.total
    })
  }

  if (stats.total === 0) onProgress(stats)

  const textResources = await Promise.all([
    fetchTextResources(pageData.css.uris, 'stylesheet', report),
    fetchTextResources(pageData.js.uris, 'script', report)
  ])
  const images = {}
  for (const url of pageData.images) {
    try {
      const image = await fetchResource(url, true)
      images[image.url] = image.data
      report('image', true)
    } catch (error) {
      console.warn(error.message || error)
      report('image', false)
    }
  }
  pageData.css = textResources[0]
  pageData.js = textResources[1]
  pageData.images = images
  pageData.fetchStats = stats
  return pageData
}

function resourceSummary (stats) {
  if (stats.total === 0) return 'No external resources found'
  const skipped = stats.failed > 0 ? ` • ${stats.failed} skipped` : ''
  return `${stats.completed} of ${stats.total} resources${skipped}`
}

async function generateCurrentPageWarc () {
  const button = document.getElementById('generateWarc')
  const progress = createProgressController()

  button.disabled = true
  button.textContent = 'Working…'
  progress.start()

  try {
    const tab = await activeTab()
    if (!tab || !/^https?:\/\//.test(tab.url)) {
      throw new Error('WARCreate can only capture HTTP and HTTPS pages.')
    }

    const pageData = await sendTabMessage(tab.id, { method: 'collectPage' })
    const resourceTotal = pageData.css.uris.length + pageData.js.uris.length + pageData.images.length
    progress.update({
      step: 'collect',
      title: 'Page read successfully',
      detail: `Found ${resourceTotal} external resources; loading request metadata`,
      percent: 20
    })

    const capture = await sendRuntimeMessage({ method: 'getCaptureData', tabId: tab.id })
    window.setCapturedHeaders(capture)

    progress.update({
      step: 'fetch',
      title: resourceTotal === 0 ? 'No resources to fetch' : 'Fetching page resources',
      detail: resourceTotal === 0 ? 'Continuing with the page document' : `0 of ${resourceTotal} resources`,
      percent: 25,
      count: resourceTotal === 0 ? '0 / 0' : `0 / ${resourceTotal}`
    })
    await fetchPageResources(pageData, function (stats) {
      const ratio = stats.total === 0 ? 1 : stats.completed / stats.total
      progress.update({
        step: 'fetch',
        title: stats.kind ? `Fetching ${stats.kind}s` : 'Checking page resources',
        detail: resourceSummary(stats),
        percent: 25 + (ratio * 50),
        count: `${stats.completed} / ${stats.total}`
      })
    })

    progress.update({
      step: 'build',
      title: 'Assembling the WARC',
      detail: 'Writing headers, page content, and resources',
      percent: 78
    })
    const result = await window.generateWarc({
      method: 'generateWarc',
      url: tab.url,
      docHtml: pageData.html,
      file: warcFileName(),
      images: pageData.images,
      css: pageData.css,
      js: pageData.js,
      outlinks: pageData.outlinks,
      onProgress: function (event) {
        if (event.stage === 'saving') {
          const destination = event.destination === 'upload' ? 'upload' : 'download'
          progress.update({
            step: 'save',
            title: `Starting the ${destination}`,
            detail: `Prepared ${event.resourceCount} resource records`,
            percent: 97
          })
          return
        }
        const ratio = event.total === 0 ? 1 : event.completed / event.total
        progress.update({
          step: 'build',
          title: 'Assembling the WARC',
          detail: event.total === 0 ? 'Writing the page record' : `Packed ${event.completed} of ${event.total} network records`,
          percent: 78 + (ratio * 17),
          count: event.total === 0 ? 'Page record' : `${event.completed} / ${event.total}`
        })
      }
    })

    const skipped = pageData.fetchStats.failed > 0 ? ` • ${pageData.fetchStats.failed} resources skipped` : ''
    progress.complete(`${result.resourceCount} resources included${skipped} • ${result.fileName}`)
  } catch (error) {
    progress.fail(error)
  } finally {
    button.disabled = false
    button.textContent = 'Generate another WARC'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('generateWarc').addEventListener('click', generateCurrentPageWarc)
})
