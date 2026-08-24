/*
Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree");

let root = constructBinaryTree([1,2,3,null,5,null,4])

//Approach 1, DFS, TC: O(N), SC:O(N) (Worst Case) better than iterative
function rightViewBinaryTree(root){

   let map = new Map()

   function rightView(root,depth){
        if(root==null)return;

        if(!map.has(depth))map.set(depth,root.data);

        rightView(root.right,depth+1)
        rightView(root.left,depth+1)
   }

    rightView(root,0)
    return [...map.entries].map(([depth, value])=> value)
}

console.log("Binary Tree", rightViewBinaryTree(root))


//Approach 2, BFS, TC: O(N), SC: O(N), (Worst Case) better than iterative
function rightViewBinaryTree_2(root) {
    if (!root) return [];

    let queue = [root];
    let front = 0;
    let ans = [];

    while (front < queue.length) {
        let levelSize = queue.length - front;

        for (let i = 0; i < levelSize; i++) {
            let node = queue[front++];

            // Last node of this level
            if (i === levelSize - 1) {
                ans.push(node.data);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return ans;
}

console.log("Binary Tree", rightViewBinaryTree_2(root))
