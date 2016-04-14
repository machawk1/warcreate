//var server = 'http://localhost:8080';
var server = 'http://warcreate.com';
var outlinks = [];

function fetchImage(u) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', u, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
        var uInt8Array = new Uint8Array(this.response);
        delete imageUris[u];
        //console.log(('Fetched '+u+'  '+Object.keys(imageUris).length+' urls left to fetch');
        if(Object.keys(imageUris).length === 0) {
             //console.log(('All image data collected');
        }
    };

    xhr.send();
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function fetchImage(u) {
    var ret = {};
    var imgObjs = {};
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', u, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
        var uInt8Array = new Uint8Array(this.response);

        var stringUInt8Array = [];
        for(var ii = 0; ii < uInt8Array.length; ii++) {
            stringUInt8Array[ii] = uInt8Array[ii]+0;
        }

        var myString = uInt8Array;

        ret[u] = myString;
        delete imgObjs[u];

         var ohemefgee = {};
         ohemefgee[u] = stringUInt8Array;
         chrome.storage.local.set(ohemefgee, function() {
            if(chrome.runtime.lastError) {
                console.error('Error in set data');
                console.error(chrome.runtime.lastError);
            }
         });
    };

    xhr.onerror = function(e) {
        console.log('Error');
    };

    xhr.send();
}

var commPort;

chrome.runtime.onConnect.addListener(function(port) {
  commPort = port;
  port.onMessage.addListener(function(msg) {
      if(msg.method == 'getImageData') {
        var imgObjs = {};
        //get the image URIs from the DOM
        for(var image=0; image<document.images.length; image++) {
            if(document.images[image].src.indexOf('data:') == -1) {
                imgObjs[document.images[image].src] = 'foo'; //dummy data to-be-filled below programmatically
            }
        }
        //get the image URIs embedded in CSS
        var imagesInCSS = getallBgimages();
        for(var imageInCSS=0; imageInCSS<imagesInCSS.length; imageInCSS++) {
            imgObjs[imagesInCSS[imageInCSS]] = 'foo'; //dummy data to-be-filled below programmatically
        }


        for(var uri in imgObjs) {
            console.log('Fetching image at ' + uri);
            if(uri.indexOf('data:') == -1) {
                fetchImage(uri);
            }
        }



      }
    else if(msg.method == 'getHTML') {
        images = document.images;

        outlinks = [];
        outlinksAddedRegistry = []; //hacky array to prevent duplicate outlinks

        // outlinks as images [embedded resource], there are probably other types
        $(images).each(function () {
            if(!outlinksAddedRegistry[$(this).attr('src')]) {
                outlinksAddedRegistry[$(this).attr('src')] = '';
                outlinks.push($(this).attr('src') + ' E =EMBED_MISC');
            }
        });

        // outlinks as CSS //TODO, E =EMBED_MISC was made-up. Is this right?
        $(document.styleSheets).each(function () {
            if(!outlinksAddedRegistry[$(this).attr('href')] && $(this).attr('href')) {
                outlinksAddedRegistry[$(this).attr('href')] = '';
                   outlinks.push($(this).attr('href') + ' E =EMBED_MISC');
               }
        });

        // outlinks as JavaScripts
        $(document.scripts).each(function () {
           if(    $(this).attr('href') && // Only include the externally embedded JS, not the inline
                   !outlinksAddedRegistry[$(this).attr('href')]
           ) {
                   outlinksAddedRegistry[$(this).attr('href')] = '';
                   outlinks.push($(this).attr('href')+' E script/@src');
           }
        });

        // outlinks as external links on page
        $('a').each(function () {
            if(!outlinksAddedRegistry[$(this).attr('href')]) {
                outlinksAddedRegistry[$(this).attr('href')] = '';
                  outlinks.push($(this).attr('href')+' L a/@href');
              }
        });

        outlinksAddedRegistry = null; //reclaim space, since we no longer need this check given we're through building outlinks
        chrome.storage.local.set({'outlinks': outlinks});


        var imageURIs = [];
        var imageBase64Data = [];
        var img = {};
    //*********************************
    // Convert images to something portable and text-y
    //*********************************
        for(var i = 0; i< images.length; i++) {
            var imageI = images[i];
            if(!(imageI.src)) {
                continue;
            }

            var canvas = document.createElement('canvas');
            canvas.width = imageI.width;
            canvas.height = imageI.height;

            var dataurl = canvas.toDataURL();
            var datastartpos = dataurl.match(',').index + 1;
            var dd = dataurl.substring(datastartpos);

        }

        var imageDataSerialized = imageBase64Data.join('|||');
        var imageURIsSerialized = imageURIs.join('|||');
        
        for(var imgI = 0; imgI < imageURIs.length; imgI++) {
          img[imageURIs] = imageBase64Data[imgI];
        }
        
        chrome.storage.local.set({'img': img});
        
        localStorage.imagesInDOM = imageURIsSerialized;

        var cssCallbackToGetJS = function() {
          getJSData(serializeAndPostDocumentContents);
        };

        chrome.storage.local.set({'method': msg.method});

        getCSSData(cssCallbackToGetJS);

    }else {
        //console.log(('Method unsupported in content.js: '+msg.method);
    }

  });
});

function serializeAndPostDocumentContents() {
    chrome.storage.local.get(['js','css','outlinks','method','img'], function(pageAttributes) {    
      var domAsText = stringifyDOM();

     console.log(pageAttributes.method);

      commPort.postMessage({
        html: domAsText,
        img: pageAttributes.img,
        css: pageAttributes.css,
        js: pageAttributes.js,
        outlinks: pageAttributes.outlinks,
        method: pageAttributes.method
      });    //communicate back to code.js ~130 with image data
   });
}

function stringifyDOM() {
  var domAsText = document.documentElement.outerHTML;
  var docTypeString = getDoctype(); // Prepend the DOCTYPE
  
  var textDocumentStarterString = '<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">';
  if(domAsText.substr(0, textDocumentStarterString.length) ==  textDocumentStarterString) {
     console.log('Adjusting WARC algorithm to account for text rather than HTML document.');

     domAsText = $(document).find('pre').html(); //replace text w/ html wrapper with just text
     docTypeString = ''; //remove the doctype injection
  }

  domAsText = docTypeString + domAsText;

  return domAsText;  
}

function getDoctype() {
    var node = document.doctype;
    var dtstr;
    if(!node){dtstr = '';}
    else {
        dtstr = '<!DOCTYPE '
             + '' + node.name
             + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '')
             + (!node.publicId && node.systemId ? ' SYSTEM' : '')
             + (node.systemId ? ' "' + node.systemId + '"' : '')
             + '>';
    }
    return dtstr;
}


//from https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}

function base64ArrayBuffer(arrayBuffer) {
  var base64    = '';
  var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  var bytes         = new Uint8Array(arrayBuffer);
  var byteLength    = bytes.byteLength;
  var byteRemainder = byteLength % 3;
  var mainLength    = byteLength - byteRemainder;

  var a, b, c, d;
  var chunk;

  // Main loop deals with bytes in chunks of 3
  for (var i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048)   >> 12; // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032)     >>  6; // 4032     = (2^6 - 1) << 6
    d = chunk & 63;               // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder === 1) {
    chunk = bytes[mainLength];

    a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3)   << 4; // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '==';
  } else if (byteRemainder == 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

    a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008)  >>  4; // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15)    <<  2; // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '=';
  }

  return base64;
}

function absolute(base, relative) {
    if(relative.substr(0,2) === '//') { //Scheme-less URI
      var scheme = document.URL.substr(0, document.URL.indexOf('//'));
      return scheme + relative;
    }else if(!base) {
      base = document.URL;
    }

    var stack = base.split('/'),
        parts = relative.split('/');
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)

    if(relative.substr(0,1) == '/') {
      return window.location.origin+relative;
    } // Where the @import is /cssFiles.css

    for (var i=0; i<parts.length; i++) {
        if (parts[i] === '.') {
            continue;
        } else if (parts[i] === '..') {
            stack.pop();
        } else {
            stack.push(parts[i]);
        }
    }
    return stack.join('/');
}
