/*
Check if an array represents a min heap

Problem Statement: Given an array of integers nums. Check whether the array represents a binary min-heap or not. Return true if it does, otherwise return false.
A binary min-heap is a complete binary tree where the key at the root is the minimum among all keys present in a binary min-heap and the same property is recursively true for all nodes in a Binary Tree.
*/

let nums = [90, 15, 10 ,7 ,12, 2]


//Approach 1, TC: O(n), SC: O(1)
function isMinHeap(nums) {
    let n = nums.length;

    for (let i = n - 1; i > 0; i--) {

        let parent = Math.floor((i - 1) / 2)
        if (nums[parent] <= nums[i]) continue;
        return false
    }

    return true;
}

console.log("is min Heap", isMinHeap(nums))