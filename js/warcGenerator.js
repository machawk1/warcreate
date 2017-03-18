/* global chrome, localStorage */
// Depends on date.js

/* ************** BEGIN STRING UTILITY FUNCTIONS **************  */

var debug = true


function lengthInUtf8Bytes (str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g)
  return str.length + (m ? m.length : 0)
}

// from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
function guidGenerator () {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return '<urn:uuid:' + (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()) + '>'
}

/* ************** END STRING UTILITY FUNCTIONS **************  */

function generateWarc (o_request, o_sender, f_callback) {
  console.log('generating warc...')
  chrome.notifications.create('generationProgress', {
    type: 'progress',
    iconUrl: chrome.extension.getURL('icons/icon-48.png'),
    title: 'Generating WARC...',
    message: 'test',
    progress: 0
  })

  if (o_request.method !== 'generateWarc') { return }
  if (debug) { console.log('Running generateWarc code') }

  var CRLF = '\r\n'

  var now = new Date().toISOString()
  now = now.substr(0, now.indexOf('.')) + 'Z'

  var fileName = o_request.file
  var initURI = o_request.url

  var warcInfoDescription = 'Crawl initiated from the WARCreate Google Chrome extension'
  var isPartOf = 'basic'
  if (localStorage.getItem('collectionId') || localStorage.getItem('collectionName')) {
    warcInfoDescription = 'collectionId=' + localStorage.getItem('collectionId') + ', collectionName="' + localStorage.getItem('collectionName') + '"'
    isPartOf = localStorage.getItem('collectionId')
  }

  var warcHeaderContent = [
    'software: WARCreate/' + version + ' http://warcreate.com',
    'format: WARC File Format 1.0',
    'conformsTo: http://bibnum.bnf.fr/WARC/WARC_ISO_28500_version1_latestdraft.pdf',
    'isPartOf: ' + isPartOf,
    'description: ' + warcInfoDescription,
    'robots: ignore',
    'http-header-user-agent: ' + navigator.userAgent,
    'http-header-from: warcreate@matkelly.com' + CRLF + CRLF
  ].join(CRLF)

  var warcHeader = [
    'WARC/1.0',
    'WARC-Type: warcinfo',
    'WARC-Date: ' + now,
    'WARC-Filename: ' + fileName,
    'WARC-Record-ID: ' + guidGenerator(),
    'Content-Type: application/warc-fields',
    'Content-Length: ' + warcHeaderContent.length + CRLF
  ].join(CRLF)

  var warcRequest = requestHeaders[initURI]

  var warcConcurrentTo = guidGenerator()

  function makeWarcRequestHeaderWith (targetURI, now, warcConcurrentTo, warcRequest) {
    var CRLF = '\r\n'

    if (!warcRequest) {
      console.log('warcRequest is not defined!')
      console.log(targetURI)
      console.log(warcRequest)
      console.log(requestHeaders)
    }

    var x = [
      'WARC/1.0',
      'WARC-Type: request',
      'WARC-Target-URI: ' + targetURI,
      'WARC-Date: ' + now,
      'WARC-Concurrent-To: ' + warcConcurrentTo,
      'WARC-Record-ID: ' + guidGenerator(),
      'Content-Type: application/http; msgtype=request',
      'Content-Length: ' + (warcRequest.length + 2) + CRLF,
      warcRequest + CRLF + CRLF
    ].join(CRLF)
    return x
  }

  console.log('Making initial WARC request record with ' + initURI);
  console.log(requestHeaders[initURI])
  var warcRequestHeader = makeWarcRequestHeaderWith(initURI, now, warcConcurrentTo, warcRequest)
  console.log('Initial WARC request created')

  var outlinks = o_request.outlinks // isA Array
  var outlinkStr = ''

  for (var outlink in outlinks) {
    var href = outlinks[outlink]
    if (href.indexOf('mailto:') > -1) { continue }

    if (href.substr(0, 1) !== 'h') { href = initURI + href } // Resolve fragment and internal links

    href = href.substr(0, 8) + href.substr(8).replace(/\/\//g, '/') // Replace double slashes outside of scheme

    outlinkStr += 'outlink: ' + href + CRLF
  }

  // Includes initial URI var warcMetadata = 'outlink: '+ initURI + CRLF + outlinkStr;
  var warcMetadata = outlinkStr

  var warcMetadataHeader = [
    'WARC/1.0',
    'WARC-Type: metadata',
    'WARC-Target-URI: ' + initURI,
    'WARC-Date: ' + now,
    'WARC-Concurrent-To: <urn:uuid:dddc4ba2-c1e1-459b-8d0d-a98a20b87e96>',
    'WARC-Record-ID: <urn:uuid:6fef2a49-a9ba-4b40-9f4a-5ca5db1fd5c6>',
    'Content-Type: application/warc-fields',
    'Content-Length: ' + warcMetadata.length + CRLF
  ].join(CRLF)

  // targetURI
  // DUCTTAPE
  if (initURI.indexOf('twitter.com') > -1) {
    responseHeaders[initURI] = responseHeaders[initURI].replace('text/javascript', 'text/html')
  }
  // DUCTTAPE to fix bug #53
  responseHeaders[initURI] = responseHeaders[initURI].replace('HTTP/1.1 304 Not Modified', 'HTTP/1.1 200 OK')

  // DUCTTAPE to fix bug #62
  // - fix the content length to be representative of the un-zipped text content
  responseHeaders[initURI] = responseHeaders[initURI].replace(/Content-Length:.*\r\n/gi, 'Content-Length: ' + lengthInUtf8Bytes(o_request.docHtml) + '\n')

  // - remove reference to GZip HTML (or text) body, as we're querying the DOM, not getting the raw feed
  responseHeaders[initURI] = responseHeaders[initURI].replace(/Content-Encoding.*gzip\r\n/gi, '')

  warcResponse =
    responseHeaders[initURI] +
    CRLF + o_request.docHtml + CRLF

  function makeWarcResponseHeaderWith (targetURI, now, warcConcurrentTo, resp, additionalContentLength) {
    var httpHeader = resp.substring(0, resp.indexOf('\r\n\r\n'))

    if (httpHeader === '') {
      httpHeader = resp
    }

    var contentLength = lengthInUtf8Bytes(resp)
    if (additionalContentLength) { contentLength += additionalContentLength } // (arraybuffer + string).length don't mix ;)

    return [
      'WARC/1.0',
      'WARC-Type: response',
      'WARC-Target-URI: ' + targetURI,
      'WARC-Date: ' + now,
      'WARC-Record-ID: ' + guidGenerator(),
      'Content-Type: application/http; msgtype=response',
      'Content-Length: ' + contentLength + CRLF
    ].join(CRLF)
  }

  var warcResponseHeader = makeWarcResponseHeaderWith(initURI, now, warcConcurrentTo, warcResponse, 0) // htmlLengthCorrection)
  var pattern = /\r\n(.*)\r\n----------------/g
  var myArray = pattern.exec(o_request.headers)
  var str = ''
  while (myArray !== null) {
    str += myArray[1]
    myArray = pattern.exec(o_request.headers)
  }

  // We will load all of the data in-order in the arrayBuffers array then combine with the file blob to writeout
  var arrayBuffers = [
    str2ab(warcHeader + CRLF),
    str2ab(warcHeaderContent + CRLF + CRLF),
    str2ab(warcRequestHeader + CRLF),
    str2ab(warcMetadataHeader + CRLF),
    str2ab(warcMetadata + CRLF + CRLF),
    str2ab(warcResponseHeader + CRLF),
    str2ab(warcResponse + CRLF + CRLF)
  ]

  var cssURIs, cssData, jsURIs, jsData

  var img, css, js

  if (o_request.img) img = o_request.img
  if (o_request.js) js = o_request.js
  if (o_request.css) css = o_request.css

  var seedURL = true
  var responsesToConcatenate = []

  var jsregexp = new RegExp('content-type:[ ]*(text|application)/(javascript|js)', 'i')
  var imgregexp = new RegExp('content-type:[ ]*image/', 'i')
  var cssregexp = new RegExp('content-type:[ ]*text/(css|stylesheet)', 'i')
  var fontregexp = new RegExp('content-type:[ ]*font/', 'i')

  for (var requestHeader in requestHeaders) {
    if (requestHeader === initURI || !requestHeader || !requestHeaders[requestHeader]) { continue } // The 'seed' will not have a body, we handle this above, skip

    console.log('Making a secondary WARC request')
    console.log(requestHeaders)
    var requestHeaderString = makeWarcRequestHeaderWith(requestHeader, now, warcConcurrentTo, requestHeaders[requestHeader]) + CRLF
    arrayBuffers.push(str2ab(requestHeaderString))

    if (
      responseHeaders[requestHeader] &&
      imgregexp.exec(responseHeaders[requestHeader]) !== null &&
      responseHeaders[requestHeader].indexOf('icon') === -1) {
      // var imageDataObject = JSON.parse(localStorage['imageData'])
      responsesToConcatenate[requestHeader] = 'pending'
      asynchronouslyFetchImageData(requestHeader)

      function asynchronouslyFetchImageData (rh) {
        chrome.storage.local.get(rh, function (result) {
          var rawImageDataAsBytes = result[rh]

          if (rawImageDataAsBytes) { // We have the data in chrome.storage.local
            var byteCount = result[rh].length

            var hexValueArrayBuffer = new ArrayBuffer(byteCount)
            var hexValueInt8Ary = new Int8Array(hexValueArrayBuffer)
            var ixx = 0
            for (var index = 0; index < byteCount; index++) {
              hexValueInt8Ary.set([result[rh][index]], ixx)
              ixx++
            }

            var responseHeaderString = makeWarcResponseHeaderWith(rh, now, warcConcurrentTo, responseHeaders[rh] + CRLF, hexValueInt8Ary.length + (CRLF + CRLF).length) + CRLF

            arrayBuffers.push(str2ab(responseHeaderString))
            arrayBuffers.push(str2ab(responseHeaders[rh] + CRLF))
            arrayBuffers.push(hexValueInt8Ary.buffer) // Now, add the image data
            arrayBuffers.push(str2ab(CRLF + CRLF + CRLF + CRLF))

            delete responsesToConcatenate[rh]
          } else {
            // If we don't have the image data in localstorage, remove it anyway
            console.error('We do not have ' + rh + "'s data in cache.")
            delete responsesToConcatenate[rh]
          }

          if (Object.keys(responsesToConcatenate).length === 0) {
            if (!localStorage.uploadTo || localStorage.uploadTo.length === 0) {
              saveAs(new Blob(arrayBuffers), fileName)
            } else {
              uploadWarc(arrayBuffers)
            }
          } else {
            // console.log(('Still have to process URIs:'+Object.keys(responsesToConcatenate).join(' '))
          }
        })
      }
    } else if (
      responseHeaders[requestHeader] &&
      cssregexp.exec(responseHeaders[requestHeader]) !== null) {
      if (cssURIs === null || !cssURIs) { break }
      responsesToConcatenate[requestHeader] = 'pending'
      console.log(requestHeader + ' is a CSS file')
      var respHeader = responseHeaders[requestHeader] + CRLF + CRLF
      var respContent = ''

      for (var cc = 0; cc < cssURIs.length; cc++) {
        if (requestHeader === cssURIs[cc]) {
          respContent += cssData[cssURIs.indexOf(requestHeader)] + CRLF + CRLF
          break
        }
      }

      var cssResponseHeaderString = makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, respHeader + respContent) + CRLF
      arrayBuffers.push(str2ab(cssResponseHeaderString))

      arrayBuffers.push(str2ab(respHeader + respContent + CRLF + CRLF))
      delete responsesToConcatenate[requestHeader]

    /* } else if(
      responseHeaders[requestHeader] &&
      responseHeaders[requestHeader].indexOf('Content-Type: application/javascript') > -1)
    {
      console.log(requestHeader + ' is a JS file');
      var respHeader = responseHeaders[requestHeader] + CRLF + CRLF;
      var respContent = '';

      for(var jc=0; jc<jsURIs.length; jc++){
        if(requestHeader === jsURIs[jc]){
          respContent += jsData[jsURIs.indexOf(requestHeader)] + CRLF + CRLF;
          break;
        }
      }

      var jsResponseHeaderString = makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, respHeader+respContent) + CRLF;
      arrayBuffers.push(str2ab(jsResponseHeaderString));

      arrayBuffers.push(str2ab(respHeader+respContent+CRLF+CRLF));

    }
    else {
      /*console.log(' (X) '+requestHeader+' is not an image or CSS file.');
      if(responseHeaders[requestHeader] && responseHeaders[requestHeader].indexOf('text/html') > -1){
        warcAsURIString += makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, responseHeaders[requestHeader]) + CRLF;
        warcAsURIString += responseHeaders[requestHeader] + CRLF + CRLF;
      }*/
      // console.log('response:')
      // console.log(responseHeaders[requestHeader])
      // console.log('request')
      // console.log(requestHeaders[requestHeader])
    }
  }

  /*
  // join ALL the arraybuffers, the method is dumb but we must do it this way
  var numberOfBuffers = arrayBuffers.length;
  console.log('LL'+arrayBuffers);
  console.log('PQ:'+arrayBuffers[0]);
  return;
  //get the aggregateBufferSize
  var aggregateBufferSize = 0;
  for(var bufI=0; bufI<numberOfBuffers.length; bufI++){
    aggregateBufferSize += arrayBuffers[bufI].length;
  }
  //create the aggregate buffer
  var aggregateBuffer = new Int8Array(aggregateBufferSize);
  //append buffers until you get to the end
  var pivotLength = 0;
  console.log('P: '+numberOfBuffers.length);
  for(var bufI=0; bufI<numberOfBuffers.length; bufI++){
    aggregateBuffer.set(arrayBuffers[bufI],pivotLength);
    console.log('AgBuf after iteration '+bufI+': '+aggregateBuffer);
    console.log(aggregateBuffer);
    pivotLength += arrayBuffers[bufI].length;
  }

  var data = {
    data: Array.apply(null, new Uint8Array(aggregateBuffer))
  };
  var jsonedData = JSON.stringify(data);*/

  // requestHeaders = null; requestHeaders = new Array();
  // responseHeaders = null; responseHeaders = new Array();
  //
  if (Object.keys(responsesToConcatenate).length === 0) {
    saveAs(new Blob(arrayBuffers), fileName)
    f_callback({msg: 'warc generated'})
  } else {
    console.log('Still have to process URIs:' + Object.keys(responsesToConcatenate).join(' '))
  }
  // f_callback({x: jsonedData})
}

/* ************************************************************

 UTILITY FUNCTIONS

************************************************************ */

// from https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
function utf8_to_b64 (str) {
  return window.btoa(unescape(encodeURIComponent(str)))
}

function b64_to_utf8 (str) {
  return decodeURIComponent(escape(window.atob(str)))
}

function getVersion (callback) {
  var xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', '../manifest.json')
  xmlhttp.onload = function (e) {
    var manifest = JSON.parse(xmlhttp.responseText)
    callback(manifest.version)
  }
  xmlhttp.send(null)
}

function uploadWarc (abArray) {
  var blobFromArrayBuffers = new Blob(abArray)

  /* function uploadSuccess(d,t,j){
    console.log('* Upload succeeded! Three call variables follow this message.');
    console.log(d);
    console.log(t);
    console.log(j);
  }

  function uploadFail(x,t,e){
    console.log('There was an error uploading the file.');
  } */

  console.log('Uploading WARC to ' + localStorage.uploadTo)

  var ajaxRequest = new XMLHttpRequest()

  var progressObj = {
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

  ajaxRequest.open('POST', localStorage.uploadTo, true)

  ajaxRequest.onreadystatechange = function () {
    updateNotification(25 * ajaxRequest.readyState)
    if (ajaxRequest.readyState === 4) {
      // window.alert('Response: \n' + ajaxRequest.responseText)
      // console.log(ajaxRequest.status)
      // console.log(ajaxRequest.responseText)
      progressObj.message = ajaxRequest.responseText
      progressObj.iconUrl = '../icons/icon-check-128.png'
      progressObj.title = 'WARC Uploaded'
      progressObj.buttons = [{title: 'View WARC file', iconUrl: '../icons/icon-viewing.png'}]
      setTimeout(function () { updateNotification(100) }, 500)
      if (ajaxRequest.status === 201 && ajaxRequest.responseText.length > 0) {
        // alert('WARC created at '+ajaxRequest.responseText)
        warcfileURI = ajaxRequest.responseText
      } else {
        window.alert('The server accepted the WARC.')
      }
    }
  }
  ajaxRequest.send(blobFromArrayBuffers)
}
var warcfileURI = '' // The Chrome notifications API isn't mature enough to surface data, even via buttons

var version
getVersion(function (ver) { version = ver })

/* ************************************************************

 INITIAL RUNTIME EXECUTION

************************************************************ */

chrome.runtime.onMessage.addListener(generateWarc)
