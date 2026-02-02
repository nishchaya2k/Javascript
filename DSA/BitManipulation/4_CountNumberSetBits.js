/*
Count the number of set bits

Problem Statement: Given an integer n, return the number of set bits (1s) in its binary representation.
Can you solve it in O(log n) time complexity?
*/

let n = 4

//Approach 1, TC: O(logn), SC: O(1);
function CountSetbits_1(n) {

    let count = 0;

    while (n) {
        if (n & 1) count++;
        n = n >> 1;
    }

    return count
}

console.log("Count Set bits", CountSetbits_1(n))



//Approach 2, TC: O(no. of set bits), SC: O(1);
function CountSetbits_2(n) {

    let count = 0;

    while (n) {
       count++;
        n = (n & (n - 1))
    }

    return count
}

console.log("Count Set bits", CountSetbits_2(n))