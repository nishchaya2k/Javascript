/*
🔷 24. HOW REGEX REMOVES SPACES — STEP BY STEP (IMPORTANT)
--------------------------------------------------------------------------------

Example expression:
-------------------
    " a + b * ( c - d ) "

Regex used:
-----------
    expr.replace(/ /g, '')
    expr.replace(/\s+/g, '')

Key idea:
---------
Regex does NOT "remove later".
It **decides per character while scanning** whether to COPY or SKIP.


🔷 25. INTERNAL WORKING (CHARACTER SCAN MODEL)
--------------------------------------------------------------------------------

Engine scans the string LEFT → RIGHT exactly ONCE.

Pseudo logic:
-------------
FOR each character in input:
  IF character matches pattern:
    DO NOT copy it
  ELSE:
    COPY character to output buffer


🔷 26. VISUAL EXECUTION TRACE (NORMAL SPACE)
--------------------------------------------------------------------------------

Input:
------
" a + b "

Scan:
-----
' '  → matches ' ' → SKIP
'a'  → no match    → COPY
' '  → match       → SKIP
'+'  → no match    → COPY
' '  → match       → SKIP
'b'  → no match    → COPY
' '  → match       → SKIP

Output:
-------
"a+b"

✔️ Single scan
✔️ No backtracking
✔️ No intermediate array


🔷 27. VISUAL EXECUTION TRACE (`\\s+`)
--------------------------------------------------------------------------------

Input:
------
" a   \t b \n "

Regex:
------
/\s+/g

Scan:
-----
' '       → start whitespace → SKIP ALL contiguous whitespace
'a'       → COPY
'   \t '  → SKIP (one \s+ match)
'b'       → COPY
' \n '    → SKIP (one \s+ match)

Output:
-------
"ab"

Key point:
----------
Multiple spaces/tabs/newlines are treated as ONE match.


🔷 28. WHY THIS IS FAST (ENGINE LEVEL)
--------------------------------------------------------------------------------

- Regex is compiled to native machine code
- Uses finite-state machine (FSM)
- No JavaScript loop
- No string concatenation
- No array creation

Time complexity:
----------------
O(n) — always linear


🔷 29. DIRECT COMPARISON (MENTAL MODEL)
--------------------------------------------------------------------------------

Regex replace:
--------------
SCAN → DECIDE → COPY / SKIP

Manual loop:
------------
SCAN → JS if → JS push → JS join

Split + join:
-------------
SCAN → ARRAY → SCAN AGAIN → STRING

Fastest pipeline:
-----------------
Regex replace ✔️


🔷 30. FINAL NOTE FOR REVISION
--------------------------------------------------------------------------------

Important sentence to remember:
-------------------------------
"Regex replace filters characters WHILE scanning, not after."

This is why:
------------
- Regex is fast
- Regex is one-pass
- Regex is preferred for normalization

================================================================================
*/
