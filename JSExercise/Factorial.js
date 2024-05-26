// Q. Find the factorial of given number ?

const a = 10;

// 1st Approach: n = n*(n-1)!

const calFactorial = (a) => {

    if (a == 0 || a == 1)
        return 1;
    return a * calFactorial(a - 1)
}

console.log(calFactorial(a))
