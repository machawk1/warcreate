// Credit to kennebec from http://stackoverflow.com/questions/2430503/list-of-all-background-images-in-dom
function getallBgimages () {
  let url
  let B = []
  let A = document.getElementsByTagName('*')
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
  const sty = css.replace(/-([a-z])/g, function (a, b) {
    return b.toUpperCase()
  })
  if (who.currentStyle) {
    return who.style[sty] || who.currentStyle[sty] || ''
  }
  const dv = document.defaultView || window
  return who.style[sty] ||
    dv.getComputedStyle(who, '').getPropertyValue(css) || ''
}
