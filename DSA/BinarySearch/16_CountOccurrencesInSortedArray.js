/*
Count Occurrences in a Sorted Array
You are given a sorted array of integers arr and an integer target. Your task is to determine how many times target appears in arr.

Return the count of occurrences of target in the array.
*/

let arr = [1, 2, 3, 4], target = 5

//Approach 1, Brute force
//Approach 2, 2 Pointers
//Approach 3, Binary Search, (you can optimize by calling lowerbound and upper function)

function countOccurrences(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let left = -1;
    let right = -1;

    // find first occurrence
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == target) left = mid;

        if (arr[mid] >= target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    // find last occurrence
    start = 0;
    end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == target) right = mid;

        if (arr[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    let count = (left !== -1 && right !== -1) ? right - left + 1 : 0;

    return count;
}

console.log("Count Occurrences:", countOccurrences(arr, target));
