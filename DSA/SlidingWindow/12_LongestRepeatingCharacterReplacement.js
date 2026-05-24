/*
longest repeating character replacement

Problem Statement: Given an integer k and a string s, any character in the string can be selected and changed to any other uppercase English character. This operation can be performed up to k times. After completing these steps, return the length of the longest substring that contains the same letter.
*/

let s = "AABABBA", k = 1;

//Approach 1, Brute Force,  TC: O(N^2), O(N)
function longestRepeatingChar_1(s, k) {

    let vis = new Map();
    let n = s.length, maxCount = Number.MIN_SAFE_INTEGER, l = 0, maxCountChar = '', res = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n - k; i++) {
        let j = i;
        let vis = new Map();
        let maxCount = Number.MIN_SAFE_INTEGER;

        for (j = i; j < n; j++) {

            vis.set(s[j], (vis.get(s[j]) || 0) + 1);
            if (vis.get(s[j]) > maxCount) {
                maxCount = vis.get(s[j])
            }
            if ((j - i + 1 - maxCount) > k) break;
        }
        res = Math.max(res, (j - i))
    }

    return res
}
console.log("Longest Repeating Character", longestRepeatingChar_1(s, k))

//Approach 2, TC: O(N), O(N)
function longestRepeatingChar_2(s, k) {

    let vis = new Map();
    let l = 0, maxCount = 0, res = 0;

    for (let r = 0; r < s.length; r++) {

        // add current char
        vis.set(s[r], (vis.get(s[r]) || 0) + 1);

        // track max frequency in window
        maxCount = Math.max(maxCount, vis.get(s[r]));

        // if invalid window → shrink
        if ((r - l + 1) - maxCount > k) {
            vis.set(s[l], vis.get(s[l]) - 1);
            l++;
        }

        // update result
        res = Math.max(res, (r - l + 1));
    }

    return res;
}
console.log("Longest Repeating Character", longestRepeatingChar_2(s, k))



/*
INTUITION (VERY IMPORTANT)

Goal:
We want the longest substring where we can replace at most k characters
to make all characters same.

Key Idea:
In any window, we track:
- window size = (r - l + 1)
- maxCount = frequency of most frequent character in that window

Why?
Because:
👉 To make all characters same, we only need to replace
   all OTHER characters (not the most frequent one)

So:
required replacements = window size - maxCount

Condition:
👉 If (window size - maxCount) <= k → valid window
👉 Else → invalid window → shrink from left

-----------------------------------------------------

IMPORTANT TRICK (INTERVIEW GOLD):

We DO NOT decrease maxCount when shrinking window.

Why?
- maxCount stores the maximum frequency we have ever seen
- it may become outdated (larger than actual)
- but that's OK

Because:
👉 It can only make window look VALID longer than it should
👉 But it will NEVER create a wrong (larger) answer

So:
- We avoid recomputing maxCount again and again
- This keeps solution O(N)

-----------------------------------------------------

INTUITION IN SIMPLE WORDS:

We try to expand the window as much as possible.
If it becomes invalid, we shrink it slowly.

Even if maxCount is slightly wrong,
it only delays shrinking, not correctness.

-----------------------------------------------------
*/