//Function Hoisting:


//.............................Example 1 ................................

//Function Declaration/Statement Hoisting:

// Call function before its declaration
hello(); // "Hello, World!"

// Function declaration
function hello() {
    console.log("Hello, World!");
}


//.............................Example 2 ................................

//Function Expression Hoisting:

myFunc(); // TypeError: myFunc is not a function

// Function expression
var myFunc = function () {
    console.log("Hello from function expression!");
};



//.............................Example 3 ................................

// Named Function Expression

// Attempt to call named function expression before its assignment
myFunc(); // TypeError: myFunc is not a function

// Named function expression
var myFunc = function func() {
    console.log("Hello from named function expression!");
};


//.............................Example 4 ..................................


hello1(); //ReferenceError: hello1 is not defined

let hello1 = () => {
    console.log("Hello, World!");
}

//.............................Example 5 ................................

//  Function Declaration vs.Variable Declaration

// Call function before its declaration
greet(); // "Hello!"

// Variable declaration
var greet = "Hi!";   //defined

// Function declaration
function greet() {
    console.log("Hello!");     //"Hello! on console"
}



//The greet function is hoisted and called successfully, while the var greet declaration and assignment do not affect the function. Functions have a higher hoisting priority than variables declared with var


//.............................Example 6 ................................

// Function Declaration in Block Scope

{
    greet(); // "Hello from block scope!"

    // Function declaration inside a block
    function greet() {
        console.log("Hello from block scope!");  //Hello from block scope! on console
    }
}

/*

Variable greet: The var greet declaration is also hoisted, but since there is already a greet function in memory, the variable's hoisting sets greet to undefined. However, since a function declaration takes precedence over a var declaration, the greet identifier still points to the function at this stage.

*/