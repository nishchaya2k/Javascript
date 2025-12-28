/*
Count inversions in an array

Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).

Inversion of an array: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].
*/

const arr = [2, 4, 1, 3, 5];

//Approach 1, Optimal, TC: O(nlogn), SC: O(n)

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low, right = mid + 1, count = 0;

    while (left <= mid && right <= high) {
        if (arr[left] > arr[right]) {
            temp.push(arr[right]);
            count += (mid - left + 1);
            right++;
        } else {
            temp.push(arr[left]);
            left++;
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
    return count;
}

function inversionCount(arr) {
    let n = arr.length;

    function divideConquer(arr, low, high) {

        if (low >= high) return 0;
        let mid = Math.floor((low + high) / 2)

        let count = 0;
        count += divideConquer(arr, low, mid);   //left total
        count += divideConquer(arr, mid + 1, high);  //right total

        count += merge(arr, low, mid, high);   //final
        return count;
    }
    return divideConquer(arr, 0, n - 1)

}

console.log("Inversion Control", inversionCount(arr))



/*
The brute force approach compares all pairs, but that takes O(N^2) time.
We can optimize this using the merge sort algorithm.

While merging two sorted halves, if an element in the left half is greater
than an element in the right half, then all remaining elements in the left
half will also be greater than that right element. This allows us to count
multiple inversions in one step instead of checking each pair individually.

Apply merge sort recursively to divide the array into two halves.

During the merge step:
- If arr[left] <= arr[right], place arr[left] into the temp array
  and move left++.
- Otherwise, place arr[right] into the temp array. Since arr[left] > arr[right],
  all elements from arr[left] to arr[mid] form inversions with arr[right].
  So add (mid - left + 1) to the inversion count.

Copy the merged elements back into the original array.

The total inversion count is the sum of:
- Inversions in the left half
- Inversions in the right half
- Inversions across the halves (counted during merge)
*/
