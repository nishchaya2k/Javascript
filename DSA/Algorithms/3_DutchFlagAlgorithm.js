/*
Sort an array of 0s, 1s and 2s

Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
*/

let nums = [2, 0, 2, 1, 1, 0];


function sortArray(nums) {

    let n = nums.length;
    let low = 0; mid = 0, high = n - 1;

    while (mid <= high) {
        if (nums[mid] == 0) {
            let temp = nums[mid];
            nums[mid] = nums[low];
            nums[low] = temp;
            low++;
            mid++;
        }
        else if (nums[mid] == 1) mid++;
        else {
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }   
    }
    return nums;

}

console.log("Sort Array", sortArray(nums))

/*
Algorithm Used:
-> Dutch National Flag Algorithm
-> This algorithm uses three pointers: low, mid, and high.
-> The idea is to partition the array into four sections:
   1. [0 to low - 1] -> All 0s
   2. [low to mid - 1] -> All 1s
   3. [mid to high] -> Unknown elements (to be processed)
   4. [high + 1 to n - 1] -> All 2s

Initial State:
    low = 0, mid = 0, high = n - 1

Flow:
    While mid <= high:
        - If nums[mid] == 0:
            -> Swap nums[low] and nums[mid]
            -> Increment both low and mid (as both now point to sorted positions)
        
        - Else if nums[mid] == 1:
            -> 1 is already in the correct place, just move mid forward

        - Else if nums[mid] == 2:
            -> Swap nums[mid] and nums[high]
            -> Decrement high only (because the swapped-in value at mid still needs to be checked)

Why it works:
    - Each number is moved to its correct section in a single pass
    - No extra space is used
    - Runs in O(n) time as each element is checked at most once

Example:
    Input:  [2, 0, 2, 1, 1, 0]
    Output: [0, 0, 1, 1, 2, 2]
*/

