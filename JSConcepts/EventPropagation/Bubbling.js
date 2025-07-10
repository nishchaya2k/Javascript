//Q1. Event Propagation: The process of deciding when & in which the event will be executed is called Event Propagation - 
//a). Phases -> 1 - Capturing   (Starting From Body)
//b). Phase -> 2 - Target       (Button is Target In Our Case)
//c). Phase -> 3 -  Bubble      (By Default Nature of Broswer is Bubbling & Capture is False)

//Q2. Event Bubling: The Event will be excuted from bottom to up  

const div = document.querySelector('.formWrapper')
const form = document.querySelector('form')
const button = document.querySelector("button")


div.addEventListener('click', function () {
    alert('div')
})
form.addEventListener('click', function (e) {
    // e.stopPropagation()
    alert('form')
})
button.addEventListener('click', function (e) {
    // e.stopPropagation()
    alert('button')
})

// Q3. Events that dont bubble: focus, blur etc


//Q4. How to stop bubbling and capturing  -> use stopPropagation()