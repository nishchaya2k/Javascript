/*
Level Order Traversal of a Binary Tree

Problem Statement: Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree")

let root = constructBinaryTree([3, 9, 20, null, null, 15, 7])


function levelOrderTraversal(root) {
    if (!root) return [];

    let queue = [root];
    let front = 0;
    let result = [];

    while (front < queue.length) {
        let size = queue.length - front;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue[front++];

            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}

console.log("Level Order Traversal",levelOrderTraversal(root))