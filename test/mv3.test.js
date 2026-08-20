const assert = require('assert')
const fs = require('fs')
const path = require('path')
const NodeURL = require('url').URL
const vm = require('vm')

const root = path.resolve(__dirname, '..')

function source (relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8')
}

function eventRegistry (listeners, name) {
  return {
    addListener: function (listener) {
      listeners[name] = listener
    }
  }
}

async function testManifest () {
  const manifest = JSON.parse(source('manifest.json'))
  const popup = source(manifest.action.default_popup)
  const worker = source(manifest.background.service_worker)

  assert.strictEqual(manifest.manifest_version, 3)
  assert.strictEqual(manifest.background.service_worker, 'serviceWorker.js')
  assert.ok(manifest.action.default_popup)
  assert.ok(fs.existsSync(path.join(root, manifest.background.service_worker)))
  assert.ok(fs.existsSync(path.join(root, manifest.action.default_popup)))
  assert.ok(fs.existsSync(path.join(root, manifest.options_ui.page)))
  assert.ok(manifest.permissions.includes('webRequest'))
  assert.ok(manifest.permissions.includes('downloads'))
  assert.ok(!manifest.permissions.includes('webRequestBlocking'))
  assert.deepStrictEqual(manifest.host_permissions.sort(), ['http://*/*', 'https://*/*'])
  assert.ok(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(popup), 'popup must not contain inline scripts')
  assert.ok(!/\son\w+=/i.test(popup), 'popup must not contain inline event handlers')
  assert.ok(!/\b(localStorage|XMLHttpRequest|document|window)\b/.test(worker), 'service worker must not use DOM-only APIs')
  assert.ok(!/chrome\.(extension|pageAction)\b|tabs\.executeScript|getSelected/.test(worker))
}

async function testServiceWorkerCapture () {
  const listeners = {}
  const stored = {}
  const chrome = {
    action: {
      enable: function () {},
      disable: function () {}
    },
    runtime: {
      lastError: null,
      onMessage: eventRegistry(listeners, 'runtime.onMessage')
    },
    storage: {
      local: {
        get: function (key, callback) {
          const result = {}
          if (stored[key]) result[key] = stored[key]
          callback(result)
        },
        set: function (items, callback) {
          Object.assign(stored, items)
          callback()
        },
        remove: function (key) {
          delete stored[key]
        }
      }
    },
    tabs: {
      get: function () {},
      onActivated: eventRegistry(listeners, 'tabs.onActivated'),
      onRemoved: eventRegistry(listeners, 'tabs.onRemoved'),
      onUpdated: eventRegistry(listeners, 'tabs.onUpdated')
    },
    webRequest: {
      onBeforeRequest: eventRegistry(listeners, 'webRequest.onBeforeRequest'),
      onBeforeSendHeaders: eventRegistry(listeners, 'webRequest.onBeforeSendHeaders'),
      onHeadersReceived: eventRegistry(listeners, 'webRequest.onHeadersReceived'),
      onSendHeaders: eventRegistry(listeners, 'webRequest.onSendHeaders')
    }
  }

  vm.runInNewContext(source('serviceWorker.js'), {
    chrome: chrome,
    console: console,
    Promise: Promise,
    self: { URL: NodeURL }
  }, { filename: 'serviceWorker.js' })

  const details = {
    tabId: 7,
    requestId: 'request-1',
    type: 'main_frame',
    url: 'https://example.com/path?q=1',
    method: 'GET',
    requestHeaders: [{ name: 'Accept', value: 'text/html' }]
  }
  listeners['webRequest.onBeforeRequest'](details)
  listeners['webRequest.onBeforeSendHeaders'](details)
  listeners['webRequest.onSendHeaders'](Object.assign({}, details, {
    requestHeaders: details.requestHeaders.concat([{ name: 'Cookie', value: 'a=b' }])
  }))
  listeners['webRequest.onHeadersReceived'](Object.assign({}, details, {
    statusLine: 'HTTP/1.1 200 OK',
    responseHeaders: [{ name: 'Content-Type', value: 'text/html' }]
  }))

  const response = await new Promise(function (resolve) {
    listeners['runtime.onMessage']({ method: 'getCaptureData', tabId: 7 }, {}, resolve)
  })
  assert.strictEqual(response.ok, true)
  assert.ok(response.capture.requestHeaders[details.url].startsWith('GET /path?q=1 HTTP/1.1'))
  assert.ok(response.capture.requestHeaders[details.url].includes('Cookie: a=b'))
  assert.ok(response.capture.responseHeaders[details.url].includes('Content-Type: text/html'))

  listeners['webRequest.onBeforeRequest'](Object.assign({}, details, {
    url: 'https://www.example.com/final'
  }))
  const redirectResponse = await new Promise(function (resolve) {
    listeners['runtime.onMessage']({ method: 'getCaptureData', tabId: 7 }, {}, resolve)
  })
  assert.ok(redirectResponse.capture.requestHeaders[details.url], 'redirects must not reset the capture')

  listeners['webRequest.onBeforeRequest'](Object.assign({}, details, {
    requestId: 'request-2',
    url: 'https://example.com/next'
  }))
  const resetResponse = await new Promise(function (resolve) {
    listeners['runtime.onMessage']({ method: 'getCaptureData', tabId: 7 }, {}, resolve)
  })
  assert.deepStrictEqual(Object.keys(resetResponse.capture.requestHeaders), [])
}

async function testWarcGeneration () {
  let downloadedBlob
  let downloadOptions
  function ExtensionURL (input, base) {
    return new NodeURL(input, base)
  }
  ExtensionURL.createObjectURL = function (blob) {
    downloadedBlob = blob
    return 'blob:warcreate-test'
  }
  ExtensionURL.revokeObjectURL = function () {}

  const windowObject = {
    URL: ExtensionURL,
    setTimeout: function (callback) { callback() }
  }
  const sandbox = {
    Blob: Blob,
    XMLHttpRequest: function () {},
    alert: function () {},
    chrome: {
      downloads: {
        download: function (options, complete) {
          downloadOptions = options
          complete(1)
        }
      },
      notifications: {
        create: function () {},
        onButtonClicked: { addListener: function () {} },
        update: function () {}
      },
      runtime: {
        getManifest: function () { return { version: '1.0.0' } },
        lastError: null
      },
      tabs: { create: function () {} }
    },
    console: { log: function () {}, warn: function () {} },
    encodeURIComponent: encodeURIComponent,
    localStorage: {
      getItem: function () { return null }
    },
    navigator: { userAgent: 'WARCreate test' },
    Promise: Promise,
    Uint8Array: Uint8Array,
    ArrayBuffer: ArrayBuffer,
    Date: Date,
    Math: Math,
    unescape: unescape,
    window: windowObject
  }

  vm.runInNewContext(source('js/warcGenerator.js'), sandbox, { filename: 'warcGenerator.js' })
  windowObject.setCapturedHeaders({
    requestHeaders: {
      'https://example.com/': 'GET / HTTP/1.1\r\nHost: example.com\r\n'
    },
    responseHeaders: {
      'https://example.com/': 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\nContent-Length: 0\r\n'
    }
  })

  await windowObject.generateWarc({
    method: 'generateWarc',
    url: 'https://example.com/',
    docHtml: '<html><body>Captured</body></html>',
    file: 'capture.warc',
    images: {},
    css: { uris: [], data: [] },
    js: { uris: [], data: [] },
    outlinks: []
  })

  assert.strictEqual(downloadOptions.filename, 'capture.warc')
  assert.strictEqual(downloadOptions.saveAs, true)
  assert.ok(downloadedBlob.size > 0)
  const warc = await downloadedBlob.text()
  assert.ok(warc.includes('WARC/1.0'))
  assert.ok(warc.includes('<html><body>Captured</body></html>'))
}

async function main () {
  await testManifest()
  await testServiceWorkerCapture()
  await testWarcGeneration()
  console.log('MV3 regression tests passed')
}

main().catch(function (error) {
  console.error(error)
  process.exitCode = 1
})
