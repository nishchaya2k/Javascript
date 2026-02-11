/*
================================================================================
REGULAR EXPRESSIONS (REGEX) — COMPLETE NOTES WITH DEFINITIONS & VISUALS
================================================================================


🔷 1. WHAT IS REGEX?
--------------------------------------------------------------------------------
- Regex (Regular Expression) is a **pattern matching language**.
- It is NOT JavaScript-specific.
- JavaScript only **uses** regex; it does not define it.

Definition:
-----------
Regex = A sequence of characters that defines a **search pattern**.

Used for:
- Searching text
- Matching text
- Replacing text
- Validating input
- Tokenizing source code
- Cleaning / normalizing expressions


🔷 2. REGEX SYNTAX STRUCTURE
--------------------------------------------------------------------------------

Basic syntax in JavaScript:

    /pattern/flags

Visual:
-------
    /   a+b   /   g
    ↑   ↑     ↑   ↑
 start pattern end flag

Example:
--------
    /abc/g

Meaning:
--------
- Match "abc"
- Match ALL occurrences (because of `g` flag)


🔷 3. WHAT ARE REGEX FLAGS?
--------------------------------------------------------------------------------

Flags change **HOW** matching works.

Common flags:
-------------
g → global (match all, not just first)
i → ignore case
m → multiline
s → dot matches newline
u → unicode
y → sticky

Example:
--------
    /abc/g
    /abc/i
    /abc/gi


🔷 4. WHAT DOES `/ /g` MEAN?
--------------------------------------------------------------------------------

Regex:
------
    / /g

Breakdown:
----------
/   /   → regex container
(space) → literal SPACE character
g       → global (match all spaces)

Meaning:
--------
"Find ALL normal spaces in the string"

Example:
--------
    "a b c".replace(/ /g, "")
    → "abc"

⚠️ Limitation:
--------------
- Matches ONLY normal spaces
- Does NOT match tabs or newlines


🔷 5. WHAT IS `\s` ?
--------------------------------------------------------------------------------

`\s` is a **character class**

Meaning:
--------
`\s` → ANY whitespace character

It matches:
-------------
- Space  → " "
- Tab    → \t
- Newline→ \n
- CR     → \r

Visual:
-------
    \s = [ space | tab | newline | return ]


🔷 6. WHAT DOES `+` MEAN IN REGEX?
--------------------------------------------------------------------------------

`+` is a **quantifier**

Meaning:
--------
+ → "one or more times"

Examples:
---------
a+   → a, aa, aaa
\s+  → space OR multiple spaces together

Visual:
-------
    "   "
     ↑↑↑
     \s+  (treated as ONE match)


🔷 7. WHAT DOES `/\s+/g` MEAN?
--------------------------------------------------------------------------------

Regex:
------
    /\s+/g

Breakdown:
----------
\s  → any whitespace
+   → one or more
g   → global (entire string)

Meaning:
--------
"Find ALL whitespace groups everywhere"

Example:
--------
    " a   \n b\t c ".replace(/\s+/g, "")
    → "abc"

✅ BEST PRACTICE for cleaning input


🔷 8. DIFFERENCE: `/ /g` vs `/\s+/g`
--------------------------------------------------------------------------------

/ /g
----
- Removes ONLY normal spaces
- Unsafe for real-world input

/\s+/g
-------
- Removes ALL whitespace
- Safe
- Compiler-friendly
- Production-ready


🔷 9. WHY REGEX IS IMPORTANT FOR DSA & COMPILERS
--------------------------------------------------------------------------------

In expression parsing:
----------------------
    " a + b * ( c - d ) "

Step 1: Normalize input
-----------------------
    expr.replace(/\s+/g, "")

Result:
-------
    "a+b*(c-d)"

Benefits:
---------
- Easier tokenization
- Cleaner AST generation
- Less edge cases
- Faster parsing


🔷 10. REGEX AS A TOKENIZER (MENTAL MODEL)
--------------------------------------------------------------------------------

Expression:
-----------
    a+b*(c-d)

Tokens:
-------
    [a] [+] [b] [*] [(] [c] [-] [d] [)]

Regex helps to:
--------------
- Identify numbers
- Identify operators
- Identify parentheses
- Ignore whitespace


🔷 11. IMPORTANT REGEX SYMBOLS (CHEAT SHEET)
--------------------------------------------------------------------------------

.   → any character
\d  → digit (0–9)
\w  → word character
\s  → whitespace
^   → start
$   → end
[]  → character set
()  → group
+   → one or more
*   → zero or more
?   → optional


🔷 12. FINAL SUMMARY
--------------------------------------------------------------------------------
- Regex = pattern language
- `/ /g` = remove spaces only
- `/\s+/g` = remove all whitespace
- Regex is core to parsing, lexing, and AST building
- Mastering regex = stronger DSA + compiler understanding

================================================================================
*/
