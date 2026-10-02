/*
Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

let a = [2, 4, 6], b = [1, 3, 5];

function medianSortedArray_1(a, b) {

    let n1 = a.length;                         // Length of a
    let n2 = b.length;                         // Length of b

    if (n1 > n2) return medianSortedArray_1(b, a); // Binary search on smaller array

    let low = 0, high = n1;                    // Search range for partition in a

    let left = Math.floor((n1 + n2 + 1) / 2); // Elements required in left partition
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

            if (n % 2 == 1)                   // Odd total → max of left
                return Math.max(l1, l2);

            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2; // Even total → average of middle
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

console.log("Median", medianSortedArray_1(a, b));


/*
Note:
Instead of actually merging the two sorted arrays, we divide both arrays
into a left and right partition.

We want the left partition to contain half of the total elements.
So, if we take mid1 elements from array 'a', we take (left - mid1)
elements from array 'b'.

The correct partition is found when every element on the left side
is <= every element on the right side.

Since 'a' is sorted, we can binary search for the correct partition
in the smaller array.

Once the correct partition is found:
- Odd total length  -> median = maximum element of the left partition
- Even total length -> median = average of max(left) and min(right)

This allows us to find the median in O(log(min(n1, n2))) time
without merging the arrays.
*/