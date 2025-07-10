
/*
1. What is the Global Execution Context made of?

- The Global Execution Context (GEC) is created as soon as a JavaScript file runs. It has two environments inside it:

a). Global Environment / Global Object: 
 - This is the window object in browsers.
 - Anything declared with var at the global level is added as a property to window

b). Script Environment:
 - Variables declared with let and const are scoped to the script, not attached to window, but still exist globally within the file. 
*/

var a = "I am var";     // Global scope (window.a)
let b = "I am let";     // Global scope (script level)
const c = "I am const"; // Global scope (script level)

console.log(window.a); // ✅ "I am var"
console.log(window.b); // ❌ undefined
console.log(window.c); // ❌ undefined
