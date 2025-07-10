/*
1. Scope: Scope Determines, accessilibily and lifetime of a variables and parameters.

Javascript has two main types of scope:
a) Global Scope
b) Local Scope : 


a). Global Scope: 
Globally scoped variables can be accessed from anywhere in the code, including within functions. These are the variables that are defined outside of any function. Consider an example below:

b). Local Scope : 
Variables declared inside a function have local scope and can only be accessed within that function.

2. Scope Chaining: 
What if we define a function inside a function and access the global variable inside the inner function? Yes, as you know we can do, as a global variable is available anywhere in the code, we can access it in the inner function as well.

When a variable is accessed, Javascript first searches for it in the current scope, and if it's not found, it moves up the scope chain until the variable is found or the global scope is reached.

This hierarchical structure determines the order in which Javascript looks for variables is called a Scope Chain. Simple!


*/