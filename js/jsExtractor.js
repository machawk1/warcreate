function getJSData(cb) {
    var js = {};
	
    function getJSDataAtIndex(ii) {   
      if(ii >= document.scripts.length) {
        chrome.storage.local.set({'js': js}, function() {
		    cb();
		});
        
        return;
      }
       
	  $.ajax({
	  	url: document.scripts[ii].src,
	  	dataType: 'text'
	  }).done(function(jsText){
	  	 js[document.scripts[ii].src] = jsText;
	  	 getJSDataAtIndex(++ii);
	  });
		
	}
	
	getJSDataAtIndex(0);
}