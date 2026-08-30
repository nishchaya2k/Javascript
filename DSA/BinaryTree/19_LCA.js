/*
Problem Statement: Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined 
between two nodes p and q as the lowest node in T that has both p and q as descendants 
(where we allow a node to be a descendant of itself).”
*/

let root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1;

//Approach 1, TC: O(n), SC: O(h)
function lca_1(roo,p,q){

    let lca = null

    function traverse(root){

        if(root==null) return false;

        let left = traverse(root.left);
        let right = traverse(root.right);
        let current = (root==p) || (root==q);


        if((left && right) || (current && (right || left) )) {
            lca = root
        }

        return current || left || right
    }

    traverse(root) 

    return lca;
}

console.log("LCA", lca(root,p,q))

//Approach 2, TC: O(n), SC: O(h)
function lca_2(roo,p,q){

    let lca = null

    function traverse(root){

        if(root==null) return null;

        if(root == p || root == q) return root;

        let left = traverse(root.left);
        let right = traverse(root.right);

        if(left && right) return root;

        return left || right
    }

   return traverse(root) 
}

console.log("LCA", lca_2(root,p,q))

