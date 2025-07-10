function fetchData1() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Data from API 1")
        }, 1000)
    })
}


function fetchData2() {
    return new Promise((_, reject) => {
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


Promise.racePolyfill = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise).then(resolve).catch(reject)
        });
    })
}

// Promise.racePolyfill = function (promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach((promise) => {
//             Promise.resolve(promise).then((value) => resolve(value)).catch((err) => reject(err))
//         });
//     })
// }


Promise.racePolyfill([fetchData1(), fetchData2(), fetchData3()]).then((res) => {
    console.log('res', res)
}).catch((err) => {
    console.log("reject", err)
})