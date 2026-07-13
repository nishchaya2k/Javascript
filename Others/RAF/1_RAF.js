/*
===============================================================================
REQUEST ANIMATION FRAME (rAF) — COMPLETE NOTES WITH DEFINITIONS & EXPLANATIONS
===============================================================================


🔷 1. CORE PROBLEM / CONTEXT
-------------------------------------------------------------------------------
- We want to update UI repeatedly (animations, loaders, movement, transitions).
- JavaScript itself has NO control over when the screen updates.
- Early developers used setInterval / setTimeout for animations.
- This caused:
  - Janky animations
  - Dropped frames
  - Frozen UI
  - High CPU usage


🔷 2. WHAT IS A SCREEN UPDATE (FPS CONCEPT)
-------------------------------------------------------------------------------
- A screen update means: the monitor redraws the image once.
- Most displays refresh at 60Hz (60 frames per second).

- Calculation:
  1000ms / 60 ≈ 16.6ms

- This means:
  - The SCREEN refreshes every ~16.6ms
  - It simply shows the last image it received
  - It does NOT care about JavaScript


🔷 3. IMPORTANT DISTINCTION (SCREEN vs BROWSER)
-------------------------------------------------------------------------------
- Screen (hardware):
  - Refreshes every 16.6ms
  - Shows whatever frame it already has
  - Completely independent of JS

- Browser (software):
  - Produces NEW frames
  - Needs main thread
  - Can be BLOCKED by JavaScript


🔷 4. WHAT DOES "JS RUNS FOR 25ms" MEAN?
-------------------------------------------------------------------------------
- JavaScript is single-threaded.
- "JS runs for 25ms" means:
  - JavaScript occupied the main thread for 25 milliseconds
  - During this time:
    - No layout
    - No paint
    - No UI update

- Example of blocking JS:

  const start = performance.now();
  while (performance.now() - start < 25) {
    // JS blocking main thread
  }


🔷 5. DOES BROWSER INTERRUPT JS AFTER 16.6ms?
-------------------------------------------------------------------------------
- NO ❌
- Browser NEVER interrupts JavaScript.
- Once JS starts executing:
  - It MUST finish
  - Browser waits silently

- Result:
  - Screen keeps showing OLD painted frame
  - UI appears frozen


🔷 6. WHAT HAPPENS DURING HEAVY JS (REAL CTA EXAMPLE)
-------------------------------------------------------------------------------
- User clicks CTA to navigate from Page A → Page B.
- Click handler triggers heavy calculation.
- Timeline:

  JS starts running
  ↓
  16.6ms → repaint wanted ❌ (JS still running)
  33ms   → repaint wanted ❌
  50ms   → repaint wanted ❌
  ...
  JS finishes
  ↓
  Browser finally paints new frame

- Result:
  - Page looks stuck
  - Loader does not appear
  - Navigation feels frozen


🔷 7. DOES BROWSER KEEP REPAINTING OLD FRAME?
-------------------------------------------------------------------------------
- NO ❌ repainting
- YES ✅ keeps DISPLAYING last painted frame

- Important:
  - Browser does NOT repaint again and again
  - Screen hardware just keeps showing the same pixels


🔷 8. DOM UPDATES vs PAINT (VERY IMPORTANT)
-------------------------------------------------------------------------------
- DOM updates happen immediately IN MEMORY.
- Painting happens ONLY after JS finishes.

- Example:

  button.textContent = "Loading...";
  heavyCalculation();

- What happens:
  - DOM text changes immediately (in memory)
  - Screen does NOT update
  - "Loading..." appears only AFTER JS completes


🔷 9. DOES BROWSER CHECK EVERY 16.6ms IF JS IS RUNNING?
-------------------------------------------------------------------------------
- NO ❌
- There is NO checking or polling.

- Reality:
  - JS holds the main thread like a LOCK 🔒
  - Browser waits
  - The moment JS finishes → browser paints immediately


🔷 10. HOW DOES BROWSER KNOW IT CAN PAINT?
-------------------------------------------------------------------------------
- Browser watches the JavaScript CALL STACK.

- Rule:
  - Call stack NOT empty → NO paint
  - Call stack empty → Paint allowed

- Painting always happens:
  - Between JS tasks
  - Never during JS execution


🔷 11. EVENT LOOP + PAINT (SIMPLIFIED)
-------------------------------------------------------------------------------
- Order:
  1. JS task runs
  2. Microtasks (Promises)
  3. If call stack empty:
     - Layout
     - Paint
  4. Next task

- Paint happens ONLY when stack is empty


🔷 12. WHY setInterval FAILS FOR ANIMATION
-------------------------------------------------------------------------------
- setInterval runs based on time, NOT screen readiness.
- It may:
  - Run too early
  - Run too often
  - Run while browser is busy

- Result:
  - Wasted work
  - Frame drops
  - Janky UI


🔷 13. WHAT requestAnimationFrame (rAF) DOES
-------------------------------------------------------------------------------
- rAF tells browser:
  "Run my code right BEFORE the next paint."

- Benefits:
  - Synced with browser rendering
  - Runs at correct time
  - Paused in background tabs
  - Smooth animations


🔷 14. WHAT rAF DOES NOT DO
-------------------------------------------------------------------------------
- rAF does NOT:
  - Make JS faster
  - Fix heavy calculations
  - Prevent blocking

- Heavy JS will STILL freeze UI.


🔷 15. FINAL CORE TRUTHS (MEMORIZE)
-------------------------------------------------------------------------------
1. Screen refresh is automatic.
2. Browser paint is blocked by JS.
3. JS is never interrupted.
4. DOM updates are synchronous.
5. Paint happens only when call stack is empty.
6. requestAnimationFrame aligns JS with paint.


===============================================================================
END OF NOTES
===============================================================================
*/
