let accordions = document.querySelectorAll('.accordion')


accordions.forEach((accordion) => {
    const icons = accordion.querySelector('.icon')
    const answers = accordion.querySelector('.answer')

    accordion.addEventListener('click', () => {

        if (icons.classList.contains('active')) {
            icons.classList.remove('active')
            answers.style.maxHeight = null
        } else {
            icons.classList.add('active')
            answers.style.maxHeight = answers.scrollHeight + 'px';
        }

    })

})
