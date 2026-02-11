/*
Power Set: Print all the possible subsequences of the String

Problem Description: Given a string, find all the possible subsequences of the string.
 */

let str = "abc"

//Approach 1, Brute force, TC: O(n*2^n), SC: O(n · 2^n)

function possibleSubsequences_1(str) {

    let res = [];
    let n = str.length;


    for (let mask = 1; mask < (1 << n); mask++) {
        let subseq = "";
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                subseq += str[i];
            }
        }

        res.push(subseq)
    }

    return res;
}

console.log("Possible Subsequence", possibleSubsequences_1(str))


//Approach 2, Optimal, TC: O(2^n), SC: O(n · 2^n)

function possibleSubsequences_2(str) {

    let res = [];
    let subs = ''

    function generate(i, subs, str, res, n) {

        if (i >= n) {
            if (subs.length > 0) {   // exclude empty string
                res.push(subs);
            }
            return;
        }

        generate(i + 1, subs + str[i], str, res, n)
        generate(i + 1, subs, str, res, n)
    }

    generate(0, subs, str, res, str.length)
    return res;
}

console.log("Possible Subsequence", possibleSubsequences_2(str))


/*
Power Set / All Subsequences of a String

Approach 1: Bitmasking (Iterative)
-----------------------------------
Algorithm:
1. Let string length be n.
2. There are 2^n possible subsequences.
3. Loop mask = 1 to (2^n - 1):
   - For each bit in mask:
     - If bit is 1, include the corresponding character.
   - Build subsequence and add to result.
4. Return result.

Time Complexity: O(n * 2^n)
  - 2^n masks
  - For each mask, we may loop over n bits to build subsequence
Space Complexity: O(n * 2^n)
  - To store all subsequences
  - Each subsequence can be up to length n

-----------------------------------

Approach 2: Recursion (Include / Exclude)
-----------------------------------------
Algorithm:
1. Recursively decide for each character:
   - Include it in current subsequence
   - Exclude it
2. Base case: if index >= n, push current subsequence (if non-empty) to result
3. Return result

Time Complexity: O(n * 2^n)
  - 2^n recursive calls (one per subsequence)
  - Each call may concatenate string of length up to n
Space Complexity: O(n * 2^n)
  - Recursion stack depth = n
  - Storing all subsequences = O(n * 2^n)
*/
