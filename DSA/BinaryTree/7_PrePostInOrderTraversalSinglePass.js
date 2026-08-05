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

//Approach 1, TC: O(3n), SC: O(4n)
function prePostInOrder(input){
    let root =  constructBinaryTree(input)

    let stack = [[root,1]], inorder=[],post=[],pre=[];

    if(!root)return {
        pre: [],
        inorder: [],
        post: []
    };

    while(stack.length){

        let [node,state] = stack.pop();
        if(state == 1){
             pre.push(node.data);
             stack.push([node,2])

             //go left
               if(node.left)stack.push([node.left,1])
        }
      

         // State 2 → IN
        else if (state === 2) {

            inorder.push(node.data);

            // Come back to this node for POST
            stack.push([node, 3]);

            // Go Right
            if (node.right) {
                stack.push([node.right, 1]);
            }
        }

        // State 3 → POST
        else {

            post.push(node.data);
        }
    }

return { pre, inorder, post };
}

console.log("Post Order",prePostInOrder(input))



/*
Thought Process:
1. In recursion, a node is processed at 3 stages: before Left (Pre), after Left (In), after Right (Post).
2. In iterative traversal, recursion cannot remember these stages for us, so store [node, state] in the stack.
3. State 1 → add to Pre, save node with state 2, then go Left.
4. State 2 → add to In, save node with state 3, then go Right.
5. State 3 → add to Post; both Left and Right are completed, so the node is done.
*/