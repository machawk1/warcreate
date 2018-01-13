<h2 align="center">
 <a href="https://github.com/machawk1/mink"><img src="https://cdn.rawgit.com/machawk1/warcreate/master/icons/icon-128.png" alt="WARCreate logo" /></a><br />WARCreate</h2>
 <p align="center" style="font-weight: normal;"><em>"Create <a href="http://www.iso.org/iso/catalogue_detail.htm?csnumber=44717">WARC</a> files from any webpage"</em></p>

<p align="center">
  <a href="https://travis-ci.org/machawk1/warcreate"><img src="https://travis-ci.org/machawk1/warcreate.svg" alt="TravisCI build status" /></a>
  <a href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" /></a>
  <br /><a href="https://chrome.google.com/webstore/detail/warcreate/kenncghfghgolcbmckhiljgaabnpcaaa?hl=en&gl=US"><img src="https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png"></a>
</p>

WARCreate is a Google Chrome extension with an aim to be able to "Create [WARC](http://www.iso.org/iso/catalogue_detail.htm?csnumber=44717) files from any webpage".

With WARCs normally being limited to be generated by Internet Archive's [Heritrix](https://github.com/internetarchive/heritrix3) Archival Crawler, providing another means of generating these files from webpages 
opens the door to
+ Preserving content not accessible to crawlers (e.g., deep web contents)
+ Circumventing the complication and overhead needed to setup a Heritrix instance by an end-user
+ Allowing a webpage to be interacted with (e.g., Facebook comments unrolled) prior to preservation, ensuring content that might not be initially present in a page is available to be captured.

...among many other use cases.

WARCreate is currently in active development though has gone through various release and retraction periods due to changes in the Google Chrome extension API and rules controlling extension distribution.

The original idea and prototype was [published](http://dl.acm.org/citation.cfm?id=2232930) in the Joint Conference on Digital Libraries 2012 (JCDL '12) Proceedings.

## Install ##

The latest stable binary can be [downloaded from the Chrome Web Store](https://chrome.google.com/webstore/detail/warcreate/kenncghfghgolcbmckhiljgaabnpcaaa?hl=en&gl=US).

## Sample Usage ##
(TODO)

## Contact ##
WARCreate is a project of the <a href="http://ws-dl.cs.odu.edu">Web Science and Digital Libraries (WS-DL) research group at Old Dominion University (ODU)</a>, created by Mat Kelly.

For support e-mail warcreate@matkelly.com or tweet to us at <a href="https://twitter.com/machawk1">@machawk1</a> and/or <a href="https://twitter.com/WebSciDL">@WebSciDL</a>.

## License ##
MIT
