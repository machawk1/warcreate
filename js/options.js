// Saves options to localStorage.
function saveOptions () {
  var handling
  localStorage['handlingMethod'] = handling

  if (document.getElementById('addCollectionMetadataCheckbox').checked) {
    localStorage['collectionId'] = $('#collectionId').val()
    localStorage['collectionName'] = $('#collectionName').val()
  } else {
    localStorage.removeItem('collectionId')
    localStorage.removeItem('collectionName')
  }

  // Update status to let user know options were saved.
  var status = $('#status')
  status.html('Options Saved.')
  status.css('display', 'block')
  setTimeout(function () {
    $('#status').fadeOut()
  }, 750)
}

// Restores select box state to saved value from localStorage.
function restoreOptions () {
  if (localStorage['handlingMethod'] === 'save') {
    document.getElementById('output_save').checked = 'checked'
    document.getElementById('output_display').removeAttribute('checked')
  } else if (localStorage['handlingMethod'] === 'display') {
    document.getElementById('output_save').removeAttribute('checked')
    document.getElementById('output_display').checked = 'checked'
  }

  // console.log((localStorage)

  if (localStorage.getItem('collectionId') || localStorage.getItem('collectionName')) {
    // console.log(("Restoring collection options!")
    $('#collectionId').val(localStorage['collectionId'])
    $('#collectionName').val(localStorage['collectionName'])
    $('#addCollectionMetadataCheckbox').attr('checked', 'checked')
  }

// waybackWarcSource.value = warcSRC
}

function clearOptions () {
  localStorage['warcSRC'] = ''
  restoreOptions()
  document.getElementById('waybackWarcSource').value = 'sdf'
}

function checkURI (uri) {
  var req = new XMLHttpRequest()
  try {
    req.open('GET', uri, false)
    req.send(null)
    return req.status
  } catch (e) {
    return -1
  }
}

var lastSavedStateString = '' // string representation of the last saved state of the form inputs
function setSaveChangesButtonEnabledBasedOnOptionsChange () {
  if (lastSavedStateString !== '') {
    var currentSavedState = $('#filenameScheme').val() +
      $('#uploadTo').val() +
      $('#collectionId').val() +
      $('#collectionName').val() +
      $('#postGeneration_save').is(':checked') +
      $('#postGeneration_upload').is(':checked') +
      $('#addCollectionMetadataCheckbox').is(':checked')

    if (lastSavedStateString === currentSavedState) {
      $('#save').attr('disabled', 'disabled')
    } else {
      $('#save').removeAttr('disabled')
    }
  } else { // set the initial state
    lastSavedStateString = $('#filenameScheme').val() +
      $('#uploadTo').val() +
      $('#collectionId').val() +
      $('#collectionName').val() +
      $('#postGeneration_save').is(':checked') +
      $('#postGeneration_upload').is(':checked') +
      $('#addCollectionMetadataCheckbox').is(':checked')

    $('#save').attr('disabled', 'disabled')
    $('#filenameScheme').on('keyup', setSaveChangesButtonEnabledBasedOnOptionsChange)
    $('#uploadTo').on('keyup', setSaveChangesButtonEnabledBasedOnOptionsChange)
    $('#postGeneration_save').on('click', setSaveChangesButtonEnabledBasedOnOptionsChange)
    $('#postGeneration_upload').on('click', setSaveChangesButtonEnabledBasedOnOptionsChange)

    $('#addCollectionMetadataCheckbox').on('click', setSaveChangesButtonEnabledBasedOnOptionsChange)
    $('#collectionId').on('keyup', setSaveChangesButtonEnabledBasedOnOptionsChange)
    $('#collectionName').on('keyup', setSaveChangesButtonEnabledBasedOnOptionsChange)
  }
}

function setupButtonFunctionalityAndVisibility () {
  $('#postGeneration_save').on('click', function () {
    $('#uploadTo').attr('disabled', 'disabled')
    $('#filenameScheme').removeAttr('disabled')
    $('#exampleFileName').show()
  })
  $('#postGeneration_upload').on('click', function () {
    $('#uploadTo').removeAttr('disabled')
    $('#filenameScheme').attr('disabled', 'disabled')
    $('#exampleFileName').hide()
  })
  $('#restoreDefaults').on('click', function () {
    $('#uploadTo').val('http://warcreate.com/warcs/').attr('disabled', 'disabled')
    $('#postGeneration_save').prop('checked', 'checked')
    $('#postGeneration_upload').removeAttr('checked')
    $('#filenameScheme').val('YYYYMMDDHHMMssSSS')
    $('#collectionId').val('')
    $('#collectionName').val('')
    $('#addCollectionMetadataCheckbox').removeAttr('checked')
    showFilenameExample()
    setSaveChangesButtonEnabledBasedOnOptionsChange()
  })
  $('#save').on('click', function () {
    var uploadToURI
    var filenameScheme
    if ($('#postGeneration_upload').prop('checked')) {
      uploadToURI = $('#uploadTo').val()
      filenameScheme = ''
    } else {
      uploadToURI = ''
      filenameScheme = $('#filenameScheme').val()
    }

    localStorage['uploadTo'] = uploadToURI
    localStorage['filenameScheme'] = filenameScheme

    localStorage['collectionId'] = $('#collectionId').val()
    localStorage['collectionName'] = $('#collectionName').val()

    // TODO: give feedback that options have been saved
    saveOptions()
  })
}

function fetchSocialStandardSpecification () {
  $.ajax({
    url: $('#sequentialArchivingSource').val()
  })
    .done(function (data) {
      // console.log(("Done fetching base spec!");
      var specs = []
      for (var homepage = 0; homepage < $(data).children().children().children('homepage').length; homepage++) {
        // convert the XML spec to JS objects. This is ridiculously verbose. There has to be a cleaner way.
        var str = $(data).children().children()[homepage]
        var chiln = $(str).children()
        var obj = {}
        for (var ii = 0; ii < chiln.length; ii++) {
          obj[chiln[ii].tagName] = chiln[ii].textContent
        }
        specs.push(obj)

        $('#supportedSequentialArchivingSites').append(`<option title="${obj.specification}">${obj.homepage}</option>`)
      }
      // attempt to fetch and parse a site-specific hierarchy specification so the section of the website can be extracted and used as the basis of a crawl
      $('#supportedSequentialArchivingSites').change(function () {
        var specURI = $('#supportedSequentialArchivingSites option:selected').attr('title')
        // console.log((specURI)
        $.ajax({
          url: specURI
        })
          .done(function (data2) {
            var specAsObj = jQuery.parseJSON(xml2json(data2, ''))
            var siteSections = specAsObj.socialMediaWebsite.sections.socialMediaWebsiteSection
            $('#sections').empty() // Kill the children (of the section list)
            for (var sectionI = 0; sectionI < siteSections.length; sectionI++) {
              // console.log((siteSections[sectionI].name + " " +siteSections[sectionI].url)
              $('#sections').append(`<li><span class="name">${siteSections[sectionI].name}</span><span class="url">${siteSections[sectionI].url}</span>`)
            }
          })
      })
    })
    .error(function (data) {
      // console.log(("There was an error in fetching the spec.")
    })
}

// this doesn't work but I wanted to use it for debugging
// ties up the browser for some reason
function displayLocalStorageData () {
  // console.log(("Local Storage, ho!")
  var XX = ''
  for (var i = 0; i < localStorage.length; i++) {
    XX += localStorage.key(i) + '=[' + localStorage.getItem(localStorage.key(i)) + ']'
    break
  }
  // console.log((XX)
}

function showFilenameExample () { // when the file format scheme changes, update the example
  $('#exampleFileName').html('Example: ' + moment().format($('#filenameScheme').val()) + '.warc')
}

function populatePendingContentTable () {
  var targetTable = $('#pendingContentTable')
  $('#pendingContentTable .data').remove()
  for (var key = 0; key < Object.keys(responseHeaders).length; key++) {
    var k = Object.keys(responseHeaders)[key]
    var str = `<tr class="data"><td>${k}</td><td class='#req'>${requestHeaders[k].length}</td><td class='#res'>${responseHeaders[k].length}</td></tr>`
    targetTable.append(str)
    str = ''
  }

// targetTable.remove(".data")
// console.log(responseHeaders)
// console.log(Object.keys(responseHeaders))
// console.log(requestHeaders)
}

window.onload = function () {
  setupButtonFunctionalityAndVisibility()
  $('#filenameScheme').on('keyup', showFilenameExample) // bind example display to text field change

  if (localStorage['uploadTo'] && localStorage['uploadTo'].length > 0) {
    $('#uploadTo').removeAttr('disabled')
    $('#postGeneration_upload').prop('checked', 'checked')
    $('#postGeneration_save').removeAttr('checked')
    $('#uploadTo').val(localStorage['uploadTo'])

    // hide/disable the "save to downloads" options if the user's current setting is "upload to"
    $('#filenameScheme').attr('disabled', 'disabled')
    $('#exampleFileName').hide()
  } else if (localStorage['filenameScheme'] && localStorage['filenameScheme'].length > 0) {
    $('#filenameScheme').val(localStorage['filenameScheme'])
  }

  $('#collectionId').on('input', function (event) { // require the collection id to only contain numbers
    this.value = this.value.replace(/[^0-9]/g, '')
  })

  setSaveChangesButtonEnabledBasedOnOptionsChange() // set enabled status of the save button initially
  showFilenameExample() // fire the keyup event onload

  restoreOptions()

  // fetch socialstandard data
  fetchSocialStandardSpecification()

  // show data ready to be used for WARC creation
  // populatePendingContentTable()
  $('#getPendingContent').click(function () { populatePendingContentTable() })
}
