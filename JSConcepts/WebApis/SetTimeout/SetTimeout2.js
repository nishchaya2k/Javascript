/*
1. Uses `requestIdleCallback` to schedule a task during browser idle time.

2. `deadline` object is auto-provided to check how much idle time is available (`timeRemaining()`).

3. Uses `performance.now()` for accurate timing.

4. If the browser stays busy and no timeout is passed, the callback may delay indefinitely.

5. You can use `{ timeout: delay }` to ensure the callback runs even when idle time isn't available.
*/

let activeTimeouts = new Map();
let timeoutIds = 0;

const customSetTimeout = (callback, delay) => {
    const start = performance.now(); // corrected 'Performance' to 'performance'
    const id = ++timeoutIds;

    function check(deadline) {
        if (!activeTimeouts.has(id)) return;

        if (deadline.timeRemaining() >= delay || deadline.didTimeout) {
            callback();
            activeTimeouts.delete(id);
            return;
        } else {
            // Ensure callback runs even if browser stays busy
            requestIdleCallback(check, { timeout: delay });
        }
    }

    activeTimeouts.set(id, true);
    requestIdleCallback(check, { timeout: delay });

    return id;
};

const timeoutId1 = customSetTimeout(() => {
    console.log("Will Shown After 2 Sec");
}, 2000);


/*
- Summary

1. `requestIdleCallback` defers the task until the browser is idle, helping improve performance.

2. If the browser never gets idle, passing `{ timeout: delay }` guarantees the task still runs.

3. `deadline.timeRemaining()` checks if there's enough idle time; `deadline.didTimeout` is a fallback.

4. `performance.now()` is preferred over `Date.now()` for sub-millisecond accuracy.

5. Timeout IDs stored in `Map` help cancel or track active timers.

6. deadline.didTimeout will be:
false → if the callback runs because the browser had idle time.
true → if the browser did not become idle in time and the timeout expired.

*/
