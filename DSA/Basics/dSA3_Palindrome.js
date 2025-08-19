/*
Problem Statement: Given an integer N, return true if it is a palindrome else return false.

A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.
*/


let n = 4314;

function palindrome(n) {
    if (n < 0) return false

    let original = n;
    let rev = 0;

    while (n) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return rev == original;

}

console.log("Palindrome Number:", palindrome(n));
