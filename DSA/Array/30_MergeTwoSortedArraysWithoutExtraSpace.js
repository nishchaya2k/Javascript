/*
Merge two Sorted Arrays Without Extra Space

Problem Statement: Given two sorted integer arrays nums1 and nums2, merge both the arrays into a single array sorted in non-decreasing order.
The final sorted array should be stored inside the array nums1 and it should be done in-place.
Array nums1 has a length of m + n, where the first m elements denote the elements of nums1 and rest are 0s whereas nums2 has a length of n.
*/

//Approach 1, Brute Force, Merge both arrays and sort


//Approach 2, Optimal

const nums1 = [-5, -2, 4, 5, 0, 0, 0], nums2 = [-3, 1, 8];


function mergeSortedArrays_2(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;

    let k = n - 1, j = m - 1, i = n - m - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (i >= 0) {
        nums1[k] = nums1[i];
        i--;
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }


    return nums1;
}

console.log("Merged Sorted Array", mergeSortedArrays_2(nums1, nums2))