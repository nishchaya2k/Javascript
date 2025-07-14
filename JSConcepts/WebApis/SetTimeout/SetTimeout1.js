const customSetTimeout = (callback, delay) => {
    const start = performance.now();
    const id = ++_customTimeoutId;

    function check(now) {
        
    }
}









const timeoutId1 = customSetTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);


console.log("timeoutId1", timeoutId1)