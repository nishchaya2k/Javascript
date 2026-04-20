/*
Binary subarray with sum

Problem Statement: You are given a binary array nums (containing only 0s and 1s) and an integer goal. Return the number of non-empty subarrays of nums that sum to goal. A subarray is a contiguous part of the array.
*/

let nums = [1, 0, 0, 1, 1, 0], goal = 2;

//Approach 1, TC: O(n^2), SC: O(1)
function subarraySum_1(nums, goal) {

    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let sum = 0, subArray = [];
        for (let j = i; j < n; j++) {
            sum += nums[j];
            subArray.push(nums[j])

            if (sum === goal) {
                count++;
            } else if (sum > goal) break;
        }
    }
    return count;
}

console.log("Sub Array Sum", subarraySum_1(nums, goal))


//Approach 2,TC: O(n), SC: O(n)
function subarraySum_3(nums, goal) {

    let n = nums.length;
    let sum = 0, count = 0;
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1);

    for (let i = 0; i < n; i++) {

        sum += nums[i];

        if (prefixSumCount.has(sum - goal)) {
            count += prefixSumCount.get(sum - goal);
        }

        prefixSumCount.set(sum, (prefixSumCount.get(sum) || 0) + 1);
    }
    return count;
}

console.log("Sub Array Sum", subarraySum_3(nums, goal))

//Approach 3, TC: O(n), SC: O(1)
function subarraySum_3(nums, goal) {

    let n = nums.length;

    function countAtMost(k) {
        if (k < 0) return 0;
        let left = 0;
        let count = 0;
        let sum = 0;

        for (let right = 0; right < n; right++) {
            sum += nums[right];

            while (sum > k) {
                sum -= nums[left];
                left++;
            }
            count += right - left + 1;
        }
        return count;
    }
    return countAtMost(goal) - countAtMost(goal - 1);
}

console.log("Sub Array Sum", subarraySum_3(nums, goal))