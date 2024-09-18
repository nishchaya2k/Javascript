const button = document.querySelector('.button')


button.addEventListener('click', (e) => {

    const child = document.createElement('span');
    child.classList.add('child')
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    child.style.left = `${x}px`
    child.style.top = `${y}px`

    button.appendChild(child)

    setTimeout(() => {
        child.remove()
    }, 1000)
})