/*
=====================================================================
ASYNC vs DEFER vs NORMAL SCRIPT — COMPLETE NOTES WITH DEFINITIONS
=====================================================================


🔷 1. CORE PROBLEM / CONTEXT
---------------------------------------------------------------------

- Browsers parse HTML from top → bottom.
- When browser finds <script>, it must decide:
    • Should I stop HTML parsing?
    • Should I download in background?
    • When should I execute it?

- JavaScript execution can block DOM construction.
- This directly impacts:
    • Page load speed
    • First Contentful Paint (FCP)
    • User experience
    • Performance score


=====================================================================
🔷 2. NORMAL SCRIPT (NO ATTRIBUTE)
=====================================================================

<script src="app.js"></script>


🔹 HOW IT WORKS

1. Browser starts parsing HTML.
2. Encounters <script>.
3. Immediately STOPS HTML parsing.
4. Downloads the JS file.
5. Executes the JS file.
6. Resumes HTML parsing.


🔹 CHARACTERISTICS

- ❌ Blocks HTML parsing
- ❌ Blocks DOM construction
- ✅ Maintains execution order
- ❌ Slower page rendering


🔹 WHY BLOCKING HAPPENS?

Because:
- JavaScript can modify DOM.
- Browser must execute it before continuing.
- It cannot risk parsing incorrect structure.


🔹 WHEN TO USE?

- Rarely.
- Only when script MUST run immediately.
- Mostly avoided in modern apps.


=====================================================================
🔷 3. DEFER ATTRIBUTE
=====================================================================

<script src="app.js" defer></script>


🔹 HOW IT WORKS

1. Browser starts parsing HTML.
2. Encounters <script defer>.
3. Downloads JS in background.
4. HTML parsing continues.
5. After HTML is fully parsed:
        → All deferred scripts execute.
6. Then DOMContentLoaded fires.


🔹 KEY BEHAVIOR

- ❌ Does NOT block HTML parsing
- ✅ Maintains execution order
- ✅ Executes after DOM is ready
- ✅ Best choice for main app scripts


🔹 MULTIPLE DEFER SCRIPTS

<script src="a.js" defer></script>
<script src="b.js" defer></script>

Execution order:
    a.js → b.js (always maintained)

Even if:
    b.js downloads first,
    it will wait.


🔹 RELATION WITH DOMContentLoaded

Order:
    HTML parsed
    ↓
    Defer scripts executed
    ↓
    DOMContentLoaded fires


🔹 WHEN TO USE?

- Main application JS
- React/Vue/Angular bundles
- Scripts depending on DOM


=====================================================================
🔷 4. ASYNC ATTRIBUTE
=====================================================================

<script src="app.js" async></script>


🔹 HOW IT WORKS

1. Browser starts parsing HTML.
2. Encounters <script async>.
3. Downloads JS in background.
4. As soon as download finishes:
        → Execution happens immediately.
5. HTML parsing pauses during execution.
6. Then parsing resumes.


🔹 KEY BEHAVIOR

- ❌ Does NOT wait for full HTML parsing
- ❌ Does NOT maintain execution order
- ❌ Can interrupt DOM parsing
- ✅ Faster for independent scripts


🔹 MULTIPLE ASYNC SCRIPTS

<script src="a.js" async></script>
<script src="b.js" async></script>

Execution depends on:
    → Which file downloads first.

Possible orders:
    a → b
    OR
    b → a

NOT predictable.


🔹 RELATION WITH DOMContentLoaded

- async script may execute:
    • Before DOMContentLoaded
    • After DOMContentLoaded

No guarantee.


🔹 WHEN TO USE?

- Analytics scripts
- Ads
- Tracking pixels
- Third-party widgets
- Independent scripts


=====================================================================
🔷 5. EXECUTION TIMELINE COMPARISON
=====================================================================

🔸 NORMAL

HTML → STOP → Download → Execute → Continue HTML


🔸 DEFER

HTML (continue parsing)
        ↓
Download in background
        ↓
After HTML parsed → Execute


🔸 ASYNC

HTML (continue parsing)
        ↓
Download in background
        ↓
Execute immediately when ready
        ↓
Resume HTML parsing


=====================================================================
🔷 6. PERFORMANCE IMPACT
=====================================================================

🔹 NORMAL
- Increases Time To Interactive
- Slows First Paint
- Blocks rendering

🔹 DEFER
- Improves performance
- Non-blocking
- Ideal for performance optimization

🔹 ASYNC
- Good for independent tasks
- Can cause unpredictable behavior if dependent scripts exist


=====================================================================
🔷 7. INTERVIEW READY SUMMARY TABLE
=====================================================================

ATTRIBUTE     | BLOCKS HTML | ORDER GUARANTEED | EXECUTION TIME
----------------------------------------------------------------
Normal        | Yes         | Yes              | Immediately
Defer         | No          | Yes              | After HTML parsed
Async         | No*         | No               | When download finishes

*Async blocks temporarily only during execution.


=====================================================================
🔷 8. IMPORTANT ADVANCED NOTE
=====================================================================

- Inline scripts ignore async & defer.
- async & defer work ONLY with external scripts.
- If both async and defer are added:
        → async takes priority.


=====================================================================
🔷 9. REAL WORLD BEST PRACTICE
=====================================================================

✔ Put scripts before </body>
OR
✔ Use defer in <head>

Avoid normal blocking scripts in <head>.


=====================================================================
🔷 10. MODERN BONUS (TYPE="module")
=====================================================================

<script type="module" src="app.js"></script>

- Automatically behaves like defer.
- Executes after HTML parsing.
- Supports import/export.
- Strict mode by default.
- Maintains execution order.


=====================================================================
END OF NOTES
=====================================================================
*/
