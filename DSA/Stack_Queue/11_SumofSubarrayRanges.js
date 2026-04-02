/*
Sum of Subarray Ranges

Problem Statement: Given an integer array nums, determine the range of a subarray, defined as the difference between the largest and smallest elements within the subarray. Calculate and return the sum of all subarray ranges of nums.

A subarray is defined as a contiguous, non-empty sequence of elements within the array
*/

let arr = [1, 3, 3];

// Approach 1, TC: O(), SC: O()
function subArrayRanges_1(arr) {
    let n = arr.length;
    let total = 0

    for (let i = 0; i < n; i++) {
        let max = arr[i];
        let min = arr[i];

        for (let j = i; j < n; j++) {
            min = Math.min(min, arr[j])
            max = Math.max(max, arr[j])

            total += (max - min);

        }
    }

    return total;
}

console.log("Sub Array Ranges", subArrayRanges_1(arr))

//Approach 2, TC: O(n), SC: O(n)
function subArrayRanges_2(arr) {

    let n = arr.length;
    let total = 0;

    let stack = [];

    let pse = new Array(n);
    let nse = new Array(n);
    let pge = new Array(n);
    let nge = new Array(n);

    // Previous Smaller
    for (let i = 0; i < n; i++) {

        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        pse[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    stack = [];

    // Next Smaller
    for (let i = n - 1; i >= 0; i--) {

        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        nse[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    stack = [];

    // Previous Greater
    for (let i = 0; i < n; i++) {

        while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        pge[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    stack = [];

    // Next Greater
    for (let i = n - 1; i >= 0; i--) {

        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            stack.pop();
        }

        nge[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {

        let leftSmall = i - pse[i];
        let rightSmall = nse[i] - i;

        let leftGreat = i - pge[i];
        let rightGreat = nge[i] - i;

        total += arr[i] * ((leftGreat * rightGreat) - (leftSmall * rightSmall));
    }

    return total;
}

console.log("Sub Array Ranges", subArrayRanges_2(arr))

