const key = params.k
let content = params.c
if (content === 'dummy') { // used if page contains encrypted content and not field
  content = $('body').html()
  if (content.indexOf('\n') !== -1) {
    const ary = content.split('\n')
    content = ary[0]
  }
}

let decryptedContent
try {
  decryptedContent = $.rc4DecryptStr(content, key)
} catch (err) {
  decryptedContent = '(Decryption error)'
}

$('body').html(decryptedContent)
