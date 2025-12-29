/*
Implement Pow(x,n) | X raised to the power N

Problem Statement: Implement the power function pow(x, n) , which calculates the x raised to n i.e. xn.
*/


let x = 2, n = 10

//Approach 1, Brute Force, Buy running a loop equal to n

//Approach 2, Optimized, Recursion
function pow(x, n) {

    function findPower(x, n) {

        //base case
        if (n == 0) return 1;
        if (n == 1) return x;

        if (n % 2 == 0) return findPower(x * x, Math.floor(n / 2));

        return x * findPower(x, n - 1)
    }
    return n < 0 ? (1 / (findPower(x, Math.abs(n)))) : findPower(x, Math.abs(n))
}

console.log("X rasied to Power N", pow(x, n))