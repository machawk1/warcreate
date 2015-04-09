//var server = "http://localhost:8080";
var server = "http://warcreate.com";
var outlinks = [];

function fetchImage(u) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', u, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function (e) {
        var uInt8Array = new Uint8Array(this.response);
        delete imageUris[u];
        //console.log(("Fetched "+u+"  "+Object.keys(imageUris).length+" urls left to fetch");
        if(Object.keys(imageUris).length == 0){
             //console.log(("All image data collected");
        }
    };

    xhr.send();
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}


chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
  	//console.log(("in content.js with method: "+msg.method);
  	if(msg.method == "getImageData"){
  		//console.log(("Getting image data");
  		//console.log(document.images);
  		function fetchImage(u) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', u, true);
			xhr.responseType = 'arraybuffer';

			xhr.onload = function (e) {
				var uInt8Array = new Uint8Array(this.response);

				var stringUInt8Array = [];
				for(var ii=0; ii<uInt8Array.length; ii++){
					stringUInt8Array[ii] = uInt8Array[ii]+0;
				}

				var myString = uInt8Array;

				ret[u] = myString;
				delete imgObjs[u];

				 //console.log("Ok, now postback image data");
				 //console.error(u);
				 var ohemefgee = {};
				 ohemefgee[u] = stringUInt8Array;
				 chrome.storage.local.set(ohemefgee,function(){
					if(chrome.runtime.lastError){
						console.error("Error in set data");
						console.error(chrome.runtime.lastError);
					}
				 });
				 //console.log(("- Image data in local storage for "+u);
				 //port.postMessage({imageData: JSON.stringify(ret),method: "getImageDataRet",uri: u},function(e){});

			};

			xhr.onerror = function(e){
				console.log("Error");
			}

			xhr.send();
		}

		var imgObjs = {};
		//get the image URIs from the DOM
		for(var image=0; image<document.images.length; image++){
			if(document.images[image].src.indexOf("data:") == -1){
				imgObjs[document.images[image].src] = "foo"; //dummy data to-be-filled below programmatically
			}
		}
		//get the image URIs embedded in CSS
		var imagesInCSS = getallBgimages();
		for(var imageInCSS=0; imageInCSS<imagesInCSS.length; imageInCSS++){
			imgObjs[imagesInCSS[imageInCSS]] = "foo"; //dummy data to-be-filled below programmatically
		}


		var ret = {};

		for(var uri in imgObjs){
			console.log("Fetching image at "+uri);
			if(uri.indexOf("data:") == -1){
				fetchImage(uri);
			}
		}



  	}
	else if(msg.method == "getHTML"){
		//console.log(("about to post getHTML message");
		images = document.images;

		//console.log(("LINKS:");
		//console.log($("a"));

		outlinks = [];
		outlinksAddedRegistry = []; //hacky array to prevent duplicate outlinks

		// outlinks as images [embedded resource], there are probably other types
		$(images).each(function (){
			if(!outlinksAddedRegistry[$(this).attr("src")]){
				outlinksAddedRegistry[$(this).attr("src")] = "";
				outlinks.push($(this).attr("src")+" E =EMBED_MISC");
			}
		});

		// outlinks as CSS //TODO, E =EMBED_MISC was made-up. Is this right?
		$(document.styleSheets).each(function (){
			if(!outlinksAddedRegistry[$(this).attr("href")]){
				outlinksAddedRegistry[$(this).attr("href")] = "";
		   		outlinks.push($(this).attr("href")+" E =EMBED_MISC");
		   	}
		});

		// outlinks as JavaScripts
		$(document.scripts).each(function (){
		   if(	$(this).attr("href") && // Only include the externally embedded JS, not the inline
		   		!outlinksAddedRegistry[$(this).attr("href")]
		   ){
		   		outlinksAddedRegistry[$(this).attr("href")] = "";
		   		outlinks.push($(this).attr("href")+" E script/@src");
		   }
		});

		// outlinks as external links on page
		$("a").each(function (){
			if(!outlinksAddedRegistry[$(this).attr("href")]){
				outlinksAddedRegistry[$(this).attr("href")] = "";
		  		outlinks.push($(this).attr("href")+" L a/@href");
		  	}
		});

		outlinksAddedRegistry = null; //reclaim space, since we no longer need this check given we're through building outlinks


		var imageURIs = [];
		var imageBase64Data = [];
		//image conversion code
	//*********************************
	// Convert images to something portal and text-y
	//*********************************
		//console.log("Converting image data, "+images.length+" to convert");
		//imagesI = 0;
		for(var i = 0; i< images.length; i++){
			// NOTE: image data is NOT fetched here, a subsequent Ajax call is made in warcGenerator.js 20130211 ~ line 188
			//console.log((images[i].src);
			var image = images[i];
			if(!(image.src)){
				//console.log("Image "+i+" had no src. Continuing to encode the others");
				continue;}
			//console.log(("About to convert image "+(i+1)+"/"+images.length+": "+images[i].src);

			var canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;

			var dataurl = canvas.toDataURL();
			var datastartpos = dataurl.match(",").index+1;
			var dd = dataurl.substring(datastartpos);

		}

		var imageDataSerialized = imageBase64Data.join('|||');
		var imageURIsSerialized = imageURIs.join('|||');
		localStorage['imagesInDOM'] = imageURIsSerialized;
	//*********************************
	// Re-fetch CSS (limitation of webRequest, need to be able to get content on response, functionality unavailable, requires refetch)
	//*********************************
		//a better way to get all stylesheets but we cannot get them as text but instead an object with ruleslist
		var styleSheetURLs = [];
		var styleSheetData = [];

		for(var ss=0; ss<document.styleSheets.length; ss++){
			//iterate the rules trying to find any @imports to include in the WARC
			for(var rules=0; document.styleSheets[ss].rules && rules<document.styleSheets[ss].rules.length; rules++){
				if(document.styleSheets[ss].rules[rules].type == 3){
					//we have a CSS import. Magic number, yes, but so is the definition
					var foundCSSFile = absolute(document.URL,document.styleSheets[ss].rules[rules].href);

					styleSheetURLs.push(foundCSSFile);
					$.ajax({
					  url: foundCSSFile,
					  dataType: "text",
					  async: false
					}).done(function(cssText){
					  styleSheetData.push(cssText);
					}).fail(function(e){
						console.log("CSS fetch failed");
					});
				}
			}
			
			styleSheetURLs.push(document.styleSheets[ss].href);
			$.ajax({
				url: document.styleSheets[ss].href,
				dataType: "text",
				async: false
			}).done(function(cssText){
				styleSheetData.push(cssText);
			});
		}
		
	//*********************************
	// Re-fetch JS
	//*********************************
		var JSURLs = [];
		var JSData = [];

		for(var scriptI=0; scriptI<document.scripts.length; scriptI++){
			JSURLs.push(document.scripts[scriptI].src);
			$.ajax({
				url: document.scripts[scriptI].src,
				dataType: "text",
				async: false
			}).done(function(jsText){
				JSData.push(jsText);
			});
		}

		var cssDataSerialized = styleSheetData.join('|||');
		var cssURIsSerialized = styleSheetURLs.join('|||');
		var jsDataSerialized = JSData.join('|||');
		var jsURIsSerialized = JSURLs.join('|||');
		var outlinksSerialized = outlinks.join('|||');

		//console.log(("content.js: sending relayToImagesPost");
		//all of this nonsense just to get the doctype to prepend!
		var node = document.doctype;
		var dtstr;
		if(!node){dtstr = "";}
		else{
			dtstr = "<!DOCTYPE "
				 + "" + node.name
				 + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '')
				 + (!node.publicId && node.systemId ? ' SYSTEM' : '')
				 + (node.systemId ? ' "' + node.systemId + '"' : '')
				 + '>';
		}

		var domAsText = document.documentElement.outerHTML;

		// This accounts for foo.txt documents on the web, which chrome puts a wrapper around
		var textDocumentStarterString = '<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">';
		if(domAsText.substr(0, textDocumentStarterString.length) ==  textDocumentStarterString){
			console.log("Adjusting WARC algorithm to account for text rather than HTML document.");

			domAsText = $(document).find("pre").html(); //replace text w/ html wrapper with just text
			dtstr = ""; //remove the doctype injection
		}

		//domAsText = domAsText.replace(/[\n\r]+/g,"");
		//console.log(("length before post: "+domAsText.length);
		port.postMessage({
			//html: dtstr + document.all[0].outerHTML, //document.all is non-standard
			html: dtstr + domAsText,//   document.documentElement.outerHTML,
			uris: imageURIsSerialized,
			data: imageDataSerialized,
			cssuris: cssURIsSerialized,
			cssdata: cssDataSerialized,
			jsuris: jsURIsSerialized,
			jsdata: jsDataSerialized,
			outlinks: outlinksSerialized,
			method: msg.method
			});	//communicate back to code.js ~130 with image data
	}else {
		//console.log(("Method unsupported in content.js: "+msg.method);
	}

  });
});


//from https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}

function base64ArrayBuffer(arrayBuffer) {
  var base64    = ''
  var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

  var bytes         = new Uint8Array(arrayBuffer)
  var byteLength    = bytes.byteLength
  var byteRemainder = byteLength % 3
  var mainLength    = byteLength - byteRemainder

  var a, b, c, d
  var chunk

  // Main loop deals with bytes in chunks of 3
  for (var i = 0; i < mainLength; i = i + 3) {
    // Combine the three bytes into a single integer
    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

    // Use bitmasks to extract 6-bit segments from the triplet
    a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
    b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
    c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
    d = chunk & 63               // 63       = 2^6 - 1

    // Convert the raw binary segments to the appropriate ASCII encoding
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
  }

  // Deal with the remaining bytes and padding
  if (byteRemainder == 1) {
    chunk = bytes[mainLength]

    a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

    // Set the 4 least significant bits to zero
    b = (chunk & 3)   << 4 // 3   = 2^2 - 1

    base64 += encodings[a] + encodings[b] + '=='
  } else if (byteRemainder == 2) {
    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

    a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
    b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

    // Set the 2 least significant bits to zero
    c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

    base64 += encodings[a] + encodings[b] + encodings[c] + '='
  }

  return base64
}

function absolute(base, relative) {
    var stack = base.split("/"),
        parts = relative.split("/");
    stack.pop(); // remove current file name (or empty string)
                 // (omit if "base" is the current folder without trailing slash)

    if(relative.substr(0,1) == "/"){return window.location.origin+relative;} //where the @import is /cssFiles.css

    for (var i=0; i<parts.length; i++) {
        if (parts[i] == ".")
            continue;
        if (parts[i] == "..")
            stack.pop();
        else
            stack.push(parts[i]);
    }
    return stack.join("/");
}
