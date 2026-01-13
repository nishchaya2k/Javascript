/*
Split Array - Largest Sum

Problem Statement: Given an integer array ‘A’ of size ‘N’ and an integer ‘K'. Split the array ‘A’ into ‘K’ non-empty subarrays such that the largest sum of any subarray is minimized. Your task is to return the minimized largest sum of the split. A subarray is a contiguous part of the array.
*/

let nums = [2, 3, 1, 1, 1, 1, 1], k = 5;

function canSubArray(nums, i) {
    let sum = 0;
    let count = 1;

    for (let j = 0; j < nums.length; j++) {
        if ((sum + nums[j]) > i) {
            count++;
            sum = nums[j];
        } else {
            sum += nums[j];
        }
    }

    return count;
}

//Approach 1, TC: O(2^n), SC: O(n)
function splitArray_1(nums, k) {
    if (nums.length < k) return -1;

    let min = Math.max(...nums);
    let max = nums.reduce((acc, curr) => acc + curr, 0);
    let result = min


    for (let i = min; i <= max; i++) {
        if (canSubArray(nums, i) == k) {
            result = i;
            break;
        }
    }

    return result;
}

console.log("Split Array", splitArray_1(nums, k))


//Approach 2, TC: O(2^n), SC: O(n)
function splitArray_2(nums, k) {

    if (nums.length < k) return -1;

    let min = Math.max(...nums);
    let max = nums.reduce((acc, curr) => acc + curr, 0);
    let result = min


    let low = min, high = max;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        let possibleAns = canSubArray(nums, mid)

        if (possibleAns == k) {
            result = mid;
            high = mid - 1;
        }
        else if (possibleAns < k) {
            high = mid - 1;
        }
        else {
            low = mid + 1
        }
    }
    return result;
}

console.log("Split Array", splitArray_2(nums, k))