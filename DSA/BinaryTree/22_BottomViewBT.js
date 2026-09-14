/*
Bottom view of a Binary Tree

Problem Statement: Given a Binary Tree, return its Bottom View. The Bottom View of a 
Binary Tree is the set of nodes visible when we see the tree from the bottom.
*/
const { constructBinaryTree } = require("./2_ContructBinaryTree");

let root = constructBinaryTree([11, 6, 12, None, None, 3, 15, None, None, 6, 4, 7, 10, 9, 6, None, None, None, None, 1, 12, None, None, None, None, None, None])

function binaryTree_1(root){

    let map = new Map();

   function traverse(root,hd,dep){

       //base case
       if(root == None) return;
    
       if(map.has(hd) && map.get(hd)?.[0].dep == dep) map.get(hd).push({hd: hd, dep:dep, val:root.data})
       if(!map.has(hd) || (map.has(hd) && map.get(hd)?.[0].dep < dep))map.set(hd,[{hd: hd, dep:dep, val:root.data}]);

       traverse(root.left,hd-1,dep+1);
       traverse(root.right,hd+1,dep+1);

    }

    traverse(root,0,0)
    return [...map.entries()].sort((a,b) =>(a[0]-b[0])).flatMap(([key, value]) => value.map(node => node.val))

}

console.log("Binary Tree", binaryTree_1(root))

