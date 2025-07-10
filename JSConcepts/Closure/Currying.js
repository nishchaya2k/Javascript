//Currying function in js, New approach to write function
//https://www.freecodecamp.org/news/playing-around-with-closures-currying-and-cool-abstractions/
//https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

/*
- its a technique of evaluating sequence of functions with single or multiple arguments

- its a conversion of function from callable like this f(a,b) to f(a)(b)

- Currying function are constructed by chaining closures by immediately returning their inner function simmultenously.

- Concepts used in currying:  Bind and Closures(used mostly)
*/

/*
    Why we use currying ?
-    It makes a function pure which makes it expose to less errors and side effects.
-    It helps in avoiding the same variable again and again.
-    It is a checking method that checks if you have all the things before you proceed.
-    It divides one function into multiple functions so that one handles one set of     responsibility.

*/


//I can only add when I have all 3 paramters, but is it scalable ? No, what if you have huge amount of paramters to add then what will you do, you will you currying

//Function type:  f(a,b)
function Addition(a, b, c) {
    return a + b + c;
}

let res = Addition(2, 3, 4);
console.log(res);

//function type: f(a)(b)
function Addition(a) {
    return function (b) {  //remembers a
        return function (c) {   //remembers a & b both
            return a + b + c;
        }
    }
}

let res1 = Addition(2);   //return function (b){}
let data = res1(3);       //pass value to function (b){}
let data1 = data(4);
console.log(data1)


//in ES6
const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3));



//first 2 call then 3, then 4
let res2 = Addition(2)(3)(4);
console.log(res2);

userObj = {
    name: 'nishchaya',
    age: 28
}


function userInfo(obj) {
    return function (userinfo) {
        return obj[userinfo]
    }
}

let res3 = userInfo(userObj);
console.log(res3('name'))




//infinite currying in js

function add(a) {
    return function (b) {
        if (b) return add(a + b);   // a will become a+b
        return a;                   //if b is undefined total will return which is in a
    }
}


console.log(add(4)); //if passed 1 paramter it will return function which exect another paramter b
console.log(add(4)(5)());


//we can use currying to Manipulate DOM as well -> why ? to maintain data privacy
<h1 id="heading">Js</h1>

function updateElementText(id) {

    return function (content) {
        document.querySelector("#" + id).textContent = content
    }
}

const updateContent = updateElementText("heading")
updateContent("JavaScript")

//Converts f(a,b,c) into f(a)(b)(c)


function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args)
        }

        else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }

    }
}

const sum = (a, b, c, d) => a + b + c + d;
const total_sum = curry(sum);
console.log(total_sum(1)(2)(3)(4));


// sum(1)(2, 3)(4, 5, 6)(); 


// sum(1)(2)(3)(0)(5)();
function sum(a) {
    return function (b) {
        if (b) return sum(a + b);//when b is empty at the end,return final o/p a
        return a;
    }

}
console.log(sum(1)(2)(3)(4)(5)())

// multiply(1, 2, 3, 4, 5);

function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return function (d) {
                    return function (e) {
                        return fn(a, b, c, d, e);
                    }
                }
            }
        }
    }
}
//equivalent -> function curry = (fn) => (a) => (b) => (c) => (d) => (e) => fn(a,b,c,d,e)

const multiply = (a, b, c, d, e) => a * b * c * d * e;
const curriedMultiply = curry(multiply)       //we will get the function a
const result = curriedMultiply(1)(2)(3)(4)(5);
console.log(result);




// multiply(1, 2, 3, 4, 5);
// sum(1)(2)(3)(0)(5)();
// sum(1)(2, 3)(4, 5, 6)(); 