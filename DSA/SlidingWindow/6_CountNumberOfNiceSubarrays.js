/*
Count number of nice subarrays

Problem Statement: Given an array nums and an integer k. An array is called nice if and only if it contains k odd numbers. Find the number of nice subarrays in the given array nums. A subarray is continuous part of the array.
*/

let nums = [98, 97, 27, 56, 84, 37, 88, 97], k = 4

//Approach 1, Better, TC: O(n), SC: O(n)

function countNiceSubarrays_1(nums, k) {

    let n = nums.length;

    // Frequency map to track number of times a certain odd count has appeared
    let freq = new Map();

    // Initialize frequency map with 0 odd count
    freq.set(0, 1);

    // Running count of odd numbers in prefix
    let oddCount = 0;

    // Total result to store answer
    let result = 0;

    // Traverse through each number
    for (let num of nums) {

        // Check if number is odd
        if (num % 2 === 1) oddCount++;

        // Check if (oddCount - k) exists in map
        if (freq.has(oddCount - k)) {
            result += freq.get(oddCount - k);
        }

        // Update frequency map
        freq.set(oddCount, (freq.get(oddCount) || 0) + 1);
    }

    // Return final answer
    return result;
}

console.log("Count Nice Subarrays", countNiceSubarrays_1(nums, k))

//Approach 2, Optimal, TC: O(n), SC: O(1)
function countNiceSubarrays_2(nums, k) {

    let n = nums.length;

    function atMost(kCount) {
        let left = 0, right = 0, count = 0, res = 0;

        while (right < n) {

            if (nums[right] % 2 !== 0) count++;

            while (left <= right && count > kCount) {
                if ((nums[left] % 2) !== 0) count--;
                left++;
            }

            res += right - left + 1;

            right++;
        }

        return res;
    }

    return atMost(k) - atMost(k - 1);
}

console.log("Count Nice Subarrays", countNiceSubarrays_2(nums, k))

