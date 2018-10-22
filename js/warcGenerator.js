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

let helperREs = {
  jsregexp: new RegExp('content-type:[ ]*(text|application)/(javascript|js)', 'i'),
  imgregexp: new RegExp('content-type:[ ]*image/', 'i'),
  cssregexp: new RegExp('content-type:[ ]*text/(css|stylesheet)', 'i'),
  fontregexp: new RegExp('content-type:[ ]*font/', 'i'),
  whileMyArrayRe: /\r\n(.*)\r\n----------------/g
}

function asynchronouslyFetchImageData (rh, now, warcConcurrentTo, arrayBuffers, responsesToConcatenate, fileName) {
  chrome.storage.local.get(rh, function (result) {
    const rawImageDataAsBytes = result[rh]

    if (rawImageDataAsBytes) { // we have the data in chrome.storage.local
      const byteCount = result[rh].length

      const hexValueArrayBuffer = new ArrayBuffer(byteCount)
      let hexValueInt8Ary = new Int8Array(hexValueArrayBuffer)
      let ixx = 0
      let index = 0

      for (; index < byteCount; index++) {
        hexValueInt8Ary.set([result[rh][index]], ixx)
        ixx++
      }

      const rhsWithCRLF = `${responseHeaders[rh]}${WARCEntryCreator.CRLF}`
      const hexValueInt8AryPlusRecordSep = hexValueInt8Ary.length + WARCEntryCreator.warcRecordSeparator.length
      const rhsTemp = WARCEntryCreator.makeWarcResponseHeaderWith(rh, now, warcConcurrentTo, rhsWithCRLF, hexValueInt8AryPlusRecordSep)
      const responseHeaderString = `${rhsTemp}${WARCEntryCreator.CRLF}`

      arrayBuffers.push(str2ab(responseHeaderString))
      arrayBuffers.push(str2ab(`${responseHeaders[rh]}${WARCEntryCreator.CRLF}`))
      arrayBuffers.push(hexValueInt8Ary.buffer) // Now, add the image data
      arrayBuffers.push(str2ab(`${WARCEntryCreator.warcRecordSeparator}${WARCEntryCreator.warcRecordSeparator}`))

      delete responsesToConcatenate[rh]
    } else {
      // if we don't have the image data in localstorage, remove it anyway
      console.error('We do not have ' + rh + '\'s data in cache.')
      delete responsesToConcatenate[rh]
    }

    if (Object.keys(responsesToConcatenate).length === 0) {
      if (!localStorage['uploadTo'] || localStorage['uploadTo'].length === 0) {
        saveAs(new Blob(arrayBuffers), fileName)
      } else {
        uploadWarc(arrayBuffers)
      }
    } else {
      const urisToGo = Object.keys(responsesToConcatenate)

      console.log(`Still have to fetch ${urisToGo.length} URIs: `)
      console.log(Object.keys(responsesToConcatenate))
    }
  })
}

function generateWarc (oRequest, oSender, fCallback) {
  if (oRequest.method !== 'generateWarc') {
    return
  }
  console.log('Executing generateWARC() with...')
  console.log(oRequest)
  let now = new Date().toISOString()
  now = now.substr(0, now.indexOf('.')) + 'Z'

  const fileName = oRequest.file
  const initURI = oRequest.url

  let warcInfoDescription = 'Crawl initiated from the WARCreate Google Chrome extension'
  let isPartOf = 'basic'
  if (localStorage.getItem('collectionId') || localStorage.getItem('collectionName')) {
    warcInfoDescription = `collectionId=${localStorage.getItem('collectionId')}, collectionName="${localStorage.getItem('collectionName')}"`
    isPartOf = localStorage.getItem('collectionId')
  }

  const warcHeaderContent = WARCEntryCreator.makeWarcHeaderContent(version, isPartOf, warcInfoDescription)
  const warcHeader = WARCEntryCreator.makeWarcHeader(now, fileName, warcHeaderContent.length)
  const warcRequest = requestHeaders[initURI]
  const warcConcurrentTo = WARCEntryCreator.guidGenerator()
  const warcRequestHeader = WARCEntryCreator.makeWarcRequestHeaderWith(initURI, now, warcConcurrentTo, warcRequest)
  const outlinks = oRequest.outlinks
  let outlinkStr = ''
  for (let outlink in outlinks) {
    let href = outlinks[outlink]
    if (href.indexOf('mailto:') > -1) {
      continue
    }
    if (href.substr(0, 1) !== 'h') {
      href = `${initURI}${href}` // resolve fragment and internal links
    }
    href = `${href.substr(0, 8)}${href.substr(8).replace(/\/\//g, '/')}` // replace double slashes outside of scheme
    // Sanitize ../'s
    let parts = href.split(' ')
    parts[0] = (new window.URL(parts[0])).href
    href = parts.join(' ')

    outlinkStr += `outlink: ${href}${WARCEntryCreator.CRLF}`
  }

  // includes initial URI var warcMetadata = "outlink: "+ initURI + CRLF + outlinkStr
  let warcMetadata = outlinkStr
  let warcMetadataHeader = WARCEntryCreator.makeWarcMetadataHeader(initURI, now, warcMetadata.length)

  responseHeaders[initURI] = WARCEntryCreator.touchUpInitURIHeaders(responseHeaders[initURI], oRequest.docHtml)

  const warcResponse = `${responseHeaders[initURI]}${WARCEntryCreator.CRLF}${oRequest.docHtml}${WARCEntryCreator.CRLF}`
  const warcResponseHeader = WARCEntryCreator.makeWarcResponseHeaderWith(initURI, now, warcConcurrentTo, warcResponse, 0)
  let myArray = helperREs.whileMyArrayRe.exec(oRequest.headers)
  while (myArray !== null) {
    myArray = helperREs.whileMyArrayRe.exec(oRequest.headers)
  }

  let arrayBuffers = [] // Load data in order in the arrayBuffers array then combine with the file blob to write out

  arrayBuffers.push(str2ab(`${warcHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcHeaderContent}${WARCEntryCreator.warcRecordSeparator}`))
  arrayBuffers.push(str2ab(`${warcRequestHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcMetadataHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcMetadata}${WARCEntryCreator.warcRecordSeparator}`))
  arrayBuffers.push(str2ab(`${warcResponseHeader}${WARCEntryCreator.CRLF}`))
  arrayBuffers.push(str2ab(`${warcResponse}${WARCEntryCreator.warcRecordSeparator}`))

  const cssURIs = oRequest.css.uris
  const cssData = oRequest.css.data
  const jsURIs = oRequest.js.uris
  const jsData = oRequest.js.data

  let responsesToConcatenate = []

  for (let requestHeader in requestHeaders) {
    if (requestHeader === initURI) {
      continue // the 'seed' will not have a body, we handle this above, skip
    }
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

    if (todoFetchImage) {
      responsesToConcatenate[requestHeader] = 'pending'
      asynchronouslyFetchImageData(requestHeader, now, warcConcurrentTo, arrayBuffers, responsesToConcatenate, fileName)
    } else if (todoFetchCSS) {
      if (!cssURIs) {
        break
      }
      responsesToConcatenate[requestHeader] = 'pending'
      console.log(requestHeader + ' is a CSS file')
      const respHeader = `${responseHeaders[requestHeader]}${WARCEntryCreator.warcRecordSeparator}`
      let respContent
      let cc = 0
      const cssURIsLen = cssURIs.length
      for (; cc < cssURIsLen; cc++) {
        if (requestHeader === cssURIs[cc]) {
          respContent = `${cssData[cssURIs.indexOf(requestHeader)]}${WARCEntryCreator.warcRecordSeparator}`
          break
        }
      }
      const cssRHSTemp = WARCEntryCreator.makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, respHeader + respContent)
      const cssResponseHeaderString = `${cssRHSTemp}${WARCEntryCreator.CRLF}`
      arrayBuffers.push(str2ab(cssResponseHeaderString))

      arrayBuffers.push(str2ab(`${respHeader}${respContent}${WARCEntryCreator.warcRecordSeparator}`))
      delete responsesToConcatenate[requestHeader]
    } else if (todoFetchJS) {
      const jsRespHeader = `${responseHeaders[requestHeader]}${WARCEntryCreator.warcRecordSeparator}`
      let jsRespContent
      let jsIdx = 0
      const jsURIsLen = jsURIs.length
      for (; jsIdx < jsURIsLen; jsIdx++) {
        if (requestHeader === jsURIs[jsIdx]) {
          jsRespContent = `${jsData[jsURIs.indexOf(requestHeader)]}${WARCEntryCreator.warcRecordSeparator}`
          break
        }
      }
      const jsRHSTemp = WARCEntryCreator.makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, jsRespHeader + jsRespContent)
      const jsResponseHeaderString = `${jsRHSTemp}${WARCEntryCreator.CRLF}`
      arrayBuffers.push(str2ab(jsResponseHeaderString))

      arrayBuffers.push(str2ab(`${jsRespHeader}${jsRespContent}${WARCEntryCreator.warcRecordSeparator}`))
      delete responsesToConcatenate[requestHeader]
    }
  }

  if (Object.keys(responsesToConcatenate).length === 0) {
    saveAs(new Blob(arrayBuffers), fileName)
  } else {
    const urisToGo = Object.keys(responsesToConcatenate)
    console.log(`Still have to process ${urisToGo.length} URIs: `)
    console.log(urisToGo)
  }
}

/* ************************************************************

 UTILITY FUNCTIONS

 ************************************************************ */

function getVersion (callback) {
  let xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', '../manifest.json')
  xmlhttp.onload = function (e) {
    var manifest = JSON.parse(xmlhttp.responseText)
    callback(manifest.version)
  }
  xmlhttp.send(null)
}

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
    chrome.tabs.create({url: warcfileURI})
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
      progressObj.buttons = [{title: 'View WARC file', iconUrl: '../icons/icon-viewing.png'}]
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
var version
getVersion(function (ver) { version = ver })

/* ************************************************************

 INITIAL RUNTIME EXECUTION

 ************************************************************ */

chrome.runtime.onMessage.addListener(generateWarc)
