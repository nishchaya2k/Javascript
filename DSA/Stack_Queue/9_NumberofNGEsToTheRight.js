/*
Number of NGEs to the right

Problem Statement: Given an array arr of size n containing elements, find the next greater element for each element in the array in the order of their appearance.

The next greater element of an element in the array is the nearest element on the right that is greater than the current element.

If there does not exist a next greater element for the current element, then the next greater element for that element is -1.
*/

let arr = [6, 8, 0, 1, 3]  

//Approach 1, TC: O(n), SC: O(n)
function nge_1(arr) {

    let n = arr.length;
    let stack = [];
    let res = new Array(arr.length);

    for (let i = n - 1; i >= 0; i--) {

        // Remove smaller elements
        while (stack.length && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // If empty → no greater element
        res[i] = stack.length === 0 ? -1 : stack[stack.length - 1];

        // Push current element
        stack.push(arr[i]);
    }

    return res
}

console.log("Next Greater Element", nge_1(arr))