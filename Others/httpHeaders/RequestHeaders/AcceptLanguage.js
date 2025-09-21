/*
- 🔹 Accept-Language Header:

1.  Informs the server about the client’s **language preferences**.
2.  Used for **localization** — server can return content in the preferred language(s).
3.  Languages are listed using IETF language tags (e.g., en-US, fr, hi-IN).
4.  Format:
    Accept-Language: <language-tag>[, <language-tag>;q=<weight>]

- 🔹 Example:
    Accept-Language: en-US,en;q=0.9,fr;q=0.8,hi;q=0.6

- 🔹 Use Cases:

1.  Multilingual websites:
    > Server detects language preference and serves localized content.
2.  Web apps:
    > Tailor UI text and messages to user’s preferred language.
3.  Search engines:
    > Deliver region/language-specific results.

- 🔹 q-values (Quality Values):

1.  Indicate priority or preference.
2.  Value range: 0.0 (lowest) to 1.0 (highest).
3.  Server uses highest weighted language it supports.

- 🔹 Key Points:

1.  Enhances user experience with **localized** content.
2.  Not a guarantee — server may ignore or fall back to default language.
3.  Sent automatically by browsers based on system or browser settings.
4.  Server can respond with:
    → Content-Language: <language-tag>

*/
