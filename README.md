<!-- markdownlint-disable MD013 MD033 MD041 -->

<p align="center">
  <a href="https://warcreate.com">
    <img src="icons/icon-128.png" width="112" height="112" alt="WARCreate box and download-arrow logo">
  </a>
</p>

<h1 align="center">WARCreate</h1>

<p align="center">
  <strong>Create WARC files from the webpages you can see in your browser.</strong>
</p>

<p align="center">
  <a href="https://warcreate.com">Website</a> ·
  <a href="https://chrome.google.com/webstore/detail/warcreate/kenncghfghgolcbmckhiljgaabnpcaaa?hl=en&gl=US">Chrome Web Store</a> ·
  <a href="https://github.com/machawk1/warcreate/issues">Issues</a> ·
  <a href="PrivacyPolicy.md">Privacy</a>
</p>

<p align="center">
  <a href="https://github.com/machawk1/warcreate/actions/workflows/lint.yml"><img src="https://github.com/machawk1/warcreate/actions/workflows/lint.yml/badge.svg" alt="Lint status"></a>
  <a href="https://github.com/machawk1/warcreate/tags"><img src="https://img.shields.io/github/v/tag/machawk1/warcreate?label=release&sort=semver" alt="Latest release tag"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/machawk1/warcreate" alt="MIT license"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="JavaScript Standard Style"></a>
</p>

WARCreate is an open-source Google Chrome extension that packages the current state of a webpage into a [Web ARChive (WARC)](https://www.loc.gov/preservation/digital/formats/fdd/fdd000236.shtml) file. It is designed for pages that are easiest to preserve from a browser—for example, content that appears after interaction, personalization, or authentication.

Unlike a traditional crawler, WARCreate lets you prepare the page first and then capture the rendered document, supporting resources, links, and available HTTP metadata in a standard archival container.

## Why WARCreate?

- **Capture the browser-visible state.** Interact with a page, reveal dynamic content, and preserve the result.
- **Create a standard WARC.** Package the page and related records in a format used by web-archiving tools.
- **Archive locally by default.** Download the generated WARC and control where it is stored.
- **Preserve hard-to-crawl content.** Archive pages available only within a browser session, when you are authorized to do so.
- **Avoid crawler infrastructure.** Create a focused archive without installing or operating a full web crawler such as [Heritrix](https://github.com/internetarchive/heritrix3).
- **Use open-source software.** Inspect, test, and improve the capture process under the MIT License.

> [!NOTE]
> WARCs can contain private page content and sensitive HTTP metadata. Only archive material you are authorized to preserve, protect generated files appropriately, and review the [Privacy Policy](PrivacyPolicy.md) before using an upload destination.

## How it works

1. Open the page you want to preserve.
2. Wait for dynamic content to load and interact with the page as needed.
3. Open WARCreate and select **Generate WARC**.
4. WARCreate gathers the rendered page, discovered resources, outlinks, and available request and response metadata.
5. The extension assembles a `.warc` file and, by default, saves it to your computer.
6. Open the WARC with compatible replay software.

The capture is a snapshot of what WARCreate can access at that moment. Cross-origin restrictions, short-lived resources, streaming media, service-worker behavior, or site-specific protections can prevent some resources from being included.

## Installation

### Chrome Web Store

Install the published version from the [Chrome Web Store](https://chrome.google.com/webstore/detail/warcreate/kenncghfghgolcbmckhiljgaabnpcaaa?hl=en&gl=US), when available for your version of Chrome.

<p>
  <a href="https://chrome.google.com/webstore/detail/warcreate/kenncghfghgolcbmckhiljgaabnpcaaa?hl=en&gl=US">
    <img src="docs/chromestore.png" width="206" height="58" alt="Available in the Chrome Web Store">
  </a>
</p>

### Load from source

No compilation or bundling step is required.

```bash
git clone https://github.com/machawk1/warcreate.git
cd warcreate
```

Then:

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose the repository root—the directory containing `manifest.json`.
5. Reload any already-open webpage before testing the extension.

## Using generated WARCs

A WARC needs replay software to display its archived content. Useful starting points include:

- [Web Archiving Integration Layer (WAIL)](https://matkelly.com/wail) — a desktop application that bundles tools for collecting and replaying web archives.
- [Wayback](https://github.com/internetarchive/wayback) — the Internet Archive's open-source Java implementation for accessing archived web content.

Keep the original WARC as the preservation copy. If a replay tool creates indexes or other derived files, store those separately so the source archive remains unchanged.

## Extension options

WARCreate's options page supports:

- Custom timestamp-based filename schemes.
- Optional collection identifiers and names stored as WARC metadata.
- Local download, which is the default behavior.
- An optional user-configured upload destination.

Uploading sends the complete WARC to the configured destination. Use HTTPS and select only a service you trust; see the [Privacy Policy](PrivacyPolicy.md) for details.

## Development

### Requirements

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) and npm for linting
- Google Chrome or a compatible Chromium browser for extension testing

### Install development dependencies

The repository intentionally does not commit a package lock. The following command installs only the linting dependencies without creating one:

```bash
npm install --no-package-lock
```

### Run checks

```bash
npm test
npm run lint
```

Apply automatic JavaScript Standard Style fixes with:

```bash
npm run linting-errors-fix
```

### Repository layout

| Path | Purpose |
| --- | --- |
| `manifest.json` | Chrome extension manifest and permissions |
| `html/` | Popup, options, background, and WARC-related extension pages |
| `js/` | Capture, WARC generation, options, and bundled browser scripts |
| `icons/` | Extension icons and notification assets |
| `docs/` | Static source for [warcreate.com](https://warcreate.com) |
| `.github/workflows/` | Continuous-integration workflows |

### Manual testing checklist

When changing capture or WARC-generation behavior, test at least:

- A basic static HTML page.
- A page with external CSS, JavaScript, and images.
- A page containing relative and absolute resource URLs.
- A dynamically updated page after interacting with it.
- A page with redirects or failed resource requests.
- Local WARC download and, if modified, the optional upload path.
- Replay of the resulting WARC in at least one compatible tool.

Do not attach a WARC made from a private or authenticated page to a public issue.

## Contributing

Bug reports, focused pull requests, and reproducible test cases are welcome.

1. Search the [existing issues](https://github.com/machawk1/warcreate/issues) before opening a new one.
2. Fork the repository and create a branch for one focused change.
3. Run the lint checks and manually load the extension before submitting a pull request.
4. Explain the Chrome version, WARCreate version or commit, test page characteristics, expected behavior, and observed behavior.

When a public test URL is not safe or practical, provide a minimal local HTML fixture that reproduces the problem without disclosing private content.

## Research and citation

The original WARCreate idea and prototype were published at the 2012 ACM/IEEE Joint Conference on Digital Libraries:

> Mat Kelly and Michele C. Weigle. **WARCreate — Create Wayback-Consumable WARC Files from Any Webpage.** In *Proceedings of the ACM/IEEE Joint Conference on Digital Libraries (JCDL)*, pages 437–438, Washington, DC, June 2012. [https://doi.org/10.1145/2232817.2232930](https://doi.org/10.1145/2232817.2232930)

```bibtex
@INPROCEEDINGS{warcreate-jcdl2012,
  AUTHOR    = {Mat Kelly and Michele C. Weigle},
  TITLE     = {{WARCreate} -- Create Wayback-Consumable WARC Files from Any Webpage},
  BOOKTITLE = {Proceedings of the ACM/IEEE Joint Conference on Digital Libraries (JCDL)},
  PAGES     = {437--438},
  MONTH     = {June},
  YEAR      = {2012},
  ADDRESS   = {Washington, DC},
  DOI       = {10.1145/2232817.2232930}
}
```

WARCreate was created by [Mat Kelly](https://matkelly.com/) as a project of the Web Science and Digital Libraries research group at Old Dominion University.

## Support and contact

- Report bugs and request features through [GitHub Issues](https://github.com/machawk1/warcreate/issues).
- For other project questions, email [warcreate@matkelly.com](mailto:warcreate@matkelly.com).

Please do not send private page content, credentials, cookies, or sensitive WARC files in a support request.

## License

WARCreate is available under the [MIT License](LICENSE).
