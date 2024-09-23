const flags = document.querySelectorAll(".flag")
const flagName = document.querySelectorAll(".name")
const wrapper = document.querySelector(".wrapper")

let size = flags.length;
let i = 0;

function showFlag(index) {

    flags.forEach(flag => flag.classList.add('hide'))

    flags[index].classList.remove('hide')
    flags[index]
}



wrapper.addEventListener('dblclick', () => {
    i = i % size;
    showFlag(i)
    i++;
})


