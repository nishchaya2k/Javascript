// Dealing With Promise


// 1. Promise chaining -> Promise chaining is when you attach .then() to a Promise to handle its result after it resolves. Each .then() returns another Promise, allowing for chaining multiple actions.

const greet = async () => {
    return "Hello"
}

console.log(greet()) //returns a Promise.We see the Promise object itself, not the resolved value
greet().then((result) => console.log(result))


// 2. By using await -> await is used inside an async function to pause the function's execution until the Promise resolves, and then it unwraps the resolved value.

(async () => {
    const result = await greet();
    console.log(result); 
})();
