const mainDiv = document.querySelector(".main-div");
const boxDiv = document.querySelector(".box");

mainDiv.addEventListener('click', function (event) {

    /*event.clientX and event.clientY represent the horizontal and vertical coordinates of
    the mouse pointer when the click event occurred.*/

    /*boxDiv.offsetWidth / 2 calculates half of the width of the box element.
    The offsetWidth property returns the layout width of an element as an integer,
    */

    /*We subtract half of the box's width and height, respectively, to ensure that the click
     point corresponds to the center of the box. */
    boxDiv.classList.add('active'); // Add active class to the box

    const x = event.clientX - mainDiv.offsetLeft;
    const y = event.clientY - mainDiv.offsetTop;

    // boxDiv.style.transition = "transform 1s, background-color 1s"; // Add transition
    boxDiv.style.transform = `translate(${x}px, ${y}px)`;

    const newColor = getRandomColor();

    // Set the new color with transition effect
    boxDiv.style.backgroundColor = newColor;


});

mainDiv.addEventListener('dblclick', function (event) {
    boxDiv.classList.remove('active'); // Remove active class from the box
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];  // '#' + '(6 characters)'
    }
    return color;
}


/*

1.  The offsetLeft property returns the number of pixels that the upper left corner of the 
    current element is offset to the left within the offsetParent node.

    The offsetTop property returns the distance between the top edge of the current element and 
    the top edge of its offset parent (usually its nearest positioned ancestor or the initial 
    containing block).

    In the context of your code, mainDiv.offsetTop would give you the distance between the top 
    edge of the .main-div element and the top edge of its containing element.

2.  In the context of your code, mainDiv.offsetLeft would give you the distance between the left 
    edge of the .main-div element and the left edge of its containing element (usually its nearest 
    positioned ancestor or the initial containing block).

3.  MouseEvent Propert: clientX and clientY which tells us the coordinates of cursor, reference 
    of view port

4.  

*/