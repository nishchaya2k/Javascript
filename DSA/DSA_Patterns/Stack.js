/*
============================================================
STACK — MASTER PATTERN NOTES (INTERVIEW READY)
============================================================


############################################################
SECTION 1 — FOUNDATION
############################################################

------------------------------------------------------------
1) WHAT IS A STACK?
------------------------------------------------------------

Stack = LIFO (Last In First Out)

Operations:
- push()
- pop()
- peek()

All operations → O(1)

Used when:
- Last inserted should be processed first
- Temporary storage required
- Undo / backtracking needed


------------------------------------------------------------
2) WHEN TO THINK OF STACK?
------------------------------------------------------------

Trigger Signals:

- Nearest element (left/right)
- Next greater / smaller
- Previous greater / smaller
- Span problems
- Histogram / area problems
- Balanced parentheses
- Remove k digits
- Expression evaluation
- Undo / browser history
- DFS iterative

If problem says:
"Nearest relationship"
→ Think Stack immediately.


############################################################
SECTION 2 — MONOTONIC STACK (CORE PATTERN)
############################################################

------------------------------------------------------------
3) WHAT IS MONOTONIC STACK?
------------------------------------------------------------

Stack that maintains sorted order.

Types:

1) Increasing Stack  → Used for Next Smaller
2) Decreasing Stack  → Used for Next Greater

Core Logic:
While current element breaks stack order:
    pop()

Then:
    stack top becomes answer

Push current element.


------------------------------------------------------------
4) UNIVERSAL TEMPLATE
------------------------------------------------------------

for each element:
    while stack not empty AND violates order:
        pop()

    answer[i] = stack empty ? default : stack top

    push current


Time Complexity:
Each element:
- pushed once
- popped once
→ O(n)


------------------------------------------------------------
5) TRAVERSAL DIRECTION RULE
------------------------------------------------------------

If problem says:

Previous ___ → Traverse Left to Right  
Next ___     → Traverse Right to Left  

Reason:
Stack should already contain candidates.


############################################################
SECTION 3 — CONTRIBUTION TECHNIQUE (VERY IMPORTANT)
############################################################

Used in:

- Sum of Subarray Minimums
- Sum of Subarray Maximums
- Advanced histogram variations
- Total strength type problems

------------------------------------------------------------
6) CORE IDEA
------------------------------------------------------------

Instead of generating all subarrays:

Count how many subarrays each element contributes to.

For index i:

Find:
- Previous Smaller Index (pse)
- Next Smaller Index (nse)

Then:

leftCount  = i - pse
rightCount = nse - i

Total subarrays where arr[i] is minimum:
leftCount × rightCount

Contribution:
arr[i] × leftCount × rightCount

Final Answer:
Sum of all contributions


------------------------------------------------------------
7) DUPLICATE HANDLING RULE
------------------------------------------------------------

To avoid double counting:

For Minimum problems:
Left  → strictly smaller  (>)
Right → smaller or equal (>=)

For Maximum problems:
Left  → strictly greater  (<)
Right → greater or equal (<=)


############################################################
SECTION 4 — HISTOGRAM PATTERN
############################################################

Used in:
- Largest Rectangle in Histogram
- Maximum Rectangle in Binary Matrix

Need:
Previous Smaller + Next Smaller

Width:
rightIndex - leftIndex - 1

Area:
height × width


############################################################
SECTION 5 — GREEDY STACK PATTERN
############################################################

Used in:
- Remove K Digits
- Smallest lexicographic string
- Monotonic number problems

Logic:

while stack not empty AND top > current AND k > 0:
    pop()

Push current


############################################################
SECTION 6 — MATCHING / BALANCED STRUCTURE
############################################################

Used in:
- Valid Parentheses
- Decode String
- Nested structure problems

Logic:
Push opening bracket
On closing:
    Check match with top

If mismatch → invalid

For length problems:
Store index instead of character


############################################################
SECTION 7 — EXPRESSION EVALUATION
############################################################

Postfix:
- One stack

Infix:
- Two stacks (values + operators)

Pop when operator priority requires.


############################################################
SECTION 8 — PAIRWISE ELIMINATION PATTERN
############################################################

Used when:

- Multiple candidates exist
- Pair comparison can eliminate one candidate
- Only one valid candidate can remain


Common Problems:

- Celebrity Problem
- Find the Town Judge
- Majority Element (Boyer-Moore idea)
- Tournament winner problems


------------------------------------------------------------
8) CORE IDEA
------------------------------------------------------------

Start with all candidates.

Repeatedly compare two candidates
and eliminate one invalid candidate.

Each comparison guarantees that
one candidate cannot be the answer.

After N-1 eliminations,
only one potential candidate remains.

Final step:
Verify that candidate.


------------------------------------------------------------
9) GENERAL PROCESS
------------------------------------------------------------

Push all candidates into stack.

stack = [0,1,2,3,...,n-1]

while stack size > 1:

    a = pop()
    b = pop()

    compare a and b

    eliminate one candidate

    push remaining candidate


After N-1 eliminations:

One candidate remains.


------------------------------------------------------------
10) FINAL VERIFICATION
------------------------------------------------------------

The remaining candidate is only
a potential answer.

Verify that the candidate satisfies
the required problem conditions.

If verification fails
→ no valid candidate exists.


------------------------------------------------------------
11) COMPLEXITY
------------------------------------------------------------

Elimination Phase → O(N)

Verification Phase → O(N)

Total → O(N)

Key Insight:

Every comparison removes exactly
one invalid candidate.


############################################################
SECTION 9 — QUICK DECISION MAP
############################################################

Next/Previous relation → Monotonic stack  
Sum over all subarrays → Contribution technique  
Largest rectangle → Histogram pattern  
Remove digits → Greedy stack  
Balanced brackets → Matching stack  
Expression parsing → Operator stack  
Candidate filtering → Elimination pattern  
Undo / DFS → State stack


============================================================
END OF STACK MASTER NOTES
============================================================
*/