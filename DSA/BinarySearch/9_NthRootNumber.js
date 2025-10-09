/*
Problem Statement: Given two numbers N and M, find the Nth root of M. The nth root of a number M is defined as a number X when raised to the power N equals M. If the 'nth root is not an integer, return -1.
*/


let m = 625, n = 4;

//Approach 1,Optimial, TC: O(nlogn)

function nthRootNumber1(m, n) {
    if (m === 0 || m === 1) return m;
    if (n === 1) return m;

    let start = 1;
    let end = Math.floor(m / n);

    const power = (mid, n, m) => {
        let result = 1;
        while (n--) {
            result *= mid;
            if (result > m) return result; // early stop
        }
        return result;
    };

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let result = power(mid, n, m);

        if (result === m) return mid;
        else if (result < m) start = mid + 1;
        else end = mid - 1;
    }

    return -1;
}

console.log("nth Root Number", nthRootNumber1(m, n))



// Approach 2: Optimal, TC: O(log m * log n)
function nthRootNumber2(m, n) {
    if (m === 0 || m === 1) return m;
    if (n === 1) return m;

    let start = 1;
    let end = m; // safer upper bound

    // Fast exponentiation helper
    const power = (base, exp) => {
        let result = 1;
        while (exp > 0) {
            if (exp % 2 === 1) result *= base;
            base *= base;
            exp = Math.floor(exp / 2);
        }
        return result;
    };

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let result = power(mid, n);

        if (result === m) return mid;
        else if (result < m) start = mid + 1;
        else end = mid - 1;
    }

    return -1; // if no integer nth root exists
}

console.log("nth Root Number", nthRootNumber2(m, n))