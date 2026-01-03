/*
Generate all binary strings

Problem Statement: Given an integer n, return all binary strings of length n 
A binary string is a string consisting only of characters '0' and '1'.
*/
let n = 0;

// Approach 1, TC: O(2^n), SC: O(n)
function generatAllBinaryStrings(n) {

    let res = [];
    let str = '';

    function generate(i, n, str, res) {

        //base case
        if (i >= n) {

            res.push(str)
            return;
        }

        generate(i + 1, n, str + '0', res)
        if (str[str.length - 1] !== '1') {
            generate(i + 1, n, str + '1', res)
        }
    }

    generate(0, n, str, res)
    return res;
}

console.log("generatAllBinaryStrings", generatAllBinaryStrings(n))