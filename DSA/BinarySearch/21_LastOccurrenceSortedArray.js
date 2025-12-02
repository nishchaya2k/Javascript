/*
Last occurrence in a sorted array

Problem Statement: Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1. Note: Consider 0 based indexing
*/

let n = 7, target = 13, arr = [3, 4, 13, 13, 13, 20, 40]

//Approach 1: Brute Force
//Approach 2: Optimize
function lastOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;


    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == target) {
            start = mid + 1;
            result = mid; 
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return result;
}

console.log("Last Occurance", lastOccurrence(arr, target))