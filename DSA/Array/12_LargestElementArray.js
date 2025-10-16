/*
Find the Largest element in an array

Problem Statement: Given an array, we have to find the largest element in the array.
*/

let arr = [2, 5, 1, 3, 0];


function largestElement(arr) {

    let max = Number.MIN_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    return max;
}

console.log("Largest Element", largestElement(arr))