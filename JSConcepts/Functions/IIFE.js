//Immediately Invoked Function Expressions

//An IIFE is an js function that runs as soon as it defined
// which is also known as a Self-Executing Anonymous Function,it is used to Avoid polluting the global namespace



// Example 1

function greet() {
    var message = "Hello, world!";
    console.log(message);
}
greet();

(
    () => {
        var message = "Hello, world!";
        console.log(message);
    }
)();   //to end the context we need to use semicolon

(
    () => {
        var message = "Hello, world!";
        console.log(message);
    }
)()



    // Example 2
    ; (function add(a, b) {
        console.log(a + b)
    })(2, 3);

// Example 3
; (function say() {
    console.log('say');
})();

// Example 4
(() => console.log('say')
)();

// Example 5, Promises
let data
async function getData() {
    data = await fetch('/api/data');
}
getData();


const dataNew = (async () => await fetch('/api/data'))();

// Example 6, For Private and Public Variables, user can't directly check its balance, user needs do withdrawal then he can seee

const atm = function (initialBalance) {
    let balance = initialBalance

    function withdraw(amount) {
        if (amount > balance) {
            console.log("Can't Debit")
        } else {
            balance -= amount;
            return balance
        }
    }

    return { withdraw }
}

const nishchaya = atm(1000);
nishchaya.withdraw(100)
console.log("withdrawal", nishchaya.withdraw(100))

/*
Summay:

1.


*/