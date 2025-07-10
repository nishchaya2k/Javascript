/* allSettled: takes an array (or iterable) of promises and returns a single promise that

- Always resolves when all input promises have either:
 -> Fulfilled 
 -> Rejected

- It returns an array of objects describing the status and value/reason of each promise.


Case:
- All Fulfilled → Returns array of { status: "fulfilled", value }
- Any Rejected → Returns array with { status: "rejected", reason } for failed ones
*/


function fetchData1() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            return reject("Data from API 1")
        }, 1000)
    })
}
function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve("Data from API 1")
        }, 1000)
    })
}
function fetchData3() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            return reject("Data from API 1")
        }, 1000)
    })
}


Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
.then((result) => {
    console.log("result", result)
}).catch((error) => {
    console.log("Error",error)
})