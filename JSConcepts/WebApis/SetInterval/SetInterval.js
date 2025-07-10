// Custom SetInterval
const customIntervals = new Map();

function customSetInterval(callback, delay, ...args) {
    const id = Symbol("intervalId");

    const interval = setInterval(() => {
        callback(...args);
    }, delay);

    customIntervals.set(id, interval);
    return id;
}

function customClearInterval(id) {
    if (customIntervals.has(id)) {
        clearInterval(customIntervals.get(id));
        customIntervals.delete(id);
    }
}

// ✅ Example Usage:
const intervalId = customSetInterval((msg) => {
    console.log(msg);
}, 1000, "Repeating every 1 second");

setTimeout(() => {
    customClearInterval(intervalId);
    console.log("Interval cleared early");
}, 2500);
