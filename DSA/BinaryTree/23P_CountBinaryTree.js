/*
Count Number of Nodes in a Binary Tree

Problem Statement: Given a Complete Binary Tree, count and return the number of
nodes in the given tree. A Complete Binary Tree is a binary tree in which all levels are 
completely filled, except possibly for the last level, and all nodes are as left as possible.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree")

let root = constructBinaryTree()

function binaryTree(root){
   
    if(root==null) return 0;
     
    let front=0;
    let stack = [root];

    while(front < stack.length){

        let top = stack[front++];
        if(top.left)stack.push(top.left);
        if(top.right)stack.push(top.right);
    }
    return front;
}

console.log("Binary Tree", binaryTree(root))