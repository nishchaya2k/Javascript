/*
Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.
*/

let arr = [2, 2, 1, 1, 1, 2, 2]

//Approach 1 -> Brute Force, use nested loop to find each element occurances


//Approach 2 -> Hashing, Time Complexity: O(N*logN) + O(N), where N = size of the given array.

function majorityElement2(arr) {
    const majorityCount = Math.ceil(arr.length / 2)

    let i = 0;
    let temp = {};

    while (i < arr.length) {
        temp[arr[i]] = (temp[arr[i]] || 0) + 1
        if (temp[arr[i]] >= majorityCount) return arr[i]
        i++;
    }

    return 0;
}

console.log("Majority Element", majorityElement2(arr))


//Approach 3, Moore’s Voting Algorithm, 

// Time Complexity: O(N) + O(N),Space Complexity: O(1) 

//https://takeuforward.org/data-structure/find-the-majority-element-that-occurs-more-than-n-2-times/

function majorityElement3(arr) {
    let element;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count == 0) element = arr[i];

        if (arr[i] == element) count++;
        else count--;
    }

    return element //question guarantees that the array contains a majority element
}

console.log("Majority Element", majorityElement3(arr))
