/*
Problem Statement: Given the root of a binary tree, return the inorder traversal of its nodes' values.
*/


let input = [1, 2, 3, 4, 5, 6, 7, -1, -1, 8, -1, -1, -1, 9, 10]

class Node{
    constructor(data){
        this.data = data;
        this.left=null;
        this.right=null;
    }

}

function constructBinaryTree(input){

    if (input.length === 0 || input[0] === -1) return null;

    let queue = [],n = input.length,front=0;
    let root = new Node(input[0]);
    queue.push(root)

    for(let i=1;i<n;i+=2){
        let parent = queue[front++];

        // Left child
        if (input[i] !== -1) {
            let left = new Node(input[i]);
            parent.left = left;
            queue.push(left);
        }

        // Right child
        if (i + 1 < input.length && input[i + 1] !== -1) {
            let right = new Node(input[i + 1]);
            parent.right = right;
            queue.push(right);
        }
       
    }
    return root
}



//Approach 1, Recursive, TC: O(n), SC: O(n)
function inOrder_1(input) {
    let root =  constructBinaryTree(input)

    let res = [];

   function generate(root){

    //base case
    if(!root) return;

    generate(root.left);

    res.push(root.data);

    generate(root.right);

    }

    generate(root)
    return res;
}

console.log("Inorder Traversal",inOrder_1(input))


//Approach 2, Iterative, TC: O(n), SC: O(h)
function inOrder_2(input) {
    let root =  constructBinaryTree(input)
    let stack = [];

    let res = [];

   while(true){
    if(root!==null){
        stack.push(root);
        root = root.left;
    }else{
        if(stack.length==0) break;
        root = stack.pop()

        res.push(root.data);
        root=root.right
    }
   }
    return res;
}

console.log("Inorder Traversal",inOrder_2(input))



