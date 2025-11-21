// About Async: if you return a promise its fine but if you return a value it will wrap up in a promise and return a promise eventually



//.......................Example 1............................
async function sayHello() {
    return "Hello";
}

console.log("Test", sayHello)

sayHello().then(console.log); // Output: Hello

sayHello().then((result) => {
    console.log(result);
});

//.......................Example 2............................
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data");
        }, 1000);
    });
}

fetchData().then(console.log);



// way of writing console.log -> console.log is a function that takes one argument and logs it. & .then() expects a callback function — one that takes the resolved value of the Promise. Since console.log is already a function that matches that signature, you can pass it directly.