/*
Kth largest/smallest element in Binary Search Tree

Problem Statement: Given the root node of a binary search tree (BST) and an integer k.
Return the kth smallest and largest value (1-indexed) of all values of the nodes in the tree.

Return the 1st integer as kth smallest and 2nd integer as kth largest in the returned array.

*/

const { constructBinaryTree } = require("../BinaryTree/2_ContructBinaryTree");


let root = constructBinaryTree([5, 3, 6, 2, -1, -1, -1, 1]), key = 3;


//Approach 1, TC: O(n), SC: O(n)
function kthSmallestLargest_1(root, key) {

    let stack = [];

    function traverse(root) {
        if (root === null) return;

        traverse(root.left);
        stack.push(root.data);
        traverse(root.right);
    }

    traverse(root);

    return [stack[key - 1], stack[stack.length - key]];
}

console.log(kthSmallestLargest_1(root, key)); // [3, 3]


// Approach 2, TC: O(n), SC: O(h)
function kthSmallestLargest_2(root, key) {

    let min = 0, max = 0, count = 0;

    // Inorder -> kth smallest
    function traverse(root) {
        if (root === null) return;

        traverse(root.left);

        count++;

        if (count == key) {
            min = root.data;
            return;
        }

        traverse(root.right);
    }

    traverse(root);

    // Reset count for reverse inorder
    count = 0;

    // Reverse inorder -> kth largest
    function reverseTraverse(root) {
        if (root === null) return;

        reverseTraverse(root.right);

        count++;

        if (count == key) {
            max = root.data;
            return;
        }

        reverseTraverse(root.left);
    }

    reverseTraverse(root);

    return [min, max];
}

console.log(kthSmallestLargest_2(root, key)); // [3, 3]