/*
Top view of a Binary Tree

Problem Statement: Given a Binary Tree, return its Top View. The Top View of a Binary Tree is the set of nodes visible when we see the tree from the top.
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree");

let root = constructBinaryTree([])

//Approach 1, DFS + Map, TC: O(N log N), SC: O(N)
function topView_1(root){
    
    const map = new Map()
    function generate(root,depth,hd){
        if (!root) return;
        // If this horizontal distance hasn't been seen
        // OR this node is higher than the stored node
        if(!map.has(hd) || depth<map.get(hd).depth){
            map.set(hd, {
                value: node.data,
                depth: depth
            });
        }

        generate(root.left,depth+1,hd-1)
        generate(root.right,depth+1,hd+1)
    }

    generate(root,0,0)
    return [...map.entries].sort((a,b) => a[0]-b[0]).map(([_, data]) => data.value);
}

console.log("Top View", topView_1(root))


//Approach 2, BFS + Map, TC: O(N log N), SC: O(N)
function topView_2(root){
    const map = new Map(),hd=0;
    const queue = [{ node: root, hd: 0 }];

    while(front < queue.length){

          // First node at this horizontal distance
        if (!map.has(hd)) {
            map.set(hd, node.val);
        }

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

    return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([_, value]) => value);
}

console.log("Top View", topView_2(root))
