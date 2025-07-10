//Q7. Deligation: Event Deligation where we add event listener to parent element instead of adding them into descendent element  


document.querySelector(".products").addEventListener('click', (event) => {
    console.log("event", event)

    if (event.target.tagName == 'DIV') {
        window.location.href += '/' + event.target.className
    }
})


// what is window.location.href -> window.location.href is a property in JavaScript that returns the complete URL of the current webpage.

//Use Case: Optimization of Browser, reducing the memory consumption of cbs in web api, for each event listeners