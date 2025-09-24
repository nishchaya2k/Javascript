/*
Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 

*/

// let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let arr = [4, 5, 6, 7, 8, 9];
// let arr = [1];
let min = Number.MAX_SAFE_INTEGER;

//Approach 1 - O(logn)
function minimumElement1(arr, min) {
    let start = 0;
    let end = arr.length - 1;

    if (arr[start] < arr[end]) {
        return arr[start];
    }

    while (start < end) {

        let mid = Math.floor((start + end) / 2);

        min = Math.min(min, arr[mid], arr[start], arr[end]);

        if (arr[start] <= arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return min;
}

console.log("Minimum in Rotated Sorted Array", minimumElement1(arr, min))


var minimumElement2 = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    if (nums[start] < nums[end]) {
        return nums[start];
    }


    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[start];
};


console.log("Minimum in Rotated Sorted Array", minimumElement2(arr, min))


//Approach 3, Most Simple and Effective

var minimumElement3 = function (arr,min) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[start] <= arr[end]) {
            if (arr[start] < min) min = arr[start];
            start = mid + 1;
        } else {
            if (arr[mid] < min) min = arr[mid];
            end = mid - 1;
        }
    }

    return min;

}


console.log("Minimum in Rotated Sorted Array", minimumElement3(arr, min))

/*

Test Case: when we are checking b/w mid and end

1. nums[mid] > nums[end]
- Because if this is true, the smallest value must lie **after mid**, as the rotation point is in the right half.
- Example: [4, 5, 6, 7, 0, 1, 2]
    - mid = 3 (nums[mid] = 7), end = 6 (nums[end] = 2)
    - Since 7 > 2 ⇒ min is in right half ⇒ start = mid + 1

2. nums[mid] <= nums[end]
- This means the right half [mid...end] is sorted.
- So, the minimum could be at **mid or to the left**, including mid.
- Example: [4, 5, 6, 1, 2, 3]
    - mid = 2 (nums[mid] = 6), end = 5 (nums[end] = 3)
    - 6 > 3 ⇒ go right
    - But if mid = 3 (nums[mid] = 1), and end = 5 (nums[end] = 3)
    - 1 < 3 ⇒ min is in left part or at mid ⇒ end = mid

-------------------------------------------------------

Test Case: why we **can't** check b/w start and mid

1. nums[start] <= nums[mid]
- This means the left part [start...mid] is sorted.
- But we **can't decide** whether the minimum is in left or right,
  because:
    - nums[end] < nums[mid] → min might be on right
    - nums[end] > nums[mid] → min might be on left (mid could be min)

- Example: [4, 5, 6, 7, 0, 1, 2]
    - start = 0 (nums[start] = 4), mid = 3 (nums[mid] = 7)
    - nums[start] < nums[mid] → left is sorted
    - But nums[end] = 2, which is < nums[mid], so min is in right

- Example: [2, 3, 4, 5, 6, 1]
    - start = 0 (nums[start] = 2), mid = 2 (nums[mid] = 4)
    - nums[start] < nums[mid], but min is still on the right (1)

=> So comparing start vs mid doesn't eliminate a half **reliably**,
   while comparing mid vs end always lets us eliminate one half.

*/
