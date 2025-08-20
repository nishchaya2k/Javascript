/*
Problem Statement: Given an integer N, return all divisors of N.

A divisor of an integer N is a positive integer that divides N without leaving a remainder. 
In other words, if N is divisible by another integer without any remainder, 
then that integer is considered a divisor of N.
*/

// Type 2, Optimal

function allDivisors(n) {
    const result = new Set(); // To avoid duplicates automatically

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            result.add(i);
            result.add(n / i);
        }
    }

    return Array.from(result).sort((a, b) => a - b); // Optional: sort the result
}

console.log("Divisors", allDivisors(36)); 
