
/*
-   1. Use of simple logic

-   Example: Performing Sum Operation & Printing Total
*/
function sum(a, b) {
    return a + b;
}
function print(total) {
    console.log(total);
}
const total = sum(4, 5);
print(total);


/*
-   2. Use of Callback Function

-   Example: Performing Sum Operation from there Printing Total
-   Print is dependent on Sum function, print is called from inside of sum function
-   callback is a function 'print' passed as an argument to 'sum'
*/
function sum(a, b, callback) { 
    const total = a + b;
    callback(total)
}
function print(total) {
    console.log(total);
}
sum(4, 5, print);      //print is callback function here
