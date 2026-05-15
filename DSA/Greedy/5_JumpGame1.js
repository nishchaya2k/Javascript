/*
Jump Game - I

Problem Statement: Given an array where each element represents the maximum number of steps you can jump forward from that element, return true if we can reach the last index starting from the first index. Otherwise, return false.
*/

let nums = [2, 4, 1, 2, 0, 0, 2, 0, 1]

//Approach 1, TC:O(n), SC: O(1)
function jumpGame_1(nums) {

    let n = nums.length;

    if (n == 1) return true

    let i = n - 2, lastStep = n - 1;

    while (i >= 0) {
        if ((nums[i] + i) >= lastStep) lastStep = i;

        i--;
    }

    return lastStep == 0 ? true : false

}

console.log("Jump Game", jumpGame_1(nums))