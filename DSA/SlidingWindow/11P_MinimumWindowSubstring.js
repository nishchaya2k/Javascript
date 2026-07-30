/*
Minimum Window Subsequence

Given strings s1 and s2, return the minimum contiguous substring part of s1, so that s2 is a subsequence of the part.

If there is no such window in s1 that covers all characters in s2, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.
*/

let s1 = "jmeqsiwvaovvnbstl", s2 = "u";

//Approach 1
function minimumWindowSubsequence_1(s1, s2) {


    let vis = new Map();
    let l = 0, r = 0, count = 0, min = Number.MAX_VALUE;

    for (let i = 0; i < s2.length; i++) {
        vis.set(s2[i], (vis.get(s2[i]) || 0) + 1);
    }

    let minL = 0, minR = 0;

    for (let r = 0; r < s1.length; r++) {


        if (count == s2.length && vis.get(s1[r]) == 0) {
            while (l < r && s1[l] !== s1[r]) {
                if (vis.get(s1[l])) {
                    vis.set(s1[l], vis.get(s1[l]) + 1)
                    count--;
                }
                l++;
            }
            l++;
        }

        if (vis.get(s1[r])) {
            vis.set(s1[r], vis.get(s1[r]) - 1)
            count++;
        }

        if (count == s2.length && (r - l + 1) < min) {
            minL = l;
            minR = r;
            min = r - l + 1
        }


    }

    return { minL, minR };

}

console.log("Minimum Window Subsequence", minimumWindowSubsequence_1(s1, s2))
