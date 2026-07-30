//1. Closure: Combination of a function bundled together with its lexical environment Or a function along with its lexical scope forms a closure

//Explanation:

//A closure gives you an access to outer function's scope from an inner function. In JavaScript, closures are created everytime a function is created, at function creation time.


// ...........Example 1.............


function x() {
    let a = 10;
    return function y() {
        console.log("a ->", a);
    }
}

const z = x();
z();

//bcoz of memory heap, we have reference of a, & we can have access of a from y function

// ...........Example 2.............

function greetLater(name) {
    const greeting = "hello"

    setTimeout(() => {
        console.log(`${greeting},${name}!`)
    }, 2000)
}

greetLater("Alice");


// ...........Example 3.............

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("Count:", count);
        },
        decrement: function () {
            count--;
            console.log("Count:", count);
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
counter.decrement(); // Count: 1
console.log(counter.getCount()); // 1

//The variable count is private to the createCounter function, and can only be accessed through the returned methods, eg. of data encapsulation using closures

// ...........Example 4.............


for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log("Wrong i:", i);
    }, i * 1000);
}


// ...........Example 5.............


for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log("Correct i:", i);
    }, i * 1000);
}


// ...........Example 6.............

for (let i = 0; i <= 3; i++) {
    (function (i) {
        setTimeout(function () {
            console.log("correct", i)
        }, i * 1000)
    })(i)
}


//In the fixed version, the IIFE (Immediately Invoked Function Expression) creates a new scope for each value of i, so the value is preserved in the closure.