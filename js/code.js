/**
 * WARCreate for Google Chrome
 * "Create WARC files from any webpage"
 * by Mat Kelly <warcreate@matkelly.com>
 *
 * See included LICENSE file for reuse information
 *
 */

// Called when the url of a tab changes.
function checkForValidUrl (tabId, changeInfo, tab) {
  chrome.pageAction.show(tabId)
}

/**
 * TODO: Provide 'sequential archiving' wherein a site's hierarchy is referenced
 * and all pages referenced in the hierarchy are captured
 *
 */
function sequentialGenerateWarc () {
  let urls = []
  $(localStorage['spec']).find('url').each(function (index) {
    urls.push($(this).text())
  })
  let uu = 0

  function generateWarcFromNextURL (nextUrl) {
    chrome.tabs.create({url: nextUrl, active: true},
      function (tab) {
        chrome.tabs.onUpdated.addListener(function (tabId, info) {
          if (info.status === 'complete') {
            doGenerateWarc()
            // chrome.tabs.remove(tab.tabId)
            alert('done with ' + (uu + 1) + '/' + urls.length)
            if (++uu >= urls.length) { return }
            generateWarcFromNextURL(urls[uu])
          }
        })
      }
    )
  }

  generateWarcFromNextURL(urls[uu])
}

/* function addProgressBar () {
  let body = document.getElementsByTagName('body')[0]
  let progressBar = document.createElement('progress')
  progressBar.setAttribute('value', '0')
  progressBar.setAttribute('max', '0')
  body.appendChild(progressBar)
} */

/**
 * Calls and aggregates the results of the functions that progressively create a
 * string representative of the contents of the WARC file being generated.
 */
function doGenerateWarc () {
  // addProgressBar()

  chrome.tabs.executeScript(null, {file: 'js/date.js'}, function () { /* Good date formatting library */
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tab) {
      // chrome.pageAction.setIcon({path:"../icons/icon-running.png",tabId:tab.id})
      let port = chrome.tabs.connect(tab[0].id, {name: 'warcreate'}) // create a persistent connection
      port.postMessage({url: tab[0].url, method: 'getHTML'}) // fetch the html of the page, in content.js

      // Perform the first listener, populate the binary image data
      port.onMessage.addListener(function (msg) { // get image base64 data
        let fileName = (new Date().toISOString()).replace(/:|-|T|Z|\./g, '') + '.warc'

        // If the user has specified a custom filename format, apply it here
        if (localStorage['filenameScheme'] && localStorage['filenameScheme'].length > 0) {
          fileName = moment().format(localStorage['filenameScheme']) + '.warc'
        }
        let requestToBeSent = {
          url: tab[0].url,
          method: 'generateWarc',
          docHtml: msg.html,
          file: fileName,
          img: {uris: msg.uris, data: msg.data},
          css: {uris: msg.css.uris, data: msg.css.data},
          js: {uris: msg.js.uris, data: msg.js.data},
          outlinks: msg.outlinks
        }
        chrome.runtime.sendMessage(requestToBeSent) // Received in warcGenerator.js
      })
    })
  })
}

/**
 * Sets up the popup activated when the extensions's icon is clicked.
 */
window.onload = function () {
  var background = chrome.extension.getBackgroundPage()

  let buttonContainer = document.getElementById('buttonContainer')

  // var sButton = document.getElementById('submit')
  // var acButton = document.getElementById('alertContent')
  // var encryptButton = document.getElementById('encrypt')
  // var encodeButton = document.getElementById('encodeImages')

  // if a website is recognized from the spec, show the "Cohesive archive"
  let caButtonDOM = document.createElement('input')
  caButtonDOM.type = 'button'
  caButtonDOM.id = 'generateCohesiveWARC'
  caButtonDOM.disabled = 'disabled'
  // var t

  caButtonDOM.value = 'Generate WARC for site'

  // create buttons for popup
  let gwButtonDOM = document.createElement('input')
  gwButtonDOM.type = 'button'
  gwButtonDOM.id = 'generateWarc'
  gwButtonDOM.value = 'Generate WARC'
  let clsButtonDOM = document.createElement('input')
  clsButtonDOM.type = 'button'
  clsButtonDOM.id = 'clearLocalStorage'
  clsButtonDOM.value = 'Clear LocalStorage'

  // For debugging, display content already captured
  // var dcButtonDOM = document.createElement('input'); dcButtonDOM.type = "button"; dcButtonDOM.id = "displayCaptured"; gwButtonDOM.value = "Show pending content"

  let errorText = document.createElement('a')
  errorText.id = 'errorText'
  errorText.target = '_blank'
  let status = document.createElement('input')
  status.id = 'status'
  status.type = 'text'
  status.value = ''

  if (!buttonContainer) { return }

  // add buttons to DOM
  buttonContainer.appendChild(gwButtonDOM)
  buttonContainer.appendChild(caButtonDOM)

  buttonContainer.appendChild(clsButtonDOM)
  buttonContainer.appendChild(status)
  $(buttonContainer).prepend(errorText)
  $('#status').css('display', 'none') // initially hide the status block

  let gwButton = document.getElementById('generateWarc')
  gwButton.onclick = doGenerateWarc

  let clsButton = document.getElementById('clearLocalStorage')

  // future implementation for NEH HD-51670-13
  // https://securegrants.neh.gov/publicquery/main.aspx?f=1&gn=HD-51670-13
  let ulButton = document.getElementById('uploader')
  let caButton = document.getElementById('generateCohesiveWARC')
  $(ulButton).css('display', 'none')
  $(caButton).css('display', 'none')

  $(clsButton).css('display', 'none') // clear local storage, used in debugging
  caButton.onclick = sequentialGenerateWarc
}
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl)

let headers = ''

/**
 * address #79 by keeping track per URL what headers we have already concatenated
 */
let requestHeadersTracking = []

let responseHeaders = []
let requestHeaders = []
let CRLF = '\r\n'

let currentTabId = -1

chrome.tabs.getSelected(null, function (tab) {
  chrome.storage.local.set({'lastTabId': tab.id})

  chrome.storage.local.get('lastTabId', function (result) {
    // $("body").append("Tab IDY: "+result.lastTabId)
    // $("body").append(tab.url)
  })

  let port = chrome.tabs.connect(tab.id, {name: 'getImageData'}) // create a persistent connection
  port.postMessage({url: tab.url, method: 'getImageData'})
  // port.onMessage.addListener(function (msg) {})
})

/**
 * Stores HTTP response headers into an object array with URI as key.
 */
chrome.webRequest.onHeadersReceived.addListener(
  function (resp) {
    responseHeaders[resp.url] = `${resp.statusLine}${CRLF}`

    for (let key in resp.responseHeaders) {
      responseHeaders[resp.url] += `${resp.responseHeaders[key].name}: ${resp.responseHeaders[key].value}${CRLF}`
    }
  }
  , {urls: ['http://*/*', 'https://*/*'], tabId: currentTabId}, ['responseHeaders', 'blocking'])

/**
 * Stores HTTP request headers into an object array with URI as key.
 * issue #79, these headers are not available here:
 * Authorization,Cache-Control,Connection,Content-Length,Host,If-Modified-Since,If-None-Match,If-Range
 * Partial-Data,Pragma,Proxy-Authorization,Proxy-Connection,Transfer-Encoding
 * see https://developer.chrome.com/extensions/webRequest
 */
chrome.webRequest.onBeforeSendHeaders.addListener(function (req) {
  let path = req.url.substring(req.url.match(/[a-zA-Z0-9]\//).index + 1)

  // per #79 keep track of already concatenated headers for warc string
  if (requestHeadersTracking[req.url] === null || requestHeadersTracking[req.url] === undefined) {
    requestHeadersTracking[req.url] = new Set()
  } else {
    requestHeadersTracking[req.url].clear()
  }
  requestHeaders[req.url] = `${req.method} ${path} HTTP/1.1${CRLF}`
  // requestHeaders[req.url] += req.method + ' ' + path + ' ' + FABRICATED_httpVersion + CRLF
  // console.log(("- Request headers received for "+req.url)
  for (let key in req.requestHeaders) {
    requestHeaders[req.url] += `${req.requestHeaders[key].name}: ${req.requestHeaders[key].value}${CRLF}`
    requestHeadersTracking[req.url].add(req.requestHeaders[key].name)
  }
}, {urls: ['http://*/*', 'https://*/*'], tabId: currentTabId}, ['requestHeaders', 'blocking'])

/**
 * Stores HTTP request headers into an object array with URI as key.
 * fix for issue #79, see explanation in onBeforeSendHeaders and documentation for requestHeadersTracking
 */
chrome.webRequest.onSendHeaders.addListener(function (req) {
  for (let key in req.requestHeaders) {
    if (!requestHeadersTracking[req.url].has(req.requestHeaders[key].name)) {
      requestHeaders[req.url] += `${req.requestHeaders[key].name}: ${req.requestHeaders[key].value}${CRLF}`
      requestHeadersTracking[req.url].add(req.requestHeaders[key].name)
    }
  }
}, {urls: ['http://*/*', 'https://*/*'], tabId: currentTabId}, ['requestHeaders'])

/**
 * Captures information about redirects that otherwise would be transparent to
 * the browser.
 */
chrome.webRequest.onBeforeRedirect.addListener(function (resp) {
  responseHeaders[resp.url] += `${resp.statusLine}${CRLF}`

  // console.log(("--------------Redirect Response Headers for "+resp.url+" --------------")
  for (let key in resp.responseHeaders) {
    responseHeaders[resp.url] += `${resp.responseHeaders[key].name}: ${resp.responseHeaders[key].value}${CRLF}`
  }
// console.log((responseHeaders[resp.url])
}, {urls: ['http://*/*', 'https://*/*'], tabId: currentTabId}, ['responseHeaders'])

/* ************************************************************

 UTILITY FUNCTIONS

 ************************************************************ */
/**
 * From https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
 * Converts UTF-8 to base 64 data
 */
function utf8_to_b64 (str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

/**
 * From https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
 * Converts base 64 data to UTF-8
 */
function b64_to_utf8 (str) {
  return decodeURIComponent(escape(window.atob(str)))
}
/**
 * UNUSED: A means of capturing any particular values that are only present in
 * this handler.
 */
chrome.webRequest.onResponseStarted.addListener(
  function (details) {}, {urls: ['http://*/*', 'https://*/*']}, ['responseHeaders'])

