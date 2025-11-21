/*
Leaders in an Array

Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.
*/

const arr = [66]

//Approach 1, Brute Force, Iterate the array 2 times, and check for each element

//Approach 2, Optimize, Start from end and compare with max value
function leaderInArray(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > max && (result[result.length - 1 || 0] !== arr[i])) result.push(arr[i]);
        if (arr[i] > max) max = arr[i]
    }

    return result.reverse()
}

console.log("Leaders In Array", leaderInArray(arr))