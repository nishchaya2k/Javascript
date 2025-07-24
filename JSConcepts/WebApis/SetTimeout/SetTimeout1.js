/** 
1. Custom setTimeout implementation using requestAnimationFrame for better performance.
2. Uses performance.now() for high-precision timing instead of Date.now().
3. requestAnimationFrame ensures smoother execution by syncing with the browser's refresh cycle.
4.  Allows for cancellation of timeouts via customClearTimeout function.
 */

let customTimeoutId = 0; // To generate unique timeout IDs
let activeTimeouts = new Map(); // Stores active timeouts to track and cancel them if needed

const customSetTimeout = (callback, delay) => {
    const start = performance.now();
    const id = ++customTimeoutId;

    function check(now) {
        if (!activeTimeouts.has(id)) return; // Exit early if timeout was canceled

        if (now - start >= delay) {
            callback();
            activeTimeouts.delete(id); // Remove the timeout ID from active timeouts
            return;
        } else {
            requestAnimationFrame(check); // Continue checking on the next frame
        }
    }

    activeTimeouts.set(id, true); // Mark this timeout ID as active
    requestAnimationFrame(check); // Start checking the timeout on the next frame

    return id; // Return the unique timeout ID
}

const customClearTimeout = (id) => {
    activeTimeouts.delete(id);
};

const timeoutId1 = customSetTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("timeoutId1", timeoutId1);




/*
- Summary:

1. requestAnimationFrame syncs with the browser's refresh cycle, ensuring smoother execution 
2.  for animations or time - based operations, unlike setInterval or setTimeout.
3.  performance.now() provides more accurate timing than Date.now(), useful for small or precise delays.
4.  The custom timeout implementation supports cancellation through`customClearTimeout .
*/