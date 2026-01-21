/*
Count the number of set bits

Problem Statement: Given an integer n, return the number of set bits (1s) in its binary representation.
Can you solve it in O(log n) time complexity?
*/

//Approach 2, TC: O(no. of set bits), SC: O(1);

let n = 10;
function CountSetbits(n) {

    let count = 0;

    while (n) {
        count++;
        n = (n & (n - 1))
    }

    return count
}

console.log("Count Set bits", CountSetbits(n))