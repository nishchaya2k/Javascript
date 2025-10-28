/*
- 🔹 Rendering:

1. Server-side Rendering (SSR):
   - Renders pages on server before sending to client.
   - Faster first load, better SEO.
   - Example: Public profile page pre-rendered.

2. Client-side Rendering (CSR):
   - Browser renders pages using JavaScript.
   - Good for interactive apps like Reels, Messages.
   - Example: Feed loads and updates dynamically.

3. Hydration:
   - Combines SSR and CSR.
   - Server sends HTML + JS, then JS makes page interactive.

4. Lazy Rendering:
   - Render only visible UI parts first.
   - Example: Reels load videos as user scrolls (virtualization + lazy load).

---

- 🔹 Accessibility (A11Y):

1. What is Accessibility?
   - Making app usable for people with disabilities.
   - Includes screen readers, keyboard navigation, color contrast.

2. Key Accessibility Practices:

   - Use semantic HTML tags (`<button>`, `<nav>`, `<header>`)
   - Add ARIA labels (`aria-label`) for screen readers.
   - Ensure keyboard navigability (tab order, focus states).
   - Use high contrast colors and scalable fonts.
   - Provide captions/subtitles for videos (Reels).

3. Examples:

   - Buttons have descriptive labels:
     `<button aria-label="Like post">❤️</button>`
   - Images have alt text:
     `<img src="profile.jpg" alt="Profile picture of user">`
   - Keyboard users can navigate Stories using arrow keys.

---

- 🔹 Performance & Accessibility Together:

1. Avoid auto-playing videos with sound (annoying and inaccessible).
2. Allow users to pause or stop animations.
3. Ensure UI updates are announced by screen readers (use ARIA live regions).

---

- 🔹 Summary:

✅ Use SSR or CSR as needed for speed & interactivity  
✅ Render only what's needed (lazy render)  
✅ Follow accessibility standards for inclusivity  
✅ Use semantic HTML + ARIA attributes  
✅ Test with keyboard and screen readers  
✅ Caption videos and provide alt text for images

*/
