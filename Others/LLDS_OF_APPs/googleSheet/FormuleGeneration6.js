/*
====================================================
📌 Google Sheets — Formula Generation + Engine Internals (System Design Notes)
====================================================

----------------------------------------------------
🔹 1. Formula Storage (Client-Side)
----------------------------------------------------
- Spreadsheet does NOT store calculated values in formula cells.
- Only TWO things are stored per formula cell:
  1) Raw formula text → "=SUM(A:B)"
  2) Parsed AST → internal tree representation

- Example AST for =SUM(A:B):
    {
      type: "formula",
      op: "SUM",
      args: [
        { type: "column_range", startCol: 0, endCol: 1 }
      ]
    }
- Why on Frontend ??
- Backend receives exactly the same raw text + AST (or sends back its own parsed AST).

----------------------------------------------------
🔹 2. Why an API Call Happens When User Types a Formula
----------------------------------------------------
Because Google Sheets is collaborative:
- Server holds the **authoritative sheet state**.
- Browser only shows a “preview”.

Backend must do:
- Formula validation
- AST parsing
- Dependency graph creation
- Circular reference detection
- Trigger recalculation engine
- Sync updated values to all users

So each formula typing triggers a “formula generation API request”.

----------------------------------------------------
🔹 3. What the Formula Generation API Sends
----------------------------------------------------
Payload usually contains:
{
  sheetId,
  rowIndex,
  colIndex,
  rawFormula: "=SUM(A:B)",
  editorUserId,
  contextMetadata: { sheetNames, ranges }
}

Client does **NOT** send expanded ranges like A1...A100000.

----------------------------------------------------
🔹 4. Backend Formula Processing Workflow
----------------------------------------------------
Backend performs:

1) **Syntax Validation**
   - Ensures SUM is a known operator
   - Ensures A:B is valid

2) **Parse to AST**
   - Converts formula string → tree structure

3) **Dependency Graph Update**
   - Adds edges:
       Column A → C1
       Column B → C1

4) **Recalculation Engine Runs**
   - Reads values for A and B
   - Computes SUM
   - Stores/returns final value

5) **Send to Client(s)**
   - Client draws result on canvas
   - All users see same final number

----------------------------------------------------
🔹 5. Ranges Stored as Definitions (NOT Expanded Lists)
----------------------------------------------------
Instead of storing:
  A1, A2, A3…A1000000  ❌

Sheets stores:
{
  type: "columnRange",
  startCol: A,
  endCol: B
}

Expansion happens **only at evaluation time** inside Formula Engine.

This avoids huge memory usage.

----------------------------------------------------
🔹 6. Auto-Update on Data Change (Real-Time)
   (Corrected for Column-Wide Formulas)
----------------------------------------------------

When user edits A5:

1) Backend stores new value of A5.
2) Dependency Engine checks dependents of A5.
   Because column formula "=SUM(A:B)" is applied to entire column:

      A5 → C5
      B5 → C5

3) Recalculation Engine evaluates:
      C5 = SUM( A5 , B5 )

4) Backend sends updated value ONLY for C5 
   (not C1, not whole column)

5) Canvas redraws only cell C5.

----------------------------------------------------
🔹 7. How Column Selection Becomes a Formula
----------------------------------------------------
User selects columns A and B.

UI selection outputs:
    { startCol: 0, endCol: 1 }

Formula editor converts that to:
    "A:B"

Backend receives this raw formula exactly.

----------------------------------------------------
🔹 8. Why Server Calculates Instead of Browser
----------------------------------------------------
Reasons:
1) Browser never loads entire sheet in memory.
2) Many formulas reference off-screen data.
3) Server is the “single source of truth”.
4) Functions like VLOOKUP/QUERY need huge datasets.
5) Dependency sorting + conflict resolution done centrally.
6) Collaborators must stay in sync.

----------------------------------------------------
🔹 9. Backend Storage for a Formula Cell
----------------------------------------------------
Backend stores:

{
  cell: "C1",
  formula: "=SUM(A:B)",
  ast: { ... },
  deps: ["columnRange(A:B)"],
  cachedValue: 42
}

❗ Cached value optimizes performance but is not the source of truth.

----------------------------------------------------
🔹 10. The Three Internal Engines (MOST IMPORTANT)
----------------------------------------------------
Google Sheets internally uses **three major engines**:

----------------------------------------------------
🟦 A. Formula Parsing Engine
----------------------------------------------------
Role:
- Converts "=SUM(A:B)" → AST
- Detects syntax errors
- Normalizes expressions
- Identifies ranges & functions

Output:
- AST + metadata for downstream engines

----------------------------------------------------
🟥 B. Dependency Graph Engine
----------------------------------------------------
Role:
- Creates a graph where each node is a cell
- Edges show dependencies
  Example:
    A → C1
    B → C1

- Detects circular references
- Marks which formulas must be recomputed after edits
- Maintains efficient “dirty flags”

Why needed:
- Without dependencies, recalculation is impossible for large sheets.

----------------------------------------------------
🟩 C. Recalculation Engine (Calc Engine)
----------------------------------------------------
Role:
- Evaluates formulas in correct topological order
- Expands ranges dynamically (A:B → all rows)
- Computes functions (SUM, AVG, VLOOKUP…)
- Sends updated values to users

Key features:
- Uses cached values to avoid re-evaluating everything
- Works incrementally (only recompute dirty nodes)
- Optimizes huge range operations

----------------------------------------------------
🔸 Engine Processing Path (End-to-End)
----------------------------------------------------
User types formula → Backend Workflow:

Formula String  
    ↓  
Formula Parsing Engine (creates AST)  
    ↓  
Dependency Engine (builds/updates graph)  
    ↓  
Recalculation Engine (computes result)  
    ↓  
Result synced to all clients  

This is the core of spreadsheet system design.

----------------------------------------------------
🔹 11. Collaboration Guarantees
----------------------------------------------------
Backend ensures:
- All users see same values
- Recalculation is deterministic
- Conflicts resolved globally
- No circular reference anomalies
- Updates propagate in correct order

====================================================
📌 End of Notes — Formula + Engine Architecture (Deep System Design)
====================================================
*/
