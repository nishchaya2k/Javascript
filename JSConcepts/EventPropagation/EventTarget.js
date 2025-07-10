// Q5. Event.target, this.target , event.currentTarget

const div = document.querySelector('.formWrapper')
const form = document.querySelector('form')
const button = document.querySelector("button")


div.addEventListener('click', func)
form.addEventListener('click', func)
button.addEventListener('click', func)


function func() {
    alert('current target - ', event.currentTarget.tagName)
}
