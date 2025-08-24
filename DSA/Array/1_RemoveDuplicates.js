/*
Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.

Note: Return k after placing the final result in the first k slots of the array.
*/

let arr = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 8, 8];


// Approach 1: Two Pointers

function remove_duplicates_inplace(arr) {
    if (arr.length === 0) return 0;


    let j = 1;
    let i = 0;

    while (j < arr.length) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j];
            i++;
        }

        j++;
    }

    return i + 1;
}

console.log("Remove Duplicates", remove_duplicates_inplace(arr))