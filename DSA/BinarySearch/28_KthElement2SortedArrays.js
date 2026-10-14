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
function kthElement_2(a, b, k) {
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

console.log("Kth Element", kthElement_2(a, b, k))


//Approach 3, TC: O(log(n+m)), SC: O(1)
function kthElement_3(a, b, k) {
    let n1 = a.length;                         // Length of a
    let n2 = b.length;                         // Length of b

    if (n1 > n2) return kthElement_3(b, a,k); // Binary search on smaller array

    let low = Math.max(k-n2,0), high = Math.min(k,n1);            // Search range for partition in a

    let left = k;                               // Elements required in left partition
    let n = n1 + n2;                           // Total elements

    while (low <= high) {

        let mid1 = (low + high) >> 1;          // Elements taken from a
        let mid2 = left - mid1;                // Elements taken from b

        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER; // Left boundary values
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER; // Right boundary values

        if (mid1 < n1) r1 = a[mid1];           // First element on right of a
        if (mid2 < n2) r2 = b[mid2];           // First element on right of b

        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];  // Last element on left of a
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];  // Last element on left of b

        if (l1 <= r2 && l2 <= r1) {            // Valid partition

            return Math.max(l1, l2);
        }

        else if (l1 > r2) {
            high = mid1 - 1;                   // Too many elements from a → move left
        }

        else {
            low = mid1 + 1;                    // Too few elements from a → move right
        }
    }

    return 0;                                  // Unreachable for valid input

}

console.log("Kth Element", kthElement_3(a, b, k))