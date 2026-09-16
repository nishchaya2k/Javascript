/*
--------------------------------------------------------------------------------
10. Lighthouse Performance Insights
--------------------------------------------------------------------------------

    Definition:
    - Lighthouse Performance Insights identifies performance issues that can
      affect page loading and user experience.

    It helps analyze:
    - Loading performance
    - Rendering performance
    - JavaScript execution
    - Network activity
    - Layout issues

    Common Insights:
    - Duplicated JavaScript
    - Forced Reflow
    - LCP Breakdown
    - Network Dependency Tree
    - Render Blocking Requests
    - Image Delivery
    - Cache Lifetimes
    - Legacy JavaScript
    - DOM Size
    - 3rd Parties


    Why It Matters:
    - Helps identify the actual reason behind poor performance.
    - Gives optimization opportunities instead of only showing a score.
    - Can be used together with the Performance panel and Treemap.


    Interview Quick Recall:
    - Lighthouse = identifies performance problems.
    - Performance Insights = explains specific performance issues.
    - Use the insight → investigate → optimize → run Lighthouse again.


--------------------------------------------------------------------------------
11. Lighthouse Treemap
--------------------------------------------------------------------------------

    Definition:
    - Treemap visually represents the size of JavaScript modules and
      dependencies in the bundle.

    Key Point:
    - Larger box = larger amount of JavaScript.

    Used To:
    - Find large dependencies.
    - Identify unnecessary bundle size.
    - Investigate duplicated JavaScript.
    - Understand what contributes to the final bundle.

    Example:
    - react-icons
    - MUI
    - AG Grid


    Interview Quick Recall:
    - Treemap answers: "What is making my JS bundle large?"
    - Bigger box = more bytes.
    - Use it to identify dependencies worth investigating.


--------------------------------------------------------------------------------
12. Duplicated JavaScript
--------------------------------------------------------------------------------

    Definition:
    - The same JavaScript module is included in multiple bundles/chunks.

    Problem:
    - Increases JavaScript transferred over the network.
    - Causes unnecessary parsing and processing.
    - Can increase the overall cost of loading the page.

    Lighthouse Shows:
    - Source module
    - Bundles containing the module
    - Estimated duplicated bytes

    Investigation:
    - Open Duplicated JavaScript insight.
    - Identify the largest duplicated dependency.
    - Open Treemap.
    - Check which bundles contain it.
    - Trace it back to the application/dependency.


    Example:
    - Production Treemap showed multiple react-icons modules.
    - This becomes a dependency worth investigating rather than immediately
      assuming every import is a problem.


    Interview Quick Recall:
    - Duplicated JS = same module present in multiple bundles.
    - Check the duplicated bytes first.
    - Treemap helps locate where the duplication comes from.


--------------------------------------------------------------------------------
13. Bundle Optimization
--------------------------------------------------------------------------------

    Techniques:

    13.1 Remove Unused Dependencies
        - Remove libraries that are no longer required.

    13.2 Tree Shaking
        - Remove unused exports from the final bundle.

    13.3 Code Splitting
        - Split JavaScript into smaller chunks.

    13.4 Lazy Loading
        - Load non-critical code only when required.

    13.5 Dependency Optimization
        - Check whether large dependencies are actually necessary.


    Benefits:
    - Smaller bundles
    - Less network transfer
    - Less JavaScript parsing
    - Less execution work
    - Better loading performance


    Interview Quick Recall:
    - Tree shaking → removes unused code.
    - Code splitting → divides code into chunks.
    - Lazy loading → loads code when needed.
    - Dependency optimization → reduces unnecessary library cost.


--------------------------------------------------------------------------------
14. Production Performance Analysis
--------------------------------------------------------------------------------

    Rule:
    - Analyze the production build, not only the development build.

    Why:
    - Development builds can contain additional development overhead.
    - Production builds represent what real users download and execute.

    Analysis Flow:

        Production Build
              ↓
        Lighthouse
              ↓
        Identify Problem
              ↓
        Treemap / Performance Panel / Network
              ↓
        Find Root Cause
              ↓
        Optimize
              ↓
        Run Lighthouse Again


    Interview Quick Recall:
    - Always validate performance using a production build.
    - Don't optimize based only on development measurements.


--------------------------------------------------------------------------------
15. Performance Optimization Approach
--------------------------------------------------------------------------------

    Step 1:
    - Check Core Web Vitals.

    Step 2:
    - Check Lighthouse Performance Insights.

    Step 3:
    - Identify the highest-impact issue.

    Step 4:
    - Investigate using the appropriate tool.

    Step 5:
    - Fix the root cause.

    Step 6:
    - Measure again.

    Important:
    - Do not optimize something just because Lighthouse reports it.
    - Prioritize issues with measurable user impact.


    Interview Quick Recall:
    - Measure → Identify → Investigate → Fix → Measure again.
    - Focus on impact, not just the number of warnings.


================================================================================
*/