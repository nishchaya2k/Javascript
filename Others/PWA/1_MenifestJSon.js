/*
=================================================
MANIFEST.JSON NOTES
=================================================


🔷 WHAT IS MANIFEST.JSON
-------------------------------------------------

- manifest.json is a configuration file.

- It tells browser:
  how application should appear
  and behave.


=================================================
WHERE IT IS USED
=================================================

1. PWA (Progressive Web App)
2. Chrome Extensions


=================================================
WHY WE NEED IT
=================================================

Without manifest.json:
-------------------------------------------------

Browser does not know:
- app name
- app icon
- permissions
- launch behavior
- app configuration

So application cannot be configured properly.


=================================================
MANIFEST IN PWA
=================================================

Purpose:
-------------------------------------------------

Makes website behave like installable app.


It defines:
-------------------------------------------------

✅ app name
✅ icons
✅ theme colors
✅ splash screen
✅ standalone mode
✅ start URL


Example:
-------------------------------------------------

{
  "name": "Notes App",

  "display": "standalone"
}


=================================================
MANIFEST IN CHROME EXTENSIONS
=================================================

Purpose:
-------------------------------------------------

Tells browser how extension should work.


It defines:
-------------------------------------------------

✅ permissions
✅ popup UI
✅ background scripts
✅ content scripts
✅ extension metadata


Example:
-------------------------------------------------

{
  "manifest_version": 3,

  "permissions": ["tabs"],

  "background": {
    "service_worker": "background.js"
  }
}


=================================================
IMPORTANT DIFFERENCE
=================================================

PWA Manifest:
-------------------------------------------------

Used for:
→ installable web applications


Chrome Extension Manifest:
-------------------------------------------------

Used for:
→ browser extension configuration


=================================================
IMPORTANT UNDERSTANDING
=================================================

manifest.json:
-------------------------------------------------

❌ not executable code
❌ does not cache files
❌ does not provide offline support

It ONLY provides:
-------------------------------------------------

✅ metadata/configuration


=================================================
INTERVIEW ONE-LINER
=================================================

"manifest.json is a configuration file used in
PWAs and browser extensions to define how the
application should appear and behave."

*/