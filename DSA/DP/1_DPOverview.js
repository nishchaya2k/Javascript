/*
==========================
Dynamic Programming (DP)
==========================

1. Definition
--------------
• Dynamic Programming (DP) is an optimization technique applied to recursion.
• It avoids solving the same recursive state multiple times by storing
  previously computed answers and reusing them whenever the same state
  is encountered again.

• In one line:
  DP = Recursion + Memoization (Caching)

----------------------------------------------------------

2. How to Identify DP?
-----------------------
Step 1: Write the recursive solution.

Step 2: Identify the recursive state (function parameters).

Step 3: Ask yourself:
        "Can this same recursive state be reached again?"

Step 4: If YES, apply DP by memoizing that state.

----------------------------------------------------------

3. Today's Example (Valid Parenthesis Checker)
----------------------------------------------
Recursive State:

    solve(i, count)

where,
• i     -> Current index
• count -> Number of unmatched '('

Question to ask:

"Can solve(i, count) be reached through different recursive paths?"

If YES,

• Store the answer:
    dp[i][count] = answer;

• Next time the same (i, count) appears,
  return the stored answer instead of solving it again.

----------------------------------------------------------

4. Golden Rule
--------------
• Never think about DP first.

Always follow this order:

1. Write Recursion.
2. Find the Recursive State.
3. Check whether the state can repeat.
4. If it repeats, apply DP (Memoization).
*/