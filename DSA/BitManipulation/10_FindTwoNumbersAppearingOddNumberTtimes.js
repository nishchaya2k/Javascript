/*
Find the two numbers appearing odd number of times

Problem Statement: Given an array nums of length n, every integer in the array appears twice except for two integers. Identify and return the two integers that appear only once in the array. Return the two numbers in ascending order.

For example, if nums = [1, 2, 1, 3, 5, 2], the correct answer is [3, 5], not [5, 3].
*/

let nums = [1, 2, 1, 3, 5, 2]

//Appoach 1, Optimal, TC: O(N), SC: O(1)

function findNum(nums) {

    let xor_nums = 0;

    for (let i = 0; i < nums.length; i++) {
        xor_nums = xor_nums ^ nums[i];
    }

    let j = 0;
    let temp = xor_nums; // FIX: preserve original xor

    while (temp) {
        if (temp & 1) break;
        j++;
        temp = temp >> 1;
    }

    let xor_p1 = 0, xor_p2 = 0;
    let helper = 1 << j;

    for (let i = 0; i < nums.length; i++) {
        if (helper & nums[i]) {
            xor_p1 = xor_p1 ^ nums[i];
        } else {
            xor_p2 = xor_p2 ^ nums[i];
        }
    }

    return [xor_p1, xor_p2].sort((a, b) => a - b);
}


console.log("Find Numbers", findNum(nums))