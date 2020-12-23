function convertImagesToBase64 () {
  const images = document.getElementsByTagName('img')
  for (let i = 0; i < images.length; i++) {
    let img = new Image()
    img.src = images[i].src

    chrome.extension.sendRequest({ url: img.src }, function (response) {
      console.log(response.farewell)
    })

    let canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height

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

      img.src = base64

    } catch (e) {
      console.log(e)
      return
    }
    $(images[i]).replaceWith(img)
  }
}

let scripts = document.getElementsByTagName('script')
for (let s = 0; s < scripts.length; s++) {
  scripts[s].parentNode.removeChild(scripts[s])
}

convertImagesToBase64()
