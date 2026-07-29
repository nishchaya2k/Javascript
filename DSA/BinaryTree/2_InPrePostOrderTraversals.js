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



function inOrder(input) {
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

console.log("Inorder Traversal",inOrder(input))




function preOrder(input) {
    let root =  constructBinaryTree(input)

    let res = [];

   function generate(root){

    //base case
    if(!root) return;

    res.push(root.data);
    generate(root.left);
    generate(root.right);

    }

    generate(root)
    return res;
}

console.log("Pre Order Traversal",preOrder(input))



function postOrder(input) {
    let root =  constructBinaryTree(input)

    let res = [];

   function generate(root){

    //base case
    if(!root) return;
    
    generate(root.left);
    generate(root.right);
    res.push(root.data);

    }

    generate(root)
    return res;
}

console.log("Post Order Traversal",postOrder(input))