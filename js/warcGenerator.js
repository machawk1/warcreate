//depends on date.js

function getResponseHeaderFor(uri){
	var xhr2 = new XMLHttpRequest();
	//console.log(xhr2);
	xhr2.open("GET", uri, true);
	xhr2.send();
	console.log("Trying to perform an AJAX request on "+uri);

	console.log("first cond passed");
	console.log(xhr2);
	//console.log(xhr2.status + "");
	console.log("second cond passed");
	xhr2.addEventListener("load", function(e) {
		var headers = xhr2.getAllResponseHeaders().split("\n");
		var statusMeans = "";
		//console.log("Getting response header for "+uri+":");
		if(xhr2.status == 200){statusMeans = "OK";}
		var respHeaderStr = "HTTP/1.1 "+xhr2.status+" "+statusMeans + "\n";
		for(h in headers){
			//console.log(" - "+headers[h]);
			respHeaderStr += headers[h]+"\n";
		}
		//console.log("5");
		return respHeaderStr;
	}, false);
	return;
	
	
	if(xhr2.status == "200"){
		var headers = xhr2.getAllResponseHeaders().split("\n");
		var statusMeans = "";
		console.log("getResponseHeaderFor 3.5");
		if(xhr2.status == 200){statusMeans = "OK";}
		var respHeaderStr = "HTTP/1.1 "+xhr2.status+" "+statusMeans + "\n";
		console.log("getResponseHeaderFor 4");
		for(h in headers){
			respHeaderStr += headers[h]+"\n";
		}
		console.log("5");
		return respHeaderStr;
	}else {
		console.log("request.status is "+request.status);
	}
	console.log("after conditional");
	
	return;
		
		//******************* obsolete code below *******************
	/*	xhr.onreadystatechange = function() {
			console.log("The XHR's ready state has changed to:"+xhr.status);
			//if(xhr.readyState == 0){return "";}
			
			if (xhr.readyState == 4 && xhr.status == 200) {
				//alert(xhr.status);
				switch (xhr.status) {
					//case 0:
					//	console.log("case 0");
					//	return "";
					//		break;
					case 200:
						console.log("case 200");
						var headers = xhr.getAllResponseHeaders().split("\n");
						var statusMeans = "";
						console.log("getResponseHeaderFor 3.5");
						if(xhr.status == 200){statusMeans = "OK";}
						var respHeaderStr = "HTTP/1.1 "+xhr.status+" "+statusMeans + "\n";
						console.log("getResponseHeaderFor 4");
						for(h in headers){
							respHeaderStr += headers[h]+"\n";
						}
						console.log("5");
						return respHeaderStr;
						break;
					
					
				}
			}else {
				console.log("XHR's readyState is "+xhr.readyState);
			}	
	}
	xhr.send();*/
}


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
		"description: recurrence=ANNUAL, maxDuration=432000, maxDocumentCount=1000000, isTestCrawl=false, seedCount=61, accountId=89" + CRLF +
		"robots: classic" + CRLF +
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
			"Content-Length: " + (warcRequest.length + 2) + CRLF + CRLF;
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
		warcHeaderContent + CRLF + CRLF +
		warcRequestHeader + CRLF + 
		warcRequest + CRLF + CRLF  +
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
	
	/*for(var responseHeader in responseHeaders){
		warcAsURIString += makeWarcRequestHeaderWith(responseHeaders[responseHeaders], now, warcConcurrentTo, smallHeader[0]) + CRLF + CRLF;

		warcAsURIString += makeWarcResponseHeaderWith(uriAry[i], now, warcConcurrentTo, warcResponseNew) + CRLF;
		warcAsURIString += warcResponseNew + CRLF + CRLF;
	}*/
	

	console.log(warcAsURIString);
	f_callback({d: warcAsURIString, cssFiles: o_request.cssURIs});
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