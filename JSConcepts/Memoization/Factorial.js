//Factorial: the product of all positive integers less than or equal to that number

const factorial = (n) => {
    if (n <= 1) return n;

    return (n) * factorial(n - 1)
}

console.log("factorialNumber", factorial(5))

const factorialMomorize = (n, memo) => {

    memo = memo || {};

    if (n <= 1) return n;

    if (memo[n]) return memo[n]

    return memo[n] = n * factorialMomorize(n - 1, memo)
}

console.log("factorialMomorize", factorialMomorize(5, {})) //do we really require this

