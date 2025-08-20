/*
Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
*/


// Type 1, Brute Force, O(n)

function checkPrime(n) {
    if (n == 1) return false;

    for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i == 0) return false
    }

    return true;
}

console.log("Is Prime", checkPrime(2))



// Type 2, Optimize, O(√n)

function checkPrime1(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log("Is Prime", checkPrime(2)); 



/**
 * Why we only check up to √n when testing for prime:
 *
 * Suppose n is a composite number, meaning it has at least one pair of
 * positive integers a and b such that:
 *      a * b = n
 *
 * Now, if both a > √n and b > √n, then:
 *      a * b > √n * √n = n
 * This contradicts the assumption that a * b = n.
 *
 * Therefore, at least one of a or b must be ≤ √n.
 * That means:
 *  - If n has any factors (other than 1 and n), at least one must be ≤ √n.
 *  - So we only need to check for divisibility from 2 to √n.
 *  - If no number in that range divides n, then n must be prime.
 *
 * This significantly reduces the number of checks and improves performance.
 */
