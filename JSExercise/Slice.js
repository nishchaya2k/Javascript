/*
1. The slice(): 

method returns the selected elements in an array as a new array object.It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element.If you omit the second argument then it selects till the end of the array.This method can also accept negative index which counts back from the end of the array.

A negative index counts from the end of the array (e.g., -1 refers to the last element).

When you call the slice method without any arguments, it creates a shallow copy of the entire array or string

The slice method is available on both arrays and strings in JavaScript. Here’s how it works for each:

*/


//Example 1
let arr1 = [12, 33, 45];
console.log(arr1.slice(-3, -1)); // Output: [ 12, 33 ]
console.log(arr1.slice(1));     // Output: [ 33, 45 ]

let arr2 = [22];
console.log(arr2.slice());  // Output: [ 22 ]


let str = "Hello World";
console.log(str.slice()) //Output: Hello World



//Example 2
let arr3 = [1, 2, 3, 4, 5];
let newArr = arr3.slice(); 

console.log(newArr == arr3); // Output: false
console.log(newArr === arr3); // Output: false



//Example 3
let newStr1 = str.slice();

console.log(newStr1 == str); // Output: true
console.log(newStr1 === str); // Output: true



//Example 4
let newStr2 = str.slice(0);

console.log(newStr2 == str); // Output: true
console.log(newStr2 === str); // Output: true


/*
Imp. -> 

Using == or === for comparing two arrays in JavaScript will always check for reference equality, not the equality of the contents of the arrays


1. For arrays, 
slice() creates a new array even if no arguments passed in slice. Comparing the new array with the original using == or === returns false.



2. For strings,
slice() or slice(0) on a string it create a copy of the entire string, JavaScript optimizes by returning a reference to the original string itself (if no changes are made).

This concept is called as String Interning: JavaScript recognizes that it can optimize memory usage by returning a reference to the original string itself rather than creating a new string object. This is done under the hood for efficiency reasons.
*/