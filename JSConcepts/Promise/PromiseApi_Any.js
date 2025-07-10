/* Promise.all -> wait for first promise to be settled as success or fullfilled & Result will the first settled success promise & if all the promises fail result will be 'Aggregate Error' : array of errors


Case: 
Any Fulfilled → Returns first fulfilled value
All Rejected → Returns AggregateError with all rejection reasons
*/

function fetchData1() {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject("Data from API 1")
        })
    })
}

function fetchData2() {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject("Data from API 2")
        })
    })
}

function fetchData3() {
    return new Promise((_,reject) => {
        setTimeout(() => {
            reject("Data from API 3")
        })
    })
}


Promise.any([fetchData1(), fetchData2(), fetchData3()]).then((result) => {
    console.log("result", result)
}).catch((error) => {
    console.log("error", error)
})




