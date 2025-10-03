/*
Rotate array by K elements

Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

*/


let n = 6, nums = [1, 2, 3, 4, 5, 6], k = 4


// Approach 1, Brute Force, TC: O(n2), Space Consumed O(n) & Extra Space Consumed O(1)

function rotateArray1(nums, n, k, type) {
    while (k--) {
        if (type === "right") {
            let temp = nums[n - 1];
            for (let i = n - 1; i > 0; i--) {
                nums[i] = nums[i - 1];
            }
            nums[0] = temp;
        } else {
            let temp = nums[0];
            for (let i = 0; i < n - 1; i++) {
                nums[i] = nums[i + 1];
            }
            nums[n - 1] = temp;
        }
    }
    return nums;
}


console.log("Rotate Array ", rotateArray1(nums, n, k, type = "right"))




// Approach 2, SC: O(n)

function rotateArray2(nums, n, k, type) {
    let rotation = k % n;

    //base case
    if (n == rotation) return nums;

    let temp = [];

    for (let i = n - rotation; i < n; i++) {
        temp.push(nums[i])
    }

    for (let i = 0; i < n - rotation; i++) {
        temp.push(nums[i])
    }

    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }

    return nums
}


console.log("Rotate Array ", rotateArray2(nums, n, k, type = "right"))


// Approach 3, TC: O(n), SC: O(1). -> Optimal


function rotateArray3(nums, n, k, type) {
    let rotation = k % n;

    //base case
    if (n == rotation) return nums;

    // Helper to reverse part of array
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Reverse 3 parts, Its a Pattern or direct way to get answer
    reverse(nums, 0, n - 1);
    reverse(nums, 0, rotation - 1);
    reverse(nums, rotation, n - 1);

    return nums
}


console.log("Rotate Array ", rotateArray3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], n=27, 38, type = "right"))
