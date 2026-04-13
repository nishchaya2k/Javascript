/*
Max Consecutive Ones III

Problem Statement: Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2


//Approach 1, Better Approach, TC: O(n), SC: O(1) 
function maxOnes_1(nums, k) {

    let l = 0;
    let count = 0;
    let maxLen = 0;

    for (let r = 0; r < nums.length; r++) {

        if (nums[r] === 0) count++;

        while (count > k) {
            if (nums[l] === 0) count--;
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
}

console.log("Max Ones", maxOnes_1(nums, k))



//Approach 2, Better Approach, TC: O(n), SC: O(n) 
function maxOnes_2(nums, k) {

    let n = nums.length;
    let l = 0, r = 0, count = 0, i = 0, maxOnes = 0;
    let zerosIndex = [];

    while (r < n) {
        if (nums[r] == 0) {
            count++;
            zerosIndex.push(r);
        }

        if (count > k) {
            l = zerosIndex[i] + 1;
            i++;
            count--;
        }

        maxOnes = Math.max(maxOnes, (r - l + 1));
        r++;
    }

    return maxOnes;
}

console.log("Max Ones", maxOnes_2(nums, k))



//Approach 3, Optimal Approach, TC: O(n), SC: O(1) 
function maxOnes_3(nums, k) {
    let l = 0;
    let count = 0;
    let maxLen = 0;

    for (let r = 0; r < nums.length; r++) {

        if (nums[r] === 0) count++;

        if (count > k) {
            if (nums[l] == 0) count--;
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
}


console.log("Max Ones", maxOnes_3(nums, k))