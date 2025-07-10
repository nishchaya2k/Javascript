/*

Promise.race: Any Fulfilled or Rejected → Returns the first settled (fulfilled or rejected) result
It "races" the promises — whichever finishes first (success or error), wins.

*/


const fetchData1 = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Data of API 1")
        }, 500)
    })
}

const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data of API 2")
        }, 2000)
    })
}

const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data of API 3")
        }, 3000)
    })
}

Promise.race([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
    console.log("result", result)
}).catch((error) => console.log(error, "error"))
