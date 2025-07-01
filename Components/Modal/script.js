const modalContainer = document.querySelector('.modalContainer')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    toggleModal(true)
})


function toggleModal(toggle) {
    modalContainer.style.display = toggle ? 'flex' : 'none'
}



modalContainer.addEventListener('click', (e) => {
    if (e.target.className === 'modalContainer') {
        toggleModal(false)
    }

})