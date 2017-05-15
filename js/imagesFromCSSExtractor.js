// Credit to kennebec from http://stackoverflow.com/questions/2430503/list-of-all-background-images-in-dom
function getallBgimages () {
  var url
  var B = []
  var A = document.getElementsByTagName('*')
  A = B.slice.call(A, 0, A.length)
  while (A.length) {
    url = document.deepCss(A.shift(), 'background-image')
    if (url) url = /url\(['"]?([^")]+)/.exec(url) || []
    url = url[1]
    if (url && B.indexOf(url) === -1) B[B.length] = url
  }
  return B
}

document.deepCss = function (who, css) {
  if (!who || !who.style) return ''
  var sty = css.replace(/-([a-z])/g, function (a, b) {
    return b.toUpperCase()
  })
  if (who.currentStyle) {
    return who.style[sty] || who.currentStyle[sty] || ''
  }
  var dv = document.defaultView || window
  return who.style[sty] ||
    dv.getComputedStyle(who, '').getPropertyValue(css) || ''
}

// Array.prototype.indexOf = Array.prototype.indexOf ||
// function (what, index) {
//   index = index || 0
//   var L = this.length
//   while (index < L) {
//     if (this[index] === what) return index
//     ++index
//   }
//   return -1
// }
