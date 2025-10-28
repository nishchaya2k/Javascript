/*
🔹 1. Lazy Loading:

- Loads content only when needed (e.g., when it's visible).
- Reduces initial load time and saves bandwidth.

🔸 Example:
  <img loading="lazy" src="post.jpg" />
  → Image loads only when scrolled into view.

---

🔹 2. Bundling:

- Combines many JS/CSS files into one or few files.
- Reduces number of HTTP requests = faster load.

🔸 Tools:
  - Webpack, Vite, Rollup

---

🔹 3. Minification:

- Removes whitespace, comments, and shortens variable names.
- Makes JS/CSS files smaller = faster load.

🔸 Tools:
  - Terser, UglifyJS for JS
  - CSSNano for CSS

---

🔹 4. Infinite Scroll, Pagination, Virtualization:

✔ Infinite Scroll:
  - Automatically loads more items as user scrolls.
  - Used in Feed, Explore, Reels.

✔ Pagination:
  - Load in chunks with page numbers (1, 2, 3…).
  - Good for profile posts, search.

✔ Virtualization:
  - Renders only visible items in long lists.
  - Example: react-window or react-virtualized

🔸 Real Example:
  - Instagram Feed = Infinite Scroll + Virtualization

---

🔹 5. Resize: Throttle, Debounce, ResizeObserver:

✔ Debounce:
  - Delays function until user stops resizing.

✔ Throttle:
  - Limits function to run every X ms (e.g., 100ms).

✔ ResizeObserver:
  - API that listens to element size changes.

🔸 Example:
  - Adjust layout when sidebar resizes.

---

🔹 6. devicePixelRatio:

- Checks screen sharpness (scale of physical pixels to CSS pixels).
- Used to load higher-quality images on retina displays.

🔸 Example:
  if (window.devicePixelRatio > 1) {
     loadHighResImage();
  }

---

🔹 7. HTTP Caching Headers:

✔ Last-Modified:
  - Server tells when file was last changed.
  - Browser asks "Has it changed since?" — if not, uses cache.

✔ Expires:
  - Hard expiry time (e.g., "Expires: Sat, 01 Nov 2025").

✔ Cache-Control:
  - Controls how, where, and how long content is cached.
  - Example: "Cache-Control: public, max-age=3600"

🔸 Example:
  - Images, CSS, JS files get long expiry headers.

---

🔹 8. Resource Hinting: prefetch, preload:

✔ preload:
  - Load resource early (used soon).
  - Example: <link rel="preload" as="image" href="cover.jpg">

✔ prefetch:
  - Load resource in background (used later).
  - Example: <link rel="prefetch" href="/profile.js">

---

🔹 9. fetchPriority:

- Set priority for loading resources (images, scripts).

🔸 Example:
  <img src="main.jpg" fetchpriority="high" />
  → Load this image first.

Values: `high`, `low`, `auto`

---

🔹 Summary:

✅ Lazy Load → less initial work  
✅ Bundle & Minify → smaller & faster files  
✅ Cache smartly with headers  
✅ Optimize scroll/render with virtualization  
✅ preload critical resources, prefetch future ones  
✅ Tune resize & responsive behavior

*/
