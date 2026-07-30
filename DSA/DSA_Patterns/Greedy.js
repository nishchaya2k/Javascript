/*
============================================================
GREEDY ALGORITHM — INTERVIEW + INTUITION NOTES
============================================================


============================================================
1) CORE INTUITION
============================================================

Greedy means:

    "Take the BEST decision RIGHT NOW
     and never look back."

Mental model:

Greedy =
walking forward confidently
without revisiting old decisions.


Main belief:

    Local optimum
        ->
    Global optimum


============================================================
2) GOLDEN QUESTION
============================================================

Ask yourself:

    "Can taking the best choice NOW
     ever hurt me later?"

If NO
    -> Greedy candidate

If YES
    -> Explore DP / Recursion


============================================================
3) BIGGEST GREEDY SIGNALS
============================================================

If after sorting,
the next best move becomes obvious
-> Think Greedy


Common trigger words:

- minimum
- maximum
- optimize
- smallest
- largest
- minimum operations
- maximum profit


Huge signal:

    sort(...)
    + one pass solution


============================================================
4) GREEDY THINKING STYLE
============================================================

Greedy says:

    "I trust my current decision."


DP says:

    "I don't trust current decision,
     so let me explore future too."


Backtracking says:

    "Let me try ALL possibilities."


============================================================
5) WHEN GREEDY USUALLY WORKS
============================================================

Greedy works when:

A)
Current decision does NOT damage
future possibilities.

AND

B)
Best local choice keeps remaining
problem optimal too.


============================================================
6) WHEN GREEDY USUALLY FAILS
============================================================

-----------------------------------
A) FUTURE CAN PUNISH CURRENT CHOICE
-----------------------------------

If one wrong decision now
can block a better future answer
-> Greedy risky


Danger thought:

    "I may regret this choice later."

⚠️ Strong DP signal


-----------------------------------
B) NEED ALL POSSIBILITIES
-----------------------------------

Keywords:

- count all ways
- combinations
- subsets
- all paths

Usually NOT greedy.


-----------------------------------
C) MULTIPLE STATES EXIST
-----------------------------------

If answer depends on:

- previous choices
- remaining capacity
- multiple dimensions
- previous index

Usually DP.


============================================================
7) MEMORY TRICK
============================================================

Greedy =
stairs

Take best next stair
and keep climbing.


DP =
maze

Need to explore multiple paths
before trusting answer.


============================================================
8) MOST COMMON GREEDY PATTERNS
============================================================

-----------------------------------
A) INTERVAL SCHEDULING
-----------------------------------

Keywords:

- meetings
- intervals
- overlaps
- timings
- scheduling

Most common idea:

    sort by ending time


Why?

Earliest ending interval
leaves maximum future space.


Examples:

- N Meetings in One Room
- Merge Intervals
- Minimum Platforms


-----------------------------------
B) RESOURCE DISTRIBUTION
-----------------------------------

Distribute resources optimally.

Examples:

- Assign Cookies
- Candy
- Gas Station


Pattern:

Give smallest valid resource first.


-----------------------------------
C) RATIO-BASED GREEDY
-----------------------------------

Sort using contribution ratio.

Usually:

    value / weight


Classic example:

- Fractional Knapsack


Core intuition:

Highest contribution first.


-----------------------------------
D) REACHABILITY / JUMPS
-----------------------------------

Questions asking:

- can reach end?
- minimum jumps?
- farthest reachable point?

Examples:

- Jump Game
- Jump Game II


Pattern:

Always maximize future reach.


============================================================
9) MOST IMPORTANT INTERVIEW EXAMPLE
============================================================

-----------------------------------
FRACTIONAL vs 0/1 KNAPSACK
-----------------------------------

Fractional Knapsack:
    Greedy works

Why?

Because fractions are allowed.

Taking highest ratio first
can NEVER hurt future answer.


-----------------------------------

0/1 Knapsack:
    Greedy fails

Why?

One wrong item may block
better future combinations.

Needs:
    DP


⚠️ CLASSIC GREEDY vs DP difference


============================================================
10) FAST RECOGNITION TRIGGERS
============================================================

Intervals + sorting
    -> Greedy candidate

Earliest ending interval
    -> Usually Greedy

Highest ratio first
    -> Greedy

One-pass optimization
    -> Greedy candidate

Need all combinations
    -> Recursion / Backtracking

Future heavily affects present
    -> DP


============================================================
11) RED FLAGS (NOT GREEDY)
============================================================

If you hear yourself saying:

    "Let me try all possibilities"
        -> Recursion

    "Need memoization"
        -> DP

    "Depends on previous states"
        -> DP

    "May need to change old decision"
        -> Greedy risky


============================================================
12) TIME COMPLEXITY PATTERN
============================================================

Most greedy problems:

    O(n)
or
    O(n log n)

Reason:

Usually:
- sorting
- then one pass


============================================================
13) FINAL INTERVIEW INTUITION
============================================================

Greedy works best when:

    Immediate smart decisions
    continue staying smart later.


Greedy fails when:

    Future decisions can punish
    current decisions.


Ultimate Greedy Question:

    "Can I safely make the best move
     RIGHT NOW and never regret it later?"
*/