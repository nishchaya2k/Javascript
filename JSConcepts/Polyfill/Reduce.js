//Polyfill of Reduce
/*Reduce -> Reduce method reduces array of values down to just 1 value, it also execute callback for each element, acc: accumulator is the result of previous computation

Reduc iterate over each & every element of an array
*/


//Example 1 -> Find Sum, here accumulator is total, which contain sum of values
let arr = [3, 32, 42, 49, 34];

Array.prototype.myReduce = function (cb, initialValue) {
    let total = initialValue !== undefined ? initialValue : 0;

    for (let i = 0; i < this.length; i++) {
        total = cb(total, this[i]);
    }
    return total;
}


console.log(arr.myReduce(((total, curr) => (total + curr)), 0))

//Example 2 -> Find Maximum, here accumulator is max which keep tracks of maximum value

Array.prototype.myReduceMax = function (cb, initialValue) {
    let max = initialValue !== undefined ? initialValue : 0;

    for (let i = 0; i < this.length; i++) {
        max = cb(max, this[i]);
    }
    return max;
}

console.log(arr.myReduceMax((max, curr) => (max > curr ? max : curr), 0))


//Example 3 -> Count Respective Ages on Object

const user = [
    { first: "nishchaya", age: 20 },
    { first: "nishu", age: 24 },
    { first: "nishtha", age: 24 },
    { first: "naveen", age: 17 },
    { first: "main", age: 20 },
    { first: "mango", age: 3 }
]

console.log(user.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age]++;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {}))

// Example 4 -> first name of all the people whom age is less than 30, 

//using reduce
console.log(user.reduce((acc, curr) => {
    if (curr.age < 20) acc.push(curr.first);

    return acc;
}, []))


//using Chaining:
console.log(user.filter((x) => (x.age < 20)).map((x) => (x.first)))













//Example 1 
// const array1 = [1, 2, 4, 5];

// Array.prototype.myReduce = function (cb, initialValue) {
//     if (this.length === 0 && initialValue === undefined) {
//         throw new TypeError("Reduce of empty array with no initial value");
//     }

//     index = 0;
//     let accumulator;

//     if (initialValue !== undefined) {
//         // If an initial value is provided, start with it as the accumulator
//         accumulator = initialValue;
//     } else {
//         // Otherwise, start with the first element in the array as the accumulator
//         accumulator = this[0];
//         index = 1; // Start iteration from the second element
//     }
//     for (let i = 0; i < this.length; i++) {
//         cb(ans, this[i], index)
//     }
// }

// const result = array1.myReduce((acc, curr) => acc + curr, 0);
// console.log(result)