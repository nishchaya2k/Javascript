/*
Next Greater Element - 2

Problem Statement: Given a circular integer array arr, return the next greater element for every element in arr.
The next greater element for an element x is the first element greater than x that we come across while traversing the array in a clockwise manner.
If it doesn't exist, return -1 for that element element.
*/

let arr = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9]

//Approach 1, Optimal, TC: O(1), SC: O(n)
function nextGreaterElement_1(arr) {
    let n = arr.length;

    //base case
    if (n == 1) return [-1];

    let stack = [], result = new Array(n);

    for (let i = n - 2; i >= 0; i--) {
        stack.push(arr[i]);
    }

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= arr[i]) stack.pop();
        stack.length == 0 ? result[i] = -1 : result[i] = (stack[stack.length - 1])
        stack.push(arr[i])
    }
    return result;

}

console.log("Next Greater Element", nextGreaterElement_1(arr))