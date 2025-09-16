/*
Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

*/

let arr = [4, 5, 6, 7, 0, 1, 2, 3], k = 0;

function searchElement(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === k) {
            return mid;
        }

        if (arr[start] < arr[mid]) { // Check if the left half is sorted

            if (arr[start] <= k && k < arr[mid]) {
                end = mid - 1;  //search in left 
            } else {
                start = mid + 1; //search in right 
            }
        } else { // Right half is sorted
            if (arr[mid] < k && k <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1; //search in right 
            }
        }
    }

    return -1;
}

console.log("Search Element", searchElement(arr, k))



/*

Approch ->

1. We know binary search applicable on sorted array only, so firstly we will try to find out sorted part, to make it available for binary search

2. & for that you need to find weather the side u have choosen right or left (bcoz for sure as array is rotated, so one of the side is sorted), is sorted or not

3. After that you sorted part should have that particular target element or not,if not we need to update the range


4. Repeat the steps...

*/