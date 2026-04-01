/*
Sum of Subarray Minimums

Problem Statement: Given an array of integers arr of size n, calculate the sum of the minimum value in each (contiguous) subarray of arr. Since the result may be large, return the answer modulo 10⁹ +7.
*/

let arr = [3, 1, 2, 5];

//Approach 1, Brute Force, TC: O(n^2), SC: O(1)
function sumSubarrayMinimum_1(arr) {
    let n = arr.length;
    let total = 0;

    for (let i = 0; i < n; i++) {
        let min = arr[i];
        for (let j = i; j < n; j++) {
            min = Math.min(min, arr[j]);
            total += min;
        }
    }
    return total;
}

console.log("Sum Subarray Minimum", sumSubarrayMinimum_1(arr))

//Approach 2, Optimal, TC: O(n), SC: O(n)
function sumSubarrayMinimum_2(arr) {
    let n = arr.length;
    const MOD = 1e9 + 7;

    let stack = [];
    let total = 0;
    let pse = new Array(n);
    let nse = new Array(n);

    //Previos Smaller Element (Strictly Smaller)
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        pse[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    stack = [];
    
    //Next Smaller Element (Smaller or Equal)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        nse[i] = stack.length === 0 ? n : stack[stack.length - 1];
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        let leftCount = i - pse[i];
        let rightCount = nse[i] - i;
        total = (total + arr[i] * leftCount * rightCount) % MOD;
    }

    return total;


}

console.log("Sum Subarray Minimum", sumSubarrayMinimum_2(arr))