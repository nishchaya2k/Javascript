// Prototype: Its a mechanism by which Javascript objects inherit properties from each another

function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);   //function behave as a object  
console.log(multiplyBy5.prototype); //why ? {}


/*
Why {} ?
- When you define multiplyBy5 as a function, JavaScript automatically creates a prototype object for it. This prototype object is initially an empty object: {}

- It is not Object.prototype. The prototype property of a function is a separate object specifically created for the purpose of being used as the prototype for instances that would be created if the function is used as a constructor.

1. Every prototype object has a constructor property that points back to the function that created the prototype. This allows instances to know which constructor function they were created from.
*/


function CreateUser(username, score) {
    this.username = username;
    this.score = score;
}

//now increment is in constructor function memory means,bcoz increment is performing, the common logic for each object, so to save for the object we stored it in the prototype fo constructor function
CreateUser.prototype.increment = function () {
    this.score++;
}
//we dont know, who called this function and whose score we need to incease, so who so ever 
//called means (this.) increased its score 

//why this?

CreateUser.prototype.print = function () {
    console.log(`score is ${this.score}`)
}


const narula = new CreateUser("narula", 25)
narula.increment()
narula.print()


// let scope = "global scope";
// function check() {
//     let scope = "local scope";
//     function f() {
//         return scope;
//     }

//     console.log(f());
//     return f;
// }
// check();
// console.log(scope)
// var x = 23;

// (function () {
//     var x = 43;
//     (function random() {
//         x++;
//         console.log(x);
//         var x = 21;
//     })();
// })();

//object prototype


var str = "hello world";
console.log(str.__proto__ === String.prototype)  //return string prototype

var a = true;
console.log(a.__proto__) //return boolean prototype


var c = 1;
console.log() //return number 

//normal Function
function x() {
    console.log("Hello World")
}
console.log(x.__proto__)  //nothing

//constructor function
function X() {
    console.log("Hello World")
}
console.log(X.prototype)  // {}

const y = function () {
    console.log("Hello World")
}
console.log(y.__proto__)



// x.prototype, can access in function only , in function expression and declaration and function statement
// x();


















/*
The prototype property is a feature of objects in JavaScript. Every object in JavaScript has a 
prototype property, which references another object, which is an essential mechanism for 
inheritance and property/method lookup.
*/