/*
Check for Children Sum Property in a Binary Tree

Problem Statement: Given a Binary Tree, convert the value of its nodes to follow the Children Sum Property. The Children Sum Property in a binary tree states that for every node, the sum of its children's values (if they exist) should be equal to the node's value. If a child is missing, it is considered as having a value of 0.

Note:

The node values can be increased by any positive integer any number of times, but decrementing any node value is not allowed.
A value for a NULL node can be assumed as 0.
We cannot change the structure of the given binary tree.
*/

let root = constructBinaryTree([2,35,10,2,3,5,2]);

//Approach 1, TC: O(n), SC:(h)
function sumProperty_1(root){
    
    function traverse(root){

       if(root == null) return 0;

       if(root.left && root.left.data < root.data)
           root.left.data = root.data;

       let left = traverse(root.left);

       if(root.right && ((root.right.data + left) < root.data))
           root.right.data = root.data - left;

       let right = traverse(root.right);

       if((left + right) > root.data)
           root.data = left + right;

       return root.data;
    }

    traverse(root);
    return root;
}

console.log("Sum property",sumProperty_1(root))





/*
Intuition:

1. We cannot decrease any node, so while going down, I increase a child
   if its value is smaller than its parent.

2. I process the left subtree first, so after returning from it, I know
   the final value of the left subtree.

3. Then while processing the right child, I can use the already-known
   left value to check whether left + right can satisfy the parent.

4. If the left child doesn't exist, traverse(null) returns 0, so the
   same logic naturally handles a missing child.

5. After both subtrees are processed, if left + right is greater than
   the parent, I increase the parent to match the children sum.

6. So going DOWN, I increase children to avoid needing any decrease later;
   going UP, I increase the parent if the children became bigger.

7. Every node is processed once → O(N) time and O(H) recursion space.
*/