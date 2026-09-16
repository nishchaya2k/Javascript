/*
Delete a node in BST

Given the root node of a binary search tree (BST) and a value key. Return the root node of 
the BST after the deletion of the node with the given key value.

Note: As there can be many correct answers, the compiler returns true if the answer is 
correct, otherwise false.
*/

// Approach 1, TC: O(h), SC: O(1)

let root = constructBinaryTree([4, 2, 7, 1, 3]), val = 5;

function deleteNode(root, key) {

   let dummy = new TreeNode(0);
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

            if (root.right) {

                let [node, parent] = findNode(root.right);

                // Two children
                if (root.left) {

                    // Remove successor from its old position
                    if (parent) {
                        parent.left = node.right;
                        node.right = root.right;
                    }

                    node.left = root.left;
                }

                if (dir == "right") prev.right = node;
                else prev.left = node;

            }
            else if (root.left) {

                if (dir == "right") prev.right = root.left;
                else prev.left = root.left;

            }
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

    return prev.right;
}

console.log("Delete Node", deleteNode(root, val));