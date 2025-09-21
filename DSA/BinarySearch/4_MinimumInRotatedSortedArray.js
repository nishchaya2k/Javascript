/*
Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 

*/

// let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let arr = [4, 5, 6, 7, 8,9];
let min = Number.MAX_SAFE_INTEGER;

function minimumElement(arr, min) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {

        let mid = Math.floor((start + end) / 2);

        min = Math.min(min,arr[mid], arr[start], arr[end]);

        if (arr[start] <= arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return min;
}

console.log("Minimum in Rotated Sorted Array", minimumElement(arr, min))
