export const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "react-crx-template",
  homepage_url: "",
  description: "",
  version: "0.0.1",
  // icons: {
  //   "16": "icon/icon-16.png",
  //   "32": "icon/icon-32.png",
  //   "48": "icon/icon-48.png",
  //   "64": "icon/icon-64.png",
  //   "128": "icon/icon-128.png",
  // },
  action: {
    default_title: "Chrome Extension",
    default_popup: "./popup.html",
    // default_icon: {
    //   "16": "icon/icon-16.png",
    //   "32": "icon/icon-32.png",
    //   "48": "icon/icon-48.png",
    //   "64": "icon/icon-64.png",
    //   "128": "icon/icon-128.png",
    // },
  },
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'; frame-ancestors 'none';",
  },
  externally_connectable: {
    ids: ["*"],
  },
  options_page: "./options.html",
  permissions: ["storage", "activeTab", "scripting", "tabs"],
  background: {
    service_worker: "./background.ts",
    type: "module",
  },
  content_scripts: [
    {
      js: ["script.ts"],
      matches: ["https://developer.chrome.com/docs/extensions/*", "https://developer.chrome.com/docs/webstore/*"],
      // css: ["content.styles.css"],
    },
  ],
  commands: {},
}
