console.log("this is drag and drop utility");

const imgBox = document.querySelector(".imgBox")
// const whiteBoxes = document.querySelectorAll(".whiteBox")
const whiteBoxes = document.getElementsByClassName("whiteBox")

//Event listeners for draggable elements imgBox
imgBox.addEventListener("dragstart", (e) => {
    console.log("Drag Start has been triggered")
    e.target.classList.add("hold")


    setTimeout(() => {
        e.target.className = 'hide'  //if we will not hide, we will see the Red border around it
    }, 0)                   //it will run in the end, when everything get executed of this func

})


imgBox.addEventListener("dragend", (e) => {
    console.log("Drag End has been triggered")
    e.target.className = 'imgBox'           //above we have hide it so, here we need to add
})


for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('DragOver has been triggered')
    })

    whiteBox.addEventListener('dragenter', (e) => {
        console.log("DragEnter is triggered")
        e.target.className += ' background'
    })

    whiteBox.addEventListener('dragleave', (e) => {
        console.log("DragLeave has been triggered")
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e) => {
        console.log("Drop has been triggered")
        e.target.className = 'whiteBox'
        whiteBox.append(imgBox);
    })
}

/*
1.  (e) => { ... }: This is an arrow function, which serves as the callback function for the 
    event listener. It takes one parameter (e), which represents the event object.

2.  e.target.className += ' hold'           //always remember to give space by using this method
                or
    e.target.classList.add("hold")

3.  The e.preventDefault() method is used to prevent the default behavior of an event. In the 
    context of drag and drop, it's commonly used with the dragover event.

    When an element is being dragged over another element, the default behavior is typically to 
    disallow dropping the dragged element onto the target element. By calling e.preventDefault() 
    within the dragover event listener, you're telling the browser to allow dropping the dragged 
    element onto the target element.

4.  dragenter, dragover, dragleave, and drop events are attached to the element where the 
    draggable item is being dragged over or dropped onto. These events are responsible for 
    managing the behavior of the drop target element.

    dragstart and dragend events are attached to the draggable element itself. These events are 
    responsible for managing the behavior of the draggable item when the dragging starts and ends, 
    respectively.

*/