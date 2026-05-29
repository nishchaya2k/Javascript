/*
Convert Min Heap to Max Heap
*/


let arr = [10, 20, 30, 21, 23];

function maxHeapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]];
        maxHeapify(arr, n, largest)
    }
}

//Approach 1, TC: O(n), SC: O(1)
function minHeap_1(arr) {

    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, n, i)
    }

    return arr;
}

console.log("Min Heap", minHeap_1(arr))