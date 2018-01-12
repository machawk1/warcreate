var outlinks = []

function fetchImage (u) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', u, true)
  xhr.responseType = 'arraybuffer'

  xhr.onload = function (e) {
    const uInt8Array = new Uint8Array(this.response)
    delete imageUris[u]
    // console.log(("Fetched "+u+"  "+Object.keys(imageUris).length+" urls left to fetch")
    if (Object.keys(imageUris).length === 0) {
      // console.log(("All image data collected");
    }
  }

  xhr.send()
}

/**
 * Exact functionality of the fetchImage method except returns a promise that calls the resolve
 * function after the image data has been set in local storage.
 * calls the reject function if chrome.lasterror is defined or the XHR requests onerror method is called
 * per #90
 */
function fetchImagePromise (u, ret, imgObjs) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', u, true)
    xhr.responseType = 'arraybuffer'
    xhr.onload = function (e) {
      const uInt8Array = new Uint8Array(this.response)

      let stringUInt8Array = []
      for (var ii = 0; ii < uInt8Array.length; ii++) {
        stringUInt8Array[ii] = uInt8Array[ii] + 0
      }

      ret[u] = uInt8Array
      delete imgObjs[u]

      let imgBinData = {}
      imgBinData[u] = stringUInt8Array
      chrome.storage.local.set(imgBinData, function () {
        if (chrome.runtime.lastError) {
          console.error('Error in set data')
          console.error(chrome.runtime.lastError)
          reject(chrome.runtime.lastError)
        } else {
          resolve()
        }
      })
    }

    xhr.onerror = function (e) {
      console.log('Error fetchImagePromise content.js', e)
      reject(e)
    }

    xhr.send()
  })
}

/**
 * Exact functionality of the fetchCssData method except returns a promise that calls the resolve
 * on done or error
 */
function fetchCssDataPromise (href, styleSheetData) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: href,
      dataType: 'text'
    }).done(function (cssText) {
      styleSheetData.push(cssText)
      resolve()
    }).error(function (jqXHR, textStatus, errorThrown) {
      console.error('there was an error fetching css data content.js', textStatus, errorThrown)
      resolve()
    })
  })
}

/**
 * Exact functionality of the fetchScriptData method except returns a promise that calls the resolve
 * on done or error
 */
function fetchScriptDataPromise (src, JSData) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: src,
      dataType: 'text'
    }).done(function (jsText) {
      JSData.push(jsText)
      resolve()
    }).error(function (jqXHR, textStatus, errorThrown) {
      console.error('there was an error fetching script data content.js', textStatus, errorThrown)
      resolve()
    })
  })
}

chrome.extension.onConnect.addListener(function (port) {
  /*
   per #90 added the async modifier to the function
   NOTE: any error thrown in this function not caught explicitly
   will cause on unhandled rejection error. This may or may not
   be a node.js only thing (will cause node to halt in a future release)
   but the handling of should take place for good standards and practises
   */
  port.onMessage.addListener(async function (msg) {
    if (msg.method === 'getImageData') {
      let imgObjs = {}
      // Get the image URIs from the DOM
      for (let image = 0; image < document.images.length; image++) {
        if (document.images[image].src.indexOf('data:') === -1) {
          imgObjs[document.images[image].src] = 'foo' // dummy data to-be-filled below programmatically
        }
      }
      // Get the image URIs embedded in CSS
      let imagesInCSS = getallBgimages()
      for (let imageInCSS = 0; imageInCSS < imagesInCSS.length; imageInCSS++) {
        imgObjs[imagesInCSS[imageInCSS]] = 'foo' // dummy data to-be-filled below programmatically
      }

      let ret = {}

      for (let uri in imgObjs) {
        console.log('Fetching image at ' + uri)
        if (uri.indexOf('data:') === -1) {
          // Proceed only when the fetch resolves or rejects.
          try {
            await fetchImagePromise(uri, ret, imgObjs)
          } catch (error) {
            console.error('there was an error in fetchImagePromise content.js', error)
          }
        }
      }
    } else if (msg.method === 'getHTML') {
      const images = document.images

      outlinks = []
      let outlinksAddedRegistry = [] // hacky array to prevent duplicate outlinks

      // Outlinks as images [embedded resource], there are probably other types
      $(images).each(function () {
        if (!outlinksAddedRegistry[$(this).attr('src')]) {
          outlinksAddedRegistry[$(this).attr('src')] = ''
          outlinks.push(`${$(this).attr('src')} E =EMBED_MISC`)
        }
      })

      // Outlinks as CSS //TODO, E =EMBED_MISC was made-up. Is this right?
      $(document.styleSheets).each(function () {
        if (!outlinksAddedRegistry[$(this).attr('href')]) {
          outlinksAddedRegistry[$(this).attr('href')] = ''
          // fixes #80
          outlinks.push(`${$(this).attr('href')} E link/@href`)
        }
      })

      // Outlinks as JavaScripts
      $(document.scripts).each(function () {
        if ($(this).attr('src') && // Only include the externally embedded JS, not the inline
          !outlinksAddedRegistry[$(this).attr('src')]
        ) {
          outlinksAddedRegistry[$(this).attr('src')] = ''
          outlinks.push(`${$(this).attr('src')} E script/@src`)
        }
      })

      // Outlinks as external links on page
      $('a').each(function () {
        if (!outlinksAddedRegistry[$(this).attr('href')]) {
          outlinksAddedRegistry[$(this).attr('href')] = ''
          outlinks.push(`${$(this).attr('href')} L a/@href`)
        }
      })

      outlinksAddedRegistry = null // reclaim space, since we no longer need this check given we're through building outlinks

      let imageURIs = []
      let imageBase64Data = []
      // Convert images to something portal and text-y
      for (let i = 0; i < images.length; i++) {
        // NOTE: image data is NOT fetched here, a subsequent Ajax call is made in warcGenerator.js 20130211 ~ line 188
        const anImage = images[i]
        if (!(anImage.src)) {
          continue
        }

        let canvas = document.createElement('canvas')
        canvas.width = anImage.width
        canvas.height = anImage.height

        const dataurl = canvas.toDataURL()
        var datastartpos = dataurl.match(',').index + 1
        var dd = dataurl.substring(datastartpos)
      }

      let imageURIsSerialized = imageURIs.join('|||')
      localStorage['imagesInDOM'] = imageURIsSerialized

      // Re-fetch CSS (limitation of webRequest, need to be able to get content on response, functionality unavailable,
      // requires refetch). A better way to get all stylesheets but we cannot get them as text but instead an object
      // with ruleslist
      let styleSheetURLs = []
      let styleSheetData = []

      for (let ss = 0; ss < document.styleSheets.length; ss++) {
        styleSheetURLs.push(document.styleSheets[ss].href)
        // The execution of this function will "halt" until this function resolves or rejects.
        // WARCreate now iteratively fetches each css files data
        try {
          await fetchCssDataPromise(document.styleSheets[ss].href, styleSheetData)
        } catch (error) {
          console.error('there was an error fetching css data content.js', error)
        }
      }

      // Re-fetch JS
      let JSURLs = []
      let JSData = []

      for (let scriptI = 0; scriptI < document.scripts.length; scriptI++) {
        JSURLs.push(document.scripts[scriptI].src)
        // the execution of this function will "halt" until this function resolves or rejects.
        // WARCreate now iteratively fetches each js files data
        try {
          await fetchScriptDataPromise(document.scripts[scriptI].src, JSData)
        } catch (error) {
          console.error('there was an error fetching js data content.js', error)
        }
      }

      // all of this nonsense just to get the doctype to prepend!
      let node = document.doctype
      let dtstr
      if (!node) { dtstr = '' } else {
        dtstr = '<!DOCTYPE ' +
          '' + node.name +
          (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') +
          (!node.publicId && node.systemId ? ' SYSTEM' : '') +
          (node.systemId ? ' "' + node.systemId + '"' : '') +
          '>'
      }

      let domAsText = document.documentElement.outerHTML

      // This accounts for foo.txt documents on the web, which chrome puts a wrapper around
      const textDocumentStarterString = '<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">'
      if (domAsText.substr(0, textDocumentStarterString.length) === textDocumentStarterString) {
        console.log('Adjusting WARC algorithm to account for text rather than HTML document.')

        domAsText = $(document).find('pre').html() // replace text w/ html wrapper with just text
        dtstr = '' // remove the doctype injection
      }

      port.postMessage({
        // html: dtstr + document.all[0].outerHTML, //document.all is non-standard
        html: dtstr + domAsText, //   document.documentElement.outerHTML,
        images: {'uris': imageURIs, 'data': imageBase64Data},
        css: {'uris': styleSheetURLs, 'data': styleSheetData},
        js: {'uris': JSURLs, 'data': JSData},
        outlinks: outlinks,
        method: msg.method
      }) // communicate back to code.js ~130 with image data
    } else {
    }
  })
})

function base64ArrayBuffer (arrayBuffer) {
  let base64 = ''
  const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  const bytes = new Uint8Array(arrayBuffer)
  let byteLength = bytes.byteLength
  const byteRemainder = byteLength % 3
  const mainLength = byteLength - byteRemainder

  let a, b, c, d
  let chunk

  // Main loop deals with bytes in chunks of 3
  for (let i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048) >> 12 // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032) >> 6 // 4032     = (2^6 - 1) << 6
    d = chunk & 63 // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder === 1) {
    chunk = bytes[mainLength]

    a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3) << 4 // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '=='
  } else if (byteRemainder === 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

    a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008) >> 4 // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15) << 2 // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '='
  }

  return base64
}
