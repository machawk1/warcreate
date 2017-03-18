function str2ab (str) {
  var s = encode_utf8(str)
  var buf = new ArrayBuffer(s.length) // 2 bytes for each char
  var bufView = new Uint8Array(buf)
  var strLen = s.length
  for (var i = 0; i < strLen; i++) {
    bufView[i] = s.charCodeAt(i)
  }
  return buf
}

function encode_utf8 (s) {
  return unescape(encodeURIComponent(s))
}

function decode_utf8 (s) {
  return decodeURIComponent(escape(s))
}
