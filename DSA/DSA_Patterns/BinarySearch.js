/*
============================================================
BINARY SEARCH — MASTER NOTES (REFINED)
============================================================

Binary Search works when:
- Search space is MONOTONIC
- Answer moves in ONE direction


============================================================
1. CORE IDEA
============================================================

We are not always searching in array.

We are searching in:
👉 SEARCH SPACE

Condition:
false false false true true true
            ↑
        find boundary


============================================================
2. TYPES OF BINARY SEARCH
============================================================


-----------------------------------
A) Binary Search on Index (Classic)
-----------------------------------

Use when:
- Sorted array
- Find element / position

Example:
Search in sorted array

Template:
--------------------------------------------------
low = 0, high = n - 1

while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (arr[mid] === target) return mid
    else if (arr[mid] < target) low = mid + 1
    else high = mid - 1
}
--------------------------------------------------


-----------------------------------
B) Binary Search on Answer ⭐ (MOST IMPORTANT)
-----------------------------------

Use when:
- NOT searching index
- Searching best possible value
- Keywords:
  "minimize maximum"
  "maximize minimum"
  "capacity", "days", "workers"

Examples:
- Painter's Partition
- Allocate Books
- Split Array Largest Sum
- Koko Eating Bananas
- Ship Packages

Key Idea:
👉 Try a value → check if possible


Steps:
1. Define search space:
   low  = max(arr)
   high = sum(arr)

2. Write helper:
   canWeDo(mid)

3. Apply binary search

Template:
--------------------------------------------------
low = minPossible
high = maxPossible
ans = high

while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (canWeDo(mid)) {
        ans = mid
        high = mid - 1   // try better (smaller)
    } else {
        low = mid + 1
    }
}
return ans
--------------------------------------------------


Example: Painter's Partition
--------------------------------------------------
boards = [5,5,5,5], k = 2

low = max = 5
high = sum = 20

mid = 12 → possible
mid = 9  → not possible
mid = 10 → possible ✅

Answer = 10
--------------------------------------------------


Golden Rule:
👉 If ≤ k works → valid → try smaller
👉 If > k needed → invalid → increase mid


-----------------------------------
C) First / Last Occurrence
-----------------------------------

Use when:
- Need boundary of target

Key Idea:
- Do NOT return immediately

Template:
--------------------------------------------------
ans = -1

while (low <= high) {
    mid = Math.floor((low + high) / 2)

    if (arr[mid] === target) {
        ans = mid
        high = mid - 1   // move left (first)
    } else if (arr[mid] < target) {
        low = mid + 1
    } else {
        high = mid - 1
    }
}
return ans
--------------------------------------------------


-----------------------------------
D) Binary Search on Condition Change
-----------------------------------

Use when:
- Condition flips (false → true)

Examples:
- First bad version
- Minimum speed

Pattern:
false false false true true

Template:
--------------------------------------------------
while (low < high) {
    mid = Math.floor((low + high) / 2)

    if (condition(mid)) {
        high = mid
    } else {
        low = mid + 1
    }
}
return low
--------------------------------------------------


-----------------------------------
E) Rotated Sorted Array
-----------------------------------

Use when:
- Sorted but rotated

Key Idea:
👉 One half always sorted

Steps:
1. Check sorted half
2. Check if target lies there
3. Move accordingly


============================================================
3. HOW TO IDENTIFY BINARY SEARCH
============================================================

Ask:

1) Is answer numeric?
2) Can I check validity of a guess?
3) Does answer move in one direction?

If YES → Binary Search on Answer


============================================================
4. COMMON MISTAKES
============================================================

❌ Wrong search space
   (start should be max(arr), not 0)

❌ Infinite loop
   (use correct condition: <= vs <)

❌ Not handling edge cases

❌ Wrong mid:
   mid = low + (high - low) / 2


============================================================
5. TIME COMPLEXITY
============================================================

Binary Search:
O(log(range))

Total:
O(n * log(range))


============================================================
6. FINAL MENTAL MODEL
============================================================

Think:

"I am guessing the answer"

If guess works:
👉 try better

If guess fails:
👉 go opposite


============================================================
END
============================================================
*/