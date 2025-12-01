/*
====================================================
📌 Google Sheets — Full Rendering System Design Notes
====================================================

----------------------------------------------------
🔹 1. Google Sheets does NOT use HTML tables
----------------------------------------------------
- No <table> or thousands of <div> cells.
- DOM inspection shows only:
  - A few wrapper <div>s
  - One main <canvas> element
  - A hidden accessibility layer
- Reason:
  - Large DOM = slow repaint, reflow, and layout issues.

----------------------------------------------------
🔹 2. Google Sheets uses Canvas-based Rendering
----------------------------------------------------
Canvas is used to draw:
  - Grid lines (rows/columns)
  - Frozen rows/columns
  - Cell backgrounds
  - Cell borders
  - Cell text (fast pixel rendering)
  - Selection/highlight overlays
  - Scrollable large area

Canvas gives huge benefits:
  1. Fast rendering of 10,000+ rows and columns.
  2. Only visible area is drawn, not entire sheet.
  3. Smooth scrolling (no DOM heavy operations).
  4. Fine control over pixels (Excel-like precision).
  5. Supports high-performance redrawing on edits.

----------------------------------------------------
🔹 3. Hybrid Rendering Model (Canvas + DOM Overlay)
----------------------------------------------------
Google Sheets uses a combination of:
  - Canvas for rendering the grid
  - DOM for interactive input

Why DOM overlay is needed:
  1. Native text editing support:
     - Cursor blinking
     - Text selection
     - Copy/paste
     - Undo/redo
  2. Accessibility:
     - Screen reader support
     - ARIA roles
  3. Mobile keyboard integration.
  4. Keyboard shortcut detection.

How it works:
  - When user **double-clicks** a cell:
    - Canvas stops drawing text for that cell.
    - A DOM <input> or <div contentEditable> appears exactly over that cell.
  - When editing ends:
    - DOM element is removed.
    - Canvas redraws updated cell text.

----------------------------------------------------
🔹 4. Why NOT Pure HTML Grid (table/div)
----------------------------------------------------
Problems with HTML-only approach:
  1. Thousands of DOM nodes = slow.
  2. Browser layout engine becomes bottleneck.
  3. Scrolling large DOM lists becomes choppy.
  4. Hard to efficiently managed frozen rows/columns.
  5. Massive CSS styling costs for grid borders.
  6. Reflow + repaint issues everywhere.

----------------------------------------------------
🔹 5. Why NOT Pure Canvas Only
----------------------------------------------------
Canvas drawbacks for spreadsheets:
  1. No text cursor or selection natively.
  2. No clipboard integration (copy/paste).
  3. No caret movement.
  4. No accessibility.
  5. Hard to detect text boundaries.
  6. Implementing text editing manually is very complex.

Therefore:
  - Canvas handles grid drawing.
  - DOM handles text input & accessibility.

----------------------------------------------------
🔹 6. Internal Architecture Concepts (What Sheet likely uses)
----------------------------------------------------
Google Sheets likely uses:
  1. **Render Engine**
     - Draws visible cells in layers.
     - Uses double-buffering for smoother drawing.

  2. **Column/Row Virtualization**
     - Only renders cells visible in viewport.
     - Never draws full spreadsheet at once.

  3. **Layered Rendering**
     - Grid layer
     - Cell data layer
     - Selection/drag layer
     - UI controls layer (resize handles, highlights)

  4. **Separate Data Model (not tied to DOM)**
     - Stores cell values
     - Stores formatting
     - Handles formulas
     - Handles dependencies (recalculation graph)

  5. **Accessibility Layer**
     - Hidden DOM nodes representing logical grid structure.
     - For screen readers + keyboard navigation.

----------------------------------------------------
🔹 7. Why Google Chose This Architecture
----------------------------------------------------
Because it solves 2 main problems:

  1. **Performance**
     - Large dataset handling
     - Smooth rendering
     - Efficient redraws

  2. **User Interaction**
     - Native editing experience
     - Accessibility support
     - Clipboard support
     - Keyboard shortcuts

----------------------------------------------------
🔹 8. Final Summary — How Google Sheets Renders UI
----------------------------------------------------
- Canvas:
    ✓ Renders the entire visual spreadsheet  
    ✓ Efficient for huge grids  
    ✓ Handles scrolling, drawing, formatting  

- DOM Overlay:
    ✓ Provides real text editing  
    ✓ Enables copy/paste  
    ✓ Supports accessibility  
    ✓ Works only when user edits a cell  

- Data Model:
    ✓ Manages cell values, formatting, formulas  
    ✓ Independent from UI rendering  

- Hybrid approach =
    👉 Maximum performance  
    👉 Maximum interactivity  
    👉 Browser-friendly architecture  

====================================================
End of Notes
====================================================
*/
