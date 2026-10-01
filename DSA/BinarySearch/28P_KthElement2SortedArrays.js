/*
Problem Statement: Kth element of 2 sorted arrays

Given two sorted arrays a and b of size m and n respectively. Find the kth element of the final sorted array.
*/

let a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 5

//Approach 1, TC: O(n), SC: O(1)
function kthElement_1(a, b, k) {
    let i = 0, j = 0, result;
    let n1 = a.length, n2 = b.length;

    while ((i < n1) || (j < n2)) {

        if (((i + 1) + (j + 1)) > k) {
            result = Math.min(a[i] || Number.MAX_SAFE_INTEGER, b[j] || Number.MAX_SAFE_INTEGER);
            break;
        }


        if (i < n1 && j < n2) {
            if (a[i] < b[j]) i++;
            else j++;
        } else {
            if (i >= n1) j++;
            else i++;
        }

    }
    return result;

}

console.log("Kth Element", kthElement_1(a, b, k))


//Approach 2, TC: O(n), SC: O(1)
function kthElement_1(a, b, k) {
    let i = 0, j = 0;
    let n1 = a.length, n2 = b.length;

    while (i < n1 && j < n2) {
        if (k === 1) {
            return Math.min(a[i], b[j]);
        }

        if (a[i] < b[j]) {
            i++;
        } else {
            j++;
        }

        k--;
    }

    // One array is exhausted
    if (i < n1) {
        return a[i + k - 1];
    }

    return b[j + k - 1];

}

console.log("Kth Element", kthElement_1(a, b, k))