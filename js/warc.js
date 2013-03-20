var CRLF = "\r\n";

Warc = function(srcStr) {
	this.warcRecords = [];
	this.now = 
	
	function WarcRecord(){
		this.str = "";
		function WarcInfoHeader(){var str;
			addLine("WARC/1.0")
		}
		function WarcInfoContent(){}
		function RequestHeader(){}
		function RequestContent(){}
		function MetaDataHeader(){}
		function MetaDataContent(){}
		function ResponseHeader(){}
		function ResponseContent(){
			function ResponseHTTPHeader(){}
			var content;
		}
		function addLine(str){
			this.str += str + "\r\n";
		}
	}

}