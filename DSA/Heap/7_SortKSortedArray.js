/*
Sort K sorted array

Problem Statement: Given an array arr[] and a number k . The array is sorted in a way that every element is at max k distance away from it sorted position. It means if we completely sort the array, then the index of the element can go from i - k to i + k where i is index in the given array. Our task is to completely sort the array.
*/

const { MinHeap } = require("./2_MinHeap");

let arr = [6, 5, 3, 2, 8, 10, 9], k = 3;

//Approach 1, TC: O(n log k), SC: O(k)
function sortKSortedArray_1(arr, k) {

    let heap = new MinHeap();
    let n = arr.length, i = 0;

    while (i < k + 1) {
        heap.insert(arr[i]) //forming priority queue of size k+1
        i++;
    }

    while (i < n) {
        arr[i - k - 1] = heap.extractMin();
        heap.insert(arr[i]);
        i++;
    }
    i = n - k - 1;

    while (heap.size()) {
        arr[i] = heap.extractMin();
        i++;
    }
    return arr;
}

console.log("Sort K Sorted Array", sortKSortedArray_1(arr, k));

/*
Intuition

- Correct element always lies within
  next k+1 elements

- So maintain MinHeap of k+1 size

- Extract minimum
  -> place at correct sorted position

- Insert next element
  -> maintain window


Why Heap?

- Fast minimum removal
- Fast insertion

Complexities

TC -> O(n log k)
SC -> O(k)

*/
