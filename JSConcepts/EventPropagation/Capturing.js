//Q6. What is event capturing/ Trickling? -> This phase trickles down from the top of the DOM tree to the target element. oR top to bottom


const div = document.querySelector('.formWrapper')
const form = document.querySelector('form')
const button = document.querySelector("button")


div.addEventListener('click', function () {
    alert('div')
}, {
    capture: true
}
)

form.addEventListener('click', function () {
    alert('form')
}, {
    capture: true
})

button.addEventListener('click', function () {
    alert('button')
})


/*
Q. Execute in this following Manner, Form -> Button -> Div,
Sol. used capture: true in form

b -> f -> div

*/

