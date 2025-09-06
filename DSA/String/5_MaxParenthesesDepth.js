/*
Problem: Maximum Nesting Depth of the Parentheses


A string s is a valid parentheses string (VPS) if it meets the following conditions:

It only contains digits 0-9, arithmetic operators +, -, *, /, and parentheses (, ).
The parentheses are balanced and correctly nested.


Your task is to compute the maximum nesting depth of parentheses in s. The nesting depth is the highest number of parentheses that are open at the same time at any point in the string.

Constraints:
1 <= s.length <= 100
s consists of digits 0-9, arithmetic operators (+, -, *, /), and parentheses ( and ).
It is guaranteed that s is a valid parentheses string (VPS).

*/

let s = "(1)+((2))+(((3)))"


function maxParenthesesDepth(s) {
    let max = 0;

    let n = s.length;
    let i = 0;
    let par_count = 0;

    while (i < n) {
        if (s[i] == '(') par_count++;
        if (s[i] == ')') par_count--;

        if (max < par_count) max = par_count;

        i++;
    }

    return max;
}

console.log("Max Parentheses Depth", maxParenthesesDepth(s))

