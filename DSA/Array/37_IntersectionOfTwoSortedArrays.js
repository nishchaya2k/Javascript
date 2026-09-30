/*
Intersection of two sorted arrays

Given two sorted arrays, nums1 and nums2, return an array containing the intersection of these two arrays. Each element in the result must appear as many times as it appears in both arrays; that is, if an element appears x times in nums1 and y times in nums2, it should appear min(x, y) times in the result.

The intersection of two arrays is an array where all values are present in both arrays.
*/

let nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]

//Approach 1, TC: O(n), SC: O(n)
function interSection_1(nums1, nums2) {
    let i = 0, j = 0, result = [];
    let n1 = nums1.length, n2 = nums2.length;


    while ((i < n1) && (j < n2)) {
        if (nums1[i] < nums2[j]) i++;
        else if (nums1[i] > nums2[j]) j++;
        else {
            result.push(nums1[i])
            i++;
            j++;
        }
    }
    return result;
}

console.log("Intersection", interSection_1(nums1, nums2))