/*

Global Execution Context: The Global Execution Context is the default or base execution context in JavaScript. It’s created when the JavaScript engine first runs your code 

 
  ->  Phases of GEC Creation:

  a).  Memory Creation Phase

  1). Memory is allocated for variables and functions.
  2). Variables declared with var are hoisted and initialized with undefined.
  3). Functions are hoisted and stored as full definitions.
  4). Variables declared with let and const are hoisted but not initialized (they go into the Temporal Dead Zone (TDZ)).


  b). Execution Phase

  1). The code is executed line by line.
  2). Variables get assigned actual values.
  3). Functions are invoked as needed.

*/


var a = 10;        // Attached to the window object
let b = 20;        // Script scope (not attached to window)
const c = 30;      // Script scope (not attached to window)

console.log(window.a); // 10
console.log(window.b); // undefined

/*

🧠 Scope Levels in JS -

a). Global Scope (GS): Available everywhere.
b). Function Scope (FS): Declared within a function; only accessible inside it.
c). Block Scope (BS): Introduced with let and const; only accessible within {}.
*/
