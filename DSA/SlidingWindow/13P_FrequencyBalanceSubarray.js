/*
Frequency Balance Subarray

You are given an integer array ​​​​​​​nums.

Define a frequency balance subarray as follows:

If the subarray contains only one distinct value, it is frequency balanced.
Otherwise, there must exist a positive integer f such that every distinct value in the subarray occurs either f or 2 * f times, and both frequencies occur among the distinct values.
Return an integer denoting the length of the longest frequency balance subarray.
*/

let nums = [1, 2, 2, 1, 2, 3, 3, 3];

//Approach 1,

function freqBalance_1(nums) {
    let n = nums.length;

    let l = 0, r = 0, maxCount = 0;
    let map = new Map();

    while (r < n) {

        map.set(nums[r], (map.get(nums[r]) || 0) + 1);


        while (l <= r && map.get(nums[r]) > 2) {
            map.set(nums[l], (map.get(nums[l]) || 0) - 1);
            l++;
        }

        maxCount = Math.max(maxCount, (r - l + 1));
        r++;
    }

    return maxCount;

}

console.log("Frequency Balance", freqBalance_1(nums))