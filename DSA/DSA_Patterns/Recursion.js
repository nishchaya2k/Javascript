/**
============================================================
RECURSION — MASTER NOTES (REFINED)
============================================================

Recursion means:
A function solving a problem by calling itself on smaller input.

Core Idea:
Big Problem → Same Smaller Problem → Repeat → Stop at Base Case


============================================================
1. STRUCTURE OF RECURSION
============================================================

Every recursive solution must have:

1) Base Case
   Condition to stop recursion

2) Recursive Call
   Function calls itself with smaller input

Template:
--------------------------------------------------
function solve(params) {

    if (base_condition) return result;

    return solve(smaller_input);
}
--------------------------------------------------

Rule:
Each call must move closer to base case


============================================================
2. HOW TO THINK IN RECURSION
============================================================

Do not think:
"How will all calls execute?"

Think:
"If smaller problem is solved, how do I use it?"

Faith Method:
Assume solve(smaller_input) already works.
Focus only on current step.


============================================================
3. TYPES OF RECURSION
============================================================

A) Linear Recursion
Each call → one recursive call

Example:
f(n) → f(n-1)

Time: O(n)


B) Multiple Recursion Calls
Each call → multiple recursive calls

Example:
f(n) → f(n-1) + f(n-2)

Time: Exponential (2^n)


C) Tail Recursion
Recursive call is last operation

Example:
return f(n-1)

No work after recursion


D) Backtracking Recursion
Modify → Recurse → Undo

Used in:
Subsets, Permutations, N-Queens, Graph Coloring

Pattern:
--------------------------------------------------
function solve() {

    if (base_case) return;

    for (choice of choices) {

        make choice

        solve()

        undo choice
    }
}
--------------------------------------------------


============================================================
4. RECURSION TREE
============================================================

Each call:
Creates a new stack frame

Execution:
Goes deep first, then returns

Stack overflow occurs if:
No base case or too deep recursion


============================================================
5. COMMON PATTERNS
============================================================

1) Linear Pattern
f(n) → f(n-1)

2) Parameterized
Carry answer in parameters

3) Functional
Return answer

4) Pick / Not Pick Pattern
Each step has 2 choices

Pattern:
--------------------------------------------------
function solve(index) {

    if (index == n) return;

    pick
    solve(index + 1)

    not pick
    solve(index + 1)
}
--------------------------------------------------

Total combinations:
2^n


============================================================
6. REDUCING PROBLEM
============================================================

Ways to reduce:

- Index based:
  index + 1 or index - 1

- Two pointers:
  left + 1, right - 1


============================================================
7. TIME COMPLEXITY
============================================================

General Rule:

Time = (choices per step) ^ (depth)

Examples:

Linear:
O(n)

Binary:
O(2^n)

Graph Coloring:
O(m^V)


============================================================
8. WHEN TO USE RECURSION
============================================================

Use when:

- Problem breaks into same smaller problem
- Tree / DFS involved
- Backtracking needed
- Combinations / subsets


============================================================
9. RECURSION TO DP
============================================================

If repeated subproblems exist:

Use:
- Memoization
- Tabulation

Example:
Fibonacci
O(2^n) → O(n)


============================================================
FINAL CHECKLIST
============================================================

1) Base case?
2) How problem reduces?
3) What changes each call?
4) When does it stop?
5) Any repetition?

Rule:
Trust recursion.
Define base case clearly.
Reduce problem every step.

============================================================
END
============================================================
*/