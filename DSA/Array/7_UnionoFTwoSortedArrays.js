/*
Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.
*/


let n = 5, m = 1
let arr1 = [1, 4, 4, 6, 7];
let arr2 = [4];


//Approach 1,  O((m+n)log(m+n)) . Inserting a key in map takes logN times

function unionOfArray1(arr1, arr2, n, m) {
    let map = new Map()
    let i = 0, j = 0;

    // Process both arrays while both pointers valid
    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) {
            map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
            i++;
        } else {
            map.set(arr2[j], (map.get(arr2[j]) || 0) + 1);
            j++;
        }
    }

    // Process remaining elements of arr1 (if any)
    while (i < n) {
        map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
        i++;
    }

    // Process remaining elements of arr2 (if any)
    while (j < m) {
        map.set(arr2[j], (map.get(arr2[j]) || 0) + 1);
        j++;
    }

    return [...map.keys()]
}

console.log("Union", unionOfArray1(arr1, arr2, n, m))


//Approach 2,  O((m+n)log(m+n)) . Inserting a key in set takes logN times


//Approach 3,  O(m+n)

function unionOfArray3(arr1, arr2, n, m) {
    let i = 0, j = 0; // Pointers
    let union = []; // Union array

    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) { // Case 1 and 2
            if (union.length === 0 || union[union.length - 1] !== arr1[i])
                union.push(arr1[i]);
            i++;
        } else { // Case 3
            if (union.length === 0 || union[union.length - 1] !== arr2[j])
                union.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) { // If any elements left in arr1
        if (union[union.length - 1] !== arr1[i])
            union.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) { // If any elements left in arr2
        if (union[union.length - 1] !== arr2[j])
            union.push(arr2[j]);
        j++;
    }

    return union;
}
console.log("Union Optimize", unionOfArray3(arr1, arr2, n, m))