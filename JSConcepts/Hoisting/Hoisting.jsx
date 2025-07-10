/*
Hoisting works differently with function expressions compared to function declarations.
In this case, only the variable bar is hoisted to the top, not the function expression itself.
Therefore, when bar() is called before the function expression is assigned to bar, JavaScript throws a TypeError because bar is initially undefined, not a function.
*/


// function Expression
bar(); // reference error
var a = function bar() {
    console.log("Hello Bar");
}

/*
Function declarations are also hoisted to the top of their containing scope.
Therefore, even though foo() is called before its declaration, JavaScript does not throw an error. The function foo is already available in memory and can be invoked.
*/

//function declaration
car(); // Output: "car!"
function car() {
    console.log("car!");
}



//Examples:

//1.

var x = 10;

function foo() {
    console.log("Inside foo: ", x); // Output: Inside foo: undefined
    if (true) {
        function x() { }
    }
    console.log("Inside foo: ", typeof x); // Output: Inside foo: function
}

foo();
console.log("Outside foo: ", typeof x); // Output: Outside foo: number

//2.
var y = 20;
function hoo() {
    console.log(y);
}
hoo();

//3. Temperal Dead Zone -> 
//The temporal dead zone(TDZ) is a period in JavaScript during which a variable exists but cannot be accessed, Accessing the variable during the TDZ results in a ReferenceError.

console.log(typeof x); //ReferenceError: Cannot access 'x' before initialization
let x = 10;

console.log(typeof y); //Undefined: can access 'x' before initialization
var y = 10;