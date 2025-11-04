/*
Lower Bound

Given a sorted array of nums and an integer x, write a program to find the lower bound of x.
The lower bound algorithm finds the first and smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.
If no such index is found, return the size of the array.
*/

let nums = [1, 2, 2, 2, 3], x = 2;

function lowerbound(nums, x) {
    let start = 0;
    let end = nums.length - 1;
    let result = end + 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= x) {
            result = Math.min(mid, result);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return result;
}

console.log("lower bound", lowerbound(nums, x))

