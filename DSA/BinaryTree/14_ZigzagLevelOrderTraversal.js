/*
Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
(i.e., from left to right, then right to left for the next level and alternate between).
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree")

const root = constructBinaryTree ([3,9,20,null,null,15,7])

//Approach 1
function zigZag(root){

    let left = 0,right=0,j=0,stack = [],result = [],start=0;

    if(!root) return [];
    stack.push(root)
    
    while(stack.length != start){

        let temp = [];
        while(j>=left){

            temp.push[stack[j].data];
            let node = stack[j];

            if(node.right)stack.push(node.right)
            if(node.left) stack.push(node.left)
            
            j--;
            start++;
        }
        result.push(temp);
        left = right+1
        right = stack.length;
        
        j=right;
    }
   
    return result
}

console.log("Zig Zag Traversal", zigZag(root));