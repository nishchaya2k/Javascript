/*
Abort Controller ->
1. AbortController is a browser API that allows you to cancel an asynchronous operation before it completes.

2. AbortController works using two parts:

1. controller
   → Used to trigger cancellation.

2. signal
   → Passed to the async operation.
   → Acts like a notifier/listener.

3.  ✔ signal.aborted becomes true
    ✔ "abort" event is dispatched
    ✔ fetch/axios receives the event
    ✔ request is cancelled
    ✔ Promise rejects with AbortError

4. Use case - 
    ✔ Cancel unnecessary requests
    ✔ Save network bandwidth
    ✔ Prevent race conditions
    ✔ Improve application performance
    ✔ Better user experience
    ✔ Avoid updating UI with stale data

5. The Intersection Observer API is a highly performant JavaScript feature used to asynchronously track when a target element intersects (overlaps) with the device's viewport or another specific ancestor element. 


6. const observer = new IntersectionObserver(callback, options);
   observer.observe(targetElement);

7.  - MutationObserver is a built-in JavaScript API.
    - It watches the DOM for changes (mutations).
    - Whenever the observed DOM changes, the browser automatically
    executes a callback.

8. - Basic Syntax
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

8.  Use Case: AUTO SAVE EDITORS

9.    
*/