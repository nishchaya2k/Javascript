/*
Number of substring containing all three characters

Problem Statement: Given a string s , consisting only of characters 'a' , 'b' , 'c'.Find the number of substrings that contain at least one occurrence of all these characters 'a' , 'b' , 'c'
*/

let s = "abcba";

//Approach 1, TC: O(n), SC: O(1)
function substring_1(s) {

    let n = s.length;

    function AtMost(k) {
        let count = 0, res = 0;;
        let freq = new Map();
        let left = 0, right = 0;

        while (right < n) {

            if (!freq.has(s[right]) || freq.get(s[right]) === 0) {
                count++;
            }

            while (count > k && left <= right) {
                if (freq.get(s[left]) == 1) count--;
                freq.set(s[left], (freq.get(s[left]) || 0) - 1);
                left++;
            }
            res += right - left + 1;


            freq.set(s[right], (freq.get(s[right]) || 0) + 1);
            right++;
        }

        return res;
    }

    return AtMost(3) - AtMost(2)
}

console.log("Substring", substring_1(s))

//Approach 2, TC: O(n), SC: O(1)
function substring_2(s) {

    let lastA = -1;
    let lastB = -1;
    let lastC = -1;

    let res = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'a') lastA = i;
        if (s[i] === 'b') lastB = i;
        if (s[i] === 'c') lastC = i;

        let minIndex = Math.min(lastA, lastB, lastC);

        if (minIndex !== -1) {
            res += minIndex + 1;
        }
    }

    return res;
}

console.log("Substring", substring_2(s))



/*
-----------------------------------
S2) LAST SEEN INDEX TRICK
-----------------------------------

Used when we must ensure presence of a fixed small set of characters.

Idea:
Instead of maintaining a full sliding window,
track the last seen index of each required character.

For each index i:

    update last seen position of s[i]

    minIndex = min(lastSeen positions)

If minIndex != -1:

    valid substrings ending at i = minIndex + 1

Example:
Number of substrings containing 'a', 'b', 'c'

Time Complexity: O(n)
Space Complexity: O(1)
*/