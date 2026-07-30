/*
==============================================================================
INTERSECTION OBSERVER (IO) — COMPLETE NOTES
==============================================================================

🔹 1. WHAT IS INTERSECTION OBSERVER?

- IntersectionObserver is a browser API that observes the visibility of an
  element relative to the viewport (or another scrollable container).

- Instead of continuously checking an element's position while scrolling,
  the browser notifies us only when the element enters or leaves the
  visible area.

Definition

- Detects when an element becomes visible or hidden.


🔹 2. WHY DO WE NEED IT?

Problem

- Many features depend on knowing when an element becomes visible.

Without IntersectionObserver

- Listen to the scroll event.
- Calculate element position manually.
- Check visibility on every scroll.
- More code.
- Needs debounce/throttle.
- Easier to accidentally trigger duplicate API calls.

With IntersectionObserver

- Browser tracks visibility.
- Callback runs only when visibility changes.
- Cleaner code.
- Better performance.


🔹 3. REAL-LIFE ANALOGY

Motion Sensor

Without Motion Sensor

Security Guard:

"Did someone enter?"
"Did someone enter?"
"Did someone enter?"

↓

Checks continuously.

------------------------------------------------

With Motion Sensor

Person enters

↓

Motion Sensor detects movement

↓

Notification

IntersectionObserver works exactly like the motion sensor.
It reacts only when visibility changes.


🔹 4. SYNTAX

const observer = new IntersectionObserver(callback, options);

observer.observe(targetElement);


callback

- Executes whenever visibility changes.

options

- root
- threshold
- rootMargin


🔹 5. OPTIONS

root

- Area used for visibility detection.
- Default = Viewport.
- Can also be a scrollable container.

------------------------------------------------

threshold

Controls how much of the element should be visible.

0      -> Fires when even 1 pixel becomes visible.

0.5    -> Fires when 50% is visible.

1      -> Fires when the entire element is visible.

------------------------------------------------

rootMargin

Expands or shrinks the observation area.

Example

rootMargin: "100px"

Meaning

- Trigger 100px BEFORE the element reaches the viewport.

Useful for

- Infinite Scroll
- Lazy Loading
- Preloading


🔹 6. IMPORTANT PROPERTY

entry.isIntersecting

true

- Element is visible.

false

- Element is outside the visible area.


🔹 7. METHODS

observe()

- Start observing an element.

--------------------------------

unobserve()

- Stop observing one element.

--------------------------------

disconnect()

- Stop observing every observed element.


🔹 8. BEST REAL-LIFE EXAMPLE

Infinite Scroll

Page Loads

↓

Fetch first 10 products

↓

Render products

↓

Observe Loader (Sentinel)

↓

User Scrolls

↓

Loader becomes visible

↓

IntersectionObserver callback executes

↓

Fetch next 10 products

↓

Append products

↓

Repeat

Instead of continuously checking the scroll position,
we simply observe the loader element.


🔹 9. OTHER REAL-LIFE EXAMPLES

1. Infinite Scroll

- Load next page when loader becomes visible.

------------------------------------------------

2. Lazy Loading Images

- Download images only when they are about to appear.

------------------------------------------------

3. Scroll Reveal Animation

- Add "show" class when a card enters the viewport.

------------------------------------------------

4. Auto Play / Pause Video

- Play while visible.
- Pause when hidden.

------------------------------------------------

5. Active Navigation

- Highlight the current section in the sidebar.

------------------------------------------------

6. Analytics

- Track when an advertisement/banner was actually viewed.


🔹 10. SCROLL EVENT vs INTERSECTION OBSERVER

Scroll Event

- Fires continuously.
- Manual calculations.
- More code.
- Needs debounce/throttle.

IntersectionObserver

- Fires only when visibility changes.
- Browser handles visibility detection.
- Cleaner code.
- Better performance.


🔹 11. IMPORTANT INTERVIEW POINTS

✔ Detects visibility, NOT scrolling.

✔ Browser decides when to notify you.

✔ Does NOT create DOM elements.

✔ Does NOT remove DOM elements.

✔ Does NOT replace Virtualization.

✔ Best Use Cases

- Infinite Scroll
- Lazy Loading
- Reveal Animations
- Video Auto Play/Pause
- Analytics


🔹 12. ONE-LINE REVISION

IntersectionObserver is a browser API that efficiently detects when an
element enters or leaves the viewport (or another scrollable container),
allowing us to trigger actions like infinite scrolling, lazy loading,
animations, and analytics without continuously monitoring scroll events.
==============================================================================
*/