// let key = params['k']

// alert($('#cipher'))
function convertImagesToBase64 () {
  const images = document.getElementsByTagName('img')
  for (let i = 0; i < images.length; i++) {
    let img = new Image()
    img.src = images[i].src

    chrome.extension.sendRequest({url: img.src}, function (response) {
      console.log(response.farewell)
    })

    // return
    // Create canvas tag to represent img
    let canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height

    // let context = canvas.getContext('2d')
    // let newImage = new Image()
    // newImage.src
    // context.drawImage(img,0,0)

    let fileType = images[i].src.substr(images[i].src.length - 4).toLowerCase()
    console.log(i + ': ' + images[i].src + '  file type: ' + fileType)
    if (fileType === '.jpg' || fileType === 'jpeg') {
      fileType = 'image/jpeg'
    } else if (fileType === '.png') {
      fileType = 'image/png'
    } else if (fileType === '.gif') {
      fileType = 'image/gif'
    } else {
      const uTransformed = images[i].src.substring(0, images[i].src.indexOf('.jpg')) + '.jpg'
      alert('error at image ' + i + ' ' + uTransformed)
      continue
    }
    console.log(i + ': ' + images[i].src + '  file type: ' + fileType)

    try {
      const base64 = canvas.toDataURL(fileType)
      // alert(base64)

      img.src = base64

      // alert(base64)
      // img.src = base64;//"https://www.google.com/intl/en_com/images/srpr/logo3w.png"

      // chrome.extension.sendRequest({url: img.src})
      // chrome.extension.getBackgroundPage().adjustImage(img.src)
    } catch (e) {
      console.log(e)
      return
    }
    $(images[i]).replaceWith(img)
  }
// console.log(document.documentElement.innerHTML)
}

let scripts = document.getElementsByTagName('script')
for (let s = 0; s < scripts.length; s++) {
  scripts[s].parentNode.removeChild(scripts[s])
// console.log(scripts[s].parentNode.innerHTML)
}

convertImagesToBase64()

// var content = document.documentElement.innerHTML
// var encryptedContent = $.rc4EncryptStr(content, key)
// $('body').append('<br />Encrypted Content: ' + encryptedContent)
// $('body').append('<br />Encrypted Content: ' + content)
