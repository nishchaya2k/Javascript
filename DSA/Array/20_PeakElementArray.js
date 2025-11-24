/*
Peak element in Array

Problem Statement: Given an array of length N, peak element is defined as the element greater than both of its neighbors. Formally, if arr[i] is the peak element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i]. Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.
*/

let arr = [1, 2, 4, 3, 5, 6, 7, 8, 9];

//Approach 1, Brute Force, TC: O(n), SC: O(1)
function peakElement_1(arr) {
    let n = arr.length;
    let peakElement = null;

    for (let i = 0; i < arr.length; i++) {

        if ((i == 0 && arr[i] > arr[i + 1]) || (i == n - 1 && arr[i] > arr[i - 1]) || (arr[i] > arr[i + 1] && arr[i] > arr[i - 1])) {
            peakElement = i
            break;
        }
    }

    return peakElement;
}

console.log("Peak Element", peakElement_1(arr))

//Approach 2, Optimize, TC: O(n), SC: O(1)
function peakElement_2(arr) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if ((mid == 0 && mid == n - 1) || (mid == 0 && arr[mid] > arr[mid + 1]) || (mid == n - 1 && arr[mid] > arr[mid - 1]) || (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]))
            return mid;


        else if (arr[mid] < arr[mid + 1])
            low = mid + 1;

        else
            high = mid - 1;
    }

    return -1;
}
console.log("Peak Element", peakElement_2(arr))