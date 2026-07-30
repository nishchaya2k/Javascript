/*
========================================
TIME & SPACE COMPLEXITY – GENERAL NOTES
========================================

----------------------------------------
1. WHAT TIME COMPLEXITY REALLY MEANS
----------------------------------------
• Time Complexity measures how runtime grows
  as input size (N) increases.
• It ignores constants and focuses on growth rate.
• It represents the WORST-CASE unless stated otherwise.

----------------------------------------
2. HOW TO ANALYZE TIME COMPLEXITY
----------------------------------------

STEP 1: Identify the main driver
• Loops → usually N, N², etc.
• Recursion → size of recursion tree
• Backtracking → number of states explored
• Divide & conquer → recursion depth + work per level

STEP 2: Count how many times work is repeated
• Outer loop × inner loop
• Recursive calls per level
• Branching factor

STEP 3: Multiply:
Total Time = (Number of calls) × (Work per call)

----------------------------------------
3. COMMON TIME COMPLEXITY PATTERNS
----------------------------------------

• Single loop:
  for (i = 0 to N)
  → O(N)

• Nested loops:
  for (i = 0 to N)
    for (j = 0 to N)
  → O(N²)

• Loop inside recursion:
  recursion ≈ N! or 2^N
  inner loop ≈ N
  → multiply both

• Backtracking / permutations:
  Choices reduce each level
  → O(N!)

• Binary recursion (include/exclude):
  → O(2^N)

• Divide & conquer:
  T(N) = aT(N/b) + O(N)
  → Use Master Theorem

----------------------------------------
4. ONE-TIME COST vs REPEATED COST
----------------------------------------

• One-time work (initialization, setup)
  → DOES NOT affect Big-O

Examples:
• array.fill() once → O(N)
• board initialization once → O(N²)

If done once, it is dominated by recursion/loops.

----------------------------------------
5. OUTPUT CONSTRUCTION RULE
----------------------------------------

• Work done ONLY to build output
  is usually NOT counted in time complexity.

Reason:
• Output size itself may be large
• Complexity focuses on algorithm, not printing

Example:
• Copying solution → O(N²)
• Happens only when solution is found

This is treated as OUTPUT COST.

----------------------------------------
6. WHAT SPACE COMPLEXITY MEANS
----------------------------------------

• Space Complexity = Extra memory used
• Do NOT include input space
• Do NOT include output space (unless asked)

----------------------------------------
7. HOW TO ANALYZE SPACE COMPLEXITY
----------------------------------------

Count:
• Recursion stack
• Auxiliary arrays
• Hash maps / sets
• Temporary variables

----------------------------------------
8. COMMON SPACE COMPLEXITY PATTERNS
----------------------------------------

• Recursion depth = N
  → O(N)

• 2D matrix of size N×N
  → O(N²)

• Hash maps / sets storing N elements
  → O(N)

• Multiple arrays?
  → Add them, then keep the dominant term

----------------------------------------
9. DOMINANT TERM RULE
----------------------------------------

When multiple terms exist:
• O(N² + N) → O(N²)
• O(N! + N²) → O(N!)
• O(2^N + N) → O(2^N)

Always keep the fastest-growing term.

----------------------------------------
10. CONSTANT TIME CHECKS
----------------------------------------

• Hash lookup
• Boolean array access
• Index access

All are:
→ O(1)

Using O(1) checks inside recursion
can reduce overall complexity significantly.

----------------------------------------
11. INTERVIEW GOLDEN RULES
----------------------------------------

• Backtracking → factorial or exponential
• Safety check inside recursion → multiply cost
• Hashing reduces repeated scans
• One-time setup ≠ complexity driver
• Output cost ≠ algorithm cost

----------------------------------------
12. HOW TO EXPLAIN IN INTERVIEW
----------------------------------------

Structure your answer like this:
1. Describe recursion/loop structure
2. Count number of states/calls
3. Cost per state
4. Multiply
5. State final TC & SC clearly

----------------------------------------
END OF NOTES
----------------------------------------
*/
