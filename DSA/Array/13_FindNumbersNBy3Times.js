/*
Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array

Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.
*/

let arr = [11, 22, 22, 22, 11, 11]

//Approach 1
function findNoGreaterThenNBy3_1(arr) {
    let n = arr.length;
    let max_count = Math.floor(n / 3)

    let freq = {};

    for (let i = 0; i < n; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }

    let result = [];

    for (let key in freq) {
        if (freq[key] > max_count) result.push(Number(key))
    }

    return result;
}

console.log("Find Number", findNoGreaterThenNBy3_1(arr))


//Approach 2
function findNoGreaterThenNBy3_2(arr) {

}

console.log("Find Number", findNoGreaterThenNBy3_2(arr))

//Approach 3
function findNoGreaterThenNBy3_3(arr) {

}

console.log("Find Number", findNoGreaterThenNBy3_3(arr))