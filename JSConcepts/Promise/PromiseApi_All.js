/*

Promise.all -> It allows you to run multiple promises in parallel and wait for all of them to resolve(or catch if any fails).

Promise.all() -> It's a JavaScript method that takes an array(or iterable) of promises and returns a single promise that:

Resolves when all input promises resolve, with an array of results(in the same order).

Rejects immediately if any promise rejects — this is known as fail - fast behavior, it quickly fails as one of api rejected


Case: 
- All FullFilled -> Array of Values
- Any of Failed  -> Failed Value

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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 3")
        }, 1000)
    })
}

console.time("totalTime")

Promise.all([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
    console.log("All Data Received")
    console.log(result)
    console.timeEnd("totalTime")
}).catch((error) => {
    console.error("One of the promises failed:", error);
    console.timeEnd("totalTime")
})


//................ Example 2 ..................


function fetchData4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 1")
        }, 1000)
    })
}


function fetchData5() {
    return new Promise((_, reject) => {    //first argumemt always use to resolve
        setTimeout(() => {
            reject("Data from API 2")
        }, 1000)
    })
}

function fetchData6() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 3")
        }, 1000)
    })
}

Promise.all([fetchData4(), fetchData5(), fetchData6()]).then((result) => {
    console.log("All Data Received")
    console.log(result)
}).catch((error) => {
    console.error("One of the promises failed:", error);
})