/*
Problem Statement: Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False. 
*/

let arr = [7, 8, 1, 2, 3, 3, 3, 4, 5, 6], k = 10


//Approach 1 - Optimal
function rotatedSorted_Array(arr, k) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == k) return true;

        // Handle duplicates
        if (arr[start] === arr[mid] && arr[mid] === arr[end]) {
            start++;
            end--;
        }

        else if (arr[start] <= arr[mid]) {           //left part is sorted
            if (arr[start] <= k && k < arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1;
            }
        } else {                         //right part is sorted                     
            if (arr[mid] < k && k <= arr[end]) {
                start = mid + 1
            } else {
                end = mid - 1;
            }
        }
    }

    return false
}

console.log("Search Element in Rotated Array", rotatedSorted_Array(arr, k))