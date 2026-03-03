/*
Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

A palindromic substring is a contiguous sequence of characters within the string that reads the same forward and backward.
*/

let s = "babad"

//Approach 1, Brute Force, TC: (n^3), SC: O(1)

//Approach 2, Optimal by using DP, TC: (n^2), SC: O(n^2)

function lps_1(s) {

    let n = s.length;
    if (n < 2) return s;

    let dp = Array.from({ length: n }, () => Array(n).fill(false));

    let start = 0;
    let maxLen = 1;

    // Single characters are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }


    // Fill table bottom-up
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] == s[j]) {
                if (j - i === 1 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    if (j - i + 1 > maxLen) {
                        start = i;
                        maxLen = j - i + 1;
                    }
                }
            }
        }
    }
    return s.substring(start, start + maxLen);
}

console.log("Longest Palindromic Subsequence", lps_1(s))


//Approach 2, Optimal by using center expand, TC: (n^2), SC: O(1)
function lps_2(s) {

    let n = s.length;
    if (n < 2) return s;
    let maxLen = 1;
    let start = 0;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < n; i++) {

        //expand for odd
        const l1 = expand(i, i)
        //expand for even
        const l2 = expand(i, i + 1)

        const len = Math.max(l1, l2)

        if (len > maxLen) {
            start = i - Math.floor((len - 1) / 2);
            maxLen = len;
        }

    }
    return s.substring(start, start + maxLen);
}

console.log("Longest Palindromic Subsequence", lps_2(s))


/*
MAIN RULE — LONGEST PALINDROMIC SUBSTRING (DP)

------------------------------------------------------------

👉 Definition:

dp[i][j] = true  → substring s[i...j] is palindrome

------------------------------------------------------------

👉 Core Rule:

To check if s[i...j] is palindrome:

1) OUTER BOUNDARY:
   s[i] must equal s[j]

2) INNER BOUNDARY:
   The inside substring s[i+1...j-1]
   must already be palindrome
   → which we get from dp[i+1][j-1]

So,

dp[i][j] = true  if:

s[i] === s[j]
AND
( j - i === 1  OR  dp[i+1][j-1] === true )

------------------------------------------------------------

👉 Why j - i === 1 ?

Because:
Length = 2 case

Example:
"aa"

There is no inner substring.
So only outer match is enough.

------------------------------------------------------------

👉 Base Cases:

1) Length = 1:
   dp[i][i] = true

2) Length = 2:
   If s[i] === s[j] → palindrome

------------------------------------------------------------

👉 Order of Filling:

Since dp[i][j] depends on dp[i+1][j-1],
we must fill table from bottom to top.

i → from n-1 to 0
j → from i+1 to n-1


👉 WHY 2D ARRAY IS REQUIRED — LONGEST PALINDROMIC SUBSTRING (DP)

A substring is uniquely identified by TWO things:
- Starting index (i)
- Ending index (j)

So the state depends on TWO variables.

------------------------------------------------------------

👉 Summary in One Line:

Palindrome = outer characters match
             + inner substring already palindrome.
*/