const container = document.querySelector('.container');

container.addEventListener('dblclick', (e) => {
    const child = document.createElement('span')

    child.style.left = `${e.clientX}px`
    child.style.top = `${e.clientY}px`

    child.classList.add('ripple')
    container.appendChild(child)

    child.addEventListener('animationend', () => {
        child.remove()
    })
})