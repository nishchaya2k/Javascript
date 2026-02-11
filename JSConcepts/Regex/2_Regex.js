/*
🔷 13. SHOULD WE REMOVE SPACES USING SPLIT, LOOP, OR REGEX?
--------------------------------------------------------------------------------

Problem:
--------
    " a + b * ( c - d ) "

Goal:
-----
- Normalize expression before parsing
- Remove ONLY spaces (or whitespace)

Options:
--------
1. split + join
2. manual for-loop
3. regex replace


🔷 14. SPLIT + JOIN — WHY IT IS NOT RECOMMENDED
--------------------------------------------------------------------------------

Code:
-----
    expr.split(' ').join('')

How it works:
-------------
- split() scans string and creates an ARRAY
- join() scans array again to build string

Problems:
---------
- Two full passes over data
- Extra memory allocation (array + strings)
- Removes ONLY normal spaces
- Fails for tabs/newlines

Example failure:
----------------
    "a +\tb".split(' ').join('')
    → "a+\tb"   ❌

Verdict:
--------
❌ Not robust
❌ Not scalable
❌ Not compiler-grade


🔷 15. MANUAL FOR-LOOP — IS IT SAME AS REGEX?
--------------------------------------------------------------------------------

Simple loop:
------------
    let out = ''
    for (...) {
      if (char !== ' ') out += char
    }

Logical behavior:
-----------------
- One pass
- Correct for normal spaces

Hidden problem:
---------------
- Strings are IMMUTABLE
- `+=` creates a NEW string every time
- Can degrade to O(n²)

Optimized loop:
---------------
    const buf = []
    for (...) {
      if (char !== ' ') buf.push(char)
    }
    buf.join('')

Now:
----
- O(n)
- Correct
- But still JS-level execution


🔷 16. WHY REGEX IS STILL BETTER THAN A LOOP
--------------------------------------------------------------------------------

Regex:
------
    expr.replace(/ /g, '')
    expr.replace(/\s+/g, '')

Internally:
-----------
- Regex is compiled to native code (C++)
- Uses a streaming finite-state machine
- Scans input ONCE
- Writes output directly

Manual loop:
------------
- JS-level execution
- Bounds checks
- Property access
- Conditional branching
- More instructions per character

Verdict:
--------
Regex is:
- Faster
- Cleaner
- Less error-prone
- Engine-optimized


🔷 17. HOW REGEX REMOVES SPACES IN ONE PASS
--------------------------------------------------------------------------------

Regex:
------
    /\s+/g

Engine logic (simplified):
-------------------------
FOR each character:
  IF whitespace:
    skip until whitespace ends
  ELSE:
    copy character

Visual:
-------
Input:   a ␠␠␠ b
              ↑↑↑
            \s+ (single match)

Still:
------
- Linear scan
- No backtracking
- O(n) time


🔷 18. WHEN REGEX IS FAST AND SAFE
--------------------------------------------------------------------------------

Safe regex patterns:
--------------------
/ /g
/\s+/g
/\d+/g
/[a-zA-Z]+/g

Why safe:
---------
- Single quantifier
- No ambiguity
- No nesting
- One matching path only

Performance:
------------
- Always linear
- Always predictable


🔷 19. WHEN REGEX BECOMES SLOW AND DANGEROUS
--------------------------------------------------------------------------------

Core danger:
------------
NESTED QUANTIFIERS

Examples:
---------
(a+)+
(.+)+
(\s+)+

Problem:
--------
- Regex can match same text in MANY ways
- Engine backtracks exponentially

This causes:
--------------
- CPU spikes
- Browser freeze
- DoS vulnerabilities

This is called:
----------------
🔥 Catastrophic Backtracking


🔷 20. WHY YOUR REGEX USAGE IS 100% SAFE
--------------------------------------------------------------------------------

Your patterns:
--------------
/ /g
/\s+/g

Why safe:
---------
- No nesting
- No alternation
- No greedy dot-star
- One clear matching path

Conclusion:
-----------
✅ Production-safe
✅ Compiler-safe
✅ Performance-safe


🔷 21. IMPORTANT DESIGN INSIGHT (COMPILER LEVEL)
--------------------------------------------------------------------------------

- Regex is excellent for:
  - Normalization
  - Token boundaries
  - Character filtering

- Regex is NOT used for:
  - Grammar parsing
  - AST construction
  - Language syntax rules

Compilers use:
--------------
- DFA-based lexers
- Hand-written scanners
- Regex only at edges


🔷 22. FINAL ENGINEERING RULES (SAVE THESE)
--------------------------------------------------------------------------------

Rule 1:
-------
If task = character removal → use regex

Rule 2:
-------
If task = understanding meaning → use loops / lexer

Rule 3:
-------
Avoid split + join for normalization

Rule 4:
-------
Avoid nested quantifiers in regex

Rule 5:
-------
Linear regex = safe regex


🔷 23. MASTER TAKEAWAY
--------------------------------------------------------------------------------

- Regex is NOT slow by default
- Bad regex is slow
- Regex replace is a streaming scanner
- Loops interpret, regex filters
- Understanding this = compiler mindset

================================================================================
*/
