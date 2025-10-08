/*
Largest Odd Number in a String.

Problem Statement: Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.

The number returned should not have leading zero's. But the given input string may have leading zero.
*/

let s = "4206"

//Approach 1

function largestOddNumber(s) {

    let start = 0;
    let end = -1;
    let result = ''


    while (s[start] == '0') start++;


    for (let i = s.length - 1; i >= start; i--) {
        if (parseInt(s[i]) % 2 !== 0) {
            end = i;
            break
        }
    }
    for (let i = start; i <= end; i++) {
        result += s[i];
    }


    return result
}

console.log("largestOddNumber", largestOddNumber(s))

