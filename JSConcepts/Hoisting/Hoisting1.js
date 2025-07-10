// In JavaScript, the execution of code is generally divided into two phases:


/*  
    At Memory Creation Phase:
    const and let -> "unavailable" (Local Memory or Script) 
    var ->  "undefined" (Global Memory) 
*/

//..........................Example 1.......................


//1. Memory Creation Phase:

let a = 10;  //unavailable,Local (script) (separate local memory not a part of window object)
let b = 20;     //unavailable, in Local (script)
console.log(c); 
var c = 30;     //undefined,  in Global
console.log(c);  


/*
console.log doesn't take part in the memory creation phase because it's an actual execution of code, not a declaration. basically its a function call.
*/


//2. Code Execution Phase:
let a1 = 10;     //10, in Local (script)
let b1 = 20;     //20, in Local (script)
console.log(c); //undefined on console
var c = 30;     //30,  in Global
console.log(c); //30 on console


//.............................Example 2 ...............................

//Code Execution Phase: Code breaks or stop execution when encounter "ReferenceError"
let y = 20;
console.log(x);       // undefined
var x = 2;
console.log(x);       // 2

console.log(z);       //ReferenceError: z is not defined (same if z is const)
let z = 30;

//.............................Example 3 ...............................

let y1 = 20;
console.log(x1);
var x1 = 2;
console.log(x1);

let z1;  //"Unavailable" at Memory Creation phase & "Undefined" at Execution Phase
console.log(z1);    //Undefined  how??
z1 = 30;

//.............................Example 4 ...............................


//Syntax Error: 'const' declarations must be initialized
let y2 = 20;
console.log(x2);
var x2 = 2;
console.log(x2);

// const z2;
// console.log(z2);
// z2 = 30;


//.............................Example 5 ...............................

let a2 = 10;
{
    console.log("Start");     //start
    console.log(a2);         //reference error: let and const are block scoped
    console.log("End");      // never reached this line
    let array1 = 20;
}


//.............................Example 6 ...............................


a3 = 10;
{
    console.log("Start");
    console.log(a3);            //Reference error
    console.log("End");
    let a3 = 20;
}

//.............................Example 7 ...............................


var a4 = 10;
{
    console.log("Start");
    console.log(a4);            //Reference error
    console.log("End");
    let a4 = 20;
}

//.............................Example 8 ...............................


var a4 = 10;
{
    console.log("Start");
    console.log(a4);           //10 on console
    console.log("End");
}


//.............................Example 8 ...............................


var a5 = 10;
{
    console.log("Start");
    console.log(a5);           //10 on console
    console.log("End");
    var a5 = 20;
}

//.............................Example 9 ...............................


var a5 = 10;
{
    console.log("Start");
    console.log(a5);           //10 on console
    console.log("End");
    var a5 = 20;
}


//.............................Example 10 ...............................


var a5 = 10;
{
    console.log("Start");
    console.log(a5);           //10 on console
    console.log("End");
    var a5 = 20;
    console.log(a5);           //20 on console
}

//.............................Example 11 ................................

//Syntax error: a6 already been declared, (if both have same datatype, then they override)

let a6 = 10;
{
    console.log("Start");
    console.log(a6);           
    console.log("End");
    var a6 = 20;
    console.log(a6);           
}


//.............................Example 12 ................................

//Code breaks or stop execution when encounter "TypeError"

const a7 = 20;
console.log(a7); 
a7 = 10;              //TypeError: Assignment to constant variable.
console.log("Hey"); 



abstract


/* Main Points to Remember

1. TDZ:
Due to the Temporal Dead Zone (TDZ), the block-scoped a3 is hoisted but not initialized until the let a3 = 20; line is executed.
When we are trying to access the variable from local memory from Global Scope,

The Temporal Dead Zone (TDZ) in JavaScript refers to the period between the creation of a block-scoped variable (using let, const, or class) and its initialization, during which the variable cannot be accessed. Attempting to access the variable during this period results in a ReferenceError.

2. Error:
Syntax Error: Detected during code parsing before execution begins. prevents code from running.
Reference Error: Occurs during execution. Halts code execution when accessing an undefined or inaccessible variable.
Type Error: Occurs during execution. Halts code execution when an operation is performed on a value of an incorrect type.
*/

