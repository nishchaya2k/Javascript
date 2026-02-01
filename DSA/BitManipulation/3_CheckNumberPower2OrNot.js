/*
Check if a number is power of 2 or not

Problem Statement: Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two if there exists an integer x such that n == 2ˣ.
*/

let n = 6
function checkNumberPower(n) {
    let count = 0;

    if (n == 0 || n <= 0) return false
    while (n) {
        if (n & 1) count++;
        if (count > 1) return false

        n = n >> 1
    }

    return true;
}

console.log("Check number power of two or not", checkNumberPower(n))