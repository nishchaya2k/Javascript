/*
====================================================
📌 Canvas-Based Rendering — Deep System Design Notes
====================================================

----------------------------------------------------
🔹 1. What is <canvas>?
----------------------------------------------------
- A blank drawing surface inside the browser.
- It does NOT contain HTML elements.
- Everything must be drawn manually using JavaScript.
- Behaves like a digital paintboard:
  - Lines, rectangles, text, shapes → all drawn by code.

----------------------------------------------------
🔹 2. What "Canvas-based Rendering" actually means
----------------------------------------------------
- The UI is NOT built with HTML tags.
- The UI is *painted* pixel-by-pixel using:
    const ctx = canvas.getContext("2d");
- You instruct the canvas to:
  - Draw lines for borders
  - Draw boxes for cells
  - Draw text for cell content
  - Draw highlights for selection
- This allows very high performance.

----------------------------------------------------
🔹 3. Why Google Sheets uses Canvas
----------------------------------------------------
- HTML tables cannot handle 10k+ rows efficiently.
- DOM layout, reflow, repaint → too slow for large grids.
- Canvas:
  1. Draws only visible cells (virtualization)
  2. Redraws instantly during scroll
  3. Offers pixel-level control
  4. Extremely fast for large grids
  5. No heavy DOM overhead

----------------------------------------------------
🔹 4. How a grid is drawn on Canvas (conceptually)
----------------------------------------------------
- In JavaScript, define spreadsheet size:
    rows, columns, rowHeight, colWidth.
- Loop through rows/columns and draw:
  1. Grid lines
  2. Cell rectangles
  3. Cell text
- Example operations:
    ctx.stroke();   // borders
    ctx.fillRect(); // background
    ctx.fillText(); // text inside cells
- The grid you see on screen is NOT HTML.
- It is a “painted image” on canvas.

----------------------------------------------------
🔹 5. Components Canvas draws for Google Sheets UI
----------------------------------------------------
Canvas draws:
  - Grid lines (all row/column separators)
  - Frozen rows and columns
  - Cell backgrounds (colors, highlights)
  - Cell borders (thin, thick, custom)
  - Cell text (labels, numbers, formulas)
  - Selection overlay (blue highlight box)
  - Drag handles (small square at selection corner)
  - Scrollable large area rendering
  - Hover effects or guides

----------------------------------------------------
🔹 6. How scrolling works with Canvas
----------------------------------------------------
- Canvas itself doesn't "scroll" cells.
- Browser scrolls the container.
- On scroll:
    - Read scrollX, scrollY positions.
    - Redraw only the visible part of sheet.
- This is called **Viewport Virtualization**.

----------------------------------------------------
🔹 7. Why Canvas alone is not enough
----------------------------------------------------
Canvas CANNOT:
  - Show blinking text cursor
  - Handle typing natively
  - Support copy/paste
  - Support screen readers
  - Support text selection
  - Support accessibility

So editing cell values on canvas is impossible directly.

----------------------------------------------------
🔹 8. Solution → DOM Overlay for Editing
----------------------------------------------------
- When user double-clicks a cell:
  1. Canvas calculates exact pixel position.
  2. A DOM element (<input> or contentEditable) is placed over that cell.
  3. User types into the DOM element.
  4. After editing:
     - The value goes to data model
     - DOM overlay is hidden
     - Canvas redraws updated text

This creates the illusion that editing happens inside canvas.

----------------------------------------------------
🔹 9. Google Sheets Internal Rendering Architecture (Summary)
----------------------------------------------------
Layers:
  1. **Canvas Layer**
     - Renders grid, data, colors, selection, frozen rows.

  2. **DOM Input Layer**
     - Appears only while editing a cell.
     - Handles keyboard, clipboard, accessibility.

  3. **Data Model**
     - Stores values, formatting, formulas.
     - Independent from UI.

  4. **Virtualization Engine**
     - Calculates which cells are visible.
     - Draws only visible rows/columns.
     - Smoothly handles 100k+ rows.

----------------------------------------------------
🔹 10. Final Summary — Why Canvas Rendering Matters
----------------------------------------------------
- Enables extremely fast performance.
- Avoids heavy DOM structures.
- Allows rendering of massive spreadsheets.
- Offers flexibility to draw any custom UI.
- Combined with a DOM overlay, it creates:
    → high-performance grid +
    → native editing experience.

====================================================
End of Canvas Rendering Notes
====================================================
*/
