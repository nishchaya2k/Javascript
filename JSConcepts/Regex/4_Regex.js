/*
🔷 31. REGEX METHODS IN JAVASCRIPT
--------------------------------------------------------------------------------

Regex alone does nothing.
It always works with methods.

Mental model:
-------------
Regex  → rule (WHAT to match)
Method → action (WHAT to do)


🔷 32. STRING METHOD: replace()
--------------------------------------------------------------------------------

Syntax:
-------
string.replace(regex, replacement)

Purpose:
--------
- Find matches
- Replace them

Example:
--------
"a b c".replace(/ /g, "")
→ "abc"

How it works:
-------------
- Single scan
- Matches are skipped/replaced
- New string is returned

Use cases:
----------
- Remove spaces
- Normalize input
- Preprocessing before parsing

Note:
-----
Strings are immutable (original not changed)


🔷 33. STRING METHOD: match()
--------------------------------------------------------------------------------

Syntax:
-------
string.match(regex)

Purpose:
--------
- Extract matches

Example:
--------
"a1 b2 c3".match(/\d/g)
→ ["1", "2", "3"]

Behavior:
---------
- With `g` → all matches
- Without `g` → first match + details

Use cases:
----------
- Token extraction
- Finding numbers / identifiers


🔷 34. STRING METHOD: split() WITH REGEX
--------------------------------------------------------------------------------

Syntax:
-------
string.split(regex)

Notes:
------
- Can use regex as separator
- Creates arrays
- Not ideal for simple normalization

Use cases:
----------
- Structured splitting
- Controlled separators


🔷 35. REGEXP METHOD: test()
--------------------------------------------------------------------------------

Syntax:
-------
regex.test(string)

Purpose:
--------
- Boolean check (true / false)

Example:
--------
/\d/.test("abc1")
→ true

Use cases:
----------
- Validation
- Fast existence checks

Note:
-----
Does NOT return match data


🔷 36. REGEXP METHOD: exec()
--------------------------------------------------------------------------------

Syntax:
-------
regex.exec(string)

Purpose:
--------
- Detailed match information

Example:
--------
/\d+/.exec("abc123def")

Returns:
--------
[
  "123",      // match
  index: 3,   // position
  input: "…"  // original string
]

Use cases:
----------
- Tokenizers
- Manual parsing

Note:
-----
Stateful when used with `g` flag


🔷 37. STRING vs REGEX — WHO CALLS WHO?
--------------------------------------------------------------------------------

Important:
----------
Regex never runs alone.

String → Regex:
---------------
string.replace(regex)
string.match(regex)
string.split(regex)

Regex → String:
---------------
regex.test(string)
regex.exec(string)

Mental model:
-------------
String = data
Regex  = rule


🔷 38. WHICH METHOD TO USE — QUICK GUIDE
--------------------------------------------------------------------------------

Task → Method
-------------
Remove characters → replace()
Extract matches  → match()
Check existence  → test()
Detailed parsing → exec()
Split structure  → split()


🔷 39. REGEX METHODS IN COMPILER CONTEXT
--------------------------------------------------------------------------------

Lexers:
-------
- test()   → identify token type
- exec()   → extract token
- replace()→ normalize input

Parsers:
--------
- Minimal regex usage
- Grammar handled by code


🔷 40. FINAL REVISION NOTE
--------------------------------------------------------------------------------

Key line:
---------
"Regex defines WHAT to match.
Methods define WHAT TO DO with it."

================================================================================
*/
