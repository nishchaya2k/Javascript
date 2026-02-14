/*
Count all subsequences with sum K

Problem Statement: Given an array nums and an integer k.Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.
*/

let nums = [4, 9, 2, 5, 1], k = 0

//Approach , TC: O(2^n), SC: O(n)
function countSubsequenceK(nums, k, taken) {

    let n = nums.length;

    function generate(i, sum, taken) {

        if (i >= n) {
            if (sum == k && taken) {
                return 1;
            }
            return 0;
        }

        let count = 0;
        count += generate(i + 1, sum + nums[i], true)
        count += generate(i + 1, sum, taken)

        return count
    }

    return generate(0, 0, false)
}

console.log("", countSubsequenceK(nums, k))
