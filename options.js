// Saves options to localStorage.
function save_options() {
  var waybackWarcSource = document.getElementById('waybackWarcSource').value;
  var handling;
  if(document.getElementById('output_save').checked == "checked"){handling = "save";}
  else if(document.getElementById('output_display').checked == "checked"){handling = "display";}
  localStorage["warcSRC"] = waybackWarcSource;
  localStorage["handlingMethod"] = handling;
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}
// Restores select box state to saved value from localStorage.
function restore_options() {
  var warcSRC = localStorage["warcSRC"];
  var waybackWarcSource = document.getElementById("waybackWarcSource");
  if (!warcSRC || warcSRC == "") {
	waybackWarcSource.value = "C:\\xampp\\tomcat\\webapps\\ROOT\\files1\\";
    return;
  }
  
  var handling;
  if(localStorage["handlingMethod"] == "save"){
	document.getElementById('output_save').checked = "checked";
	document.getElementById('output_display').removeAttribute('checked');
  }
  else if(localStorage["handlingMethod"] == "display"){
	document.getElementById('output_save').removeAttribute('checked');  
	document.getElementById('output_display').checked = "checked";
  }
  
  
  waybackWarcSource.value = warcSRC;
}

function clear_options(){
	localStorage["warcSRC"] = "";
	restore_options();
	document.getElementById("waybackWarcSource").value = "sdf";
}

function checkURI(uri){
	var req=new XMLHttpRequest();              
	try{	
		req.open("GET", uri, false);                             
		req.send(null);
		return req.status;
	}catch(e){
		return -1;
	}
}

window.onload = function(){
	document.getElementById('body').click = restore_options;
	document.getElementById('save').click = save_options;
	document.getElementById('clear').click = clear_options;
	var checks = document.getElementsByClassName('check');
	for(var i=0; i<checks.length; i++){
		if(checkURI(checks[i].title) == 200){checks[i].className += " green"; checks[i].innerHTML = "&#x2713; " + checks[i].innerHTML}
		else if(checkURI(checks[i].title) == 403){checks[i].className += " orange"; checks[i].innerHTML = "? " + checks[i].innerHTML}
		else{checks[i].className += " red"; checks[i].innerHTML = "&#x2717; " + checks[i].innerHTML}
	}

};