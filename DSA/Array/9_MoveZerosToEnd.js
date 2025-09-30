/*
Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.

This must be done in place, without making a copy of the array.
*/

let nums = [0, 1, 4, 0, 5, 2];
let n = nums.length

// Approach 1 -> Take Another Array Put values one by one there


// Approach 2 -> Two Pointers, O(N)
function moveZerosToEnd2(nums, n) {
    let i = 0;
    let j = 1;

    //base condition
    if (n == 1) return nums;

    while (j < n) {
        if (nums[i] !== 0) {
            i++;
            j++;
        }
        else if (nums[i] == 0 && nums[j] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp
            i++;
            j++;
        }
        else j++;
    }

    return nums
}

console.log("Move Zeroes To End", moveZerosToEnd2(nums, n))