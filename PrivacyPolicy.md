# Privacy Policy

_Last updated: August 21, 2026_

WARCreate is a Google Chrome extension that creates Web ARChive (WARC) files from webpages at the user's request. This policy explains what information WARCreate accesses, where that information goes, and the choices available to the user.

## Information WARCreate accesses

To create a WARC, WARCreate may process:

- The URL and rendered HTML of the page being archived.
- URLs and content for page resources, including images, stylesheets, and scripts.
- Links found in the page.
- HTTP request and response metadata associated with the page and its resources.
- User-provided extension settings, including a filename scheme, collection identifier, collection name, and optional upload destination.

HTTP headers can contain sensitive information. Depending on the page and browser behavior, captured request headers may include cookies, authorization information, or referrer data, and captured response headers may include cookies or other server metadata. Private or authenticated page content visible in the browser may also be included in a generated WARC. WARCreate does not sanitize the WARC before saving or uploading it.

## When information is processed

WARCreate collects the current page's rendered content and resource list only after the user clicks **Generate WARC**.

To preserve HTTP metadata needed for a WARC, WARCreate's background service worker observes HTTP and HTTPS request and response headers and temporarily associates them with browser tabs while the extension is enabled. This header processing can occur before the user clicks **Generate WARC**. The data is processed within the user's copy of Chrome and is not automatically sent to the WARCreate developer.

While creating an archive, WARCreate may request page resources directly from their original URLs. These requests can include the user's existing credentials or cookies for those resource hosts. The operators of those websites receive the requests under their own privacy policies.

The options page may also request a sequential-archiving specification from the source displayed in that page. The source operator may receive ordinary network information such as the user's IP address and request metadata.

## Storage and retention

WARCreate stores captured HTTP metadata in Chrome's local extension storage. It attempts to remove the metadata associated with a tab when that tab closes. Chrome may retain extension data until it is cleared or the extension is removed.

WARCreate settings are stored locally in the browser until the user changes them, resets them, clears extension data, or removes the extension.

By default, a generated WARC is saved through Chrome's download system to a location selected by the user. The user controls the downloaded file and its retention.

## Optional WARC uploads

Uploading is disabled by default. If the user enables uploading and supplies an upload destination, WARCreate sends the complete generated WARC to that destination. The WARC may contain webpage content, URLs, resource bodies, HTTP headers, cookies, authorization information, and collection metadata.

WARCreate does not control the security, storage, use, or retention practices of a user-selected upload destination. Users should upload only to a service they trust and should use an HTTPS destination when available. If an HTTP destination is selected, the upload may be transmitted without transport encryption.

## Sharing and developer access

WARCreate does not include advertising, analytics, or telemetry, and the WARCreate developer does not sell user information.

WARCreate does not automatically transmit browsing history, page content, generated WARCs, or locally stored settings to the WARCreate developer. Information leaves the browser only as needed to retrieve resources from their source websites, retrieve a user-visible sequential-archiving specification, or upload a WARC when the user explicitly enables and configures that feature.

## Permissions

WARCreate requests access to HTTP and HTTPS pages, tabs, web requests, local extension storage, downloads, and notifications. These permissions are used to collect the selected page and its resources, preserve request and response metadata, build and save the WARC, and report download or optional upload status.

## User choices

Users can:

- Leave uploading disabled and save WARCs locally.
- Review or change the upload destination and other settings from the extension's options page.
- Delete downloaded WARCs using their operating system or browser tools.
- Clear WARCreate's locally stored data or uninstall the extension through Chrome.

Because WARCs can contain sensitive or authenticated material, users should protect generated files and avoid sharing them with people or services that should not have access to the archived content.

## Changes to this policy

This policy may be updated when WARCreate's behavior or features change. Material revisions will be reflected by changing the "Last updated" date above.

## Contact

Questions or concerns about this policy can be sent to [warcreate@matkelly.com](mailto:warcreate@matkelly.com) or reported through the [WARCreate GitHub repository](https://github.com/machawk1/warcreate/issues).
