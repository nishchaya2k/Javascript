/*
============================================================
PREFIX SUM — MASTER NOTES
============================================================



############################################################
PART 1 — THEORY FOUNDATION
############################################################

What is Prefix Sum?

Prefix[i] = Sum of elements from index 0 to i.

It stores cumulative totals so range sums can be calculated instantly.



------------------------------------------------------------
Core Formula (Heart of Prefix Sum)
------------------------------------------------------------

Sum of subarray (i → j):

    sum(i → j) = prefix[j] - prefix[i - 1]

If i == 0:

    sum(0 → j) = prefix[j]

This converts repeated addition into subtraction.



------------------------------------------------------------
Why Prefix Sum Works
------------------------------------------------------------

Instead of recalculating sums again and again,
we store running totals once and reuse them.

Used when:
- Range sums are required
- Exact sum problems appear
- Mathematical transformation is needed



------------------------------------------------------------
Time & Space
------------------------------------------------------------

Build prefix → O(n)
Using hashmap (if required) → O(n) space



############################################################
PART 2 — PREFIX SUM PATTERN TRIGGERS
############################################################



------------------------------------------------------------
a) BASIC PREFIX BUILD
------------------------------------------------------------

Trigger:
- Need cumulative totals
- Need fast range sum queries

Logic:
prefix[0] = nums[0]

for i from 1 to n:
    prefix[i] = prefix[i - 1] + nums[i]

Example Questions:
- Range Sum Query – Immutable
- Find Pivot Index



------------------------------------------------------------
b) RANGE SUM QUERY
------------------------------------------------------------

Trigger:
- Multiple queries asking sum(l → r)

Formula:
    sum(l → r) = prefix[r] - prefix[l - 1]

Example Questions:
- Range Sum Query
- Subarray Sum Query problems



------------------------------------------------------------
c) COUNT SUBARRAYS WITH SUM = K
------------------------------------------------------------

Trigger:
- "Subarray sum equals K"
- "Count subarrays with sum K"

Core Equation:

    prefix[j] - prefix[i - 1] = K

Rearranged:

    prefix[i - 1] = prefix[j] - K

Logic:
1) Keep running prefix
2) Check if (prefix - K) appeared before
3) Add its frequency
4) Store current prefix

Important Initialization:
    map = {0:1}

Example Questions:
- Subarray Sum Equals K
- Binary Subarrays With Sum
- Count Number of Nice Subarrays



------------------------------------------------------------
Template — Count Subarrays With Sum K
------------------------------------------------------------

function subarraySum(nums, k) {

    let prefix = 0;
    let count = 0;
    let map = { 0: 1 };

    for (let num of nums) {

        prefix += num;

        if (map[prefix - k]) {
            count += map[prefix - k];
        }

        map[prefix] = (map[prefix] || 0) + 1;
    }

    return count;
}



############################################################
EDGE CASE CHECKLIST
############################################################

- k = 0
- Subarray starting from index 0
- Negative numbers present
- All elements zero



############################################################
FINAL MENTAL CHECKLIST
############################################################

Ask yourself:

1) Is it a range sum problem?
2) Is exact sum required?
3) Can I convert sum(i → j) using prefix difference?
4) Do I need frequency of prefix values?

If YES → Apply Prefix Sum.

============================================================
END OF MASTER NOTES
============================================================
*/