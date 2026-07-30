/*
=====================================================================
REAL LIFE PROJECT EXAMPLES — ASYNC vs DEFER vs NORMAL
=====================================================================


🔷 1. PROJECT: REACT DASHBOARD APPLICATION
---------------------------------------------------------------------

Imagine:
- You built a React dashboard
- It has charts, tables, filters, API calls

In index.html:

<head>
  <script src="/main.js" defer></script>
</head>

🔹 WHY DEFER?

- main.js contains entire React app
- App needs full DOM root element
- We don't want HTML blocking
- Order must be maintained (vendor.js → main.js)

👉 BEST CHOICE = defer

If you used normal script:
- HTML would block
- Slower first paint
- Poor Lighthouse score


=====================================================================
🔷 2. PROJECT: ADDING GOOGLE ANALYTICS
=====================================================================

You add tracking script:

<script async src="https://google-analytics.com/analytics.js"></script>

🔹 WHY ASYNC?

- Analytics does not affect UI
- Order does not matter
- Should not block page
- Should load whenever ready

If network is slow:
- UI still loads
- Tracking loads later

👉 BEST CHOICE = async


=====================================================================
🔷 3. PROJECT: E-COMMERCE WEBSITE
=====================================================================

Features:
- Product page
- Add to cart
- Payment integration
- Facebook Pixel

Case 1: Main app bundle
--------------------------------
<script src="/bundle.js" defer></script>

Because:
- UI logic depends on DOM
- Must maintain order


Case 2: Facebook Pixel
--------------------------------
<script async src="https://facebook.com/pixel.js"></script>

Because:
- Independent tracking
- Should not block checkout flow


Case 3: Payment SDK (Razorpay / Stripe)
--------------------------------

If checkout page requires SDK before button works:

<script src="https://checkout.stripe.com/sdk.js" defer></script>

Why NOT async?

Because:
- You must ensure SDK loads before user clicks
- Order may matter
- Async could execute late


=====================================================================
🔷 4. PROJECT: NEWS WEBSITE
=====================================================================

Features:
- Article content
- Comments section
- Ads
- Heatmap tracking

HTML priority:
1. Article text (most important)
2. Images
3. Comments
4. Ads
5. Tracking

Implementation:

Main script → defer
Ads script → async
Heatmap tracking → async

Result:
- Content loads fast
- Ads don’t block reading
- Tracking doesn’t delay UI


=====================================================================
🔷 5. REAL BUG SCENARIO (VERY COMMON)
=====================================================================

You use async for 2 dependent files:

<script async src="jquery.js"></script>
<script async src="plugin.js"></script>

Problem:
- plugin.js depends on jquery
- If plugin loads first → ERROR

"Uncaught ReferenceError: $ is not defined"

Fix:
Use defer instead:

<script defer src="jquery.js"></script>
<script defer src="plugin.js"></script>

Now order guaranteed.


=====================================================================
🔷 6. PERFORMANCE OPTIMIZATION SCENARIO
=====================================================================

Imagine:
You are improving Lighthouse score.

Old version:
<script src="bundle.js"></script>   // blocking

New optimized version:
<script src="bundle.js" defer></script>

Result:
- Faster First Contentful Paint
- Better performance score
- Less blocking time


=====================================================================
🔷 7. INTERVIEW SCENARIO QUESTION
=====================================================================

Interviewer asks:

"Why should analytics script use async?"

Correct practical answer:

- It is independent.
- It does not modify DOM structure.
- It should not delay critical rendering.
- Execution order does not matter.
- It improves page performance.


=====================================================================
🔷 8. SIMPLE RULE USED IN REAL PROJECTS
=====================================================================

If script depends on DOM → use defer
If script is independent → use async
If script must run immediately and block → normal (rare)

Most modern apps:
- 90% use defer
- 9% use async
- 1% use normal


=====================================================================
END OF REAL LIFE EXAMPLES
=====================================================================
*/
