/*
🔹 1. Service Worker:

- A background JS thread that intercepts network requests.
- Helps cache static assets (logo, fonts, offline page).
- Works even when app is closed.

🔸 Use Cases:
  - Cache logo, CSS, JS for faster reload.
  - Show "offline" UI when network is down.

🔸 Example:
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request) || fetch(event.request)
  );
});

---

🔹 2. IndexedDB:

- Low-level, async browser database.
- Stores large structured data like objects, arrays.
- Supports offline data sync.

🔸 Example Use Case:
  - Save posts, messages, profile locally in Instagram Lite.

🔸 FSP 1 → 5 (Use Flow):
FSP 1: Save → Reels/post fetched → store in IndexedDB
FSP 2: Read → Load from IndexedDB if offline
FSP 3: Sync → If online again, sync with backend
FSP 4: Update → Update stale data with latest version
FSP 5: Delete → Remove old items beyond limit or TTL

🔸 Pseudo Code:
const db = indexedDB.open("myApp", 1);
db.objectStore("posts").add({ id: 1, content: "Post A" });

---

🔹 3. localStorage:

- Simple key-value storage in browser.
- Persistent until manually cleared.
- Sync and blocking (avoid for large data).

🔸 Use Cases:
  - Store theme, language, auth token (if no expiration).
  - Save UI preferences.

🔸 Example:
localStorage.setItem("theme", "dark");

❌ Not secure for sensitive data (e.g., passwords)

---

🔹 4. Cookies:

- Small key-value pairs sent with every HTTP request.
- Can be `HttpOnly`, `Secure`, and `SameSite` protected.
- Can expire automatically.

🔸 Use Cases:
  - Auth session ID
  - Remember login
  - User preferences

🔸 Example:
Set-Cookie: session_id=abc123; Secure; HttpOnly; SameSite=Strict;

✔ Use for: Auth/session data (short-lived)
❌ Don't store big data or sensitive info without encryption

---

🔹 Summary:

| Feature         | Storage Used     | Best For                              |
|------------------|------------------|----------------------------------------|
| Logo, CSS, JS    | Service Worker    | Fast reloading, offline support       |
| Reels, DMs       | IndexedDB         | Large, structured offline data        |
| Theme, Language  | localStorage      | Small persistent client settings      |
| Session/Auth     | Cookies           | Secure transmission with HTTP headers |

✅ Combine all these smartly for best UX and offline support!
*/
