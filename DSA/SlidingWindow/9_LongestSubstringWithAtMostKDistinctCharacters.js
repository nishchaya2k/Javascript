/*
Longest Substring with At Most K Distinct Characters

Problem Statement: Given a string s and an integer k.Find the length of the longest substring with at most k distinct characters
*/

let s = "aababbcaacc", k = 2

//Approach 1, TC: O(n), SC: O(k)
function LongestSubstring_1(s, k) {
    let n = s.length;

    let map = new Map();
    let maxLen = 0, start = 0;

    for (let i = 0; i < n; i++) {

        // include current char
        map.set(s[i], (map.get(s[i]) || 0) + 1);

        // shrink window if distinct > k
        while (map.size > k) {
            map.set(s[start], map.get(s[start]) - 1);

            if (map.get(s[start]) === 0) {
                map.delete(s[start]);
            }

            start++;
        }

        // update max length
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}

console.log("Longest Substring", LongestSubstring_1(s, k))