// depends on date.js

/* ************** BEGIN STRING UTILITY FUNCTIONS **************  */

// function ab2str (buf) {
//   var s = String.fromCharCode.apply(null, new Uint8Array(buf))
//   return decodeUtf8(decodeUtf8(s))
// }

function str2ab (str) {
  const s = encodeUtf8(str)
  const buf = new ArrayBuffer(s.length) // 2 bytes for each char
  let bufView = new Uint8Array(buf)
  let i = 0
  const strLen = s.length
  for (; i < strLen; i++) {
    bufView[i] = s.charCodeAt(i)
  }
  return buf
}

function encodeUtf8 (s) {
  return unescape(encodeURIComponent(s))
}

// function decodeUtf8 (s) {
//   return decodeURIComponent(escape(s))
// }

function lengthInUtf8Bytes (str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  const m = encodeURIComponent(str).match(/%[89ABab]/g)
  return str.length + (m ? m.length : 0)
}

let responseHeaders = {}
let requestHeaders = {}

function setCapturedHeaders (capture) {
  responseHeaders = capture.responseHeaders || {}
  requestHeaders = capture.requestHeaders || {}
}

/* ************** END STRING UTILITY FUNCTIONS **************  */

/* ************** BEGIN WARC CONTENT CREATOR UTILITY OBJECT **************  */

let WARCEntryCreator = {
  CRLF: '\r\n',
  warcRecordSeparator: '\r\n\r\n',
  contentLengthRe: /Content-Length:.*\r\n/gi,
  contentEncodingGZRe: /Content-Encoding.*gzip\r\n/gi,
  makeWarcHeaderContent (version, isPartOf, warcInfoDescription) {
    // ES6 template preserve the spaces and implicit newline characters added when putting content on the line below
    let whc = `software: WARCreate/${version} http://warcreate.com${this.CRLF}format: WARC File Format 1.0${this.CRLF}`
    whc += `conformsTo: http://bibnum.bnf.fr/WARC/WARC_ISO_28500_version1_latestdraft.pdf${this.CRLF}`
    whc += `isPartOf:  ${isPartOf}${this.CRLF}description:  ${warcInfoDescription}${this.CRLF}`
    whc += `robots: ignore${this.CRLF}http-header-user-agent:  ${navigator.userAgent}${this.CRLF}`
    whc += `http-header-from: warcreate@matkelly.com ${this.CRLF}${this.CRLF}`
    return whc
  },
  makeWarcHeader (now, fileName, contentLen) {
    let wh = `WARC/1.0${this.CRLF}WARC-Type: warcinfo${this.CRLF}WARC-Date: ${now}${this.CRLF}`
    wh += `WARC-Filename: ${fileName}${this.CRLF}WARC-Record-ID: ${this.guidGenerator()}${this.CRLF}`
    wh += `Content-Type: application/warc-fields${this.CRLF}Content-Length: ${contentLen}${this.CRLF}`
    return wh
  },
  makeWarcMetadataHeader (initURI, now, warcMetadataLen) {
    let wmh = `WARC/1.0${this.CRLF}WARC-Type: metadata${this.CRLF}WARC-Target-URI: ${initURI}${this.CRLF}WARC-Date: ${now}${this.CRLF}`
    wmh += `WARC-Concurrent-To: <urn:uuid:dddc4ba2-c1e1-459b-8d0d-a98a20b87e96>${this.CRLF}WARC-Record-ID: <urn:uuid:6fef2a49-a9ba-4b40-9f4a-5ca5db1fd5c6>${this.CRLF}`
    wmh += `Content-Type: application/warc-fields${this.CRLF}Content-Length: ${warcMetadataLen}${this.CRLF}`
    return wmh
  },
  makeWarcRequestHeaderWith (targetURI, now, warcConcurrentTo, warcRequest) {
    let wrh = `WARC/1.0${this.CRLF}WARC-Type: request${this.CRLF}WARC-Target-URI: ${targetURI}${this.CRLF}`
    wrh += `WARC-Date: ${now}${this.CRLF}WARC-Concurrent-To: ${warcConcurrentTo}${this.CRLF}`
    wrh += `WARC-Record-ID: ${this.guidGenerator()}${this.CRLF}Content-Type: application/http; msgtype=request${this.CRLF}`
    wrh += `Content-Length: ${warcRequest.length + 2}${this.CRLF}${this.CRLF}${warcRequest}${this.CRLF}${this.CRLF}`
    return wrh
  },
  makeWarcResponseHeaderWith (targetURI, now, warcConcurrentTo, resp, additionalContentLength) {
    let httpHeader = resp.substring(0, resp.indexOf('\r\n\r\n'))
    if (httpHeader === '') {
      httpHeader = resp
    }
    let contentLength = lengthInUtf8Bytes(resp)
    if (additionalContentLength) {
      contentLength += additionalContentLength
    }
    let wrh = `WARC/1.0${this.CRLF}WARC-Type: response${this.CRLF}WARC-Target-URI: ${targetURI}${this.CRLF}`
    wrh += `WARC-Date: ${now}${this.CRLF}WARC-Record-ID: ${this.guidGenerator()}${this.CRLF}`
    wrh += `Content-Type: application/http; msgtype=response${this.CRLF}Content-Length: ${contentLength}${this.CRLF}`
    return wrh
  },
  _s4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  },
  genUUID () {
    return `${this._s4()}${this._s4()}-${this._s4()}-${this._s4()}-${this._s4()}-${this._s4()}${this._s4()}${this._s4()}`
  },
  guidGenerator () {
    // from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return `<urn:uuid:${this.genUUID()}>`
  },
  touchUpInitURIHeaders (initURIHeaders, docHtml) {
    // targetURI
    // DUCTTAPE
    let newInitURIHeaders = initURIHeaders
    if (newInitURIHeaders.indexOf('twitter.com') > -1) {
      newInitURIHeaders = newInitURIHeaders.replace('text/javascript', 'text/html')
    }
    // DUCTTAPE to fix bug #53
    newInitURIHeaders = newInitURIHeaders.replace('HTTP/1.1 304 Not Modified', 'HTTP/1.1 200 OK')

    // DUCTTAPE to fix bug #62
    // - fix the content length to be representative of the un-zipped text content
    // added \r\n instead of \n here to address warc indexing issues #17 and #78
    const fixContentLength = `Content-Length: ${lengthInUtf8Bytes(docHtml)}${this.CRLF}`
    newInitURIHeaders = newInitURIHeaders.replace(this.contentLengthRe, fixContentLength)

    // - remove reference to GZip HTML (or text) body, as we're querying the DOM, not getting the raw feed
    newInitURIHeaders = newInitURIHeaders.replace(this.contentEncodingGZRe, '')
    return newInitURIHeaders
  }
}

/* ************** END WARC CONTENT CREATOR UTILITY OBJECT **************  */

/* ************** BEGIN FEROSS-STANDARD STYLE CONFORMITY HELPERS **************  */

const helperREs = {
  jsregexp: new RegExp('content-type:[ ]*(text|application)/(javascript|js)', 'i'),
  imgregexp: new RegExp('content-type:[ ]*image/', 'i'),
  cssregexp: new RegExp('content-type:[ ]*text/(css|stylesheet)', 'i')
}

function capturedHeader (headers, url) {
  if (headers[url]) return headers[url]
  try {
    const withoutFragment = new window.URL(url)
    withoutFragment.hash = ''
    return headers[withoutFragment.href]
  } catch (error) {
    return undefined
  }
}

function defaultRequestHeaders (url) {
  const parsed = new window.URL(url)
  return `GET ${parsed.pathname || '/'}${parsed.search} HTTP/1.1${WARCEntryCreator.CRLF}Host: ${parsed.host}${WARCEntryCreator.CRLF}`
}

function appendTextResponse (arrayBuffers, url, now, warcConcurrentTo, headers, body) {
  const response = `${headers}${WARCEntryCreator.CRLF}${body}`
  const warcHeader = WARCEntryCreator.makeWarcResponseHeaderWith(url, now, warcConcurrentTo, response, 0)
  arrayBuffers.push(str2ab(`${warcHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${response}${WARCEntryCreator.warcRecordSeparator}`))
}

function appendBinaryResponse (arrayBuffers, url, now, warcConcurrentTo, headers, bytes) {
  const httpHeaders = `${headers}${WARCEntryCreator.CRLF}`
  const warcHeader = WARCEntryCreator.makeWarcResponseHeaderWith(url, now, warcConcurrentTo, httpHeaders, bytes.byteLength)
  arrayBuffers.push(str2ab(`${warcHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(httpHeaders))
  arrayBuffers.push(bytes.buffer)
  arrayBuffers.push(str2ab(WARCEntryCreator.warcRecordSeparator))
}

function downloadWarc (blob, fileName) {
  return new Promise(function (resolve, reject) {
    const objectUrl = window.URL.createObjectURL(blob)
    chrome.downloads.download({ url: objectUrl, filename: fileName, saveAs: true }, function (downloadId) {
      const error = chrome.runtime.lastError
      window.setTimeout(function () { window.URL.revokeObjectURL(objectUrl) }, 60000)
      if (error) {
        reject(error)
        return
      }
      resolve(downloadId)
    })
  })
}

function reportWarcProgress (request, event) {
  if (typeof request.onProgress === 'function') request.onProgress(event)
}

function yieldToPopup () {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, 0)
  })
}

async function generateWarc (oRequest) {
  if (oRequest.method !== 'generateWarc') {
    return
  }
  console.log('Executing generateWARC() with...')
  console.log(oRequest)
  let now = new Date().toISOString()
  now = now.substr(0, now.indexOf('.')) + 'Z'

  const fileName = oRequest.file
  const initURI = oRequest.url

  let warcInfoDescription = 'Captured by the WARCreate Google Chrome extension'
  let isPartOf = 'basic'
  if (localStorage.getItem('collectionId') || localStorage.getItem('collectionName')) {
    warcInfoDescription = `collectionId=${localStorage.getItem('collectionId')}, collectionName="${localStorage.getItem('collectionName')}"`
    isPartOf = localStorage.getItem('collectionId')
  }

  const warcHeaderContent = WARCEntryCreator.makeWarcHeaderContent(version, isPartOf, warcInfoDescription)
  const warcHeader = WARCEntryCreator.makeWarcHeader(now, fileName, lengthInUtf8Bytes(warcHeaderContent))
  const warcRequest = capturedHeader(requestHeaders, initURI) || defaultRequestHeaders(initURI)
  const warcConcurrentTo = WARCEntryCreator.guidGenerator()
  const warcRequestHeader = WARCEntryCreator.makeWarcRequestHeaderWith(initURI, now, warcConcurrentTo, warcRequest)
  const outlinks = oRequest.outlinks || []
  let outlinkStr = ''
  for (const outlink in outlinks) {
    let href = outlinks[outlink]
    if (href.indexOf('mailto:') > -1) {
      continue
    }
    const parts = href.split(' ')
    try {
      parts[0] = (new window.URL(parts[0], initURI)).href
    } catch (error) {
      continue
    }
    href = parts.join(' ')

    outlinkStr += `outlink: ${href}${WARCEntryCreator.CRLF}`
  }

  // includes initial URI var warcMetadata = "outlink: "+ initURI + CRLF + outlinkStr
  const warcMetadata = outlinkStr
  const warcMetadataHeader = WARCEntryCreator.makeWarcMetadataHeader(initURI, now, lengthInUtf8Bytes(warcMetadata))

  let initResponseHeaders = capturedHeader(responseHeaders, initURI)
  if (!initResponseHeaders) {
    initResponseHeaders = `HTTP/1.1 200 OK${WARCEntryCreator.CRLF}Content-Type: text/html; charset=utf-8${WARCEntryCreator.CRLF}Content-Length: 0${WARCEntryCreator.CRLF}`
  }
  initResponseHeaders = WARCEntryCreator.touchUpInitURIHeaders(initResponseHeaders, oRequest.docHtml)

  const warcResponse = `${initResponseHeaders}${WARCEntryCreator.CRLF}${oRequest.docHtml}${WARCEntryCreator.CRLF}`
  const warcResponseHeader = WARCEntryCreator.makeWarcResponseHeaderWith(initURI, now, warcConcurrentTo, warcResponse, 0)

  const arrayBuffers = [] // Load data in order in the arrayBuffers array then combine with the file blob to write out

  arrayBuffers.push(str2ab(`${warcHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcHeaderContent}${WARCEntryCreator.warcRecordSeparator}`))
  arrayBuffers.push(str2ab(`${warcRequestHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcMetadataHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcMetadata}${WARCEntryCreator.warcRecordSeparator}`))
  arrayBuffers.push(str2ab(`${warcResponseHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcResponse}${WARCEntryCreator.warcRecordSeparator}`))

  const cssURIs = oRequest.css.uris || []
  const cssData = oRequest.css.data || []
  const jsURIs = oRequest.js.uris || []
  const jsData = oRequest.js.data || []
  const images = oRequest.images || {}
  const seedWithoutFragment = initURI.split('#')[0]
  const networkRequests = Object.keys(requestHeaders).filter(function (url) {
    return url !== initURI && url !== seedWithoutFragment
  })
  let resourceCount = 0
  let processedRequestCount = 0

  reportWarcProgress(oRequest, {
    stage: 'building',
    completed: 0,
    total: networkRequests.length
  })
  await yieldToPopup()

  for (const requestHeader of networkRequests) {
    const rhsTemp = WARCEntryCreator.makeWarcRequestHeaderWith(requestHeader, now, warcConcurrentTo, requestHeaders[requestHeader])
    const requestHeaderString = `${rhsTemp}${WARCEntryCreator.CRLF}`
    arrayBuffers.push(str2ab(requestHeaderString))

    const todoFetchImage = responseHeaders[requestHeader] &&
      helperREs.imgregexp.exec(responseHeaders[requestHeader]) !== null &&
      responseHeaders[requestHeader].indexOf('icon') === -1
    const todoFetchCSS = responseHeaders[requestHeader] &&
      helperREs.cssregexp.exec(responseHeaders[requestHeader]) !== null
    const todoFetchJS = responseHeaders[requestHeader] &&
      helperREs.jsregexp.exec(responseHeaders[requestHeader]) !== null

    const resourceResponseHeaders = responseHeaders[requestHeader]
    if (todoFetchImage) {
      const rawBytes = images[requestHeader]
      if (rawBytes) {
        appendBinaryResponse(arrayBuffers, requestHeader, now, warcConcurrentTo, resourceResponseHeaders, rawBytes)
        resourceCount++
      } else {
        console.warn(`Unable to include the body for ${requestHeader}`)
      }
    } else if (todoFetchCSS) {
      const cssIndex = cssURIs.indexOf(requestHeader)
      if (cssIndex !== -1) {
        appendTextResponse(arrayBuffers, requestHeader, now, warcConcurrentTo, resourceResponseHeaders, cssData[cssIndex] || '')
        resourceCount++
      }
    } else if (todoFetchJS) {
      const jsIndex = jsURIs.indexOf(requestHeader)
      if (jsIndex !== -1) {
        appendTextResponse(arrayBuffers, requestHeader, now, warcConcurrentTo, resourceResponseHeaders, jsData[jsIndex] || '')
        resourceCount++
      }
    }

    processedRequestCount++
    reportWarcProgress(oRequest, {
      stage: 'building',
      completed: processedRequestCount,
      total: networkRequests.length
    })
    if (processedRequestCount % 20 === 0) await yieldToPopup()
  }

  const uploadTo = localStorage['uploadTo']
  reportWarcProgress(oRequest, {
    stage: 'saving',
    destination: uploadTo && uploadTo.length > 0 ? 'upload' : 'download',
    resourceCount: resourceCount
  })

  if (!uploadTo || uploadTo.length === 0) {
    await downloadWarc(new Blob(arrayBuffers), fileName)
  } else {
    uploadWarc(arrayBuffers)
  }
  return { fileName: fileName, resourceCount: resourceCount }
}

/* ************************************************************

 UTILITY FUNCTIONS

 ************************************************************ */

function uploadWarc (abArray) {
  const blobFromArrayBuffers = new Blob(abArray)
  console.log('Uploading WARC to ' + localStorage['uploadTo'])

  let ajaxRequest = new XMLHttpRequest()

  let progressObj = {
    type: 'progress',
    title: 'WARC Uploading',
    message: ajaxRequest.responseText,
    iconUrl: '../icons/icon-128.png'
  }
  progressObj.progress = 0
  chrome.notifications.create('id1', progressObj, function () {})
  chrome.notifications.onButtonClicked.addListener(function (id, buttonIndex) {
    chrome.tabs.create({ url: warcfileURI })
  })

  function updateNotification (perc) {
    progressObj.progress = perc
    chrome.notifications.update('id1', progressObj, function () {})
  }

  ajaxRequest.open('POST', localStorage['uploadTo'], true)

  ajaxRequest.onreadystatechange = function () {
    updateNotification(25 * ajaxRequest.readyState)
    if (ajaxRequest.readyState === 4) {
      progressObj.message = ajaxRequest.responseText
      progressObj.iconUrl = '../icons/icon-check-128.png'
      progressObj.title = 'WARC Uploaded'
      progressObj.buttons = [{ title: 'View WARC file', iconUrl: '../icons/icon-viewing.png' }]
      setTimeout(function () { updateNotification(100) }, 500)
      if (ajaxRequest.status === 201 && ajaxRequest.responseText.length > 0) {
        warcfileURI = ajaxRequest.responseText
      } else {
        alert('The server accepted the WARC.')
      }
    }
  }
  ajaxRequest.send(blobFromArrayBuffers)
}

// Legit scoped vars (i.e., do not let/const) due to inter-function/file usage
// TODO: Either manually hoist or express this more methodically
var warcfileURI = '' // The Chrome notifications API isn't mature enough to surface data, even via buttons
var version = chrome.runtime.getManifest().version

/* ************************************************************

 INITIAL RUNTIME EXECUTION

 ************************************************************ */

window.generateWarc = generateWarc
window.setCapturedHeaders = setCapturedHeaders
