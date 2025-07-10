function fetchData1() {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject("Data from API 1")
        }, 1000)
    })
}


function fetchData2() {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject("Data from API 2")
        }, 3000)
    })
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from API 3")
        }, 1000)
    })
}

Promise.anyPolyfill = function (promises) {
    return new Promise((resolve,reject) => {
        const errors = [];
        let rejections = 0;

        if (promises.length === 0) {
            reject(new AggregateError([], "All Promises were rejected"))
            return;
        }

        promises.forEach((promise,idx) => {
            Promise.resolve(promise).then((value) => resolve(value)).catch((err) => {
                errors[idx] = err;
                rejections++;

                if (rejections === promises.length) {
                    reject(new AggregateError(errors, "All promises were rejected"))
                }
            })
        });
    })
}


Promise.anyPolyfill([fetchData1(), fetchData2(), fetchData3()]).then((res) => {
    console.log('res', res)
}).catch((err) => {
    console.log("reject",err)
})