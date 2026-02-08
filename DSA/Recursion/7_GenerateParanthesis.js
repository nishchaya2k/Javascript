/*
Generate Paranthesis

Problem Statement: Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

let n = 3;

//Approach 1, Optimal Approach, TC: O(2^n), SC: O(n)
function generateParanthesis_1(n) {

    let res = []
    let str = ''

    function generate(open, close, n, str, res) {
        if (close > open) return;
        if (open > n || close > n) return;

        if (Math.floor(((open + close) / 2)) === n) {
            res.push(str)
            return;
        }

        generate(open + 1, close, n, str + '(', res)
        generate(open, close + 1, n, str + ')', res)
    }

    generate(0, 0, n, str, res)
    return res;
}

console.log("Generate Parathesis", generateParanthesis_1(n))