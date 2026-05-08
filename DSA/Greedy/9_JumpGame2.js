/*
Problem Statement: You are given a 0-indexed array nums of length n representing your maximum jump capability from each index.

You start at index 0. Each element nums[i] represents the maximum number of steps you can jump forward from index i.
Your goal is to reach the last index of the array (nums[n - 1]) using the minimum number of jumps
Return the minimum number of jumps required to reach the last index.
*/


let nums = [0, 2, 3, 0, 1, 4];

//Approach 1, TC:O(N), SC: O(1)

function JumpGame2(nums) {
    let n = nums.length, step = 0, initialWindow = 0, maxWindow = 0;;
    let i = 0;

    // cannot move anywhere
    if (n > 1 && nums[0] == 0) return -1;

    while (i < n - 1) {

        // find farthest reachable index
        maxWindow = Math.max(i + nums[i], maxWindow);

        if (i == initialWindow) {
            initialWindow = maxWindow;
            step++;
        }
        i++;
    }
    return step;
}

console.log("Jump Game 2", JumpGame2(nums))