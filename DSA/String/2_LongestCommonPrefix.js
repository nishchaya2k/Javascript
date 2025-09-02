/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

let str = ["flowers", "flow", "fly", "flight"]


// Approach 1, Brute Force
function lcp(str) {

    if (str?.length == 0) return '';
    let str = "";


    for (let i = 0; i < str[0].length; i++) {
        for (let j = 1; j < str[i].length; i++) {
            
        }
    }
}

console.log("Longest Common Prefix", str)