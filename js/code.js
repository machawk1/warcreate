
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
	chrome.tabs.executeScript(null, {file:"js/jquery-2.0.2.min.js"}, function() {
		chrome.tabs.executeScript(null, {file:"js/jquery.rc4.js"}, function() {
			chrome.tabs.executeScript(null, { file: "js/alertContent.js" }, function(){
			
			});
		});
	});
	//add listener here
}

function encodeImages(){
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
	chrome.tabs.executeScript(null, {file:"js/jquery-2.0.2.min.js"}, function() {
		chrome.tabs.executeScript(null, {file:"js/jquery.rc4.js"}, function() {
			chrome.tabs.executeScript(null, {code: "var params = {k:'"+key+"'};"}, function(){
				chrome.tabs.executeScript(null, { file: "js/encryptPage.js" }, function(){
			
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
	
	var imageData = [];
	var imageURIs = [];
	console.log("generate_warc");
	chrome.tabs.executeScript(null, {file:"js/jquery-2.0.2.min.js"}, function() {	/* Dependency for hash library and general goodness*/
		console.log("jquery loaded");
		chrome.tabs.executeScript(null, {file:"js/jquery.rc4.js"}, function() {	/* Hash library */
			console.log("jquery rc4 loaded");
			chrome.tabs.executeScript(null, {file:"js/date.js"}, function() {		/* Good date formatting library */
				console.log("date.js loaded");
				var uris = [];
				var datum = [];
				chrome.tabs.getSelected(null, function(tab) {	
					//chrome.pageAction.setIcon({path:"../icons/icon-running.png",tabId:tab.id});
					var port = chrome.tabs.connect(tab.id,{name: "warcreate"});	//create a persistent connection
					port.postMessage({url: tab.url, method: 'getHTML'});	//fetch the html of the page, in content.js
					
					var imageDataFilledTo = -1;

					//perform the first listener, populate the binary image data
					console.log("adding listener");
					port.onMessage.addListener(function(msg) {	//get image base64 data
						//msg.html = html
						//msg.uris: imageURIsSerialized
						//msg.data: imageDataSerialized
						//msg.cssuris: cssURIsSerialized
						//msg.cssdata: cssDataSerialized
						
						console.log("About to generateWARC(). Next should be callback.");
						var fileName = (new Date().toISOString()).replace(/:|\-|\T|\Z|\./g,"") + ".warc";
						chrome.extension.sendRequest({
							url: tab.url, 
							method: 'generateWarc', 
							docHtml: msg.html, 
							file: fileName, 
							imgURIs: msg.uris, 
							imgData: msg.data,
							cssURIs: msg.cssuris,
							cssData: msg.cssdata},
						 function(response) {	//the callback to sendRequest
							console.log("generateWARC callback executed");
							
							var bb = new BlobBuilder;
							bb.append(response.d);
							saveAs(bb.getBlob("text/plain;charset=utf-8"), fileName);
		
							console.log("Done!");
							chrome.pageAction.setIcon({path:"../icons/icon-check.png",tabId:tab.id});
							
						});	
					});
				
				});
			}); 
		});
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
	$(caButton).css("display","none");
	
	gwButton.onclick = generate_Warc;
	caButton.onclick = sequential_generate_Warc;
	
};
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

var headers = "";

var responseHeaders = new Array();
var requestHeaders = new Array();
var CRLF = "\r\n";

var currentTabId = -1;
chrome.tabs.getSelected(null, function(tab){ 
	currentTabId=tab.id;
	console.log("tab id in getselected "+currentTabId);
});


chrome.webRequest.onHeadersReceived.addListener(
	function(resp){
		responseHeaders[resp.url] = "";
		responseHeaders[resp.url] += resp.statusLine + CRLF;

		//console.log("--------------Response Headers--------------");
		for (var key in resp.responseHeaders) {
			responseHeaders[resp.url] += resp.responseHeaders[key].name+": "+resp.responseHeaders[key].value + CRLF;
		}
		//console.log(responseHeaders[resp.url]);
	}
, { urls:["http://*/*", "https://*/*"], tabId: currentTabId }, ['responseHeaders','blocking']);
chrome.webRequest.onBeforeSendHeaders.addListener(
	function(req){
		//console.log(req);
		//console.log("--------------Request Headers--------------");
		requestHeaders[req.url] = "";

		var path = req.url.substring(req.url.match(/[a-zA-Z0-9]\//).index + 1);
		var FABRICATED_httpVersion = "HTTP/1.1";
		requestHeaders[req.url] += req.method + " " + path + " " + FABRICATED_httpVersion + CRLF;
		for (var key in req.requestHeaders) {
			requestHeaders[req.url] += req.requestHeaders[key].name+": "+req.requestHeaders[key].value + CRLF;
		}
		//console.log(requestHeaders[req.url]);
	}
, { urls:["http://*/*", "https://*/*"], tabId: currentTabId }, ['requestHeaders','blocking']);



chrome.webRequest.onResponseStarted.addListener(
	function(details){
		console.log("responsestarted");
		console.log(details);
//		console.log(details.valueOf());
}, { urls:["http://*/*", "https://*/*"], }, ['responseHeaders']);

//chrome.webRequest.onResponseStarted.addListener(
//	function(details){
//		console.log(details);
//	}, { urls:["http://*/*", "https://*/*"], }, ['responseHeaders']);
//
//		chrome.tabs.getSelected(null,function(tab){
//			if(tab.url.indexOf(".warc") > 0){
//	  			chrome.pageAction.setIcon({path:"icon-viewing.png",tabId:tab.id});
//			}
//		});
//	}
//, { urls: ['http://*/*'] }, ['responseHeaders']);

