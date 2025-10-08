/*
Problem Statement: You are given a positive integer n. Your task is to find and return its square root. If ‘n’ is not a perfect square, then return the floor value of 'sqrt(n)'.

Note: The question explicitly states that if the given number, n, is not a perfect square, our objective is to find the maximum number, x, such that x squared is less than or equal to n (x*x <= n). In other words, we need to determine the floor value of the square root of n.
*/

let n = 88;

//Appraoch 1 ->. run loop from 1 to n or from 1 to n/2 to check sqrt


//Approach 2 -> 

function sqrtNumber2(n) {
    let ans = Math.floor(Math.sqrt(n));
    return ans;
}

console.log("Square Root", sqrtNumber2(n))


//Approach 3 -> 

function sqrtNumber3(n) {

    //base case
    if (n == 1 || n == 0) return n;

    let start = 1;
    let end = Math.floor(n / 2);
    let ans = 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let sqrt = (mid * mid)

        if (sqrt == n) return mid;

        else if (sqrt > n) end = mid - 1;

        else {
            ans = mid;
            start = mid + 1
        }
    }

    return ans;
}

console.log("Square Root", sqrtNumber3(n))

//Approach 4

function sqrtNumber4(n) {

    //base case
    if (n == 1 || n == 0) return n;

    let start = 1;
    let end = Math.floor(n / 2);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let sqrt = (mid * mid)

        if (sqrt == n) return mid;

        else if (sqrt > n) end = mid - 1;

        else start = mid + 1
    }

    return end;
}

console.log("Square Root", sqrtNumber4(n))