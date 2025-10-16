/*
Find the Smallest Divisor Given a Threshold

Problem Statement: You are given an array of integers 'arr' and an integer i.e. a threshold value 'limit'. Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.
*/

let n = 4, arr = [8, 4, 2, 3], limit = 10;


//Approach 1, Brute Force, //Approach 2, Optimize TC: O(n^2)


//Approach 2, Optimize TC: O(nlogn)

function findQuotientSum(arr, mid, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.ceil(arr[i] / mid);
    }

    return sum;
}

function smallestDivisor(arr, n, limit) {

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) max = arr[i]
    }

    let start = 0;
    let end = max;
    let result = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let sum = findQuotientSum(arr, mid, n);

        if (sum <= limit) {
            end = mid - 1;
            result = mid;
        } else {
            start = mid + 1;
        }
    }

    return result
}

console.log("smallestDivisor", smallestDivisor(arr, n, limit))



//Approach 3, Optimize TC: 
