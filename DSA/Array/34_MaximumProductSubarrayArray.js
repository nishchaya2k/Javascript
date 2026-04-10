/*
Maximum Product Subarray in an Array

Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.
*/

const nums = [1, 2, 0, 4, 5, 0];

//Approach 1, TC: O(n), SC: O(1)
function maxProduct_1(nums) {

    let pref = 1, suff = 1, max = Number.MIN_SAFE_INTEGER;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (pref == 0) pref = 1;
        if (suff == 0) suff = 1;

        pref = pref * nums[i]
        suff = suff * nums[n - 1 - i];

        max = Math.max(Math.max(suff, pref), max)
    }

    return max;
}
console.log("Maximum Product Subarray", maxProduct_1(nums))



/*
INTUITION (very simple + clear for revision):

Goal:
Find subarray with maximum PRODUCT (not sum).

Core Thinking:

1. Positive numbers:
   → always help (product increases)

2. Negative numbers:
   → tricky
   → even count → becomes positive → GOOD
   → odd count → becomes negative → BAD

--------------------------------------------------

MAIN IDEA:

👉 Break array into parts using ZERO
   (because product becomes 0, so no point crossing it)

Now focus on each part separately:

--------------------------------------------------

CASE 1: Even number of negatives
→ multiply entire subarray
→ gives maximum product

--------------------------------------------------

CASE 2: Odd number of negatives
→ product becomes negative (bad)

So we remove ONE negative:

Two options:
1. Remove left part till first negative 
2. Remove right part after last negative

→ now before and after that 1st & last neg. we have two subarrays which can contribute, I mean these two negative acts as a partition, bcoz the and right of each 1st and last neg. will give as pos. answer.

→ Now remaining subarray has EVEN negatives
→ product becomes positive

→ take MAX of both options

--------------------------------------------------

WHY prefix & suffix works:

Instead of explicitly finding first/last negative:
→ prefix scan handles removing left part
→ suffix scan handles removing right part

--------------------------------------------------

FINAL ONE LINE:

"Split by zero → in each part:
   even negatives → take full
   odd negatives → remove left or right till one negative → take max"
*/