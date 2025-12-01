/*
====================================================
📌 Canvas-Based Rendering — Deep & Detailed Notes
====================================================

----------------------------------------------------
🔹 1. What exactly is <canvas>?
----------------------------------------------------
- A low-level, 2D pixel drawing surface.
- Behaves like an empty bitmap (PNG image) that JS can edit.
- Does NOT understand:
  - tables
  - rows
  - columns
  - cells
  - layout
- Only understands:
  - pixels
  - lines
  - shapes
  - text draw commands

----------------------------------------------------
🔹 2. How JavaScript draws on canvas (the core idea)
----------------------------------------------------
- We obtain a "drawing pen" called 2D Context:

    const ctx = canvas.getContext("2d");

- All drawing happens through API calls like:
    ctx.fillRect();     // draw rectangle
    ctx.strokeRect();   // cell border
    ctx.beginPath();    // start drawing lines
    ctx.moveTo();       // line start
    ctx.lineTo();       // line end
    ctx.stroke();       // paint lines
    ctx.fillText();     // draw text

Canvas does NOT position things automatically.
You manually tell it EXACTLY where to draw.

----------------------------------------------------
🔹 3. How the spreadsheet grid is drawn
----------------------------------------------------
Steps:
  1. Loop each row → draw a horizontal line at y = rowIndex * rowHeight.
  2. Loop each column → draw vertical lines at x = colIndex * colWidth.
  3. Draw frozen rows/columns again on a top layer.
  4. Draw cell backgrounds (colors).
  5. Draw borders.
  6. Draw text inside each cell.

Everything = manual coordinates + paint commands.

----------------------------------------------------
🔹 4. How TEXT is drawn on canvas (important concept)
----------------------------------------------------
Canvas cannot create HTML text, so it uses pixel-painting.

Process for drawing text:
  1. Choose a font:
        ctx.font = "14px Arial";

  2. Choose text color:
        ctx.fillStyle = "#000";

  3. Measure text width if needed:
        const width = ctx.measureText("Hello").width;

  4. Draw at pixel position:
        ctx.fillText("Hello", cellX + padding, cellY + baseline);

Canvas "burns" the text pixels into its bitmap.
It is not selectable. It is not editable. It is not a DOM element.

Canvas cannot:
  - place a cursor inside this text
  - highlight part of it
  - let user select it

This is why editing needs DOM overlay.

----------------------------------------------------
🔹 5. How cell content flows from Data → Canvas
----------------------------------------------------
Flow:
  1. Data model stores each cell’s value.
  2. Virtualization engine decides which cells are visible.
  3. For each visible cell:
       a. Read text from data model.
       b. Calculate drawing position:
            x = columnIndex * colWidth
            y = rowIndex * rowHeight
       c. Draw background
       d. Draw border
       e. Draw text using ctx.fillText()

So UI is always a painted snapshot of the data model.

----------------------------------------------------
🔹 6. How selection/highlight is drawn
----------------------------------------------------
- Selection box = rectangle with border.
- Steps:
    ctx.strokeStyle = blue;
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);

- Highlight = semi-transparent fill:
    ctx.fillStyle = "rgba(0,120,215,0.2)";
    ctx.fillRect(x, y, w, h);

----------------------------------------------------
🔹 7. How scrolling works internally
----------------------------------------------------
Canvas is NOT inside the scroll.
The container is scrolled.

Browser reports scrollLeft, scrollTop.
Then:
  - Recalculate visible rows/columns.
  - Clear old drawings:
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  - Redraw only visible cells.

This allows:
  ✓ 100k+ rows
  ✓ smooth 60 FPS scrolling
  ✓ minimal CPU usage

----------------------------------------------------
🔹 8. Why Canvas alone cannot support editing
----------------------------------------------------
Limitations:
  - No caret (text cursor)
  - No blinking cursor
  - No text selection
  - No copy/paste
  - No IME (important for languages like Chinese)
  - No accessibility

Canvas is PRESENTATION only.

----------------------------------------------------
🔹 9. DOM Overlay (How Google Sheets handles editing)
----------------------------------------------------
When user double clicks:
  1. Determine exact cell pixel location → (x, y).
  2. Create a positioned DOM element:
        <input> OR <div contentEditable=true>
  3. Style it to exactly match the canvas cell.
  4. Place it above canvas using CSS `position:absolute`.
  5. User types in DOM.
  6. On blur/enter:
       - Save to data model
       - Remove DOM element
       - Redraw updated cell text on canvas

This creates the illusion of "editing inside the sheet".

----------------------------------------------------
🔹 10. Layered Rendering Architecture
----------------------------------------------------
Canvas Layer:
  - Grid
  - Text
  - Colors
  - Selection
  - Frozen rows
  - Cursor guides

DOM Layer:
  - Input box for editing
  - Hidden aria-accessibility layer

Data Layer:
  - Cell values
  - Cell formatting
  - Formulas
  - Dependency graph

Virtualization Layer:
  - Computes visible cells
  - Controls drawing window
  - Maintains smooth scrolling

----------------------------------------------------
🔹 11. Final Summary: Why Canvas-Based Rendering is chosen
----------------------------------------------------
Canvas gives:
  ✓ Fast performance for huge spreadsheets  
  ✓ Pixel-level control  
  ✓ Virtualization without DOM overhead  
  ✓ Smooth interactions  

DOM overlay gives:
  ✓ Native typing  
  ✓ Copy/paste  
  ✓ Cursor  
  ✓ Accessibility  

Hybrid approach = Google Sheets level performance + browser-native editing.

====================================================
End of Canvas Detailed Notes
====================================================
*/
