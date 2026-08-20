/**
 * WARCreate for Google Chrome
 * "Create WARC files from any webpage"
 * by Mat Kelly <warcreate@matkelly.com>
 *
 * See included LICENSE file for reuse information
 */

const CAPTURE_STORAGE_PREFIX = 'warcreateCapture:'
const CRLF = '\r\n'
const captureQueues = {}

function emptyCapture () {
  return {
    mainFrameRequestId: null,
    requestHeaders: {},
    requestHeaderNames: {},
    responseHeaders: {}
  }
}

function captureStorageKey (tabId) {
  return `${CAPTURE_STORAGE_PREFIX}${tabId}`
}

function storageGet (key) {
  return new Promise(function (resolve, reject) {
    chrome.storage.local.get(key, function (result) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
        return
      }
      resolve(result)
    })
  })
}

function storageSet (items) {
  return new Promise(function (resolve, reject) {
    chrome.storage.local.set(items, function () {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError)
        return
      }
      resolve()
    })
  })
}

function queueCaptureUpdate (tabId, update) {
  if (tabId < 0) return Promise.resolve()

  const key = captureStorageKey(tabId)
  const previous = captureQueues[tabId] || Promise.resolve()
  const next = previous
    .then(function () { return storageGet(key) })
    .then(function (stored) {
      const capture = update(stored[key] || emptyCapture()) || emptyCapture()
      const items = {}
      items[key] = capture
      return storageSet(items)
    })
    .catch(function (error) {
      console.error('Unable to persist captured headers', error)
    })

  captureQueues[tabId] = next
  next.then(function () {
    if (captureQueues[tabId] === next) delete captureQueues[tabId]
  })
  return next
}

function headerBlock (statusLine, headers) {
  let block = statusLine ? `${statusLine}${CRLF}` : ''
  for (const header of headers || []) {
    block += `${header.name}: ${header.value || ''}${CRLF}`
  }
  return block
}

function requestTarget (url) {
  try {
    const parsed = new self.URL(url)
    return `${parsed.pathname || '/'}${parsed.search}`
  } catch (error) {
    return '/'
  }
}

function isCapturableUrl (url) {
  return typeof url === 'string' && /^https?:\/\//.test(url)
}

function updateActionForTab (tabId, url) {
  if (isCapturableUrl(url)) {
    chrome.action.enable(tabId)
  } else {
    chrome.action.disable(tabId)
  }
}

chrome.webRequest.onBeforeRequest.addListener(function (details) {
  if (details.type !== 'main_frame') return
  queueCaptureUpdate(details.tabId, function (capture) {
    if (capture.mainFrameRequestId === details.requestId) return capture
    const nextCapture = emptyCapture()
    nextCapture.mainFrameRequestId = details.requestId
    return nextCapture
  })
}, { urls: ['http://*/*', 'https://*/*'] })

chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
  queueCaptureUpdate(details.tabId, function (capture) {
    const names = []
    for (const header of details.requestHeaders || []) {
      names.push(header.name.toLowerCase())
    }
    capture.requestHeaderNames[details.url] = names
    capture.requestHeaders[details.url] = `${details.method} ${requestTarget(details.url)} HTTP/1.1${CRLF}` +
      headerBlock('', details.requestHeaders)
    return capture
  })
}, { urls: ['http://*/*', 'https://*/*'] }, ['requestHeaders', 'extraHeaders'])

chrome.webRequest.onSendHeaders.addListener(function (details) {
  queueCaptureUpdate(details.tabId, function (capture) {
    const names = capture.requestHeaderNames[details.url] || []
    let block = capture.requestHeaders[details.url] ||
      `${details.method} ${requestTarget(details.url)} HTTP/1.1${CRLF}`

    for (const header of details.requestHeaders || []) {
      const name = header.name.toLowerCase()
      if (names.indexOf(name) === -1) {
        block += `${header.name}: ${header.value || ''}${CRLF}`
        names.push(name)
      }
    }

    capture.requestHeaderNames[details.url] = names
    capture.requestHeaders[details.url] = block
    return capture
  })
}, { urls: ['http://*/*', 'https://*/*'] }, ['requestHeaders', 'extraHeaders'])

chrome.webRequest.onHeadersReceived.addListener(function (details) {
  queueCaptureUpdate(details.tabId, function (capture) {
    capture.responseHeaders[details.url] = headerBlock(details.statusLine, details.responseHeaders)
    return capture
  })
}, { urls: ['http://*/*', 'https://*/*'] }, ['responseHeaders', 'extraHeaders'])

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  updateActionForTab(tabId, changeInfo.url || tab.url)
})

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    if (!chrome.runtime.lastError) updateActionForTab(tab.id, tab.url)
  })
})

chrome.tabs.onRemoved.addListener(function (tabId) {
  chrome.storage.local.remove(captureStorageKey(tabId))
  delete captureQueues[tabId]
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (!message || message.method !== 'getCaptureData') return

  const tabId = message.tabId
  const pending = captureQueues[tabId] || Promise.resolve()
  pending
    .then(function () { return storageGet(captureStorageKey(tabId)) })
    .then(function (stored) {
      sendResponse({ ok: true, capture: stored[captureStorageKey(tabId)] || emptyCapture() })
    })
    .catch(function (error) {
      sendResponse({ ok: false, error: error.message || String(error) })
    })
  return true
})
