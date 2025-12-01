/*
====================================================
📌 Google Sheets — Rows & Columns Handling
====================================================

🔹 Rows & Columns are NOT DOM elements.
  - No <table>, <tr>, <td>.
  - They exist only as numeric indexes in memory.

🔹 Logical Structure Only:
  - rowHeights[] → stores height of each row
  - columnWidths[] → stores width of each column
  - rows{} → object of rowIndex → { columnIndex: cellData }

🔹 How Canvas Draws Rows & Columns:
  1. Calculates pixel offsets from rowHeights & columnWidths.
  2. Uses offsets to draw:
     - Cell backgrounds
     - Borders
     - Text
     - Frozen sections
  3. Only visible rows/columns are drawn (virtualization).

🔹 Adding a Row:
  1. Insert empty row object:
       rows.splice(index, 0, {})
  2. Insert default height:
       rowHeights.splice(index, 0, defaultHeight)
  3. Mark viewport dirty → request canvas redraw.
  4. Canvas redraws visible region → new row appears.

🔹 Adding a Column:
  1. Insert empty cell into each row.
  2. columnWidths.splice(index, 0, defaultWidth)
  3. Recalculate pixel offsets.
  4. Canvas redraws updated columns.

🔹 Saving (Persistence):
  - Entire sheet stored as:
      - Rows with non-empty cells
      - Row/column sizes
      - Formats & merges
      - Frozen rows/columns
      - Formulas & dependency graph
  - On reopening, data loaded → canvas reconstructs the grid visually.
*/
