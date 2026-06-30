/*
Kadane's Algorithm : Maximum Subarray Sum in an Array

Problem Statement: Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

let nums = [-2, -3, -7, -2, -10, -4]  

//Approach 1, TC: O(n), SC: O(1)
function maxSub_1(nums) {
    let n = nums.length, maxSum = Number.MIN_SAFE_INTEGER, sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);

        if (sum < 0) sum = 0;
    }
    return maxSum;
}

console.log("maximum Sub array", maxSub_1(nums));