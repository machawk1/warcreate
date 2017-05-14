/**
 * WARCreate for Google Chrome
 * "Create WARC files from any webpage"
 * by Mat Kelly <warcreate@matkelly.com>
 *
 * See included LICENSE file for reuse information
 *
 */

// var server = "http://localhost:8080"
// var server = 'http://warcreate.com'

// Called when the url of a tab changes.
function checkForValidUrl (tabId, changeInfo, tab) {
  chrome.pageAction.show(tabId)
}

// function alertContent () {
//   chrome.tabs.executeScript(null, {file: 'js/jquery-2.1.1.min.js'}, function () {
//     chrome.tabs.executeScript(null, {file: 'js/jquery.rc4.js'}, function () {
//       chrome.tabs.executeScript(null, { file: 'js/alertContent.js' }, function () {})
//     })
//   })
// }

/**
 * Converts images on the webpage into a binary string
 */
// function encodeImages () {
//   var images = document.getElementsByTagName('img')
//   var img = new Image()
//   img.src = request.url
//   var canvas = document.createElement('canvas')
//   canvas.width = img.width
//   canvas.height = img.height
//   var context = canvas.getContext('2d')
//
//   // console.log((i+": "+images[i].src+"  file type: "+fileType)
//   var fileType = images[i].src.substr(images[i].src.length - 4).toLowerCase()
//   if (fileType == '.jpg' || fileType == 'jpeg') { fileType = 'image/jpeg' } else if (fileType == '.png') { fileType = 'image/png' } else if (fileType == '.gif') { fileType = 'image/gif' } else {
//     var uTransformed = images[i].src.substring(0, images[i].src.indexOf('.jpg')) + '.jpg'
//     alert('error at image ' + i + ' ' + uTransformed); return
//   }
//     // console.log((i+": "+images[i].src+"  file type: "+fileType)
//
//   try {
//     var base64 = canvas.toDataURL(fileType)
//     img.src = base64
//   // console.log(("Replaced image "+request.url+" with its base64 encoded form per canvas")
//   } catch (e) {
//     alert('Encoding of inline binary content failed!')
//     console.log(e)
//     return
//   }
//   $(images[i]).replaceWith(img)
// }

/**
 * UNUSED: Desired functionality is to provide facilities to encrypt data in resulting WARC
 */
// function encrypt () {
//   var key = document.getElementById('key').value
//   if (key === '') { alert('First enter a key for encryption.'); return }
//   chrome.tabs.executeScript(null, {file: 'js/jquery-2.1.1.min.js'}, function () {
//     chrome.tabs.executeScript(null, {file: 'js/jquery.rc4.js'}, function () {
//       chrome.tabs.executeScript(null, {code: "var params = {k:'" + key + "'};"}, function () {
//         chrome.tabs.executeScript(null, { file: 'js/encryptPage.js' }, function () {})
//       })
//     })
//   })
// }

/**
 * TODO: Provide 'sequential archiving' wherein a site's hierarchy is referenced
 * and all pages referenced in the hierarchy are captured
 */
function sequentialGenerateWarc () {
  var urls = []
  $(localStorage[ 'spec' ]).find('url').each(function (index) {
    urls.push($(this).text())
  })
  var uu = 0

  function generateWarcFromNextURL (nextUrl) {
    chrome.tabs.create({ url: nextUrl, active: true },
      function (tab) {
        chrome.tabs.onUpdated.addListener(function (tabId, info) {
          if (info.status === 'complete') {
            generateWarc()
            // chrome.tabs.remove(tab.tabId)
            alert('done with ' + (uu + 1) + '/' + urls.length)
            if (++uu >= urls.length) {
              return
            }
            generateWarcFromNextURL(urls[ uu ])
          }
        })
      }
    )
  }

  generateWarcFromNextURL(urls[ uu ])
}

/**
 * Calls and aggregates the results of the functions that progressively create a
 * string representative of the contents of the WARC file being generated.
 */
function generateWarc () {
  // console.log(("generate_warc start")

  // var imageData = []
  // var imageURIs = []
  // console.log(("generate_warc")
  chrome.tabs.executeScript(null, { file: 'js/jquery-2.1.1.min.js' }, function () { /* Dependency for hash library and general goodness */
    chrome.tabs.executeScript(null, { file: 'js/jquery.rc4.js' }, function () { /* Hash library */
      chrome.tabs.executeScript(null, { file: 'js/date.js' }, function () { /* Good date formatting library */
        // var uris = []
        // var datum = []
        chrome.tabs.getSelected(null, function (tab) {
          // chrome.pageAction.setIcon({path:"../icons/icon-running.png",tabId:tab.id})
          var port = chrome.tabs.connect(tab.id, { name: 'warcreate' }) // create a persistent connection
          port.postMessage({ url: tab.url, method: 'getHTML' }) // fetch the html of the page, in content.js

          // var imageDataFilledTo = -1

          // perform the first listener, populate the binary image data
          // console.log(("adding listener")
          port.onMessage.addListener(function (msg) { // get image base64 data
            // console.log(("About to generateWARC(). Next should be callback.")

            var fileName = (new Date().toISOString()).replace(/:|\-|\T|\Z|\./g, '') + '.warc'

            // If the user has specified a custom filename format, apply it here
            if (localStorage[ 'filenameScheme' ] && localStorage[ 'filenameScheme' ].length > 0) {
              fileName = moment().format(localStorage[ 'filenameScheme' ]) + '.warc'
            }

            chrome.extension.sendRequest({
                url: tab.url,
                method: 'generateWarc',
                docHtml: msg.html,
                file: fileName,
                imgURIs: msg.uris,
                imgData: msg.data,
                cssURIs: msg.cssuris,
                cssData: msg.cssdata,
                jsURIs: msg.jsuris,
                jsData: msg.jsdata,
                outlinks: msg.outlinks
              },
              function (response) { // the callback to sendRequest

                /*
                 //OBSOLETE SAVE CODE BELOW, GOOD FOR FETCHING RESOURCE POST-LOAD

                 console.log("generateWARC callback executed, about to write to file")

                 //var bb = new BlobBuilder
                 //bb.append(response.d)
                 //localStorage['data'] = response.d

                 function uploadSuccess(d,t,j){
                 console.log("* Upload succeeded! Three call variables follow this message.")
                 console.log(d)
                 console.log(t)
                 console.log(j)
                 }

                 function uploadFail(x,t,e){
                 console.log("There was an error uploading the file.")
                 }

                 console.log("Here's the data that's to be written")
                 console.log(response.x)

                 if(!localStorage['uploadTo'] || localStorage['uploadTo'].length == 0){
                 //saveAs(bb.getBlob("text/plain;charset=utf-8"), fileName)
                 console.log("Responding!")
                 console.log(response.x)
                 console.log(JSON.parse(response.x).data)
                 //saveAs(JSON.parse(response.x).data, fileName)

                 } else {
                 console.log("Uploading!"+localStorage['uploadTo'])

                 $.ajax({
                 type: "POST",
                 url: localStorage['uploadTo'],
                 data: {data: response.d}//localStorage['data']} //testing file upload
                 }
                 )
                 .done(uploadSuccess)
                 .fail(uploadFail)
                 }

                 console.log("Done!")
                 chrome.pageAction.setIcon({path:"../icons/icon-check.png",tabId:tab.id})
                 responseHeaders = new Array()
                 requestHeaders = new Array()
                 imageData = new Array()
                 var imageURIs = new Array()
                 msg = null; */
              })
          })
        })
      })
    })
  })
}

/**
 * Sets up the popup activated when the extensions's icon is clicked.
 */
window.onload = function () {
  // var background = chrome.extension.getBackgroundPage()

  var buttonContainer = document.getElementById('buttonContainer')

  // var sButton = document.getElementById('submit')
  // var acButton = document.getElementById('alertContent')
  // var encryptButton = document.getElementById('encrypt')
  // var encodeButton = document.getElementById('encodeImages')

  // if a website is recognized from the spec, show the "Cohesive archive"
  var caButtonDOM = document.createElement('input')
  caButtonDOM.type = 'button'
  caButtonDOM.id = 'generateCohesiveWARC'
  caButtonDOM.disabled = 'disabled'
  // var t

  caButtonDOM.value = 'Generate WARC for site'

  // create buttons for popup
  var gwButtonDOM = document.createElement('input')
  gwButtonDOM.type = 'button'
  gwButtonDOM.id = 'generateWarc'
  gwButtonDOM.value = 'Generate WARC'
  var clsButtonDOM = document.createElement('input')
  clsButtonDOM.type = 'button'
  clsButtonDOM.id = 'clearLocalStorage'
  clsButtonDOM.value = 'Clear LocalStorage'

  // For debugging, display content already captured
  // var dcButtonDOM = document.createElement('input'); dcButtonDOM.type = "button"; dcButtonDOM.id = "displayCaptured"; gwButtonDOM.value = "Show pending content"

  var errorText = document.createElement('a')
  errorText.id = 'errorText'
  errorText.target = '_blank'
  var status = document.createElement('input')
  status.id = 'status';
  status.type = 'text';
  status.value = ''

  if (!buttonContainer) { return }

  // add buttons to DOM
  buttonContainer.appendChild(gwButtonDOM)
  buttonContainer.appendChild(caButtonDOM)

  buttonContainer.appendChild(clsButtonDOM)
  buttonContainer.appendChild(status)
  $(buttonContainer).prepend(errorText)
  $('#status').css('display', 'none') // initially hide the status block

  var gwButton = document.getElementById('generateWarc')
  gwButton.onclick = generateWarc

  var clsButton = document.getElementById('clearLocalStorage')

  // future implementation for NEH HD-51670-13
  // https://securegrants.neh.gov/publicquery/main.aspx?f=1&gn=HD-51670-13
  var ulButton = document.getElementById('uploader')
  var caButton = document.getElementById('generateCohesiveWARC')
  $(ulButton).css('display', 'none')
  $(caButton).css('display', 'none')

  $(clsButton).css('display', 'none') // clear local storage, used in debugging
  caButton.onclick = sequentialGenerateWarc
}
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl)

// var headers = ''

var responseHeaders = []
var requestHeaders = []
var CRLF = '\r\n'

var currentTabId = -1

chrome.tabs.getSelected(null, function (tab) {
  chrome.storage.local.set({ 'lastTabId': tab.id })

  chrome.storage.local.get('lastTabId', function (result) {
    // $("body").append("Tab IDY: "+result.lastTabId)
    // $("body").append(tab.url)
  })

  var port = chrome.tabs.connect(tab.id, { name: 'getImageData' }) // create a persistent connection
  port.postMessage({ url: tab.url, method: 'getImageData' })
  port.onMessage.addListener(function (msg) {
    /* if(msg.method == "getImageDataRet"){ //OBSOLETE HERE BELOW,
     var imageURIsForWhichWeHaveData = Object.keys(JSON.parse(msg.imageData))
     for(var uu=0; uu<imageURIsForWhichWeHaveData.length; uu++){
     console.log("- Image data in local storage for "+imageURIsForWhichWeHaveData[uu])
     }

     chrome.storage.local.set({'imageData':msg.imageData},
     function(){
     console.log("Checking if there was an error in setting the data")
     if(chrome.runtime.lastError){
     alert("Error in set data")
     }else {
     console.log("There was no data for setting this image in Chrome.Storage.Local")
     }
     }

     );
     //localStorage["imageData"] = msg.imageData
     } */
  })
})

/**
 * Stores HTTP response headers into an object array with URI as key.
 */
chrome.webRequest.onHeadersReceived.addListener(
  function (resp) {
    responseHeaders[ resp.url ] = ''
    responseHeaders[ resp.url ] += resp.statusLine + CRLF

    // console.log(("- Response Headers received for "+resp.url+" in tab "+resp.tabId)
    for (var key in resp.responseHeaders) {
      responseHeaders[ resp.url ] += resp.responseHeaders[ key ].name + ': ' + resp.responseHeaders[ key ].value + CRLF
    }
    // console.log(responseHeaders[resp.url])
  }
  , { urls: [ 'http://*/*', 'https://*/*' ], tabId: currentTabId }, [ 'responseHeaders', 'blocking' ])

/**
 * Stores HTTP request headers into an object array with URI as key.
 */
chrome.webRequest.onBeforeSendHeaders.addListener(
  function (req) {
    requestHeaders[ req.url ] = ''

    var path = req.url.substring(req.url.match(/[a-zA-Z0-9]\//).index + 1)

    var FABRICATED_httpVersion = 'HTTP/1.1'
    requestHeaders[ req.url ] += req.method + ' ' + path + ' ' + FABRICATED_httpVersion + CRLF
    // console.log(("- Request headers received for "+req.url)
    for (var key in req.requestHeaders) {
      requestHeaders[ req.url ] += req.requestHeaders[ key ].name + ': ' + req.requestHeaders[ key ].value + CRLF
    }
  }
  , { urls: [ 'http://*/*', 'https://*/*' ], tabId: currentTabId }, [ 'requestHeaders', 'blocking' ])

/**
 * Captures information about redirects that otherwise would be transparent to
 * the browser.
 */
chrome.webRequest.onBeforeRedirect.addListener(function (resp) {
  responseHeaders[ resp.url ] = ''
  responseHeaders[ resp.url ] += resp.statusLine + CRLF

  // console.log(("--------------Redirect Response Headers for "+resp.url+" --------------")
  for (var key in resp.responseHeaders) {
    responseHeaders[ resp.url ] += resp.responseHeaders[ key ].name + ': ' + resp.responseHeaders[ key ].value + CRLF
  }
// console.log((responseHeaders[resp.url])
}, { urls: [ 'http://*/*', 'https://*/*' ], tabId: currentTabId }, [ 'responseHeaders' ])

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
  function (details) {}, { urls: [ 'http://*/*', 'https://*/*' ] }, [ 'responseHeaders' ])
