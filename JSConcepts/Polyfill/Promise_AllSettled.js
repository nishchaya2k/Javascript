
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



Promise.allSettledPolyfill = function (promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then((value) => {
                results[idx] = { status: 'fulfilled', value };
            }).catch((reason) => {
                results[idx] = { status: 'rejected', reason };
            }).finally(() => {
                pending--;
                if (pending === 0) {
                    resolve(results);
                }
            });
        })

    })
}

Promise.allSettledPolyfill([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
    console.log("Result", result)
}).catch((error) => {
    console.error("One of the promises failed:", error);
})