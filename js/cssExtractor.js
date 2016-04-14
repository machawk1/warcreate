function findEmbeddedCSSURIs() {
  var foundCSSFiles = [];
  
  for(var cssFileIndex = 0; cssFileIndex < document.styleSheets.length; cssFileIndex++) {
	for(var rules=0; document.styleSheets[cssFileIndex].rules && rules<document.styleSheets[cssFileIndex].rules.length; rules++){
		if(document.styleSheets[cssFileIndex].rules[rules].type == 3){
			var foundCSSFile = absolute(document.styleSheets[cssFileIndex].href,document.styleSheets[cssFileIndex].rules[rules].href);
			foundCSSFiles.push(foundCSSFile);
		}
	}
  }
  return foundCSSFiles;
}


function getDOMCSSURIs() {
  var cssURIs = [];
  for(var cssFileIndex = 0; cssFileIndex < document.styleSheets.length; cssFileIndex++) {
    cssURIs.push(document.styleSheets[cssFileIndex].href);
  }
  return cssURIs;
}

function getCSSData(cb) {
 console.log('called getCSSData in cssExtractor.js')
    //a better way to get all stylesheets but we cannot get them as text but instead an object with ruleslist
    var styleSheetURLs = [];
    //var styleSheetData = [];
    var css = {};

    var domCSSFileURIs = getDOMCSSURIs(); // Synchronous
    var embeddedCSSFileURIs = findEmbeddedCSSURIs(); // Synchronous
    styleSheetURLs = domCSSFileURIs.concat(embeddedCSSFileURIs);


    function getCSSDataAtIndex(ii) {   
	    if(ii >= styleSheetURLs.length) {		  
		  chrome.storage.local.set({'css' : css}, function() {
		    cb();
		  });
		  return;
		}
   
	    $.ajax({
		  url: styleSheetURLs[ii],
		  dataType: 'text'
	    }).done(function(cssText){
	       css[styleSheetURLs[ii]] = cssText;
		   getCSSDataAtIndex(++ii);
	    });
	}
	 
	getCSSDataAtIndex(0);         
}