/*
Vertical Order Traversal of Binary Tree

Problem Statement: Given a Binary Tree, return the Vertical Order Traversal of it starting
from the Leftmost level to the Rightmost level. If there are multiple nodes passing through 
a vertical line, then they should be printed as they appear in level order traversal of the
tree.
*/

//Vertical Order Traversal of Binary Tree

//Approach 1, TC: O(N + K log K), SC: O(N)
function voBinary_tree_1(root){
    let map = new Map();
    let queue = [{node:root,hd:0}];
    let front = 0;

    while(front<queue.length){

        let { node, hd } = queue[front++];

        if(!map.has(hd)){
            map.set(hd,[]);
        }

        map.get(hd).push(node.data);

        if (node.left) {
            queue.push({
                node: node.left,
                hd: hd - 1
            });
        }

        if (node.right) {
            queue.push({
                node: node.right,
                hd: hd + 1
            });
        }
    }

    return [...map.entries()].sort((a,b) => a[0]-b[0]).map(([key,value]) => value)
}

console.log("Vertical Order Binary Tree", voBinary_tree(root));


// Approach 2, TC: O(N), SC: O(N)
function voBinary_tree_2(root){
    let map = new Map();
    let queue = [{node:root,hd:0}];
    let front = 0;
    let min=0,max=0;

    while(front<queue.length){

        let { node, hd } = queue[front++];

        if(!map.has(hd)){
            map.set(hd,[]);
        }

        map.get(hd).push(node.data);

        if (node.left) {
            min = Math.min(min,hd-1)
            queue.push({
                node: node.left,
                hd: hd - 1
            });
        }

        if (node.right) {
            max = Math.max(max,hd+1)
            queue.push({
                node: node.right,
                hd: hd + 1
            });
        }
    }

    let result = [];

    for(let i=min;i<max;i++){   //avoided the sort by keeping minHD and maxHD
        result.push(map.get(i));
    }

    return result;
}

console.log("Vertical Order Binary Tree", voBinary_tree_2(root));


