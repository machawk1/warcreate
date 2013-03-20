var key = params['k'];
var content = params['c'];
if(content == "dummy"){	//used if page contains encrypted content and not field
	content = $('body').html();
	if(content.indexOf("\n") != -1){
		var ary = content.split("\n");
		content = ary[0];
	}
}

var decryptedContent;
try {
	decryptedContent = $.rc4DecryptStr(	content,	key);
}catch(err){
	decryptedContent = "(Decryption error)";
}

$('body').html(decryptedContent);