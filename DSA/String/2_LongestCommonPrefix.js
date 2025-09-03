/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

let str = ["flowers", "flow", "fly", "ight"]


// Approach 1, Brute Force, TC: O(n2)
function lcp1(str) {

    if (str?.length == 0) return '';
    let lcp = 0;
    let j = 1;


    for (let i = 0; i < str[0].length; i++) {
        for (j = 1; j < str.length; j++) {
            if (str[0][i] != str[j][i]) break;
        }

        if (j == str.length) {
            lcp++;
        } else {
            break;
        }
    }
    return str[0].slice(0, lcp);
}

console.log("Longest Common Prefix", lcp1(str))


//Approach 2, Brute Force 
function lcp2(str) {

    if (str?.length == 0) return '';
    let lcp = 0;
    let j = 1;


    for (let i = 0; i < str[0].length; i++) {
        for (j = 1; j < str.length; j++) {
            if (str[0][i] != str[j][i]) {
                return str[0].slice(0, lcp)
            }
        }
        lcp++;
    }
    return str[0].slice(0, lcp);
}

console.log("Longest Common Prefix", lcp2(str))