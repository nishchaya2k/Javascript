/*
Remove K Digits

Problem Statement: Given a string nums representing a non-negative integer, and an integer k, find the smallest possible integer after removing k digits from num.
*/

let arr = "10", k = 2


//Approach 1, Optimal, TC: O(n), SC: O(n)

function removeKDigits_1(arr, k) {

    let n = arr.length;
    let i = 0;
    let stack = [];

    while (i < n) {

        while (stack.length && k !== 0 && stack[stack.length - 1] > arr[i]) {
            k--;
            stack.pop();
        }
        if (stack.length || arr[i] != '0') stack.push(arr[i]);
        i++;
    }

    while (k--) {
        stack.pop();
    }

    return stack.length ? stack.join('') : '0';
}


console.log("Remove K Digits", removeKDigits_1(arr, k))

