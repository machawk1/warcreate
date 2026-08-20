function absoluteHttpUrl (value) {
  if (!value || value.indexOf('data:') === 0) return null
  try {
    const url = new window.URL(value, document.baseURI)
    return /^https?:$/.test(url.protocol) ? url.href : null
  } catch (error) {
    return null
  }
}

function getAllBackgroundImages () {
  const urls = []
  const seen = {}
  const elements = document.getElementsByTagName('*')

  for (const element of elements) {
    const style = window.getComputedStyle(element)
    const background = style && style.getPropertyValue('background-image')
    const match = background && /url\(['"]?([^'")]+)['"]?\)/.exec(background)
    const url = match && absoluteHttpUrl(match[1])
    if (url && !seen[url]) {
      seen[url] = true
      urls.push(url)
    }
  }
  return urls
}

function imageUrls () {
  const urls = []
  const seen = {}

  for (const image of document.images) {
    const url = absoluteHttpUrl(image.currentSrc || image.src)
    if (url && !seen[url]) {
      seen[url] = true
      urls.push(url)
    }
  }

  for (const url of getAllBackgroundImages()) {
    if (!seen[url]) {
      seen[url] = true
      urls.push(url)
    }
  }
  return urls
}

function resourceUrls (resources, property) {
  const urls = []
  const seen = {}

  for (const resource of resources) {
    const url = absoluteHttpUrl(resource[property])
    if (url && !seen[url]) {
      seen[url] = true
      urls.push(url)
    }
  }
  return urls
}

function collectOutlinks () {
  const outlinks = []
  const seen = {}

  function add (value, relation) {
    const url = absoluteHttpUrl(value)
    const entry = url && `${url} ${relation}`
    if (entry && !seen[entry]) {
      seen[entry] = true
      outlinks.push(entry)
    }
  }

  for (const image of document.images) add(image.currentSrc || image.src, 'E =EMBED_MISC')
  for (const sheet of document.styleSheets) add(sheet.href, 'E link/@href')
  for (const script of document.scripts) add(script.src, 'E script/@src')
  for (const anchor of document.links) add(anchor.href, 'L a/@href')

  return outlinks
}

function serializedDocument () {
  const doctype = document.doctype
  let prefix = ''
  if (doctype) {
    prefix = '<!DOCTYPE ' + doctype.name +
      (doctype.publicId ? ' PUBLIC "' + doctype.publicId + '"' : '') +
      (!doctype.publicId && doctype.systemId ? ' SYSTEM' : '') +
      (doctype.systemId ? ' "' + doctype.systemId + '"' : '') +
      '>'
  }

  let html = document.documentElement.outerHTML
  const textDocumentPrefix = '<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">'
  if (html.substr(0, textDocumentPrefix.length) === textDocumentPrefix) {
    const pre = document.querySelector('pre')
    html = pre ? pre.innerHTML : html
    prefix = ''
  }
  return prefix + html
}

function collectPageData () {
  return {
    html: serializedDocument(),
    images: imageUrls(),
    css: { uris: resourceUrls(document.styleSheets, 'href') },
    js: { uris: resourceUrls(document.scripts, 'src') },
    outlinks: collectOutlinks()
  }
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (!message || message.method !== 'collectPage') return
  sendResponse({ ok: true, data: collectPageData() })
})
