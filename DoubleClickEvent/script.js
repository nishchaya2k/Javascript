const container = document.querySelector('.container')

let last = 0

container.addEventListener('click', (e) => {
    if (last === 0) {
        last = new Date().getTime();
    }

    else {
        now = new Date().getTime()
        if (now - last < 400) {
            const child = document.createElement('div')
            child.classList.add('marker')

            //position of clicked 

            let x = e.clientX - e.target.offsetLeft
            let y = e.clientY - e.target.offsetTop

            child.style.left = `${x}px`
            child.style.top = `${y}px`

            container.appendChild(child)

            child.addEventListener('animationend', () => {
                child.remove()
            })
        } else {
            last = new Date().getTime();
        }
            
    }

})