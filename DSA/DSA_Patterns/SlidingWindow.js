/*
============================================================
SLIDING WINDOW — COMPLETE BUT SIMPLE NOTES
============================================================

------------------------------------------------------------
1) CORE IDEA
------------------------------------------------------------

Sliding Window is used for:
- Subarrays
- Substrings
- Contiguous ranges

Mechanism:
- Two pointers: left, right
- Right expands window
- Left shrinks window
- Both move forward only
- Each element processed at most twice → O(n)


------------------------------------------------------------
2) WHEN DOES IT WORK?
------------------------------------------------------------

Sliding Window works when condition is MONOTONIC.

Meaning:
- Expanding should not randomly fix an invalid state
- Shrinking should move window toward validity

Common cases:
- All numbers positive
- Frequency-based conditions
- Distinct element constraints
- "At most K" type problems

Fails when:
- Negative numbers break monotonicity (sum problems)
- Condition is non-contiguous


------------------------------------------------------------
3) MASTER TEMPLATE
------------------------------------------------------------

For each right:

    include nums[right]

    while window invalid:
        remove nums[left]
        left++

    update answer (depends on problem type)

Right always moves once.


------------------------------------------------------------
4) PATTERN TYPES
------------------------------------------------------------

A) FIXED SIZE WINDOW
-----------------------------------
Trigger words:
- size k
- window of length k
- every subarray of size k

Logic:
- Expand right
- If window size > k → remove left
- When size == k → update answer

Examples:
- Max sum subarray of size k
- First negative in every window
- Find all anagrams


-----------------------------------
A1) FIXED WINDOW + DATA STRUCTURE
-----------------------------------

Some fixed window problems require a helper data structure.

Examples:

Sliding Window Maximum
→ Monotonic Deque

Sliding Window Minimum
→ Monotonic Deque

Median of Sliding Window
→ Two Heaps

First Negative Number in Window
→ Queue

Pattern:

Maintain window size = k
Maintain data structure for window property
Remove element leaving the window
Add new element entering the window


-----------------------------------
B) VARIABLE SIZE — LONGEST
-----------------------------------
Trigger:
- longest
- maximum length
- at most k

Logic:
- Expand right
- While invalid → shrink left
- Update answer after shrinking

Examples:
- Longest substring without repeating
- Longest subarray with at most k distinct


-----------------------------------
C) VARIABLE SIZE — SHORTEST
-----------------------------------
Trigger:
- minimum
- smallest
- at least k

Logic:
- Expand right
- While valid:
    update answer
    shrink left

Examples:
- Minimum size subarray sum
- Minimum window substring


-----------------------------------
D) EXACT K → ATMOST TRANSFORMATION
-----------------------------------
Trigger:
- exactly k
- exact k distinct
- exact sum (non-negative case)

Formula:

    Exact(K) = AtMost(K) − AtMost(K−1)

Used when:
- Counting problems
- Distinct element problems
- Non-negative sums

Examples:
- Subarrays with K distinct integers
- Binary subarrays with sum


-----------------------------------
E) COUNTING SUBARRAYS (AtMost)
-----------------------------------

If window is valid:

    Add (right - left + 1)

Reason:
All subarrays ending at right are valid.

Time complexity stays O(n).


-----------------------------------
F) FREQUENCY MAP WINDOW
-----------------------------------

Used when:
- Characters
- Distinct count
- Anagrams
- No repeating constraint

Maintain:
- HashMap
- Frequency count
- Distinct counter


-----------------------------------
G) MONOTONIC DEQUE WINDOW
-----------------------------------

Used for:
- Sliding window maximum
- Sliding window minimum

Maintain:
- Decreasing deque (for max)
- Increasing deque (for min)

Rules:

1. Remove elements outside window
2. Remove smaller elements from back
3. Insert new element
4. Front always holds window max/min

Each element added and removed once → O(n)


-----------------------------------
H) MONOTONIC STRUCTURES
-----------------------------------

Monotonic structures maintain elements in sorted order
while processing the array once.

Two types:

Monotonic Stack
Used for:
- Next greater element
- Daily temperatures
- Largest rectangle in histogram

Monotonic Deque
Used for:
- Sliding window maximum
- Sliding window minimum
- Longest subarray with absolute diff ≤ limit

Key idea:

Remove elements that can never become useful again.

Each element inserted once and removed once → O(n)


------------------------------------------------------------
5) WHEN NOT TO USE SLIDING WINDOW
------------------------------------------------------------

Do NOT use when:

- Negative numbers break sum logic
  Example: Subarray Sum = K (general case)

- Need prefix sum + hashmap

- Condition is not contiguous


------------------------------------------------------------
6) REAL WORLD INTERPRETATION
------------------------------------------------------------

Sliding Window represents a rolling computation
over the most recent elements.

Examples:

Stock Market
→ Highest price in last k minutes

Server Monitoring
→ Peak CPU usage in last k seconds

Fraud Detection
→ Maximum transactions in last k minutes

Streaming Platforms
→ Maximum bandwidth in last k seconds

The window continuously moves forward as new data arrives.


------------------------------------------------------------
7) QUICK DECISION GUIDE
------------------------------------------------------------

If you see:

"size k" → Fixed window  
"longest" + "at most" → Variable longest  
"minimum" + "at least" → Variable shortest  
"exactly k" → AtMost(K) − AtMost(K−1)  
"count subarrays" + "at most" → Add (r - l + 1)

Special Cases:

Window max/min → Monotonic Deque  
Need top k elements → Heap  
Range queries → Segment Tree
*/