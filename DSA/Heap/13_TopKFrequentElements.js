/*
Top K Frequent Elements

Given an integer array nums and an integer k, return any order list of the k most frequent elements in nums.
Your solution must run in better than O(n log n) time, where n = nums.length.
*/

let nums = [1, 1, 1, 2, 2, 3], k = 2;

//Approach 1, TC: O(nlogn), SC: O(n)
function topKElements_1(nums, k) {
    let n = nums.length;
    let map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1])
    return sortedEntries.slice(0, k).map(a => a[0])
}

console.log("Top K Elements", topKElements_1(nums, k))


//Approach 2, Heap,  TC: O(nklogk), SC: O(n) - dont use sort, use heap class in interview
function topKElements_2(nums, k) {
    let n = nums.length;
    let map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let heap = [];

    for (let [num, freq] of map.entries()) {
        heap.push([num, freq]);
        heap.sort((a, b) => a[1] - b[1]);

        if (heap.length > k) {
            heap.shift();
        }
    }

    return heap.map(a => a[0]);
}

console.log("Top K Elements", topKElements_2(nums, k))