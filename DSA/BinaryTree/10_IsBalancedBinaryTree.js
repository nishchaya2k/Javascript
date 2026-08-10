/*
Check if the Binary Tree is Balanced Binary Tree

Problem Statement: Given a Binary Tree, return true if it is a Balanced Binary Tree else
return false. A Binary Tree is balanced if, for all nodes in the tree, the difference between
left and right subtree height is not more than 1
*/

const { constructBinaryTree } = require("./2_ContructBinaryTree")

let root = constructBinaryTree([3, 9, 20, null, null, 15, 7])


//Approach 1, TC: O(n), SC: (h)
function balanced_binaryTree(root){

    function traverse(root){

        //base case
        if(root == null) return 0;

        let left = traverse(root.left)
        if(left == -1) return -1

        let right = traverse(root.right);
        if(right == -1) return -1


        if(Math.abs(left-right)>1) return -1;

        return Math.max(left,right)+1;
    }

    return traverse(root) !== -1;

}

console.log("Balanced Binary Tree", balanced_binaryTree(root))




//Approach 2, TC: O(n), SC: (h)
function balanced_binaryTree(root){

    function traverse(root){

        //base case
        if(root == null) return {
            balance:true,
            height:0
        }

        let left = traverse(root.left)
        if(!left.balance)return {
            balance:false,
            height:left.height
        }

        let right = traverse(root.right);
        if(!right.balance)return {
            balance:false,
            height:right.height
        }


        if(Math.abs(left.height-right.height)>1) return {
            balance:false,
            height: Math.max(left.height, right.height) + 1
        }

        return {
            balance:true,
            height: Math.max(left.height, right.height) + 1
        }
    }

    return traverse(root).balance

}

console.log("Balanced Binary Tree", balanced_binaryTree(root))





/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let i,j
    let sum = 0;

    //base case
    if (n == 1) return 0;

   while(i<n)
{

        if (prices[i] > min && (prices[i] - min) > sum) {
            sum = prices[i] - min
        }

        else if (prices[i] < min) {
            min = prices[i]
        }
    }

    return sum
};