// Memories & Variables: Before we explore pass by value and pass by reference, it’s crucial to understand the basics of how memory and variables work. When you create a variable in JavaScript, it reserves a space in the computer’s memory. This space will hold the value assigned to that variable. In the below line, a variable x is declared and assigned a value of 10. The variable x is like a label attached to this memory space where 10 is stored.


let x = 10;



//1. Pass By Value: Pass by value means when a variable is assigned to another variable, the value stored in the variable is copied into the new variable.


let a = 10;
let b = a;

a = 20;

console.log(a); // Outputs: 20
console.log(b); // Outputs: 10


//2. Pass by Reference: If you assign this object variable to another variable, it does not copy the object. Instead, it copies the reference to the object. Both variables now point to the same memory space, which means changes through one variable are reflected when accessing the object through the other variable.

let obj1 = { value: 1 };;
let obj2 = obj1

obj2.value = 5;

console.log(obj1, obj2)




//Conclusion: JavaScript handles primitives (Boolean, null, undefined, String, and Number) by value and objects (including arrays and functions) by reference