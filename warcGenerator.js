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
	
	var uriAry =   o_request.uris.split('|||');

	var datumAry = o_request.datum.split('|||');
	var imageData = o_request.imgData.split('|||');


	//TODO: get rid of this hard-code, set for testing
	console.log("Hard-coded data");
	console.log("datum len: "+datumAry.length);
	
	// *** Remake associative array
	var headerInfo = new Array();
	console.log("starting generateWARC for loop");
	for(var i=0; i<datumAry.length; i++){
		if(uriAry[i] == undefined || uriAry[i] == "" || uriAry[i].indexOf("google.com") > 0){	//remove any blank entries that tagged along
			//alert(i+" "+uriAry[i]);
			uriAry.splice(i,1);
			datumAry.splice(i,1);	
			continue;
			//break;
		}
		
		//* Here we have to fabricate the GET and HOST HTTP header fields because the webRequest API does not capture these
		//* See: http://code.google.com/chrome/extensions/trunk/webRequest.html#type-HttpHeaders
		var uriComponents = uriAry[i].split("/");	//0=protocol, 1 = blank, 2 = host, 3... = path
		var host = uriComponents[2];
		var path = uriAry[i].substr(uriAry[i].indexOf(uriAry[i].split("/")[3]));
		datumAry[i] = "GET  /"+path+CRLF+"Host: "+host+CRLF+"Connection: close"+CRLF;//+datumAry[i];
		headerInfo[uriAry[i]] = datumAry[i];
	}
	console.log("done with generateWARC for loop");

	var respHeaders = [];
	for(i=0; i<uriAry.length; i++){
		//alert("header "+i+"/"+uriAry.length);
		//console.log("Getting response header for URI "+(i+1)+"/"+uriAry.length+" : "+uriAry[i]);
		getResponseHeaderFor(uriAry[i]);
		//console.log("Getting response header for URI "+(i+1)+"/"+uriAry.length+" : "+uriAry[i]);
	}
	console.log("done with 2nd for loop, warcGenerator ~132");
	
	// * Clean up local storage
	localStorage["paiheaders_requesturis"] = "";
	localStorage["paiheaders_requestdata"] = "";
	localStorage["paiheaders_responseuris"] = "";
	localStorage["paiheaders_responsedata"] = "";
	//o_request.headers
		
	//from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	function guidGenerator() {
		var S4 = function() {
		   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		};
		//return "&lt;urn:uuid:"+(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())+"&gt;";
		return "<urn:uuid:"+(S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())+">";
	}

	
	var now = new Date().toISOString();
	var nowHttp = new Date().toString("ddd dd MMM yyyy HH:mm:ss")+" GMT";
	//var fileName = "MY_FABRICATED_WARC.warc";
	var fileName = o_request.file;
	//var targetURI = "http://cs.odu.edu/~mkelly/semester/2011_fall/index_encrypted.html";
	var initURI = o_request.url;
	
	
	
	var warcHeaderContent = 
		"software: WARCreate/"+version+" http://warcreate.com" +CRLF + 
		//"ip: 207.241.235.32" + CRLF + 
		//"hostname: crawling113.us.archive.org" + CRLF +
		"format: WARC File Format 1.0" + CRLF +
		"conformsTo: http://bibnum.bnf.fr/WARC/WARC_ISO_28500_version1_latestdraft.pdf" + CRLF +
		"description: recurrence=ANNUAL, maxDuration=432000, maxDocumentCount=1000000, isTestCrawl=false, seedCount=61, accountId=89" + CRLF +
		"robots: classic" + CRLF +
		//"http-header-user-agent: Mozilla/5.0 (compatible;archive.org_bot; Archive-It; +http://archive-it.org/files/site-owners.html) Firefox/0.0" + CRLF +
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
		
	
	function makeRequestHeaderWith(targetURI){
		var CRLF = "\r\n";
		var uriComponents = targetURI.split("/");	//0=protocol, 1 = blank, 2 = host, 3... = path
		var host = uriComponents[2];
		var path = targetURI.substr(targetURI.indexOf(targetURI.split("/")[3]));
		
		var x = 
			"GET /"+path+" HTTP/1.1" + CRLF +
			"Host: " + host + CRLF +
			"Connection: close" + CRLF +
			"User-Agent: " + navigator.userAgent + CRLF +
			"Accept-Encoding: gzip" + CRLF +
			"Accept-Charset: ISO-8859-1,UTF-8;q=0.7,*;q=0.7" + CRLF +
			"Cache-Control: no-cache" + CRLF +
			"Accept-Language: de,en;q=0.7,en-us;q=0.3";
		return x;
	}
		
	var warcRequest = makeRequestHeaderWith(initURI);
		
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
		"HTTP/1.1 200 OK" + CRLF +
		"Content-Type: text/html" + CRLF +
		"Date: " + nowHttp + CRLF +
		"Last-Modified: " + nowHttp + CRLF +
		"Server: Apache/2.2.17 (Unix) PHP/5.3.5 mod_ssl/2.2.17 OpenSSL/0.9.8q" + CRLF +
		"Accept-Ranges: bytes" + CRLF +
		"Content-Type: text/html" + CRLF +
		CRLF + o_request.docHtml + CRLF;

	
	function makeWarcResponseHeaderWith(targetURI, now, warcConcurrentTo, resp){
		var xx =
			"WARC/1.0" + CRLF +
			"WARC-Type: response" + CRLF +
			"WARC-Target-URI: " + targetURI + CRLF +
			"WARC-Date: " + now + CRLF +
			"WARC-Record-ID: "+ guidGenerator() + CRLF +
			"Content-Type: application/http; msgtype=response" + CRLF +
			//"Foo: "+unescape(encodeURIComponent(resp)).length + CRLF +
			//"FooBar: "+(unescape(encodeURIComponent(resp)).length - 140)+ CRLF +
			"Content-Length: " + (unescape(encodeURIComponent(resp)).length) + CRLF;	
		return xx;
	}
	
//for some reason, the length of the response is not counted correctly here but is in future calls to this function.
// the length always seems to be +10 over the actual. Decrement here by 10 until this can be figured out.	
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
	
	//uriAry = [];
	//***^************************** HARD RESET OF IMAGE ARY FOR TESTING ************************
	for(i=1; i<uriAry.length; i++){
		if(uriAry[i].indexOf(".js") != -1){	//isA JS
			continue;}
		
	
		console.log("URI trying to be accessed: "+uriAry[i]);
		var warcResponseNew = "";
		try{ 
			var contentTypeStr = "Content-Type: ";

			if(uriAry[i].indexOf(".jpg") != -1){contentTypeStr += "image/jpg";}
			else if(uriAry[i].indexOf(".jpeg") != -1){contentTypeStr += "image/jpeg";}
			else if(uriAry[i].indexOf(".png") != -1){contentTypeStr += "image/png";}
			else if(uriAry[i].indexOf(".gif") != -1){contentTypeStr += "image/gif";}
			else {contentTypeStr += "data/unknown";}
			//warcResponseNew = "HTTP/1.1 200 OK" + CRLF + contentTypeStr + CRLF + CRLF + window.atob(imageData[i-1].replace(/data\:image\/(png|jpg|jpeg);base64,/g, ""));
			warcResponseNew = "HTTP/1.1 200 OK" + CRLF + contentTypeStr + CRLF + CRLF + imageData[i-1];
			console.log("Success with image "+i+": "+imageData[i-1].substr(0,20));
		}catch(err) {
			//console.log("Error: "+o_request.imgData[i-1]);
			//console.log("o_request.imgData: "+o_request.imgData);
			//console.log(err);
			alert("an error occured with image "+i+""+err);
			console.log("An error occured with image "+i);
			continue;	//failed, maybe it was something other than an image (JS, possibly?)
		}
		
		
		var smallHeader = datumAry[i].split("\r\n\r\n");
		warcAsURIString += makeWarcRequestHeaderWith(uriAry[i], now, warcConcurrentTo, smallHeader[0]) + CRLF + CRLF;
		
		warcAsURIString += smallHeader[0] +CRLF + CRLF;
		if(imageData.length == 0){	//we have no image data for some reason
			//console.log("imgData len: "+o_request.imgData.length+"  currently trying to pull index: "+(i-1)+" uri: "+uriAry[i]);
			console.log("Image data is 0. :(");
			continue;
		}else {console.log("image data len = "+imageData.length);}
		
		
		warcAsURIString += makeWarcResponseHeaderWith(uriAry[i], now, warcConcurrentTo, warcResponseNew) + CRLF;
		warcAsURIString += warcResponseNew + CRLF + CRLF;
		
		
		//warcAsURIString += uriAry[i]+CRLF;//warcAsURIString += uriAry;
		//warcAsURIString += datumAry[i]+CRLF;//warcAsURIString += datumAry;
	}
	
	//Hey, I know! Let's try to fetch the CSS ex post facto. Now that seems like a good idea. 
		
	/* ***************** CSS code at bottom of WARC */
	
	var cssFiles = o_request.cssURIs.split("|||");
	var cssData = o_request.cssData.split("|||");
	console.log("Processing CSS");
	for(var cssI=0; cssI<cssFiles.length; cssI++){
		if(!cssData[cssI]){console.log("Ignoring css "+cssI);continue;}
		console.log("Processing css "+cssI);
		var warcRequest = makeRequestHeaderWith(cssFiles[cssI]);
		warcAsURIString += makeWarcRequestHeaderWith(cssFiles[cssI], now, warcConcurrentTo, warcRequest) + CRLF;
		
		warcAsURIString += warcRequest +CRLF + CRLF;		
		
		var warcResponse =
			"HTTP/1.1 200 OK" + CRLF +
			"Content-Type: text/css" + CRLF +
			"Date: " + nowHttp + CRLF +
			"Last-Modified: " + nowHttp + CRLF +
			"Server: Apache/2.2.17 (Unix) PHP/5.3.5 mod_ssl/2.2.17 OpenSSL/0.9.8q" + CRLF +
			"Accept-Ranges: bytes" + CRLF +
			"Content-Type: text/css" + CRLF +
			CRLF + cssData[cssI] + CRLF;
		//warcResponse += cssData[cssI];
		warcAsURIString += makeWarcResponseHeaderWith(cssFiles[cssI], now, warcConcurrentTo, warcResponse) + CRLF;
		
		warcAsURIString += warcResponse + CRLF + CRLF;
	}
	console.log("Done processing CSS");
	
	
	
	/*
	warcAsURIString = warcAsURIString.replace(/\r\n/g,"%0D%0A");
	warcAsURIString = warcAsURIString.replace(/\r/g,"%0D");
	warcAsURIString = warcAsURIString.replace(/\n/g,"%0A");
	warcAsURIString = warcAsURIString.replace(/&lt;/g,"%3C");
	warcAsURIString = warcAsURIString.replace(/&gt;/g,"%3E");
	warcAsURIString = warcAsURIString.replace(/\s/g,"%20");
	warcAsURIString = warcAsURIString.replace(/=/g,"%3D");
	warcAsURIString = warcAsURIString.replace(/\//g,"%2F");*/

	console.log(warcAsURIString);
	f_callback({d: warcAsURIString, cssFiles: o_request.cssURIs});
}


function getVersion(callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', 'manifest.json');
        xmlhttp.onload = function (e) {
            var manifest = JSON.parse(xmlhttp.responseText);
            callback(manifest.version);
        }
        xmlhttp.send(null);
}
var version;
getVersion(function (ver) { version = ver; });

chrome.extension.onRequest.addListener(generateWarc);