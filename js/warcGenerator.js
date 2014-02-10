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
	
	var warcResponse =
		responseHeaders[initURI]+
		CRLF + o_request.docHtml + CRLF;

	
	function makeWarcResponseHeaderWith(targetURI, now, warcConcurrentTo, resp){
		var httpHeader = resp.substring(0,resp.indexOf("\r\n\r\n"));
		
		if(httpHeader == ""){
			httpHeader = resp;
		}

		var countCorrect = httpHeader.match(/\r\n/g).length;//number of lines in xx below

		
		var xx =
			"WARC/1.0" + CRLF +
			"WARC-Type: response" + CRLF +
			"WARC-Target-URI: " + targetURI + CRLF +
			"WARC-Date: " + now + CRLF +
			"WARC-Record-ID: "+ guidGenerator() + CRLF +
			"Content-Type: application/http; msgtype=response" + CRLF +
			//"Content-Length: " + (unescape(encodeURIComponent(resp)).length + countCorrect) + CRLF;	 //11260 len
			"Content-Length: " + (resp.length) + CRLF;// + countCorrect) + CRLF;	
		return xx;
	}

	var warcResponseHeader = makeWarcResponseHeaderWith(initURI, now, warcConcurrentTo, warcResponse);	
		
	var warc =
		warcHeader + CRLF +
		warcHeaderContent + CRLF + CRLF +
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

	var seedURL = true;
	for(var requestHeader in requestHeaders){
		console.log("Response header for "+requestHeader+":");
		console.log(responseHeaders[requestHeader]);
		
		//DEBUG, skip image WARCs
		if(responseHeaders[requestHeader].indexOf("Content-Type: image/") > -1){continue;}
		
		warcAsURIString += makeWarcRequestHeaderWith(requestHeader, now, warcConcurrentTo, requestHeaders[requestHeader]) + CRLF;
			
		console.log("Checking URI "+requestHeader);
		
		if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: image/") > -1 && //isA image
		  imgData[imgURIs.indexOf(requestHeader)] != null
		){
			console.log(" (o) Binary data for "+requestHeader+" found and will be included in the WARC");
			warcAsURIString += responseHeaders[requestHeader] +"|"+b64_to_utf8(imgData[imgURIs.indexOf(requestHeader)]).length+"|"+CRLF;
			warcAsURIString += //window.atob(imgData[imgURIs.indexOf(requestHeader)]) + CRLF + CRLF;
				//imgData[imgURIs.indexOf(requestHeader)] + CRLF + CRLF;
				b64_to_utf8(imgData[imgURIs.indexOf(requestHeader)]) + CRLF + CRLF;
		}else if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: image/") > -1 ){
			console.log(" (X) Binary data for "+requestHeader+" not found. :(");
			var acquiredData = "Never replaced";
			$.ajax({
				url: requestHeader,
				async: false
			}).done(function(data,t,x){
				console.log(" > Re-requested resource, appending to WARC string");
				httpResponseLine = "HTTP/1.1 " + x.status + " " + x.statusText + CRLF;
				acquiredData = httpResponseLine + x.getAllResponseHeaders() + CRLF +  x.responseText;
				warcAsURIString += makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, responseHeaders[requestHeader]+acquiredData) + CRLF;
				
				warcAsURIString += acquiredData + CRLF + CRLF;
			}).error(function(data){
				acquiredData = "Missing binary data. :(";
			});
			
		}else if(
		  responseHeaders[requestHeader] &&
		  responseHeaders[requestHeader].indexOf("Content-Type: text/css") > -1)
		{
			//console.log(responseHeaders[requestHeader]);
			
			var respHeader = responseHeaders[requestHeader] + CRLF + CRLF;
			var respContent = "";
			//warcAsURIString += responseHeaders[requestHeader] + CRLF + CRLF;
			console.log(" (X) "+requestHeader+" is not an image.");
			for(var cc=0; cc<cssURIs.length; cc++){
				if(requestHeader == cssURIs[cc]){
					respContent += cssData[cssURIs.indexOf(requestHeader)] + CRLF + CRLF;
					break;
				}
			}
			warcAsURIString += makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, respHeader+respContent) + CRLF;
			warcAsURIString += respHeader+respContent+CRLF+CRLF;
			
		}else {
			console.log(" (X) "+requestHeader+" is not an image or CSS file.");
			if(responseHeaders[requestHeader] && responseHeaders[requestHeader].indexOf("text/html") > -1){
				warcAsURIString += makeWarcResponseHeaderWith(requestHeader, now, warcConcurrentTo, responseHeaders[requestHeader]) + CRLF;
				warcAsURIString += responseHeaders[requestHeader] + CRLF + CRLF;
			}
			console.log("response:");
			console.log(responseHeaders[requestHeader]);
			console.log("request");
			console.log(requestHeaders[requestHeader]);
		}
	}

	//requestHeaders = null; requestHeaders = new Array();
	//responseHeaders = null; responseHeaders = new Array();
	f_callback({d: warcAsURIString});
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