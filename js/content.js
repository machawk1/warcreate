//var server = "http://localhost:8080";
var server = "http://warcreate.com";

chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
	if(msg.method == "getHTML"){
		console.log("about to post getHTML message");
		images = document.images;
		
		var imageURIs = [];
		var imageBase64Data = [];
		//image conversion code
	//*********************************	
	// Convert images to something portal and text-y
	//*********************************
		//console.log("Converting image data, "+images.length+" to convert");
		//imagesI = 0;
		for(var i = 0; i< images.length; i++){
			console.log(images[i].src);
			var image = images[i];
			if(!(image.src)){console.log("Image "+i+" had no src. Continuing to encode the others"); continue;}
			console.log("About to convert image "+(i+1)+"/"+images.length+": "+images[i].src);
			
			var canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			
			var dataurl = canvas.toDataURL();
			var datastartpos = dataurl.match(",").index+1;
			var dd = dataurl.substring(datastartpos);
			
			imageURIs.push(images[i].src);
			imageBase64Data.push(dd);
			
			var binaryImageData = window.atob(dd);
			
		
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
		console.log(document.styleSheets[0]);
		for(var ss=0; ss<document.styleSheets.length; ss++){
			styleSheetURLs.push(document.styleSheets[ss].href);
			$.ajax({
				url: document.styleSheets[ss].href,
				dataType: "text",
				async: false
			}).done(function(cssText){
				styleSheetData.push(cssText);		
			});
		}
		
		
		var cssDataSerialized = styleSheetData.join('|||');
		var cssURIsSerialized = styleSheetURLs.join('|||');
		
		console.log("content.js: sending relayToImagesPost");
		port.postMessage({
			html: document.all[0].outerHTML, 
			uris: imageURIsSerialized,
			data: imageDataSerialized, 
			cssuris: cssURIsSerialized,
			cssdata: cssDataSerialized,
			method: msg.method
			});	//communicate back to code.js ~130 with image data
	}else {
		//alert("method is unsupported: "+msg.method);
	}
   
  });
});


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

