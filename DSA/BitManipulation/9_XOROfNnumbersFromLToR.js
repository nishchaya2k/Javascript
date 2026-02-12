/*
Find XOR of numbers from L to R

Problem Statement: Given two integers L and R. Find the XOR of the elements in the range [L , R].
*/


//Approch 1, Optimal, TC: O(1), SC: O(1)

let l = 3, r = 5

function xor_1(l, r) {

    function generate(n) {
        if (n % 4 === 0) return n;
        if (n % 4 === 1) return 1;
        if (n % 4 === 2) return n + 1;
        return 0;
    }

    return generate(l - 1) ^ generate(r)
}


console.log("XOR", xor_1(l, r))


/*

Explanation:

Its a pattern written code
- Every Block of 4 Consecutive No. XORs to 0

0^1^2^3 = 0
4^5^6^7 = 0
8^9^10^11 = 0
*/