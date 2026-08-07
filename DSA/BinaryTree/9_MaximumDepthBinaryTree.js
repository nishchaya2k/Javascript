/*
Maximum depth of a Binary Tree

Problem Statement:
Given the root of a Binary Tree, return the height of the tree. The height of the tree is 
equal to the number of nodes on the longest path from root to a leaf.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree")

let root = constructBinaryTree([1,2,5,-1,-1,4,6,5])

//Approach 1, TC: O(n), SC:(h)
function maxDepth(root){
    
    let stack = [],count = 0;

    function traverse(root){

        //base case
        if(root == null) return 0;

        return Math.max(traverse(root.left),traverse(root.right))+1;
    }

   return  traverse(root)
}

console.log("Height",maxDepth(root))