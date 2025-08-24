/*
Problem Statement: You are given an array. The task is to reverse the array and print it. 
*/


const arr = [1, 3, 4, 2, 6, 7, 3]


// Approach 1, use one more array
function reverseArray1(arr) {

    let temp = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }

    return temp
}

console.log("Reverse Array", reverseArray1([1, 3, 4, 2, 6, 7, 3]));


// Approach 2, update the original array
function reverseArray2(arr) {

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    return arr;
}

console.log("Reverse Array", reverseArray2(arr));


// Approach 3, update the original array recursively
function reverseArray3(arr, start, end) {


    if (start >= end) return;


    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;


    reverseArray3(arr, start + 1, end - 1)


    return arr;
}

console.log("Reverse Array", reverseArray3(arr, 0, arr.length - 1));

// Approach 4, use reverse function

console.log("Reverse Array", arr.reverse());
