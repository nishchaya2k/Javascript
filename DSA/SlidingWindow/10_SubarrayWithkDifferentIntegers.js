/*
Subarray with k different integers

Problem Statement: You are given an integer array nums and an integer k. Return the number of good subarrays of nums.

A good subarray is defined as a contiguous subarray of nums that contains exactly k distinct integers. A subarray is a contiguous part of the array.
*/

let nums = [1, 2, 1, 2, 3], k = 2

//Approach 1, TC: O(n), SC: O(k)
function goodSubarrays_1(nums, k) {

    function generate(k) {

        let map = new Map();
        let maxLen = 0, start = 0;

        for (let i = 0; i < nums.length; i++) {

            map.set(nums[i], (map.get(nums[i]) || 0) + 1);

            while (map.size > k) {
                map.set(nums[start], map.get(nums[start]) - 1)

                if (map.get(nums[start]) == 0) {
                    map.delete(nums[start])
                }
                start++;
            }
            maxLen += i - start + 1
        }
        return maxLen;
    }
    return generate(k) - generate(k - 1)
}
console.log("Good Subarrays", goodSubarrays_1(nums, k))
