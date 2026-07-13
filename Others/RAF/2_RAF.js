/*
===============================================================================
SETTIMEOUT vs REQUESTANIMATIONFRAME — COMPLETE EXPLANATION WITH EXAMPLES
===============================================================================


🔷 1. WHAT IS setTimeout?
-------------------------------------------------------------------------------
- setTimeout schedules a function to run AFTER a minimum delay.
- It does NOT care about screen repaint.
- It runs when:
  - Delay time passes
  - Call stack becomes empty

- Syntax:

  setTimeout(callback, delay)


🔷 2. EXAMPLE — setTimeout (Correct Use Case)
-------------------------------------------------------------------------------
- Use case: Show a success message after 2 seconds.

  console.log("Form submitted");

  setTimeout(() => {
    console.log("Show success message");
  }, 2000);

- Why use setTimeout here?
  - This is time-based logic.
  - Not related to animation.
  - We just want delay.
  - No need to sync with repaint.


🔷 3. WRONG USE OF setTimeout (Animation Example)
-------------------------------------------------------------------------------
- Trying to animate movement:

  let x = 0;

  function move() {
    x += 5;
    box.style.transform = `translateX(${x}px)`;

    setTimeout(move, 16);   // trying to simulate 60fps
  }

  move();

- Problem:
  - 16ms is just a guess.
  - May run too early.
  - May run too late.
  - Not synced with repaint.
  - Causes frame drops and jank.


🔷 4. WHAT IS requestAnimationFrame (rAF)?
-------------------------------------------------------------------------------
- rAF schedules code to run RIGHT BEFORE the next paint.
- Browser decides correct timing.
- Perfect for animations.

- Syntax:

  requestAnimationFrame(callback)


🔷 5. EXAMPLE — requestAnimationFrame (Correct Animation Use)
-------------------------------------------------------------------------------
- Smooth movement:

  let x = 0;

  function animate() {
    x += 5;
    box.style.transform = `translateX(${x}px)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

- Why this works better:
  - Runs before paint
  - Synced with screen refresh
  - No guessing 16ms
  - Smooth animation


🔷 6. REAL DIFFERENCE (Timeline Comparison)
-------------------------------------------------------------------------------

❌ setTimeout animation:

  JS runs
  setTimeout waits ~16ms
  Might not align with repaint
  May miss frame deadline

Result:
  - Janky UI
  - Dropped frames

--------------------------------------------

✅ requestAnimationFrame animation:

  Browser ready to paint
  → Runs rAF callback
  → Layout
  → Paint

Result:
  - Smooth UI
  - No wasted work


🔷 7. DOES rAF FIX HEAVY JS?
-------------------------------------------------------------------------------
- NO ❌

Example:

  requestAnimationFrame(() => {
    heavyCalculation();  // 200ms
  });

- Result:
  - UI still freezes
  - Because JS blocks main thread

- rAF aligns timing.
- It does NOT make JS faster.


🔷 8. WHEN TO USE WHAT (VERY IMPORTANT TABLE)
-------------------------------------------------------------------------------

Use setTimeout when:
  - You need delay
  - You need retry logic
  - You need API polling
  - You need non-visual timing logic

Use requestAnimationFrame when:
  - You animate UI
  - You move elements
  - You build canvas animations
  - You build progress bars
  - You update visual frames


🔷 9. SIMPLE MEMORY RULE
-------------------------------------------------------------------------------
- Time-based logic → setTimeout
- Visual frame updates → requestAnimationFrame


🔷 10. INTERVIEW READY SUMMARY
-------------------------------------------------------------------------------
- setTimeout is time-driven.
- requestAnimationFrame is paint-driven.
- setTimeout guesses timing.
- requestAnimationFrame synchronizes with browser rendering.

===============================================================================
END OF SECTION
===============================================================================
*/
