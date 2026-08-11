/*
Calculate the Diameter of a Binary Tree

Problem Statement: Given the root of the Binary Tree, return the length of its diameter. 
The Diameter of a Binary Tree is the longest distance between any two nodes of that tree. 
This path may or may not pass through the root.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree")

const root = constructBinaryTree([1,2,3,4,5])


//Approach 1, TC: O(n), SC: O(n)
function diameterOfBinaryTree(root){

    function find(root){

        if(root==null) return {
            maxDist = 0,
            height=0
        }

        let left = find(root.left)
        let right = fint(root.right);

        return {
             maxDist: Math.max(
                left.maxDist,
                right.maxDist,
                left.height + right.height + 1
            ),
            height : Math.max(left.height,right.height)+1
        }
    }

    return find(root).maxDist;
}

console.log("Binary Tree", diameterOfBinaryTree(root))