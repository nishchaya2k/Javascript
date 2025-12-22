/*
Merge Sort Algorithm

Problem Statement: Given an array of size n, sort the array using Merge Sort.
*/

let arr = [3, 2, 4, 5, 1, 7, 4]

function mergeSort(arr) {
    let n = arr.length;
    function merge(arr, low, mid, high) {

        let temp = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            }
            else {
                temp.push(arr[right]);
                right++
            }
        }
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low]
        }
    }

    function divideConquer(arr, low, high) {
        if (low >= high) return;
        let mid = Math.floor((low + high) / 2); //0,3...0,1..0,0

        divideConquer(arr, low, mid)
        divideConquer(arr, mid + 1, high)
        merge(arr, low, mid, high);

    }
    divideConquer(arr, 0, n - 1)
    return arr
}

console.log("Merge Sort", mergeSort(arr))