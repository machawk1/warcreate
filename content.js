//var server = "http://localhost:8080";
var server = "http://warcreate.com";

chrome.extension.onConnect.addListener(function(port) {
  //console.assert(port.name == "pai");
  port.onMessage.addListener(function(msg) {
	if(msg.method == "getHTML"){
		console.log("about to post getHTML message");
		//port.postMessage({html: document.all[0].outerHTML, method: msg.method});port.postMessage({html: document.all[0].outerHTML, method: "relayToImages"});console.log("done posting getHTML message");}else if(msg.method == "getEncodedImageData"){
		images = document.images;
		var imageURIs = [];
		var imageBase64Data = [];
		//image conversion code
/* ******************************************* */
		
		console.log("Converting image data, "+images.length+" to convert");
		imagesI = 0;
		for(var i = 0; i< images.length; i++){
			var image = images[i];
			if(!(image.src)){console.log("Image "+i+" had no src. Continuing to encode the others"); continue;}
			console.log("About to convert image "+(i+1)+"/"+images.length+": "+images[i].src);
			
			var canvas = document.createElement('canvas');
			canvas.width = image.width;
			canvas.height = image.height;
			
			var dataStr = "data:image/png;base64,";
			if(images[i].src.indexOf("jpeg") > 0 || images[i].src.indexOf("jpg") > 0){dataStr = "data:image/jpeg;base64,";}
			
			var context = canvas.getContext("2d");
			context.drawImage(image,0,0);
			var dataURL;
			var rawImageData;
			
			//try{
			//	dataURL = canvas.toDataURL("image/png"); //this is problematic re: security exception
			//	console.log("Successfully converted the image to a data URL in content.js");
			//}catch(err){
				//console.log("Error 1: "+err.message);
				var req=new XMLHttpRequest();          
				//console.log("hey, let's use the XAMPP suite to get the image data");  
				//try {
				//	window.btoa(
				//}
				
     			try{	//hey, let's use the XAMPP suite to get the image data
					console.log("Trying to get "+server+"/getThatImage.php?url="+image.src);
					port.postMessage({method: "changeStatus", str: i+"/"+images.length});
					req.open("GET", server+"/getThatImage.php?url="+image.src, false); 
					                         
					req.send(null);    
				}catch (e){	//not-so suite
					console.log("Cannot use XAMPP :(");
					console.log("Error 2: "+e.message);
					port.postMessage({method: 'error'});	//communicate back to code.js so the icon can be changed and any special handling done
					return;
				}
				
				dataURL = req.responseText;
				//rawImageData = decodeURIComponent(escape(window.atob(req.responseText)));
				//rawImageData = escape(window.atob(req.responseText));
				rawImageData = window.atob(req.responseText);
				var respHeaders = req.getAllResponseHeaders();
				//return;
			//}
			imageURIs[i] = images[i].src;
			//imageBase64Data[i] = dataStr+dataURL;
			imageBase64Data[i] = rawImageData;
			//console.log("Image "+(i+1)+"/"+images.length+" put into data array, len: "+dataURL);
		}
/* ******************************************* */
		var imageDataSerialized = imageBase64Data.join('|||');
		var imageURIsSerialized = imageURIs.join('|||');
		
		
		var cssFiles = new Array();
		$(document.all[0]).find('link').each(function(){
			var cssLoc = $(this).attr('href');
			if(cssLoc.indexOf(".css") != -1){
				cssFiles.push(cssLoc);
			}
		});
		console.log("content.js: sending relayToImagesPost");
		port.postMessage({html: document.all[0].outerHTML, cssURIs: cssFiles.join("|||"), method: "relayToImages",data: imageDataSerialized, uris: imageURIsSerialized});	//communicate back to code.js ~130 with image data
		port.postMessage({data: imageDataSerialized, method: msg.method, uris: imageURIsSerialized});	//communicate back to code.js ~130 with image data
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

