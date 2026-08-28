/*
Check for Symmetrical Binary Tree

Problem Statement: Given a Binary Tree, determine whether the given tree is symmetric or not.
A Binary Tree would be Symmetric, when its mirror image is exactly the same as the original 
tree. If we were to draw a vertical line through the centre of the tree, the nodes on the left
and right side would be mirror images of each other.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree");

const root = constructBinaryTree([1, 2, 2, 3, 4, 4, 3]);

function symmetryBinaryTree(root){
    

    function checkSymmetry(root1,root2){
        
        //base case
        if((root1==null || root2==null) & root1!==root2) return false;
        
        return root1.data ==root2.data && checkSymmetry(root1.left,root2.right) && checkSymmetry(root1.right,root2.left)
    }

    return checkSymmetry(root,root)
}

console.log("Construct Binary",symmetryBinaryTree(root))