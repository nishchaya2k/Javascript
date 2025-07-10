/*

Promise.all -> It allows you to run multiple promises in parallel and wait for all of them to resolve(or catch if any fails).

Promise.all() -> It's a JavaScript method that takes an array(or iterable) of promises and returns a single promise that:

Resolves when all input promises resolve, with an array of results(in the same order).

Rejects immediately if any promise rejects — this is known as fail - fast behavior, it quickly fails as one of api rejected

Why are we not using Promise.prototype.allPolyfill = ... like we do in other polyfills?"
- We don’t attach allPolyfill to Promise.prototype because Promise.all is a static method, not an instance method.

The promise.resolve() method in JS returns a Promise object that is resolved with a given value.

*/

//................ Example 1 ..................

function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 1")
        }, 1000)
    })
}


function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 2")
        }, 3000)
    })
}

function fetchData3() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Data Failed from API 3")
        }, 1000)
    })
}

Promise.allPolyfill = function (promises) {
    return new Promise((resolve, reject) => {
        const results = [];

        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise)
                .then((res) => {
                    results[idx] = res;
                    pending--;

                    if (pending === 0) {
                        resolve(results);
                    }
                })
                .catch((err) => reject(err)); // fail-fast
        });
    });
};


Promise.allPolyfill([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
    console.log("All Data Received")
    console.log(result)
}).catch((error) => {
    console.error("One of the promises failed:", error);
})




/*
Why?. Why are we not using Promise.prototype.allPolyfill = ... like we do in other polyfills?"

1.
const arr = [1, 2, 3];
arr.map(x => x * 2); // Instance method

// Polyfill:
Array.prototype.myMap = function(callback) { ... };


2. 
Promise.all([p1, p2, p3]); // Called directly on Promise

// Polyfill:
Promise.allPolyfill = function(promises) { ... };

*/