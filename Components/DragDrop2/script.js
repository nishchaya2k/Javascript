const bgImage = document.querySelector(".image");
const boxes = document.querySelectorAll(".box");

bgImage.addEventListener("dragstart", function () {
    this.classList.add("holdImg");
    setTimeout(() => {
        this.classList = "invisible";
    }, 0);
});

bgImage.addEventListener("dragend", function () {
    console.log("dragend");
    this.classList = "image";
});

boxes.forEach((box) => {
    box.addEventListener("dragenter", function (e) {
        e.preventDefault();
        console.log("dragenter");
    });

    box.addEventListener("dragover", function (e) {
        e.preventDefault();
        console.log("dragover");
        this.classList.add("hovered");
    });

    box.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.classList = "box";
        console.log("dragleave");
    });

    box.addEventListener("drop", function () {
        console.log("drop");
        this.appendChild(bgImage);
    });
});


/*

When you start dragging the image, it becomes visually represented as being "dragged" by the browser. This is a built-in feature of the drag-and-drop API. The browser often creates a "drag image" based on the element being dragged, which is typically the original element unless you customize it.

If you add the .invisible class (for example, with display: none; or opacity: 0;) to the image while it is being dragged, it will become invisible in the box. However, when dragging starts, the browser may still display a visual representation of the image being dragged (this is the default behavior of the drag-and-drop interface).

 - Why the Image Appears While Dragging ?

Drag Image Handling: The browser takes care of rendering a drag image. When you start the drag operation, it may create a visual clone of the original element, even if you make the original element invisible. This is why you can still see the image being dragged while the original instance in the box is not visible.


*/