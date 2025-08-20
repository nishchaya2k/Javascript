/*
Q. Problem Statement: Given an integer N return the reverse of the given number.

Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401. 
*/

let n = 12345;

function reverseDigit(n) {
    if (n === 0) return 0; // Handling the edge case where n is 0

    // Remove trailing zeros
    while (n && (n % 10 === 0)) {
        n = Math.floor(n / 10);
    }

    let rev = 0;

    // Reverse the digits
    while (n) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return rev;
}

console.log("Reverse Digits:", reverseDigit(n));
