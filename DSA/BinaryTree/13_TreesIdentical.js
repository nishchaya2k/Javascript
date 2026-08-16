/*
Check if two trees are identical


Problem Statement: Given two Binary Trees, return if true if the two trees are identical, otherwise return false..

Two trees are said to be identical if these three conditions are met for every pair of nodes :

Value of a node in the first tree is equal to the value of the corresponding node in the second tree.
Left subtree of this node is identical to the left subtree of the corresponding node.
Right subtree of this node is identical to the right subtree of the corresponding node
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree");

let root1 = constructBinaryTree([1 ,2 ,3 ,-1 ,-1 ,4 ,5]);
let root2 = constructBinaryTree([1 ,2 ,3 ,-1 ,-1 ,4 ,5]);


//Approach 1, TC: O(N + M), SC: O(1)
function checkIdentical_tree(root1,root2){

    function check(root1, root2){

        //base case

        if(root1==null && root2==null) return true;
        
        if(root1 == null || root2 == null) return false;
        if(root1.val !== root2.val) return false;

        return check(root1.left, root2.left) && check(root1.right, root2.right)
    }

    return check(root1, root2)
}

console.log("Check Identical Tree",checkIdentical_tree(root1,root2))

