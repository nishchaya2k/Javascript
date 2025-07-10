/*
ResizeObserver: The ResizeObserver interface is a powerful JavaScript API that allows you to monitor changes to the dimensions of an element in the DOM. 



- why it's beneficial 

1. Improved performance: Traditionally, to detect element size changes, developers might use the window.resize event listener and then manually check element dimensions, However, window.resize fires for any viewport size change, which can be inefficient if you only care about changes to a specific element.
ResizeObserver only notifies you when the observed element's size actually changes.


2. Element-specific observation: ResizeObserver gives you precise control over which elements you monitor for size changes. You create a ResizeObserver object and then use the observe() method to specify the target element(s).

3. Dynamic layout adjustments: You can use ResizeObserver's notifications to react to size changes and implement responsive layouts, adjust content, or update interactive components


- How it works:

1. Create a ResizeObserver object: You instantiate a new ResizeObserver object with a callback function.

2. Define the callback function: This function is executed whenever the observed element(s) change size. It receives an array of ResizeObserverEntry objects, each containing information about the resized element and its new dimensions.

3. Start observing: Use the observe() method to tell the ResizeObserver which element(s) to monitor. 

*/

const box = document.querySelector('.box')

const observer = new ResizeObserver((entries) => {
    console.log("entries", entries)

    const boxElement = entries[0];
    const isSmall = boxElement.contentRect.height < 700
    boxElement.target.style.backgroundColor = isSmall ? "blue" : "red"
})

observer.observe(box)
