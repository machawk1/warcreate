var key = params['k'];

//alert($('#cipher'));
function convertImagesToBase64(){
	var images = document.getElementsByTagName('img');
	for(var i=0; i<images.length; i++){
		
		var img = new Image();
		img.src = images[i].src;
	
		chrome.extension.sendRequest({url: img.src}, function(response) {
		  console.log(response.farewell);
		});
	
		//return;
		// Create canvas tag to represent img
		var canvas = document.createElement("canvas"); 
		canvas.width = img.width; 
		canvas.height = img.height;
		
		var context = canvas.getContext("2d");
		var newImage = new Image();
		newImage.src
		//context.drawImage(img,0,0);
		console.log(i+": "+images[i].src+"  file type: "+fileType);
		var fileType = images[i].src.substr(images[i].src.length - 4).toLowerCase();
		if(fileType == ".jpg" || fileType == "jpeg"){fileType = "image/jpeg";}
		else if(fileType == ".png"){fileType = "image/png";}
		else if(fileType == ".gif"){fileType = "image/gif";}
		else {
			var uTransformed = images[i].src.substring(0,images[i].src.indexOf(".jpg"))+".jpg";
			alert("error at image "+i+" " + uTransformed); continue; console.log(uTransformed);return;}
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
			console.log(e);
			return;
		}
		$(images[i]).replaceWith(img);
	}
	//console.log(document.documentElement.innerHTML);
}

function convertExternalCSSToInlineCSS(){}
function convertExternalJavascriptToInlineJavascript(){}

var scripts = document.getElementsByTagName('script');
for(var s=0; s<scripts.length; s++){
	scripts[s].parentNode.removeChild(scripts[s]);
	//console.log(scripts[s].parentNode.innerHTML);
}

convertImagesToBase64();

//var content = document.documentElement.innerHTML;
//var encryptedContent = $.rc4EncryptStr(	content,	key);
//$('body').append("<br />Encrypted Content: "+encryptedContent);
//$('body').append("<br />Encrypted Content: "+content);