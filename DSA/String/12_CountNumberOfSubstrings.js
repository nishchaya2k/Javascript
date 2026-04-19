/*
Count Number of Substrings

Problem Statement: You are given a string s and a positive integer k.
Return the number of substrings that contain exactly k distinct characters.
*/

const s = "pqpqs", k = 2

//Approach 1, Brute Force
function countSubstrings_1(s, k) {

    let n = s.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let freq = new Map();
        for (let j = i; j < n; j++) {
            freq.set(s[j], (freq.get(s[j]) || 0) + 1)

            if (freq.size == k) count++;
            else if (freq.size > k) break;
        }
    }

    return count;
}

console.log("Count Number of Substrings", countSubstrings_1(s, k))



//Approach 2, Optimal
function countSubstrings_2(s, k) {

    let n = s.length;

    function generate(s, k) {
        let count = 0;
        let left = 0;
        let freq = new Map();

        for (let right = 0; right < n; right++) {
            freq.set(s[right], (freq.get(s[right]) || 0) + 1)

            while (freq.size > k) {
                freq.set(s[left], freq.get(s[left]) - 1);
                if (freq.get(s[left]) === 0) {
                    freq.delete(s[left]);
                }
                left++;
            }
            count += right - left + 1;
        }
        return count;
    }



    return generate(s, k) - generate(s, k - 1);
}

console.log("Count Number of Substrings", countSubstrings_2(s, k))


/*
PROBLEM:
Count substrings having exactly k distinct characters.

------------------------------------------------------------
CORE INTUITION
------------------------------------------------------------

Sliding window naturally works for:
    - At most K
    - At least K

But it does NOT directly work cleanly for:
    - Exactly K

So we convert:

    Exactly(K) = AtMost(K) - AtMost(K-1)

------------------------------------------------------------
WHY DOES THIS FORMULA WORK?
------------------------------------------------------------

Let:
    f(k) = number of substrings with at most k distinct chars
    g(k) = number of substrings with exactly k distinct chars

Now think carefully:

AtMost(k) includes:
    exactly 0 distinct
    exactly 1 distinct
    exactly 2 distinct
    ...
    exactly k distinct

So mathematically:

    f(k) = g(0) + g(1) + g(2) + ... + g(k)

Similarly:

    f(k-1) = g(0) + g(1) + ... + g(k-1)

If we subtract:

    f(k) - f(k-1)

Everything cancels except:

    g(k)

So,

    Exactly(k) = AtMost(k) - AtMost(k-1)

------------------------------------------------------------
WHY SLIDING WINDOW WORKS FOR AtMost(K)?
------------------------------------------------------------

We maintain a window [left ... right]

Condition:
    window must have <= k distinct characters

If window becomes invalid (distinct > k):
    move left forward until valid again

Now IMPORTANT PART:

If current window is valid,
ALL substrings ending at 'right' and starting from
any index between left and right are valid.

Those substrings are:

    [left → right]
    [left+1 → right]
    [left+2 → right]
    ...
    [right → right]

Total count added at each step:

    right - left + 1

That is why:

    count += right - left + 1

------------------------------------------------------------
WHY NOT COUNT EXACTLY(K) DIRECTLY?
------------------------------------------------------------

Because sliding window is stable with:

    condition <= k

But unstable with:

    condition == k

Window keeps expanding and shrinking,
so maintaining exactly k is tricky.

However, maintaining <= k is natural and efficient.

So we compute two stable counts and subtract.

------------------------------------------------------------
MENTAL MODEL TO REMEMBER
------------------------------------------------------------

Whenever you see:

    "Exactly K"

Immediately think:

    Exactly(K) = AtMost(K) - AtMost(K-1)

This pattern works for:
    - Subarrays with exactly k distinct
    - Binary subarrays with sum k
    - Exactly k odd numbers
    - Nice subarrays
    - Many sliding window counting problems

------------------------------------------------------------
TIME COMPLEXITY
------------------------------------------------------------

Brute Force:
    O(n^2)

Sliding Window:
    O(n)

Because each character moves left and right pointer at most once.

------------------------------------------------------------
FINAL TAKEAWAY
------------------------------------------------------------

We convert a difficult "exactly" problem
into two easy "at most" problems.

That is the entire trick.
*/