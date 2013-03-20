function load(){
	Downloadify.create('downloadify',{
		filename: function(){
			return document.getElementById('filename').value;
		},
		data: function(){ 
			return document.getElementById('data').value;
		},
		onComplete: function(){ alert('Your File Has Been Saved!'); },
		onCancel: function(){ alert('You have cancelled the saving of this file.'); },
		onError: function(){ alert('You must put something in the File Contents or there will be nothing to save!'); },
		swf: 'downloadify/downloadify.swf',
		downloadImage: 'downloadify/download.png',
		width: 100,
		height: 30,
		transparent: true,
		append: false
	});
}