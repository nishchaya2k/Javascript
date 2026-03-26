/*
Next Greater Element Using Stack

Problem Statement: Given an integer numsay A, return the next greater element for every element in A. The next greater element for an element x is the first element greater than x that we come across while traversing the numsay in a clockwise manner. If it doesn't exist, return -1 for this element.
*/

const nums = [5, 7, 1, 2, 6, 0]


//Approach 1, TC: O(n), TC: (n)
function nextGreater(nums) {

    let st = [];
    let res = [];

    for (let i = 2 * nums.length - 1; i >= 0; i--) {
        let curr = nums[i % nums.length];

        if (st.length === 0) {
            st.push(curr);
        } else {

            if (st[st.length - 1] > curr) {
                if (i < nums.length) res.push(st[st.length - 1]);
            } else {
                while (st.length !== 0 && st[st.length - 1] <= curr) {
                    st.pop();
                }
                if (i < nums.length) {
                    if (st.length === 0) res.push(-1);
                    else res.push(st[st.length - 1]);
                }
            }
            st.push(curr);
        }
    }

    return res.reverse();
}

console.log("Next Greater", nextGreater(nums));



/**
 * Next Greater Element (Clockwise / Circular) using Stack
 *
 * Algorithm:
 *
 * 1. Use a stack to keep potential "next greater" elements.
 *    - The stack will be maintained in MONOTONIC DECREASING order.
 *
 * 2. Since the array is traversed in a CLOCKWISE manner,
 *    treat the array as CIRCULAR.
 *    - To simulate this, iterate from (2 * n - 1) down to 0.
 *    - Use (i % n) to map indices back into the array.
 *
 * 3. For each element (curr):
 *    a) Pop elements from the stack while:
 *       stack top <= curr
 *       - These elements can never be the next greater element.
 *
 *    b) If we are in the FIRST pass (i < n):
 *       - The stack top (if exists) is the next greater element.
 *       - If stack is empty, the answer remains -1.
 *
 *    c) Push the current element into the stack.
 *
 * 4. Reverse the result array at the end because:
 *    - We traversed from right to left.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * Key Idea:
 * - Traversal (2n + modulo) handles CLOCKWISE behavior.
 * - Stack handles NEXT GREATER logic.
 */
