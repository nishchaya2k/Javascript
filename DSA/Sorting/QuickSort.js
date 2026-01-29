/*
Quick Sort Algorithm

Problem Statement: Given an array of n integers, sort the array using the Quicksort method.
*/

let arr = [7, 2, 2, 5, 1, 8, 8, 1, 2, 12];

//Approach 1, TC: O(nlogn), SC: O(1)

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= (high - 1)) {
            i++
        }
        while (arr[j] > pivot && j >= (low + 1)) {
            j--;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]]
    return j;
}


function qs(arr) {
    let n = arr.length;

    function qs(arr, low, high) {
        if (low < high) {
            let pIndex = partition(arr, low, high);
            qs(arr, low, pIndex - 1);
            qs(arr, pIndex + 1, high);
        }

    }
    qs(arr, 0, n - 1)
    return arr
}

console.log("Sorted array", qs(arr))



/*

1. Pick the pivot, pivot can be 1st, last, median, or any random no.
2. Pick the pivot and place it in its correct place in the sorted array
3. smaller on the left and large on right
4. Repeat this process
*/
