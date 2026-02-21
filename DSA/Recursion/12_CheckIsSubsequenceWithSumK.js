/*
Check if there exists a subsequence with sum K

Problem Statement: Given an array nums and an integer k. Return true if there exist subsequences such that the sum of all elements in subsequences is equal to k else false.
*/

let nums = [1, 2, 3, 4, 5], k = 8

function generate(i, sum, n) {

    if (i >= n) return sum == k;
    return generate(i + 1, sum + nums[i], n) || generate(i + 1, sum, n);
}

// Approach, TC: O(2^n), SC: O(n)

function isSubsequence(nums, k) {

    let n = nums.length;
    if (generate(0, 0, n)) return "Yes"
    else return "No"
}

console.log("is Subsequence with Sum k", isSubsequence(nums, k))