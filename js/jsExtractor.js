function getJSData(cb) {
  console.log('called getJSdata in jsExtractor.js');
  
  var js = {};
  
  function getJSDataAtIndex(ii) {   
    console.log(ii);
    if(ii >= document.scripts.length) {
      chrome.storage.local.set({'js': js}, function() {
        cb();
      });
        
      return;
    }
    
    
    console.log('ajax to ' + document.scripts[ii].src);
    
    $.ajax({
      url: document.scripts[ii].src,
      dataType: 'text'
    }).done(function(jsText){
      console.log('ajax done');
      js[document.scripts[ii].src] = jsText;
      getJSDataAtIndex(++ii);
    }).fail(function(xhr, status, err) {
      console.log('An error occurred fetching '+ document.scripts[ii].src);
      console.log(err);
    });
    
  }
  
  getJSDataAtIndex(0);
}