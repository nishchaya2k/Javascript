//Once function ->  _.once function is used in conditions where we want a particular function to be executed only a single time. Even though we execute or call this function multiple times then also it will have no effect.
const _ = require('lodash');


let a = 10;
function add() {
    a += 10;
}

let addFn = _.once(add);
console.log(a);              // output: 10

addFn();
console.log(a);             // output: 20

addFn();
console.log(a);             // output: 20


//....... Polyfill for once 1.......

let x = 10;
function sum(value) {
    x += value
}

function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }

        return result
    }
}

let sumFn = once(sum);

console.log(x);         // output: 10
sumFn(10);
console.log(x);         // output: 20
sumFn(10);
console.log(x);         // output: 20

/*
this points to window currently, it works even if you send null in this example,but what if function is this dependent, Here's is below example
*/

//.... Polyfill of Once 2..........

function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            console.log(this)       //why window always print
            result = fn.apply(this, args);
        }

        return result
    }
}

let person = {
    name: "nishchaya",
    greet: function () {
        console.log(this.name)
    }
}


//3 cases, Last 2 Cases correct as they ensure the method retains its context(Person object).
let greetfn = once(person.greet);
// let greetfn = once(() => person.greet());
// let greetfn = once(person.greet.bind(person));



greetfn();
greetfn();

