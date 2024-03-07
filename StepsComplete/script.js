const steps = document.querySelectorAll(".circle")
const links = document.querySelectorAll(".link")
const rightBtn = document.querySelector(".rightButton")
const leftBtn = document.querySelector(".leftButton")

var currentIndex = 0;
steps[currentIndex].classList.add("completed")


const stepCompleted = (event) => {
    event.target.classList.add("completed")                     //activate the button border

    if (currentIndex < steps.length - 1) {
        steps[currentIndex + 1].classList.add("completed")
        links[currentIndex].classList.add("linked");
        currentIndex++;
    }

    if (currentIndex >= steps.length - 1) {
        event.target.classList.replace("completed", "stop")  //turn off the Right button, when >= steps.length
    }

    else {
        leftBtn.classList.replace("stop", "completed")     //turn on the left button, when > 0
    }
}

const stepUndo = (event) => {
    event.target.classList.add("completed")                         //activate the button border

    if (currentIndex > 0) {
        steps[currentIndex].classList.remove("completed")
        links[currentIndex - 1].classList.remove("linked");

        currentIndex--;
    }

    if (currentIndex <= 0) {
        event.target.classList.replace("completed", "stop")   //turn off the left button, when <= 0
    }

    else {
        rightBtn.classList.replace("stop", "completed")    //turn on the Right button, when < steps.length
    }
}




rightBtn.addEventListener('click', stepCompleted)
leftBtn.addEventListener('click', stepUndo)
