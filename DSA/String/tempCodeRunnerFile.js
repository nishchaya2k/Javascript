/*
Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.



All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/


let s = "aa"
let t = "ab"


function isomorphicCheck(s, t) {
    if (s.length !== t.length) return false;

    let i = 0;
    let consumed = {};

    while (i < s.length) {
        if (!consumed[s[i]]) {
            consumed[s[i]] = t[i]
        }
        if (consumed[s[i]] && consumed[s[i]] != t[i]) return false
        i++;
    }
    return true;
}
console.log("isString_Isomorphic", isomorphicCheck(s, t))