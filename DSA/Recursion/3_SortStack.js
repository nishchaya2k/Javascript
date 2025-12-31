/*
Count Good numbers

Problem Statement: A digit string is considered good if the digits at even indices (0-based) are even digits (0, 2, 4, 6, 8) and the digits at odd indices are prime digits (2, 3, 5, 7).

Given an integer n, return the total number of good digit strings of length n. As the result may be large, return it modulo 109 + 7.

A digit string is a string consisting only of the digits '0' through '9'. It may contain leading zeros.
*/
let stack = [4, 1, 3, 2]

function insert(stack, top) {
    if (stack.length == 0 || stack[stack.length - 1] <= top) {
        stack.push(top);
        return;
    }

    let val = stack.pop();
    insert(stack, top)
    stack.push(val);
}

//Approach 1, TC: O(n2), SC: O(n)

function SortStack(stack) {
    function sortRec(stack) {
        if (stack.length == 0) return;
        let top = stack.pop();
        sortRec(stack);
        insert(stack, top)
    }

    sortRec(stack)
    return stack
}

console.log("Sort Stack", SortStack(stack))