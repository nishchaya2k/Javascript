/*
Check if a tree is a BST or not

Given the root node of a binary tree. Return true if the given binary tree is a binary search tree(BST) else false.

A valid BST is defined as follows:

The left subtree of a node contains only nodes with key strictly less than the node's key.
The right subtree of a node contains only nodes with key strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

const { constructBinaryTree } = require("../BinaryTree/2_ContructBinaryTree")

let root = constructBinaryTree([5, 3, 6, 4, 2, null, 7]);

//Approach 1, 
function bst(root) {
    
    let rootData = root.data;

    function traverse(root){
        if (root === null) return true;


        traverse(root.left);
        traverse(root.right);

        return ((!root.left || (root.left && (root.data > root.left.data))) && (!root.right || (root.right && root.right.data > root.data)) && (rootData > root.data) )
    }

    return traverse(root)
}

console.log("BST", bst(root))