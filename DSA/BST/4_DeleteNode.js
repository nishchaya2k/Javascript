/*
Delete a node in BST

Given the root node of a binary search tree (BST) and a value key. Return the root node of 
the BST after the deletion of the node with the given key value.

Note: As there can be many correct answers, the compiler returns true if the answer is 
correct, otherwise false.
*/

const { constructBinaryTree, Node } = require("../BinaryTree/2_ContructBinaryTree");


// ============================================================
// Approach 1, TC: O(h), SC: O(1)
// ============================================================

let root = constructBinaryTree([4, 2, 7, 1, 3]), val = 5;

function deleteNode(root, key) {

    let dummy = new Node(0);
    dummy.right = root;

    let prev = dummy;
    let dir = "right";

    function findNode(root) {
        let parent = null;

        while (root.left) {
            parent = root;
            root = root.left;
        }

        return [root, parent];
    }

    while (true) {

        if (root == null) break;

        if (root.data == key) {

            // TWO CHILDREN
            if (root.left && root.right) {

                let [node, parent] = findNode(root.right);

                if (parent) {
                    parent.left = node.right;
                    node.right = root.right;
                }

                node.left = root.left;

                if (dir == "right") prev.right = node;
                else prev.left = node;
            }

            // ONLY RIGHT CHILD
            else if (root.right) {

                if (dir == "right") prev.right = root.right;
                else prev.left = root.right;
            }

            // ONLY LEFT CHILD
            else if (root.left) {

                if (dir == "right") prev.right = root.left;
                else prev.left = root.left;
            }

            // LEAF
            else {

                if (dir == "right") prev.right = null;
                else prev.left = null;
            }

            break;
        }

        prev = root;

        if (root.data < key) {
            root = root.right;
            dir = "right";
        } else {
            root = root.left;
            dir = "left";
        }
    }

    return dummy.right;
}

console.log("Approach 1:", deleteNode(root, val));


// ============================================================
// Approach 2, TC: O(h), SC: O(h)
// Actual node movement using recursion
// ============================================================

function deleteNode2(root, key) {

    if (root == null) return null;

    // Search in left subtree
    if (key < root.data) {
        root.left = deleteNode2(root.left, key);
        return root;
    }

    // Search in right subtree
    if (key > root.data) {
        root.right = deleteNode2(root.right, key);
        return root;
    }

    // Node found

    // Only right child
    if (root.left == null) {
        return root.right;
    }

    // Only left child
    if (root.right == null) {
        return root.left;
    }

    // TWO CHILDREN

    let successorParent = root;
    let successor = root.right;

    // Find smallest node in right subtree
    while (successor.left) {
        successorParent = successor;
        successor = successor.left;
    }

    // Remove successor from its old position
    if (successorParent == root) {
        successorParent.right = successor.right;
    } else {
        successorParent.left = successor.right;
    }

    // Move actual successor
    successor.left = root.left;
    successor.right = root.right;

    return successor;
}

let root2 = constructBinaryTree([4, 2, 7, 1, 3]);

console.log("Approach 2:", deleteNode2(root2, val));