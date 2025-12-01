/*
====================================================
📌 Google Sheets — Canvas Cell Detection (Hit Testing)
====================================================

🔹 Canvas does NOT understand cells.
  - It only provides mouseX, mouseY during clicks.

🔹 Sheets maintains invisible boundaries:
  - rowOffsets[] → cumulative pixel positions of rows
  - columnOffsets[] → cumulative pixel positions of columns

🔹 Example:
  columnWidths = [80, 120]
  columnOffsets = [0, 80, 200]

  rowHeights = [20, 20, 30] - how tall each row is in the canvas.
  rowOffsets = [0, 20, 40, 70] - At what pixel position does each row begin?

🔹 When user clicks:
  browser gives (mouseX, mouseY)

🔹 Sheets uses Binary Search:
  - Find column where mouseX fits between offsets.
  - Find row where mouseY fits between offsets.

🔹 Output:
  rowIndex, columnIndex → exact cell.

🔹 Next Step:
  - Canvas shows highlight.
  - A DOM <textarea> overlays the cell for editing.

🔹 Why Binary Search?
  - Works fast with thousands of rows & columns.
  - O(log n) lookup time.

🔹 Important:
  - No rows or columns exist visibly.
  - All interaction is calculated from pixel offsets.
*/

/*
Alogrithm: For Live Colloboration

- CRDT: Conflict Free Replicated DataType 
- Live Collab
- Mail (Gmail,outlook,Zoho)
- Reactjs + Stripe/Dwolla
- Supabase
*/