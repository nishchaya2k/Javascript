/*
Insert into a Binary Search Tree

Given the root node of a binary search tree (BST) and a value val to insert into the tree.
Return the root node of the BST after the insertion.

It is guaranteed that the new value does not exist in the original BST. Note that the 
compiler output shows true if the node is added correctly, else false.
*/

const { constructBinaryTree } = require("../BinaryTree/2_ContructBinaryTree");

let root = constructBinaryTree( [4, 2, 7, 1, 3]),val = 5;


//Approach, TC: O(h), SC: O(h)
function insertNode(root){
    let root2 = root;

     function traverse(root) {
        if (root === null) return;

        if (root.data < val) {
            if(root.right == null) root.right = new Node(val)
            traverse(root.right);
        } else {
             if(root.left == null) root.left = new Node(val)
            traverse(root.left);
        }
    }

    traverse(root);

    return root2
}

console.log("Insert Node", insertNode(root))