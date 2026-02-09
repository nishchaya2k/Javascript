/*
Find the number that appears odd number of times

Problem Statement: Given an array of nums of n integers. Every integer in the array appears twice except one integer. Find the number that appeared once in the array.
*/
nums = [1, 2, 2, 4, 3, 1, 4]

//Approach 1, Brute Force,  TC: O(n^2), SC: O(1)
function findNumber_1(nums) {
    let n = nums.length

    for (let i = 0; i < n; i++) {
        let j;
        for (j = 0; j < n; j++) {
            if (i !== j && nums[i] == nums[j]) break;
        }
        if (j == n) return nums[i];
    }

    return -1;
}

console.log("Find Number", findNumber_1(nums))

//Approach 2, Optimal, TC: O(n), SC: O(1)
function findNumber_2(nums) {
    let n = nums.length
    let res = nums[0];

    for (let i = 1; i < n; i++) {
        res = res ^ nums[i]
    }
    return res;
}

console.log("Find Number", findNumber_2(nums))


