/*
Swap two numbers

Problem Statement: Given two integers a and b, swap them in-place using only 2 variables (without using a temporary variable).
*/

let a = 20, b = 50;

function swapTwoNumbers(a, b) {

    // Step 1: a -> a ^ b
    a = a ^ b;

    // Step 2: b -> original a
    b = a ^ b;

    // Step 3: a -> original b
    a = a ^ b;

    return { a, b }
}

console.log("Swap Two Numbers", swapTwoNumbers(a, b))

