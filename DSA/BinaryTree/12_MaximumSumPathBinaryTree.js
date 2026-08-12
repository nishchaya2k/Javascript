/*
Maximum Sum Path in Binary Tree

Problem Statement:
Given a Binary Tree, determine the maximum sum achievable along any path within the tree. A path in a binary tree is defined as a sequence of nodes where each pair of adjacent nodes is connected by an edge. Nodes can only appear once in the sequence, and the path is not required to start from the root. Identify and compute the maximum sum possible along any path within the given binary tree.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree")

let root = constructBinaryTree([-10, 9, 20, -1, -1, 15, 7])


//Approach 1, TC: O(N), SC: O(h)
function maxSumPath(root){

    let maxSum = Number.MIN_SAFE_INTEGER;

     function findSum(root) {
        if (root == null) return 0;

        let s1 = Math.max(0, findSum(root.left));
        maxSum = Math.max((s1 + root.val), maxSum);

        let s2 = Math.max(0, findSum(root.right));
        maxSum = Math.max((s2 + root.val), maxSum);

        maxSum = Math.max((s1 + s2 + root.val), maxSum);

        return root.val + Math.max(s1, s2);
    }

   return Math.max(findSum(root),maxSum);
}

console.log("Max Sum", maxSumPath(root))