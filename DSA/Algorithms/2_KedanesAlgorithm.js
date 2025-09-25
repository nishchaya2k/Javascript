/*
Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.
*/

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

var maxSubArray = function (nums) {
    let sum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        sum += nums[i]

        if (sum > maxSum) maxSum = sum;

        if (sum < 0) sum = 0;
    }

    return maxSum;
};

console.log("Maximum SubArray", maxSubArray(nums))


/*
Pattern:

1. even and odd indexes have same values in left side when single element is at odd index
2. odd and even indexes have same values in right when single element is at even even index

*/