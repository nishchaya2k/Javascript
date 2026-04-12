/*
Length of Longest Substring without any Repeating Character

Problem Statement: Given a string, S. Find the length of the longest substring without repeating characters.
*/

let s = "abcdefabcbb";

//Approach, TC:O(n), SC: O(1)
function longestSubstring(s) {

    let vis = {};
    let n = s.length;
    let l = 0;
    let maxSub = 0;

    for (let i = 0; i < s.length; i++) {
        if (!vis[s[i]] && vis[s[i]] !== 0) {
            vis[s[i]] = i;
        }
        else {
            let elementIndex = vis[s[i]];
            vis[s[i]] = i;
            if (elementIndex >= l) l = elementIndex + 1;
        }
        maxSub = Math.max(i - l + 1, maxSub);
    }

    return maxSub;
}

console.log("Longest Substring", longestSubstring(s))