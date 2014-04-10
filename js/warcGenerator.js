//depends on date.js

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
  var buf = new ArrayBuffer(str.length); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function lengthInUtf8Bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

function generateWarc(o_request, o_sender, f_callback){
	if(o_request.method != "generateWarc"){return; }
	//console.log(("Running generateWarc code");
	
	var CRLF = "\r\n";
	
		
	//from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	function guidGenerator() {
		var S4 = function() {
		   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return "<urn:uuid:"+(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())+">";
	}

	
	var now = new Date().toISOString();
	now = now.substr(0,now.indexOf("."))+"Z";
	
	var nowHttp = new Date().toString("ddd dd MMM yyyy HH:mm:ss")+" GMT";
	var fileName = o_request.file;
	var initURI = o_request.url;
	
	var warcInfoDescription =  "Crawl initiated from the WARCreate Google Chrome extension";
	var isPartOf = "basic";
	if(localStorage.getItem("collectionId") || localStorage.getItem("collectionName")){
		warcInfoDescription = "collectionId=" +localStorage.getItem("collectionId")+", collectionName=\""+localStorage.getItem("collectionName")+"\"";
		isPartOf = localStorage.getItem("collectionId");
	}
	
	var warcHeaderContent = 
		"software: WARCreate/"+version+" http://warcreate.com" +CRLF + 
		"format: WARC File Format 1.0" + CRLF +
		"conformsTo: http://bibnum.bnf.fr/WARC/WARC_ISO_28500_version1_latestdraft.pdf" + CRLF +
		"isPartOf: " + isPartOf + CRLF +
		"description: "+ warcInfoDescription + CRLF +
		"robots: ignore" + CRLF +
		"http-header-user-agent: "+ navigator.userAgent + CRLF + 
		"http-header-from: warcreate@matkelly.com" + CRLF + CRLF;

	var warcHeader = 
		"WARC/1.0" + CRLF +
		"WARC-Type: warcinfo " +CRLF +
		"WARC-Date: "+ now + CRLF +
		"WARC-Filename: "+ fileName + CRLF + 
		"WARC-Record-ID: " + guidGenerator() + CRLF +
		"Content-Type: application/warc-fields" +CRLF +
		"Content-Length: "+ warcHeaderContent.length + CRLF;
		

		
	var warcRequest = requestHeaders[initURI];
		
	var warcConcurrentTo = guidGenerator();
	
	function makeWarcRequestHeaderWith(targetURI, now, warcConcurrentTo, warcRequest){
		var CRLF = "\r\n";
		var x = 
			"WARC/1.0" + CRLF +
			"WARC-Type: request" + CRLF +
			"WARC-Target-URI: "+ targetURI + CRLF +
			"WARC-Date: " + now + CRLF +
			"WARC-Concurrent-To: " + warcConcurrentTo + CRLF +
			"WARC-Record-ID: " + guidGenerator() + CRLF +
			"Content-Type: application/http; msgtype=request" +CRLF +
			"Content-Length: " + (warcRequest.length + 2) + CRLF + CRLF +
			warcRequest + CRLF + CRLF;
			return x;
	}
	
	
	var warcRequestHeader = makeWarcRequestHeaderWith(initURI, now, warcConcurrentTo, warcRequest);
	

	var outlinks = o_request.outlinks.split("|||");
	var outlinkStr = "";
	for(var outlink in outlinks){
		var href = outlinks[outlink];
		if(href.indexOf("mailto:") > -1){continue;}
		
		if(href.substr(0,1) != "h"){href = initURI + href;} //resolve fragment and internal links
		
		href = href.substr(0,8) + href.substr(8).replace(/\/\//g,"/"); //replace double slashes outside of scheme
		outlinkStr += "outlink: " + href + CRLF;
	}
	
	//includes initial URI var warcMetadata = "outlink: "+ initURI + CRLF + outlinkStr;
	var warcMetadata = outlinkStr;
	
		
	var warcMetadataHeader =
		"WARC/1.0" + CRLF +
		"WARC-Type: metadata" + CRLF +
		"WARC-Target-URI: " + initURI + CRLF +
		"WARC-Date: " + now + CRLF +
		"WARC-Concurrent-To: <urn:uuid:dddc4ba2-c1e1-459b-8d0d-a98a20b87e96>" + CRLF +
		"WARC-Record-ID: <urn:uuid:6fef2a49-a9ba-4b40-9f4a-5ca5db1fd5c6>" + CRLF +
		"Content-Type: application/warc-fields" + CRLF +
		"Content-Length: " + warcMetadata.length + CRLF;	
	
	// targetURI
	//DUCTTAPE
	if(initURI.indexOf("twitter.com") > -1){
		responseHeaders[initURI] = responseHeaders[initURI].replace("text/javascript","text/html");
	}
	//DUCTTAPE to fix bug #53
	responseHeaders[initURI] = responseHeaders[initURI].replace("HTTP/1.1 304 Not Modified","HTTP/1.1 200 OK");
	
	var warcResponse =
		responseHeaders[initURI]+
		CRLF + o_request.docHtml + CRLF;
	
	function makeWarcResponseHeaderWith(targetURI, now, warcConcurrentTo, resp, additionalContentLength){
		var httpHeader = resp.substring(0,resp.indexOf("\r\n\r\n"));

		if(httpHeader == ""){
			httpHeader = resp;
		}

		var countCorrect = httpHeader.match(/\r\n/g).length;//number of lines in xx below
		
		//var contentLength = (encodeURI(resp).split(/%..|./).length - 1);
		var contentLength = lengthInUtf8Bytes(resp);
		if(additionalContentLength){contentLength += additionalContentLength;} //(arraybuffer + string).length don't mix ;)
				
		var xx =
			"WARC/1.0" + CRLF +
			"WARC-Type: response" + CRLF +
			"WARC-Target-URI: " + targetURI + CRLF +
			"WARC-Date: " + now + CRLF +
			"WARC-Record-ID: "+ guidGenerator() + CRLF +
			"Content-Type: application/http; msgtype=response" + CRLF +
			//"Content-Length: " + (unescape(encodeURIComponent(resp)).length + countCorrect) + CRLF;	 //11260 len
			//"Content-Length: " + (resp.length) + CRLF;// + countCorrect) + CRLF;	
			"Content-Length: " + contentLength + CRLF;
			//"Content-Length: " + lengthInUtf8Bytes(resp) + CRLF;
			
		return xx;
	}
	//alert("Warc response length is "+warcResponse.length +" vs. "+lengthInUtf8Bytes(warcResponse));
	var htmlLengthCorrection = warcResponse.length - lengthInUtf8Bytes(warcResponse); //html count shouldn't use the method in makeWarcresponseHeader, pass a negative correction value
	var warcResponseHeader = makeWarcResponseHeaderWith(initURI, now, warcConcurrentTo, warcResponse,htmlLengthCorrection);	

		
	/*var warc =
		warcHeader + CRLF +
		warcHeaderContent + CRLF + CRLF +
		warcRequestHeader + CRLF + 
		warcMetadataHeader + CRLF +
		warcMetadata + CRLF + CRLF  +
		warcResponseHeader + CRLF +
		warcResponse + CRLF + CRLF;*/
	
	
	 //old content? not sure. Keep here until we can verify
	var pattern = /\r\n(.*)\r\n----------------/g;
	var myArray = pattern.exec(o_request.headers);
	var str = "";
	while(myArray != null){
		str += myArray[1];
		myArray = pattern.exec(o_request.headers);

	}
	
	
	//localStorage["paiheaders"] = "";
	
	
	var arrayBuffers = []; //we will load all of the data in-order in the arrayBuffers array then combine with the file blob to writeout
	
	arrayBuffers.push(str2ab(warcHeader + CRLF));
	arrayBuffers.push(str2ab(warcHeaderContent + CRLF + CRLF));
	arrayBuffers.push(str2ab(warcRequestHeader + CRLF));
	arrayBuffers.push(str2ab(warcMetadataHeader + CRLF));
	arrayBuffers.push(str2ab(warcMetadata + CRLF + CRLF));
	arrayBuffers.push(str2ab(warcResponseHeader + CRLF));
	arrayBuffers.push(str2ab(warcResponse + CRLF + CRLF));
	
	//arrayBuffers.push(str2ab(warc));
	
	
	var imgURIs, imgData, cssURIs, cssData, jsURIs, jsData;
	
	if(o_request.imgURIs) imgURIs = o_request.imgURIs.split("|||");
	if(o_request.imgData) imgData = o_request.imgData.split("|||");
	if(o_request.cssURIs) cssURIs = o_request.cssURIs.split("|||");
	if(o_request.cssData) cssData = o_request.cssData.split("|||");
	if(o_request.jsURIs ) jsURIs = o_request.jsURIs.split("|||");
	if(o_request.jsData ) jsData = o_request.jsData.split("|||");
	
	var seedURL = true;
	var responsesToConcatenate = [];
	
	for(var requestHeader in requestHeaders){	
		//DEBUG, skip image WARCs
		//if(responseHeaders[requestHeader] && responseHeaders[requestHeader].indexOf("Content-Type: image/") > -1){continue;}
		if(requestHeader == initURI){continue;} //the 'seed' will not have a body, we handle this above, skip
		
		var requestHeaderString =  makeWarcRequestHeaderWith(requestHeader, now, warcConcurrentTo, requestHeaders[requestHeader]) + CRLF;
		arrayBuffers.push(str2ab(requestHeaderString));

		//console.log("Checking URI "+requestHeader);
		//console.log("rh: "+ responseHeaders[requestHeader]);
		//console.log("rh2: "+ responseHeaders[requestHeader].indexOf("Content-Type: image/"));
		
		
		if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: image/") > -1  &&
		  responseHeaders[requestHeader].indexOf("icon") == -1 )
		  {
			//var imageDataObject = JSON.parse(localStorage["imageData"]);
			responsesToConcatenate[requestHeader] = "pending";
			asynchronouslyFetchImageData(requestHeader);
			
			function asynchronouslyFetchImageData(rh){

				chrome.storage.local.get(rh,function(result){
					var rawImageDataAsBytes = result[rh];
					
					if(rawImageDataAsBytes){//we have the data in chrome.storage.local
					
						var imgRawString = "";
	
						var byteCount = result[rh].length;	
						var imagesAsObjectsFromJSON = rawImageDataAsBytes; //redundant of above but testing
			
						var hexValueArrayBuffer = new ArrayBuffer(byteCount);
						var hexValueInt8Ary = new Int8Array(hexValueArrayBuffer);
						var ixx=0;
						var sstr = "";
						for(var index=0; index<byteCount; index++){			
							hexValueInt8Ary.set([result[rh][index]],ixx);
							ixx++;	
						};
		
			
						var responseHeaderString = makeWarcResponseHeaderWith(rh, now, warcConcurrentTo, responseHeaders[rh] + CRLF,hexValueInt8Ary.length + (CRLF + CRLF).length) + CRLF;

			
						arrayBuffers.push(str2ab(responseHeaderString));
						arrayBuffers.push(str2ab(responseHeaders[rh] + CRLF));
						arrayBuffers.push(hexValueInt8Ary.buffer); //Now, add the image data
						arrayBuffers.push(str2ab(CRLF + CRLF + CRLF + CRLF));
				
						delete responsesToConcatenate[rh];
					}else {
						//if we don't have the image data in localstorage, remove it anyway
						console.error("We don't have "+rh+"'s data in cache.");
						delete responsesToConcatenate[rh];
					}
					
					if(Object.keys(responsesToConcatenate).length == 0){
						saveAs(new Blob(arrayBuffers), fileName,);
					}else {
						//console.log(("Still have to process URIs:"+Object.keys(responsesToConcatenate).join(" "));
					}
					
				});
			}
				/*
				//TODO: extract content type to send to Ajax request
				//TODO: This code should be saved for images that have appeared in the DOM since it loaded (thus their data isn't present and must be fetched).
				var acquiredData = "Never replaced";
				$.ajax({
					url: requestHeader,
					async: false,
					beforeSend: function(xhr) {
						  xhr.overrideMimeType( "image/png" )
					}
				}).done(function(data,t,x){
					console.log(" > Re-requested resource, appending to WARC string");
					console.log("X:");
					console.log(x);
					console.log("data:");
					console.log(data);
					httpResponseLine = "HTTP/1.1 " + x.status + " " + x.statusText + CRLF;
					acquiredData = httpResponseLine + x.getAllResponseHeaders() + CRLF +  x.responseText;
					//TODO: payload for image-based WARC response records is already calculated and wrong (nextline), bug #44(?)
					console.log("HEADERS!");
					console.log(responseHeaders[requestHeader]);
					warcAsURIString += makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, acquiredData) + CRLF;
				
					warcAsURIString += acquiredData + CRLF + CRLF;
				}).error(function(data){
					acquiredData = "Missing binary data. :(";
				});*/
			
		}else if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: text/css") > -1)
		{
			responsesToConcatenate[requestHeader] = "pending";
			console.log(requestHeader+" is a CSS file");
			var respHeader = responseHeaders[requestHeader] + CRLF + CRLF;
			var respContent = "";

			for(var cc=0; cc<cssURIs.length; cc++){
				if(requestHeader == cssURIs[cc]){
					respContent += cssData[cssURIs.indexOf(requestHeader)] + CRLF + CRLF;
					break;
				}
			}

			var cssResponseHeaderString = makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, respHeader+respContent) + CRLF;
			arrayBuffers.push(str2ab(cssResponseHeaderString));
			
			arrayBuffers.push(str2ab(respHeader+respContent+CRLF+CRLF));
			delete responsesToConcatenate[requestHeader];
			
		}/*else if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: application/javascript") > -1)
		{
			console.log(requestHeader+" is a JS file");
			var respHeader = responseHeaders[requestHeader] + CRLF + CRLF;
			var respContent = "";

			for(var jc=0; jc<jsURIs.length; jc++){
				if(requestHeader == jsURIs[jc]){
					respContent += jsData[jsURIs.indexOf(requestHeader)] + CRLF + CRLF;
					break;
				}
			}

			var jsResponseHeaderString = makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, respHeader+respContent) + CRLF;
			arrayBuffers.push(str2ab(jsResponseHeaderString));
			
			arrayBuffers.push(str2ab(respHeader+respContent+CRLF+CRLF));
			
		}*/
		else {
			/*console.log(" (X) "+requestHeader+" is not an image or CSS file.");
			if(responseHeaders[requestHeader] && responseHeaders[requestHeader].indexOf("text/html") > -1){
				warcAsURIString += makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, responseHeaders[requestHeader]) + CRLF;
				warcAsURIString += responseHeaders[requestHeader] + CRLF + CRLF;
			}*/
			//console.log("response:");
			//console.log(responseHeaders[requestHeader]);
			//console.log("request");
			//console.log(requestHeaders[requestHeader]);
		}
	}


	/*
	//join ALL the arraybuffers, the method is dumb but we must do it this way
	var numberOfBuffers = arrayBuffers.length;
	console.log("LL"+arrayBuffers);
	console.log("PQ:"+arrayBuffers[0]);
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
	console.log("P: "+numberOfBuffers.length);
	for(var bufI=0; bufI<numberOfBuffers.length; bufI++){
		aggregateBuffer.set(arrayBuffers[bufI],pivotLength);
		console.log("AgBuf after iteration "+bufI+": "+aggregateBuffer);
		console.log(aggregateBuffer);
		pivotLength += arrayBuffers[bufI].length;
	}
	
	
	var data = {
		data: Array.apply(null, new Uint8Array(aggregateBuffer))
	};
	var jsonedData = JSON.stringify(data);*/
	

	//requestHeaders = null; requestHeaders = new Array();
	//responseHeaders = null; responseHeaders = new Array();
	//
	if(Object.keys(responsesToConcatenate).length == 0){
		saveAs(new Blob(arrayBuffers), fileName);
	}else {
		console.log("Still have to process URIs:"+Object.keys(responsesToConcatenate).join(" "));
	}
	//f_callback({x: jsonedData});
}

/* ************************************************************
 
 UTILITY FUNCTIONS
 
************************************************************ */

//from https://developer.mozilla.org/en-US/docs/Web/API/window.btoa
function utf8_to_b64( str ) {
    return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
    return decodeURIComponent(escape(window.atob( str )));
}


function getVersion(callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', '../manifest.json');
        xmlhttp.onload = function (e) {
            var manifest = JSON.parse(xmlhttp.responseText);
            callback(manifest.version);
        }
        xmlhttp.send(null);
}
var version;
getVersion(function (ver) { version = ver; });


/* ************************************************************
 
 INITIAL RUNTIME EXECUTION
 
************************************************************ */

chrome.extension.onRequest.addListener(generateWarc);