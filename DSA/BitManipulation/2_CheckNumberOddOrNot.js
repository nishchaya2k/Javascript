/*
Check if a number is odd or not

Problem Statement: Given a non-negative integer n, determine whether it is odd. Return true if the number is odd, otherwise return false. A number is odd if it is not divisible by 2 (i.e., n % 2 != 0).
*/

let n = 1;

//Approach 1, TC: O(1), SC: O(1)
function numberOddNot(n) {
    return n & 1 ? true : false
}

console.log("Check Odd or not", numberOddNot(n))