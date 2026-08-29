/*
Print Root to Node Path in a Binary Tree

Problem Statement: Given a Binary Tree and a reference to a root belonging to it. 
Return the path from the root node to the given leaf node. Note: No two nodes in the tree 
have the same data value and it is assured that the given node is present and a path always 
exists.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree");

let root = constructBinaryTree([1, 2, 3, 4, 5, -1, -1, -1, -1,6,7]);


//Approach 1, TC: O(N), SC: O(H)
function binaryPath(root,node){
    let res = [];

    function path(root){

        //base case
        if(root == null) return false

        res.push(root.data);

        if(root.data == node) return true;

        if(path(root.left)) return true;
        res.pop();

        if(path(root.right)) return true; 
        res.pop();

        return false;
    }

    path(root)
    return res;
}

console.log("Path to leaf node",binaryPath(root,7))