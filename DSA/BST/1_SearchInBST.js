/*
Search in a Binary Search Tree

Problem Statement: Given a Binary Search Tree and a key value return the node in the BST
having data equal to ‘key’ otherwise return nullptr.
*/

const { constructBinaryTree } = require("../BinaryTree/2_ContructBinaryTree");

const root = constructBinaryTree([8 ,5 ,12 ,4 ,7 ,10 ,14 ,-1 ,-1 ,6, -1, -1, -1, 13, -1])

function bst(root){

    while(root!==null){

        if(root.data == key) return true;

        if(root.data > key) root = root.left;
        else root = root.right;
    }

    return false;
}

console.log("BST", bst(root))