/*
- 🔹 What is I18N (Internationalization)?

1. Prepares the app to support multiple languages and regions.
2. Strings and formats are externalized (not hardcoded).
3. Done once – reused across all locales.

- 🔹 What is L10N (Localization)?

1. Adapts the app to a specific language/region.
2. Includes translations, date/time/number formats, and layout changes.
3. Also supports RTL (right-to-left) languages like Arabic.

- 🔹 Key Concepts:

1. Language files → Store translations (e.g., en.json, hi.json).
2. Locale detection → From browser, OS, or user profile.
3. Fallback → Use default language if translation is missing.
4. RTL Support → Use `dir="rtl"` and test layouts.

- 🔹 Frontend:

1. Use libraries like `react-i18next`, `Vue I18n`.
2. Wrap text like: `t('welcome.message')`
3. Add language switcher in settings.

- 🔹 Backend:

1. Accept locale in request (e.g., `Accept-Language`).
2. Tag content (posts, bios) with language info.
3. Return results in user’s preferred language.

- 🔹 Tools:

1. Lokalise, Phrase, Crowdin → Manage translations.
2. `Intl` API → Format dates, numbers by locale.

- 🔹 Example:

1. en-US → English (US)
2. hi-IN → Hindi (India)
3. ar-SA → Arabic (Saudi Arabia) – uses RTL

- 🔹 Quick Tips:

1. Always set a default language.
2. Keep translations async and cache them.
3. Test both LTR and RTL layouts.

*/
