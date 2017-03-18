/* global chrome, $ */

function getJSData (cb) {
  console.log('called getJSdata in jsExtractor.js')

  var js = {}

  var ajaxRequestsForJS = createAjaxJSRequests()
  $.when.apply(null, ajaxRequestsForJS).done(function() {
    console.log('done with fetching JS files!')
  }).fail(function () {
    console.log('One fetch for a JS failed. :(')
  }).always(function () {
    chrome.storage.local.get(null, function (items) {
      console.log(items)
    })
  })
}

function createAjaxJSRequests () {
  var deferreds = []

  for (var ii = document.scripts.length - 1; ii>= 0; ii--) {
    if (document.scripts[ii].src === '') {continue}
    console.log('creating deferred for ' + document.scripts[ii].src)
    var src = document.scripts[ii].src
    deferreds.push(
      $.ajax({
        url: document.scripts[ii].src,
        dataType: 'text'
      }).done(function (jsText) {
        //js[document.scripts[ii].src] = jsText
        chrome.storage.local.set({src: jsText}, function () {
          if (chrome.runtime.lastError) {
            console.log('There was an error saving the js data to localstorage')
          } else {
            console.log(src + ' source written to localStorage')
          }
        })
      }).fail(function (xhr, status, err) {
        console.log('An error occurred fetching ' + src)
        console.log(err)
        console.log(status)
        console.log(xhr)
        //js[document.scripts[ii].src] = '(An adblocker prevented WARCreate from capturing this file)'
      })
    )
  }
  return deferreds
}
