//depends on date.js

function generateWarc(o_request, o_sender, f_callback){
	if(o_request.method != "generateWarc"){return; }
	console.log("Running generateWarc code");
	
	var CRLF = "\r\n";
	
		
	//from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	function guidGenerator() {
		var S4 = function() {
		   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		return "<urn:uuid:"+(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())+">";
	}

	
	var now = new Date().toISOString();
	var nowHttp = new Date().toString("ddd dd MMM yyyy HH:mm:ss")+" GMT";
	var fileName = o_request.file;
	var initURI = o_request.url;
	
	
	
	var warcHeaderContent = 
		"software: WARCreate/"+version+" http://warcreate.com" +CRLF + 
		"format: WARC File Format 1.0" + CRLF +
		"conformsTo: http://bibnum.bnf.fr/WARC/WARC_ISO_28500_version1_latestdraft.pdf" + CRLF +
		"isPartOf: basic" + CRLF +
		"description: Crawl initiated from the WARCreate Google Chrome extension"+ CRLF +
		"robots: ignore" + CRLF +
		"http-header-user-agent: "+ navigator.userAgent + CRLF + 
		"http-header-from: warcreate@matkelly.com" + CRLF;

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
			"WARC/1.0 " + CRLF +
			"WARC-Type: request" + CRLF +
			"WARC-Target-URI: "+ targetURI + CRLF +
			"WARC-Date: " + now + CRLF +
			"WARC-Concurrent-To: " + warcConcurrentTo + CRLF +
			"WARC-Record-ID: " + guidGenerator() + CRLF +
			"Content-Type: application/http; msgtype=request" +CRLF +
			"Content-Length: " + (warcRequest.length + 2) + CRLF + CRLF +
			warcRequest;
			return x;
	}
	
	
	var warcRequestHeader = makeWarcRequestHeaderWith(initURI, now, warcConcurrentTo, warcRequest);
	
	var warcMetadata =
		"outlink: "+ initURI + CRLF;

		
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
	
	var warcResponse =
		responseHeaders[initURI]+
		CRLF + o_request.docHtml + CRLF;

	
	function makeWarcResponseHeaderWith(targetURI, now, warcConcurrentTo, resp){
		var xx =
			"WARC/1.0" + CRLF +
			"WARC-Type: response" + CRLF +
			"WARC-Target-URI: " + targetURI + CRLF +
			"WARC-Date: " + now + CRLF +
			"WARC-Record-ID: "+ guidGenerator() + CRLF +
			"Content-Type: application/http; msgtype=response" + CRLF +
			"Content-Length: " + (unescape(encodeURIComponent(resp)).length) + CRLF;	
		return xx;
	}

	var warcResponseHeader = makeWarcResponseHeaderWith(initURI, now, warcConcurrentTo, warcResponse);	
		
	var warc =
		warcHeader + CRLF +
		warcHeaderContent + CRLF + CRLF + CRLF +
		warcRequestHeader + CRLF + 
		warcMetadataHeader + CRLF +
		warcMetadata + CRLF + CRLF  +
		warcResponseHeader + CRLF +
		warcResponse + CRLF + CRLF;

	var pattern = /\r\n(.*)\r\n----------------/g;
	var myArray = pattern.exec(o_request.headers);
	var str = "";
	while(myArray != null){
		str += myArray[1];
		myArray = pattern.exec(o_request.headers);

	}
	
	
	localStorage["paiheaders"] = "";
	
	
	var warcAsURIString = warc;
	
	var imgURIs = o_request.imgURIs.split("|||");
	var imgData = o_request.imgData.split("|||");
	var cssURIs = o_request.cssURIs.split("|||");
	var cssData = o_request.cssData.split("|||");
	console.log(imgURIs);
	console.log(imgData);

	console.log("localstorage");
	console.log(localStorage['imagesInDOM']);
	var seedURL = true;
	for(var requestHeader in requestHeaders){
		if(seedURL){seedURL = false; continue;} //ignore the first headers, as they've already been included. The 'more better' way to do it would be to have the seed content added here instead of heard coded above.
		
		warcAsURIString += makeWarcRequestHeaderWith(requestHeader, now, warcConcurrentTo, requestHeaders[requestHeader]) + CRLF + CRLF;
		//console.log(responseHeaders[requestHeader]);
		warcAsURIString += makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, responseHeaders[requestHeader]) + CRLF;
		console.log("Checking URI "+requestHeader);
		
		if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: image/") > -1 && //isA image
		  imgData[imgURIs.indexOf(requestHeader)] != null
		){
			console.log(" (o) Binary data for "+requestHeader+" found and will be included in the WARC");
			warcAsURIString += window.atob(imgData[imgURIs.indexOf(requestHeader)]) + CRLF + CRLF;
		}else if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: image/") > -1 ){
			console.log(" (X) Binary data for "+requestHeader+" not found. :(");
			warcAsURIString += "Missing binary data. :(" + CRLF + CRLF;
		}else if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: text/css") > -1)
		{
			//console.log(responseHeaders[requestHeader]);
			//console.log(" (X) "+requestHeader+" is not an image.");
			for(var cc=0; cc<cssURIs.length; cc++){
				if(requestHeader == cssURIs[cc]){
					warcAsURIString += cssData[cssURIs.indexOf(requestHeader)] + CRLF + CRLF
					break;
				}
			}
		}else {
			//console.log(" (X) "+requestHeader+" is not an image or CSS file.");
		}
	}

	//requestHeaders = null; requestHeaders = new Array();
	//responseHeaders = null; responseHeaders = new Array();
	f_callback({d: warcAsURIString});
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

chrome.extension.onRequest.addListener(generateWarc);