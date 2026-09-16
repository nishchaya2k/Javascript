/*
================================================================================
                            WEB VITALS & PERFORMANCE
================================================================================

Note: Eg. Portfolio Website for Reference


--------------------------------------------------------------------------------
1. Core Web Vitals
--------------------------------------------------------------------------------

    1.1 First Contentful Paint (FCP)

        Definition:
        - Time taken for the first visible content to appear.

        Good:
        - < 1.8s

        Our Portfolio:
        - 0.4s


    1.2 Largest Contentful Paint (LCP)

        Definition:
        - Time taken for the largest visible element (Hero Image / Heading) to
          render.

        Good:
        - < 2.5s

        Optimization Done:
        - Hero image moved to /public
        - Added preload
        - Added fetchPriority="high"
        - loading="eager"
        - Converted image to WebP

        Result:
        - LCP reduced from ~1.4s → 0.6s


    1.3 Total Blocking Time (TBT)

        Definition:
        - Time for which JavaScript blocks the browser.

        Good:
        - < 200ms

        Optimization Done:
        - Reduced bundle size
        - Removed unused libraries
        - Optimized assets

        Result:
        - 30ms


    1.4 Cumulative Layout Shift (CLS)

        Definition:
        - Measures unexpected layout movement.

        Good:
        - 0

        Optimization Done:
        - Fixed image dimensions
        - Reserved layout space

        Result:
        - 0


--------------------------------------------------------------------------------
2. Image Optimization
--------------------------------------------------------------------------------

    Purpose:
    - Reduce download size.
    - Improve LCP.

    Optimizations:
    - Convert JPG/PNG → WebP
    - Resize to displayed dimensions
    - Preload Hero Image
    - loading="eager"
    - fetchPriority="high"

    Do NOT:
    - Lazy load Hero Image.


--------------------------------------------------------------------------------
3. Resource Hints
--------------------------------------------------------------------------------

    3.1 preload

        Purpose:
        - Tells the browser to start downloading a specific important
          resource early.

        Used For:
        - Hero Image
        - Critical Fonts

        Example:
        <link rel="preload">

        Key Point:
        - Focuses on a specific RESOURCE.


    3.2 preconnect

        Purpose:
        - Establishes a connection to an important origin before the browser
          needs to request a resource from it.

        Connection Setup:
        - DNS
        - TCP
        - TLS

        Used For:
        - Important third-party origins
        - CDN
        - External font servers

        Not Needed:
        - Local assets

        Key Point:
        - Focuses on the CONNECTION to an origin.


    3.3 fetchPriority="high"

        Purpose:
        - Tells the browser that a resource is more important and should
          receive higher fetch priority.

        Used For:
        - LCP Image

        Key Point:
        - Focuses on RESOURCE PRIORITY.


    Quick Difference:

        preconnect:
        - Prepare the CONNECTION.

        preload:
        - Fetch the RESOURCE early.

        fetchPriority:
        - Increase the RESOURCE PRIORITY.


--------------------------------------------------------------------------------
4. Fonts
--------------------------------------------------------------------------------

    Google Fonts

        Pros:
        - Easy setup

        Cons:
        - Extra network requests
        - Render blocking


    WOFF2 (Self Hosted)

        Pros:
        - Faster
        - Smaller
        - No external dependency
        - Better Lighthouse score

        Used in Portfolio:
        - ✔ Yes


--------------------------------------------------------------------------------
5. Render Blocking Resources
--------------------------------------------------------------------------------

    Definition:
    - Resources that delay first render.

    Examples:
    - CSS
    - Google Fonts CSS
    - Synchronous JS

    Optimization Done:
    - Removed Google Fonts
    - Self-hosted fonts
    - Reduced CSS


--------------------------------------------------------------------------------
6. Forced Reflow (Layout Thrashing)
--------------------------------------------------------------------------------

    Definition:
    - JS changes DOM and immediately requests layout information.

    Bad Flow:

        Write
          ↓
        Read
          ↓
        Write
          ↓
        Read

    Better:

        Read all
          ↓
        Write all

    Common Layout Reads:
    - offsetWidth
    - offsetHeight
    - clientWidth
    - getBoundingClientRect()


--------------------------------------------------------------------------------
7. Main Thread
--------------------------------------------------------------------------------

    Main Thread Handles:
    - HTML Parsing
    - CSS Parsing
    - JavaScript Execution
    - Layout
    - Paint

    Goal:
    - Keep JS execution small.
    - Avoid long blocking tasks.


--------------------------------------------------------------------------------
8. Bundle Optimization
--------------------------------------------------------------------------------

    Techniques:
    - Remove unused libraries
    - Remove unused imports
    - Code Splitting
    - Tree Shaking
    - Lazy Loading

    Benefits:
    - Smaller JS
    - Faster parsing
    - Lower TBT
    - Better Lighthouse


--------------------------------------------------------------------------------
9. Portfolio Optimizations Done
--------------------------------------------------------------------------------

    ✔ Converted Hero Image → WebP
    ✔ Reduced Image Dimensions
    ✔ Preloaded Hero Image
    ✔ fetchPriority="high"
    ✔ loading="eager"
    ✔ Self-hosted WOFF2 Fonts
    ✔ Removed Google Fonts
    ✔ Reduced Render Blocking
    ✔ Reduced Bundle Size
    ✔ Improved LCP
    ✔ Improved TBT
    ✔ CLS = 0
    ✔ Lighthouse Performance = 100


================================================================================
*/