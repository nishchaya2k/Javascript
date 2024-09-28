const glasses = document.querySelectorAll('.glass');
const bucket = document.querySelector('.bucket');
let div;


glasses.forEach((glass, index) => {

    glass.addEventListener('click', () => {
        emptyGlasses();
        fillGlasses(index);
    })

})

function emptyGlasses() {
    glasses.forEach((glass) => {
        glass.classList.remove('water')
    })

    if (bucket.contains(div)) {
        bucket.removeChild(div)
    }
}

function fillGlasses(index) {

    for (let i = 0; i <= index; i++) {
        glasses[i].classList.add('water')
    }

    div = document.createElement('div')
    div.style.height = `${(350 / 6) * (index + 1)}px`;
    bucket.appendChild(div)
}
