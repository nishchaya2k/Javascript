const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const answer = accordion.querySelector('.answer')
        answer.classList.toggle('active')
    })
})