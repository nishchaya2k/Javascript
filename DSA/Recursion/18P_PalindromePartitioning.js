/*
Palindrome Partitioning

Problem Statement: You are given a string s, partition it in such a way that every substring is a palindrome. Return all such palindromic partitions of string s. A palindrome string is a string that reads the same backward as forward.
*/

let s = "aabb";
function palindromePartitioning_1(s) {

    let res = [];
    let n = s.length;

    function generate(i, str, temp) {

        if (i > n) {
            res.push([...temp])
            return;
        }

        temp.push(str);
        // console.log(temp, i)
        generate(i + 1, s[i], temp)

        // console.log(temp)
        temp.pop();
        // console.log(temp)
        temp.push(str + s[i]);
        // console.log(temp)
        generate(i + 1, str + s[i], temp)
    }

    generate(0, "", [])
    return res;
}

console.log("Palindrome Partitioning", palindromePartitioning_1(s))
