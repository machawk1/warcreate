/* JQuery RC4 encryption/decryption
 * Copyright (c) 2009 by Tony Simek.
 * released under the terms of the Gnu Public License.
 * Email: tony.simek@gmail.com
 */
(function($){$.fn.rc4=function(settings){
        var defaults={key:null,method:"encrypt",callback:null};
        var options=$.extend(defaults,settings);
		if($.fn.rc4.ctrlrInst==null){$.fn.rc4.ctrlrInst=new $.fn.rc4.ctrlr(options);}
		return this.each(function(){$.fn.rc4.ctrlrInst.settings=options;
			$.fn.rc4.ctrlrInst.container=this;$.fn.rc4.ctrlrInst.initialise(this);
});}
$.extend({hexEncode:function(data){
	var b16D='0123456789abcdef';var b16M=new Array();
	for(var i=0;i<256;i++){b16M[i]=b16D.charAt(i>>4)+b16D.charAt(i&15);				}
	var result=new Array();for(var i=0;i<data.length;i++){result[i]=b16M[data.charCodeAt(i)];			 	}
	return result.join('');
},hexDecode:function(data){var b16D='0123456789abcdef';var b16M=new Array();
	for(var i=0;i<256;i++){b16M[b16D.charAt(i>>4)+b16D.charAt(i&15)]=String.fromCharCode(i);}
	if(!data.match(/^[a-f0-9]*$/i))return false;if(data.length%2)data='0'+data;
	var result=new Array();var j=0;for(var i=0;i<data.length;i+=2){result[j++]=b16M[data.substr(i,2)];}
	return result.join('');
},rc4Encrypt:function(key,pt){
	s=new Array();for (var i=0;i<256;i++){s[i]=i;};var j=0;var x;
	for (i=0;i<256;i++){j=(j+s[i]+key.charCodeAt(i % key.length)) % 256;x=s[i];s[i]=s[j];s[j]=x;}
	i=0;j=0;var ct='';for (var y=0;y<pt.length;y++){i=(i+1) % 256;j=(j+s[i]) % 256;x=s[i];s[i]=s[j];s[j]=x;
	ct+=String.fromCharCode(pt.charCodeAt(y) ^ s[(s[i]+s[j]) % 256]);}return ct;
},rc4Decrypt:function(key,ct){return $.rc4Encrypt(key,ct);
},rc4EncryptStr:function(str,key){return $.hexEncode($.rc4Encrypt(key,unescape(encodeURIComponent(str))));
},rc4DecryptStr:function(hexStr,key){return decodeURIComponent(escape($.rc4Decrypt(key,$.hexDecode(hexStr))));}
});
$.rc4={};$.fn.rc4.ctrlrInst=null;$.fn.rc4.ctrlr=function(settings){this.settings=settings;};var ctrlr=$.fn.rc4.ctrlr;
ctrlr.prototype.initialise=function(){
	if(this.settings.key){if(this.settings.method){if($.trim(this.settings.method.toUpperCase())=="ENCRYPT"){
		this.setObjectValue($.hexEncode($.rc4Encrypt(this.settings.key,this.getObjectValue())))}
	if($.trim(this.settings.method.toUpperCase())=="DECRYPT"){
		this.setObjectValue($.rc4Decrypt(this.settings.key,$.hexDecode(this.getObjectValue())));}}};
}
ctrlr.prototype.getObjectValue=function(){
	if($.fn.rc4.ctrlrInst.container.innerHTML){return $.fn.rc4.ctrlrInst.container.innerHTML;}
	if($.fn.rc4.ctrlrInst.container.value){return $.fn.rc4.ctrlrInst.container.value;}}
ctrlr.prototype.setObjectValue=function(data){
	if($.fn.rc4.ctrlrInst.container.innerHTML){$.fn.rc4.ctrlrInst.container.innerHTML=data;}
	if($.fn.rc4.ctrlrInst.container.value){$.fn.rc4.ctrlrInst.container.value=data;}}
})(jQuery);