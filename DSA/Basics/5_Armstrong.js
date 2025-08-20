/*
Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

An Amrstrong number or narcissistic number or plenary number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
*/

function armstrong(n) {
    let original = n;
    let cal_arms = 0;
    let digits = 0;

    while (n != 0) {
        n = Math.floor(n / 10)
        digits++;
    }

    n = original;


    while (n !== 0) {
        let temp = (n % 10);
        cal_arms += Math.pow(temp, digits);
        n = Math.floor(n / 10)
    }

    return cal_arms === original
}

console.log("Armstrong number", armstrong(153))