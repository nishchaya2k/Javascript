/*
Search Insert Position

Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.

If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.
*/

let arr = [1, 2, 5], x = 4


function searchInsert(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == x) return mid;

        else if (arr[mid] > x) end = mid - 1;

        else start = mid + 1;
    }

    return start;
}

console.log("Search Insert", searchInsert(arr, x))