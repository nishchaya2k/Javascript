/*
Floor and Ceil in a BST
Given a root of binary search tree and a key(node) value, find the floor and ceil value for
that particular key value.

Floor Value Node: Node with the greatest data lesser than or equal to the key value. 

Ceil Value Node: Node with the smallest data larger than or equal to the key value.

If a particular floor or ceil value is not present then output -1.
*/

const { constructBinaryTree } = require("../BinaryTree/2_ContructBinaryTree");

let root = constructBinaryTree([8, 4, 12, 2, 6, 10, 14]), key = 11;

//Approach 1, TC: O(h), SC: O(h)
function floorCeil(root){
    let floor = -1;
    let ceil = -1;

    function traverse(root) {
        if (root === null) return;

        if (root.data === key) {
            floor = root.data;
            ceil = root.data;
            return;
        }

        if (root.data < key) {
            floor = root.data;
            traverse(root.right);
        } else {
            ceil = root.data;
            traverse(root.left);
        }
    }

    traverse(root);

    return [floor, ceil];
}

console.log("Floor Ceil", floorCeil(root));