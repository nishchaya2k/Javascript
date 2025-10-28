/*
- 🔹 1. Virtualization:

1. Only renders items visible on screen (e.g., first 10 out of 10,000).
2. Saves memory and improves scroll speed.

🔸 Example:
- Reels list → show only visible videos using react-window.

🔸 Code:
<FixedSizeList height={500} itemSize={100} itemCount={1000}>
  {({ index }) => <PostItem data={posts[index]} />}
</FixedSizeList>

---

- 🔹 2. Polling:

1. Repeatedly fetch data at intervals (e.g., every 5 seconds).
2. Used when WebSocket is not available.

🔸 Example:
- Check for new DMs or Notifications every 5 seconds.

🔸 Code:
useEffect(() => {
  const interval = setInterval(fetchNewMessages, 5000);
  return () => clearInterval(interval);
}, []);

---

- 🔹 3. Intersection Observer:

1. Detects when an element enters or exits the screen.
2. Used for lazy loading images or infinite scroll.

🔸 Example:
- Load more posts when user scrolls near bottom.
- Load Reels when they appear on screen.

🔸 Code:
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) loadMorePosts();
});
observer.observe(lastPostRef);

---

- 🔹 4. Web Worker:

1. Runs JS code in background (not on UI thread).
2. Used for heavy work like image processing or filtering.

🔸 Example:
- Compress image before upload so UI doesn’t freeze.

🔸 Code (pseudo):
const worker = new Worker('compressImage.js');
worker.postMessage(file);

---

- 🔹 5. Service Worker:

1. Runs in background, caches assets and API responses.
2. Supports offline mode and faster load times.

🔸 Example:
- Cache user profile and last 10 posts for offline view.

🔸 Code (pseudo):
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) || fetch(event.request)
  );
});

---

- 🔹 6. Debounce / Throttle:

1. Debounce → wait after typing before firing API.
2. Throttle → limit event handling rate.

🔸 Example:
- Search bar → call API only after user stops typing.
- Resize event → throttle to run every 100ms.

🔸 Code:
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

---

- 🔹 7. Lazy Loading:

1. Load images/videos only when needed.
2. Saves bandwidth and speeds up initial load.

🔸 Example:
- Only load Reels thumbnail when it's about to show.

🔸 Code:
<img loading="lazy" src="reel-thumbnail.jpg" />

---

- 🔹 8. requestAnimationFrame:

1. Syncs animations with screen refresh rate (60fps).
2. Used for smooth scrolling or transitions.

🔸 Example:
- Smooth scroll animation or loading spinner.

🔸 Code:
function animateScroll() {
  const step = () => {
    // update scroll position
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

---

- 🔹 Summary:

✅ Use Virtualization for large lists  
✅ Use Lazy Load + Intersection Observer for feeds and media  
✅ Use Polling or WebSockets for real-time updates  
✅ Offload heavy work using Web Workers  
✅ Improve perceived speed with Service Workers  
✅ Use Debounce in search and Throttle on scroll/resize

*/
