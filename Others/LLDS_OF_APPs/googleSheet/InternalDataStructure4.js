/*
====================================================
📌 Google Sheets — Internal Data Structure
====================================================

🔹 Sheets do NOT store a 2D matrix.
  - Storing millions of empty cells would waste memory.

🔹 Actual Structure = Sparse Map:
  sheet = {
    rowIndex: {
      columnIndex: cellObject
    }
  }

🔹 Cell Object may contain:
  {
    v: rawValue,
    f: formula (if any),
    t: type (string, number, date),
    fm: formatting (bold, color, alignment),
    dv: data validation,
    note: notes,
    cm: comments,
    m: merge info
  }

🔹 Separate Structures:
  - columnWidths[] → width per column
  - rowHeights[] → height per row
  - mergedCells[] → list of regions
  - formattingMap{} → stores styles separate from values
  - frozenRows, frozenColumns → numeric values

🔹 Formula System:
  - Formulas stored as text.
  - Dependency graph (DAG) tracks relationships.
  - Recalculation only happens for dependent cells.

🔹 Why Sparse Structure?
  1. Memory efficient (store only non-empty cells)
  2. Fast updates (modify only changed cells)
  3. Works perfectly with canvas virtualization
*/
