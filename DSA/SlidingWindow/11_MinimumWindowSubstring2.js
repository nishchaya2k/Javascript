/*
Minimum Window Subsequence

Given strings s1 and s2, return the minimum contiguous substring part of s1, so that s2 is a subsequence of the part.

If there is no such window in s1 that covers all characters in s2, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.
*/

let s1 = "jmeqsiwvaovvnbstl", s2 = "u";

//Approach 1, TC: O(n^2), SC: O(1)
function minWindow_1(s1, s2) {
    let minWindow = "";

    for (let i = 0; i < s1.length; i++) {

        // First character of s2 found
        if (s1[i] === s2[0]) {

            let j = i;
            let k = 0;

            // Try to match s2 as a subsequence
            while (j < s1.length && k < s2.length) {

                if (s1[j] === s2[k]) {
                    k++;
                }

                j++;
            }

            // Entire s2 was found
            if (k === s2.length) {
                let window = s1.substring(i, j);

                if (
                    minWindow === "" ||
                    window.length < minWindow.length
                ) {
                    minWindow = window;
                }
            }
        }
    }

    return minWindow;
}
console.log("Minimum Window Subsequence", minWindow_1(s1, s2))

//Approach 2, TC: O(m*n), SC: O(1)
function minWindow_2(s1, s2) {
    let minWindow = "";
    let i = 0;

    while (i < s1.length) {

        // First character of s2 found
        if (s1[i] === s2[0]) {

            let j = i;
            let k = 0;

            // Try to match s2 as a subsequence
            while (j < s1.length && k < s2.length) {

                if (s1[j] === s2[k]) {
                    k++;
                }

                j++;
            }

            if (k === s2.length) {
                // j is one position after the end
                let end = j - 1;

                // Backward scan
                k = s2.length - 1;


                while (end >= i) {

                    if (s1[end] === s2[k]) {
                        k--;

                        // Entire s2 matched backwards
                        if (k < 0) {
                            break;
                        }
                    }

                    end--;
                }

                // 'end' is now the optimized starting index
                let start = end;

                let window = s1.substring(start, j);

                // Update answer
                if (
                    minWindow === "" ||
                    window.length < minWindow.length
                ) {
                    minWindow = window;
                }

                // Start next search after this optimized start
                i = start + 1;

            } else {
                // s2 cannot be found anymore
                break;
            }

            
        } else {
            i++;
        }
    }

    return minWindow;
}
console.log("Minimum Window Subsequence", minWindow_2(s1, s2))