// Promise: A promise can only resolve/reject once, so after it’s consumed, it cannot be consumed again., refer Example 2


//................................Example 1...............................

//Promise Produce
const p = new Promise((resolve, reject) => {
    let obj = {
        name: "nishchaya",
        age: "24"
    }

    let isSuccess = obj.age >= 18;

    setTimeout(() => {
        isSuccess ? resolve(obj) : reject("Age is less than 18, cannot proceed.")

    }, 1000)

});

//Produce Consume
async function handlePromise() {
    try {
        let result = await p;
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

handlePromise();


//................................Example 2...............................

//Promise Produce

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;  // Change this to `true` to simulate success

        if (success) {
            return resolve("Data Successfully Fetched");
        } else {
            return reject("Data Failed to Fetch");
        }
    }, 1000);
});


//Consume
fetchData.then((result) => {
    console.log("Result:", result)
}).catch((error) => {
    console.log("Error:", error)
})

    (async () => {
        try {
            const result = await fetchData;  // Await the fetchData Promise
            console.log("Result:", result);  // Output if resolved
        } catch (error) {
            console.log("Error:", error);  // Output if rejected
        }
    })();