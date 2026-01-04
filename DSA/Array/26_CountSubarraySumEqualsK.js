/*
Count Subarray sum Equals K

Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k. A subarray is a contiguous non-empty sequence of elements within an array.
*/

let arr = [1,3,5], k = 0
//10,12,10,-10,0
//Approach 1, Brute Force
function countSubarray_1(arr, k) {
    const n = arr.length;
    let subArraySum = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            subArraySum += arr[j]
            if (subArraySum == k) count++;
        }
        subArraySum = 0;
    }
    return count;
}

console.log("Count Subarray", countSubarray_1(arr, k))


//Approach 1, Optimal
function countSubarray_2(arr, k) {
    const n = arr.length;
    if (n == 0) return 0;
    let count = 0;
    let freq = new Map();
    let subArraySum = 0;
    freq.set(0, 1)


    for (let i = 0; i < n; i++) {

        subArraySum += arr[i];

        if (freq.has(subArraySum - k)) {
            count += freq.get(subArraySum - k)
        }
        freq.set(subArraySum, (freq.get(subArraySum) || 0) + 1)
    }

    return count;
}

console.log("Count Subarray", countSubarray_2(arr, k))