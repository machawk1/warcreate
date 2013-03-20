
//var server = "http://localhost:8080";
var server = "http://warcreate.com";

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  //if (tab.url.indexOf('g') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
  //}
};

function alertContent(){
	chrome.tabs.executeScript(null, {file:"js/jquery-1.7.min.js"}, function() {
		chrome.tabs.executeScript(null, {file:"js/jquery.rc4.js"}, function() {
			chrome.tabs.executeScript(null, { file: "alertContent.js" }, function(){
			
			});
		});
	});
	//add listener here
}

function encodeImages(){
	alert('encoding images');
	var images = document.getElementsByTagName('img');
	var img = new Image();
	img.src = request.url;
	var canvas = document.createElement("canvas"); 
	canvas.width = img.width; 
	canvas.height = img.height;
	var context = canvas.getContext("2d");

	//context.drawImage(img,0,0);
	console.log(i+": "+images[i].src+"  file type: "+fileType);
	var fileType = images[i].src.substr(images[i].src.length - 4).toLowerCase();
	if(fileType == ".jpg" || fileType == "jpeg"){fileType = "image/jpeg";}
	else if(fileType == ".png"){fileType = "image/png";}
	else if(fileType == ".gif"){fileType = "image/gif";}
	else {
		var uTransformed = images[i].src.substring(0,images[i].src.indexOf(".jpg"))+".jpg";
		alert("error at image "+i+" " + uTransformed); return; console.log(uTransformed);return;}
	console.log(i+": "+images[i].src+"  file type: "+fileType);

	try {
		var base64  = canvas.toDataURL(fileType);
	//	alert(base64);
		img.src = base64;
		//alert(base64);
		//img.src = base64;//"https://www.google.com/intl/en_com/images/srpr/logo3w.png";
		
		//chrome.extension.sendRequest({url: img.src});
		//chrome.extension.getBackgroundPage().adjustImage(img.src);
	}
	catch(e){
		alert('Encoding of inline binary content failed!')
		console.log(e);
		return;
	}
	$(images[i]).replaceWith(img);
}

function encrypt(){
	var key = document.getElementById('key').value;
	if(key == ""){alert("First enter a key for encryption."); return;}
	chrome.tabs.executeScript(null, {file:"js/jquery-1.7.min.js"}, function() {
		chrome.tabs.executeScript(null, {file:"js/jquery.rc4.js"}, function() {
			chrome.tabs.executeScript(null, {code: "var params = {k:'"+key+"'};"}, function(){
				chrome.tabs.executeScript(null, { file: "encryptPage.js" }, function(){
			
				});
			});
		});
	}); 
}


function sequential_generate_Warc(){
	
	var urls = [];
	$(localStorage['spec']).find("url").each(function(index){
		urls.push($(this).text());
	});
	console.log("URLSXX");
	console.log(urls);
	var uu = 0;
	function generateWarcFromNextURL(nextUrl){
		chrome.tabs.create({url: nextUrl, active: true},
			function(tab){
				chrome.tabs.onUpdated.addListener(function(tabId,info){
					if(info.status == "complete"){
						generate_Warc();
						//chrome.tabs.remove(tab.tabId);
						alert("done with "+(uu+1)+"/"+urls.length);
						if(++uu >= urls.length){return;}
						generateWarcFromNextURL(urls[uu]);
					}
				});
			}
		);
	}
		
	generateWarcFromNextURL(urls[uu]);
}

function generate_Warc(){
	console.log("generate_warc start");
	
	function f_callback(response) 
	{
		// *** This method is likely obsolete, as the callback is now done inline
		//alert(response);
		//var a = document.createElement('p'); p.appendChild(document.createTextNode(response));
		//document.body.append(a);
//		chrome.tabs.create({url: response});
		//alert("val: "+response);
	}
	var imageData = [];
	var imageURIs = [];
	console.log("generate_warc");
	chrome.tabs.executeScript(null, {file:"js/jquery-1.7.min.js"}, function() {	/* Dependency for hash library and general goodness*/
		console.log("jquery loaded");
		chrome.tabs.executeScript(null, {file:"js/jquery.rc4.js"}, function() {	/* Hash library */
			console.log("jquery rc4 loaded");
			chrome.tabs.executeScript(null, {file:"date.js"}, function() {		/* Good date formatting library */
				console.log("date.js loaded");
				var uris = [];
				var datum = [];
				
				chrome.tabs.getSelected(null, function(tab) {	
					chrome.pageAction.setIcon({path:"icon-running.png",tabId:tab.id});
					var port = chrome.tabs.connect(tab.id,{name: "pai"});	//create a persistent connection
					//port.postMessage({url: tab.url, method: 'getEncodedImageData'});
					port.postMessage({url: tab.url, method: 'getHTML'});	//fetch the html of the page, in content.js
					
					var imageDataFilledTo = -1;
					
					/*port.onMessage.addListener(function(msg) {
						if(msg.method == "relayToImages"){
							port.postMessage({url: tab.url, html: msg.html, method: 'getEncodedImageData'});
						}
					});*/
					
					port.onMessage.addListener(function(msg){
						console.log("> 2");
						if(msg.method != "error"){return;}
						chrome.pageAction.setIcon({path:"icon-alert.png",tabId:tab.id});
						console.log("Method in code.js: "+msg.method);
						$("#errorText").text("XAMPP not installed!");
						$("#errorText").attr("href","http://matkelly.com/warcreate/xampp");
						$("#errorText").css("display","block");

					});
					
					port.onMessage.addListener(function(msg) {
						if(msg.method != "changeStatus"){return;}
						$("#status").css("display","block");
						$("#status").attr("value",msg.str+" imgs processed");
							
					});
					
					//perform the first listener, populate the binary image data
					port.onMessage.addListener(function(msg) {	//get image base64 data
						console.log("> 1");
						if(msg.method != "relayToImages"){return;}
						console.log("code.js: received relayToImages post");
						var cssDataIn = "";
						var cssFiles = msg.cssURIs;				// a single CSS file

						if(cssFiles.indexOf("|||") != -1){
							var css = msg.cssURIs.split("|||");	//multiple CSS files represented as a ||| flattened delimited array
										 
							for(var cssFile=0; cssFile<css.length; cssFile++){
								var reqX=new XMLHttpRequest(); 
								try{	
									reqX.open("GET", server+"/getThatText.php?url="+css[cssFile], false);									
									reqX.send(null);  
									cssDataIn += "|||"+ reqX.responseText;									
								}catch (e){
									console.log("Problem with CSS file fetch "+cssFile);
									//alert("There was an error trying to fetch the CSS file ");
								}
								
							}
						}//else {alert("fi");}
					
						console.log("About to generateWARC(). Next should be callback.");
						var fileName = (new Date().toISOString()).replace(/:|\-|\T|\Z|\./g,"") + ".warc";
						chrome.extension.sendRequest({url: tab.url, method: 'generateWarc', cssURIs: cssFiles, cssData: cssDataIn, docHtml: msg.html, uris: msg.uris, datum: msg.data, imgData: msg.data, file: fileName},
						 function(response) {	//the callback to sendRequest
							console.log("generateWARC callback executed");
							/*
							var dlwarclink = document.getElementById('dlWarc');
							if(dlwarclink == null){		//this hasn't been done before, create a new link
								var a = document.createElement('a'); 
							
								a.id = "dlWarc";
								a.appendChild(document.createTextNode("Download WARC"));
								a.href = response;
								$("body").append(a);
							}else {//a link has already been created, just change the href
								dlwarclink.href = response;
								
							}*/
							
							
							//TODO: Can document.write directly from Javascript but below line keeps it in the context of the popup, we want it on a full page.
							// Use this as a purely client side solution
							//document.write(response);
							
							
							var bb = new BlobBuilder;
							bb.append(response.d);
							saveAs(bb.getBlob("text/plain;charset=utf-8"), fileName);
							/*
							$.post(server+"/makewarc.php", {data: response.d},function(data){
								if(data == "Cannot create file :("){
									console.log(data);
									return;
								}
								
								chrome.tabs.create({url: server+"/"+data});
								chrome.pageAction.setIcon({path:"icon-check.png",tabId:tab.id});	//change the warcreate icon to "completed" check.
								//setTimeout(window.close,1000);
								
								//var cssFiles = data.cssFiles.split("|||");
								//alert(data.cssFiles.split("|||"));
								//alert(cssFiles[0]);
								//chrome.tabs.create({url: cssFiles[0]},function(tab){
								//	generate_Warc();
									
								//});
							}							
							,"text");*/
							console.log("Done!");
							chrome.pageAction.setIcon({path:"icon-check.png",tabId:tab.id});
							//chrome.tabs.create({url: response});
							//localStorage["paiheaders"] = "";
							
							
						});	
					});
				
				});
			}); 
		});
	});
}


function decrypt(){
	var key = document.getElementById('key').value;
	var content = document.getElementById('content').value;
	if(arguments[0] != ""){content = "dummy";}	//used if gathering content from page and not from field
	if(key == ""){alert("First enter a key for decryption."); return;}
	chrome.tabs.executeScript(null, {file:"js/jquery-1.7.min.js"}, function() {
		chrome.tabs.executeScript(null, {file:"js/jquery.rc4.js"}, function() {
			chrome.tabs.executeScript(null, {code: "var params = {k:'"+key+"',c:'"+content+"'};"}, function(){
				chrome.tabs.executeScript(null, { file: "decryptPage.js" }, function(){

				});
			});
		});
	}); 
}

/*
function encrypt(){
	$('#cipher').val(
		$.rc4EncryptStr(	$('#text').val(),	$('#key').val()	)
	);
}
function decrypt(){

	$('#text').val(
		$.rc4DecryptStr(	$('#cipher').val(),	$('#key').val()	)
	);
}*/


/*function adjustImage(src, tab) {
	var img = new Image();
	img.onload = function() {
			var canvas = Pixastic.process(img);

			chrome.tabs.sendRequest(tab.id, {cmd: "replace", data: canvas.toDataURL()});
	};
	img.src = src;
}
*/
function test(){
	console.log("test1");
	alert("test!");
	console.log("test2");
}

function foo(){
	chrome.tabs.getSelected(null, function(tab) {			
		alert('in foo()');
		var port = chrome.tabs.connect(tab.id,{name: "pai2"});
		port.postMessage({url: tab.url, method: 'inject'});
		port.onMessage.addListener(function(msg) {
			console.log("> 3");
			if(msg.xxx != ""){
				alert('round trip');
			}

		});
	});
}

function fetchSpec(){
	var x = chrome.tabs.getSelected(null, function(tab) {
	  t = tab.url;
	  //extract hostname for query to spec
	  var protocolTrimmed = t.substr(t.indexOf("//")+2);
	  var host = protocolTrimmed.substr(0,protocolTrimmed.indexOf("/"));
	  
	  console.log("URL: "+t+ " "+host);
	  
	  function getCurrentSiteSpec(step,urlIn){
		switch(step){
			case 0:
				//var xhr = new XMLHttpRequest();
				var siteSpec = "";
				var uriOut = "";
				$.ajax({
					url: urlIn,
					success: function(data){		
						var parser = new DOMParser();

						//var xml = parser.parseFromString(data, "text/xml");
						var socialMediaWebsites = $(data.childNodes[0]).children();

						for(var i=0; i<socialMediaWebsites.length; i++){
							if($(socialMediaWebsites[i]).find("homepage").text().indexOf(host) != -1){
								siteSpec = $(socialMediaWebsites[i]).find("specification").text();
								console.log("-- proceeding with "+siteSpec);
								getCurrentSiteSpec(1,siteSpec);
							}
						}
					},
					error: function(){
						console.log("bar: ");
					}
				});
				console.log("uriOut: "+uriOut);
				break;
			case 1:
				$.ajax({
					url: urlIn,
					success: function(data){
						console.log("Success with "+urlIn);
						
						
						localStorage["spec"] = (new XMLSerializer()).serializeToString(data);
						console.log("New local storage = "+localStorage["spec"]);
						$("#generateCohesiveWARC").removeAttr('disabled');
						}
				});
				break;				
			
		}
	}
	localStorage["spec"] = "";
	getCurrentSiteSpec(0,"http://spec.socialstandard.org");
	});

}
	

window.onload = function(){
	var background = chrome.extension.getBackgroundPage();

	var buttonContainer = document.getElementById('buttonContainer');
	
	var sButton = document.getElementById('submit');
	var acButton = document.getElementById('alertContent');
	//var encryptButton = document.getElementById('encrypt');
	var encodeButton = document.getElementById('encodeImages');
	
	//if a website is recognized from the spec, show the "Cohesive archive"
	var caButtonDOM = document.createElement('input'); caButtonDOM.type = "button"; caButtonDOM.id = "generateCohesiveWARC";  caButtonDOM.disabled = "disabled";
	var t;
	
	caButtonDOM.value = "Generate WARC for site";
	
	//create buttons for popup
	var gwButtonDOM = document.createElement('input'); gwButtonDOM.type = "button"; gwButtonDOM.id = "generateWarc"; gwButtonDOM.value = "Generate WARC";
	var clsButtonDOM = document.createElement('input'); clsButtonDOM.type = "button"; clsButtonDOM.id = "clearLocalStorage"; clsButtonDOM.value = "Clear LocalStorage";
	
	var errorText = document.createElement("a"); errorText.id = "errorText"; errorText.target = "_blank";
	var status = document.createElement("input"); status.id = "status"; status.type = "text"; status.value = ""; 
	
	//modify text of gwButton if website is in spec
	//fetchSpec();
	//if(localStorage["spec"].length > 0){gwButtonDOM.value = "Generate WARC for page";}
	if(!buttonContainer){return;}
	
	//add buttons to DOM
	buttonContainer.appendChild(gwButtonDOM);
	//if(localStorage["spec"].length > 0){
		buttonContainer.appendChild(caButtonDOM);
	//}
	buttonContainer.appendChild(clsButtonDOM);
	buttonContainer.appendChild(status);
	$(buttonContainer).prepend(errorText);
	$("#status").css("display","none"); //initially hide the status block
	
	
	var gwButton = document.getElementById('generateWarc');
	var ulButton = document.getElementById('uploader');
	var clsButton = document.getElementById('clearLocalStorage');
	var caButton = document.getElementById('generateCohesiveWARC');
	$(ulButton).css("display","none");
	//$(clsButton).css("display","none");
	$(caButton).css("display","none");
	
	gwButton.onclick = generate_Warc;
	caButton.onclick = sequential_generate_Warc;
	
	
	//disable the clear local storage button if there is nothing there.
	if(localStorage["paiheaders_requesturis"] == ""){clsButton.disabled = "disabled";}
	else {
	    //document.getElementById("urlHeaderCount").style.display = "block";
		document.getElementById("urlHeaderCount").appendChild(
			document.createTextNode(
				localStorage["paiheaders_requesturis"].split("\r\n\r\n").length+" urls"+localStorage["paiheaders_requesturis"].split("\r\n\r\n"))
			);
	}
	
	clsButton.onclick = (function(){
		localStorage["paiheaders_requesturis"] = "";
		localStorage["paiheaders_requestdata"] = "";
		alert("LocalStorage cleared");
		window.location = window.location;
	});
	//ulButton.onclick = foo;
	//encodeButton.onclick = encodeImages;
	
	if(sButton){
			
			sButton.onclick = encrypt;
			
			//acButton.onclick = (function() {
			//	return function() {
			//		decrypt("use page's content");
			//	}
			//})();
			
			//var content = document.getElementById('content');
			//if(!content){return;}
			//content.onblur = function(){
			//	if(this.value == ""){sButton.value = "Encrypt";sButton.onclick = foo}
			//	else {sButton.value = "Decrypt"; sButton.onclick = decrypt;}
			//};
			
			//sButton.onclick = decrypt;
				
	}else {
		//alert('in else');
	}
	
};
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

var headers = "";
/*
chrome.webRequest.onHeadersReceived.addListener(
	function(request){
		alert('foo');
		
		blockingResponse.requestHeaders = reqheaders;
		return blockingResponse;
	}
, { urls: ['http://cs.odu.edu/~mkelly/semester/2011_fall/*'] }, ['requestHeaders','blocking']);
*/


chrome.webRequest.onResponseStarted.addListener(
	function(r){
		chrome.tabs.getSelected(null,function(tab){
			if(tab.url.indexOf(".warc") > 0){
				chrome.pageAction.setIcon({path:"icon-viewing.png",tabId:tab.id});
			}
		});
	
		var str = r.statusLine + "\r\n";
		for(key in r.responseHeaders){
			var h = r.responseHeaders[key];
			str += h["name"]+": "+h["value"]+"\r\n";
			
		}
	}
, { urls: ['http://*/*'] }, ['responseHeaders']);
/*
chrome.webRequest.onHeadersReceived.addListener(
	function(r){
		var str = r.statusLine + "\r\n";
		for(key in r.responseHeaders){
			var h = r.responseHeaders[key];
			str += h["name"]+": "+h["value"]+"\r\n";
			
		}
		alert("headersReceived: \r\n"+str);
	}
, { urls: ['http://cs.odu.edu/~mkelly/semester/2011_fall/*'] }, ['responseHeaders']);
*/

chrome.webRequest.onBeforeSendHeaders.addListener(
	function(request){
		if(		request.url.indexOf("localhost") > 0 //these are fetches to get image data through AJAX trickery
			||	request.url.indexOf("google.com") > 0	//block google anayltics from poisoning the WARC
		){
			return;
		}	
		
		
		var reqheaders = request.requestHeaders,blockingResponse = {};
		//var str = request.url + "\r\n----------------\r\n";
		console.log(" *************** "+request.url);
		var str2 = request.method+" "+request.url+" \r\n";
		for(key in request.requestHeaders){
			var h = request.requestHeaders[key];
			str2 += h["name"] + ": " + h["value"] + "\r\n";		//without URI prefix
			console.log(h["name"] + ": "+ h["value"]);
			//str2 += h["name"] + ": " + h["value"] + "\r\n";		//with URI prefix
		}
		//alert("onbeforesendheaders: \r\n"+str2);
		localStorage["paiheaders_requesturis"] += request.url + "\r\n\r\n";
		localStorage["paiheaders_requestdata"] += str2 + "\r\n\r\n";
		//localStorage["paiheaders"] += str;
		
		//setHeaders(str);
		reqheaders['Cache-Control'] = "no-cache";
		blockingResponse.requestHeaders = reqheaders;
		return blockingResponse;
	}
//, { urls: ['http://cs.odu.edu/~mkelly/semester/2011_fall/*'] }, ['requestHeaders','blocking']);
, { urls: ['http://*/*'] }, ['requestHeaders','blocking']);

/*
chrome.webRequest.onBeforeRedirect.addListener(
	function(request){
		alert("redirecting");
		return blockingResponse;
	}
, { urls: ['http://cs.odu.edu/*'] }, ['requestHeaders','blocking']);
*/
function setHeaders(str){
	//chrome.tabs.create({url: "data:application/octet-stream,"+str});
	headers = str;
}

function getHeader(){
	return headers;
}
/*
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
	alert('adjusting images');
	var images = document.getElementsByTagName('img');
	var img = new Image();
	img.src = request.url;
	var canvas = document.createElement("canvas"); 
	canvas.width = img.width; 
	canvas.height = img.height;
	var context = canvas.getContext("2d");

	//context.drawImage(img,0,0);
	console.log(i+": "+images[i].src+"  file type: "+fileType);
	var fileType = images[i].src.substr(images[i].src.length - 4).toLowerCase();
	if(fileType == ".jpg" || fileType == "jpeg"){fileType = "image/jpeg";}
	else if(fileType == ".png"){fileType = "image/png";}
	else if(fileType == ".gif"){fileType = "image/gif";}
	else {
		var uTransformed = images[i].src.substring(0,images[i].src.indexOf(".jpg"))+".jpg";
		alert("error at image "+i+" " + uTransformed); return; console.log(uTransformed);return;}
	console.log(i+": "+images[i].src+"  file type: "+fileType);

	try {
		var base64  = canvas.toDataURL(fileType);
	//	alert(base64);
		//img.src = base64;
		//alert(base64);
		//img.src = base64;//"https://www.google.com/intl/en_com/images/srpr/logo3w.png";
		
		chrome.extension.sendRequest({url: img.src});
		//chrome.extension.getBackgroundPage().adjustImage(img.src);
	}
	catch(e){
		alert('Encoding of inline binary content failed!')
		console.log(e);
		return;
	}
	$(images[i]).replaceWith(img);
	
	
	

	
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
    else
      sendResponse({}); // snub them.
  });
*/

