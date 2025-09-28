/*
Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
*/

let nums = [1, 2, 4, 5]
let n = 5;

//Approach 1, Brute Force

function singleElement1(nums, n) {
    let freq = {};
    for (let i = 0; i < n - 1; i++) {
        freq[nums[i]] = true;
    }

    for (let i = 1; i <= n; i++) {
        if (!freq[i]) return i;
    }

    return -1;
}



console.log("Single Element", singleElement1(nums, n))


//Approach 2, Optimize (Sum of n no. we have directly by formulae)



function singleElement2(nums, n) {
    let sum = 0
    let sum_n = (n * (n + 1)) / 2;

    for (let i = 0; i < n - 1; i++) {
        sum += nums[i]
    }
    return sum_n - sum;
}



console.log("Single Element", singleElement2(nums, n))



//Approach 3, Use XOR


function singleElement3(nums, n) {
    let xor1 = 0;
    let xor2 = 0;

    for (let i = 0; i < n - 1; i++) {
        xor1 = xor1 ^ nums[i];
        xor2 = xor2 ^ i + 1;
    }

    xor2 = xor2 ^ n;
    return xor1 ^ xor2; // the missing number
}



console.log("Single Element", singleElement3(nums, n))