// Saves options to localStorage.
function save_options() {
  var waybackWarcSource = document.getElementById('waybackWarcSource').value;
  var handling;
  if(document.getElementById('output_save').checked == "checked"){handling = "save";}
  else if(document.getElementById('output_display').checked == "checked"){handling = "display";}
  localStorage["warcSRC"] = waybackWarcSource;
  localStorage["handlingMethod"] = handling;
  // Update status to let user know options were saved.
  var status = $("#status");
  alert("status saved!");
  status.html("Options Saved.");
  status.css("display","block");
  setTimeout(function() {
  	$("#status").fadeOut();
  }, 750);
  
}
// Restores select box state to saved value from localStorage.
function restore_options() {
  var warcSRC = localStorage["warcSRC"];
  var waybackWarcSource = document.getElementById("waybackWarcSource");
  if (!warcSRC || warcSRC == "") {
	waybackWarcSource.value = "C:\\xampp\\tomcat\\webapps\\ROOT\\files1\\"; //TODO, remove this obsolete code!
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

var lastSavedStateString = ""; //string representation of the last saved state of the form inputs
function setSaveChangesButtonEnabledBasedOnOptionsChange(){
	if(lastSavedStateString != ""){
		var currentSavedState = $("#filenameScheme").val()+$("#uploadTo").val()+$("#postGeneration_save").is(':checked')+$("#postGeneration_upload").is(':checked');
		console.log(currentSavedState);
		if(lastSavedStateString == currentSavedState){
			$("#save").attr("disabled","disabled");
			console.log("disabling");
		}else {
			$("#save").removeAttr("disabled");
			console.log("enabling");
		}
		console.log("foo");
	}else{	//set the initial state
		lastSavedStateString = $("#filenameScheme").val()+$("#uploadTo").val()+$("#postGeneration_save").is(':checked')+$("#postGeneration_upload").is(':checked');
		$("#save").attr("disabled","disabled");
		$("#filenameScheme").on('keyup',setSaveChangesButtonEnabledBasedOnOptionsChange);
		$("#uploadTo").on('keyup',setSaveChangesButtonEnabledBasedOnOptionsChange);
		$("#postGeneration_save").on('click',setSaveChangesButtonEnabledBasedOnOptionsChange);
		$("#postGeneration_upload").on('click',setSaveChangesButtonEnabledBasedOnOptionsChange);
	}
}

window.onload = function(){
	$('#postGeneration_save').on('click',function(){
		$('#uploadTo').attr("disabled","disabled");
		$('#filenameScheme').removeAttr("disabled");
		$("#exampleFileName").show();
	});
	$('#postGeneration_upload').on('click',function(){
		$('#uploadTo').removeAttr("disabled");
		$('#filenameScheme').attr("disabled","disabled");
		$("#exampleFileName").hide();
		
	});
	$("#restoreDefaults").on('click',function(){
		$("#uploadTo").val("http://warcreate.com/warcs").attr("disabled","disabled");
		$('#postGeneration_save').prop("checked","checked");
		$('#postGeneration_upload').removeAttr("checked");
		$('#filenameScheme').val("YYYYMMDDHHMMssSSS");
	});
	$('#save').on("click",function(){
		var uploadToURI;
		var filenameScheme;
		if($('#postGeneration_upload').prop("checked")){
			uploadToURI = $("#uploadTo").val();
			filenameScheme = "";
		}else {
			uploadToURI = "";
			filenameScheme = $("#filenameScheme").val();
		}

		localStorage['uploadTo'] = uploadToURI;
		localStorage['filenameScheme'] = filenameScheme;
		//TODO: give feedback that options have been saved
	});
	$('#filenameScheme').on("keyup",showFilenameExample); //bind example display to text field change
	
	function showFilenameExample(){ //when the file format scheme changes, update the example
		$("#exampleFileName").html("Example: "+moment().format($("#filenameScheme").val())+".warc");
	};
	
	if(localStorage['uploadTo'] && localStorage['uploadTo'].length > 0){
		$('#uploadTo').removeAttr("disabled");
		$('#postGeneration_upload').prop("checked","checked");
		$('#postGeneration_save').removeAttr("checked");
		
		// hide/disable the "save to downloads" options if the user's current setting is "upload to"
		$('#filenameScheme').attr("disabled","disabled");
		$('#exampleFileName').hide();
	}else if(localStorage['filenameScheme'] && localStorage['filenameScheme'].length > 0){
		$('#filenameScheme').val(localStorage['filenameScheme']);
	}
	
	setSaveChangesButtonEnabledBasedOnOptionsChange(); //set enabled status of the save button initially
	showFilenameExample(); //fire the keyup event onload
	return;
	
	//below is old functionality
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