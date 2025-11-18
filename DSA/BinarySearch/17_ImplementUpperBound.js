/*
Implement Upper Bound

Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

Note: If all the elements in the given array are smaller than or equal to the target, the upper bound will be the length of the array.
*/

let arr = [1, 2, 2, 3, 4], x = 3;

function upperBound(arr, x) {

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] <= x) {
            start = mid + 1;
        }

        else {
            end = mid;
        }
    }

    if (end == arr.length - 1 && arr[end] <= x) return arr.length
    return end;
}

console.log("Upper Bound", upperBound(arr, x))