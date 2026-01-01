/*
Reverse a stack using recursion

Problem Statement: You are given a stack of integers. Your task is to reverse the stack using recursion. You may only use standard stack operations (push, pop, top/peek, isEmpty). You are not allowed to use any loop constructs or additional data structures like arrays or queues.
*/


let stack = [1, 2, 3, 4]
function insert(stack, top) {
    if (stack.length == 0) {
        stack.push(top)
        return;
    }
    let val = stack.pop();
    insert(stack, top)
    stack.push(val);
}

//Approach 1, TC: O(n2), SC: O(n)

function reverseStack(stack) {
    function reverseRec(stack) {
        if (stack.length == 0) return;
        let top = stack.pop();
        reverseRec(stack);
        insert(stack, top)
    }
    reverseRec(stack)
    return stack
}

console.log("Sort Stack", reverseStack(stack))