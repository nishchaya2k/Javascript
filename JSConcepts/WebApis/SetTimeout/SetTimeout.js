//Custom Implementation of SetTimeout

//  Approach - 1

const customTimeouts = new Map();

function customSetTimeout(callbacks, delay, ...args) {
    const id = Symbol("timeoutId");

    const start = Date.now()

    const interval = setInterval(() => {
        const now = Date.now();

        if (now - start >= delay) {
            callbacks(...args);
            clearInterval(interval);
            customTimeouts.delete(id);
        }
    }, 10)

    customTimeouts.set(id, interval);
    return id;
}

function customClearTimeout(id) {
    if (customTimeouts.has(id)) {
        clearInterval(customTimeouts.get(id));
        customTimeouts.delete(id);
    }
}


const timeoutId1 = customSetTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
console.log("timeoutId1", timeoutId1)


const timeoutId2 = customSetTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
console.log("timeoutId2", timeoutId2)


const timeoutId3 = customSetTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);
console.log("timeoutId3", timeoutId3)

// eg. for receiving ...args

const id1 = setTimeout((msg) => {
    console.log(msg);
}, 1000, "Hello!");

const id2 = setTimeout((msg) => {
    console.log(msg);
}, 1000, "Hello!");

const id3 = setTimeout((msg) => {
    console.log(msg);
}, 1000, "Hello!");

console.log(id1, id2, id3)

//  Approach - 2 ->  Without Inbuilt Function


