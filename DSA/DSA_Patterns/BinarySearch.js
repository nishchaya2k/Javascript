/*
========================
BINARY SEARCH PATTERNS
========================

-----------------------------------
1. Binary Search on Answer (Min → Max)
-----------------------------------
Used when:
- We are NOT searching an index
- We are searching the BEST / MINIMUM / MAXIMUM possible answer
- The answer lies in a numeric range [min, max]
- We can "test" if a candidate answer is valid

Common keywords:
- "minimize the maximum"
- "maximize the minimum"
- "smallest possible"
- "largest possible"
- "split", "allocate", "capacity", "days", "workers"

Examples:
- Split Array Largest Sum
- Allocate Books
- Capacity to Ship Packages in D Days
- Koko Eating Bananas
- Aggressive Cows

Steps:
1. Define search space
   - low = minimum possible answer
   - high = maximum possible answer

2. Write a helper function:
   canWeDo(mid)
   - returns true/false OR
   - returns count needed for mid

3. Apply binary search:
   - if mid is valid → try smaller answer (high = mid - 1)
   - if mid is invalid → try larger answer (low = mid + 1)

Template:
--------------------------------------------------
low = minPossible
high = maxPossible
ans = high

while (low <= high) {
    mid = floor((low + high) / 2)

    if (canWeDo(mid)) {
        ans = mid
        high = mid - 1
    } else {
        low = mid + 1
    }
}
return ans
--------------------------------------------------

Important rule:
- If we can do it in <= k, it is VALID
- Always move toward the better (smaller / larger) answer


-----------------------------------
2. Binary Search on Index (Classic)
-----------------------------------
Used when:
- Array is sorted
- Searching for an element or its position

Examples:
- Search in sorted array
- First / Last occurrence
- Lower bound / Upper bound

Template:
--------------------------------------------------
low = 0
high = n - 1

while (low <= high) {
    mid = floor((low + high) / 2)

    if (arr[mid] == target) return mid
    else if (arr[mid] < target) low = mid + 1
    else high = mid - 1
}
--------------------------------------------------


-----------------------------------
3. First / Last Occurrence Pattern
-----------------------------------
Used when:
- Need first or last position of a target

Key idea:
- Do NOT return immediately
- Store answer and continue searching

Template (First Occurrence):
--------------------------------------------------
ans = -1
while (low <= high) {
    mid = floor((low + high) / 2)

    if (arr[mid] == target) {
        ans = mid
        high = mid - 1
    } else if (arr[mid] < target) {
        low = mid + 1
    } else {
        high = mid - 1
    }
}
return ans
--------------------------------------------------


-----------------------------------
4. Binary Search on Condition Change
-----------------------------------
Used when:
- Condition changes from false → true (or vice versa)
- We want the boundary point

Examples:
- First bad version
- Minimum speed
- Minimum capacity

Pattern:
- false false false true true true
- Find first true

Template:
--------------------------------------------------
while (low < high) {
    mid = floor((low + high) / 2)

    if (condition(mid)) {
        high = mid
    } else {
        low = mid + 1
    }
}
return low
--------------------------------------------------


-----------------------------------
5. Binary Search in Rotated Sorted Array
-----------------------------------
Used when:
- Sorted array is rotated

Key idea:
- One half is always sorted

Steps:
1. Check which half is sorted
2. Decide where the target lies
3. Move low / high accordingly


-----------------------------------
REMEMBER:
-----------------------------------
- Binary search is NOT only for sorted arrays
- Binary search works whenever:
  - Search space is monotonic
  - Answer moves in one direction

If:
- mid works → try better answer
- mid fails → go opposite direction

========================
END OF NOTES
========================
*/
