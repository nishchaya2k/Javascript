/*
Problem Statement: Given the root of a binary tree, return the Post Order traversal of its nodes' values.
*/

let input = []

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

//Approach 1, do -> NRL -> reverse , TC: O(n), SC: O(h)
function postOrder_1(input){
    let root =  constructBinaryTree(input)


    let stack = [],res=[];

    while(true){
        if(root!==null){
            res.push(root.data);
            stack.push(root)
            root=root.right;
        }else{
            if(stack.length==0)break;

            root = stack.pop();
            root = root.left
        }
    }

    return res.reverse()

}

console.log("Post Order",postOrder_1(input))



