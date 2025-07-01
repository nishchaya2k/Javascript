const btn = document.querySelector('.btn')
const container = document.querySelector('.container')
const input = document.querySelector('#toggle')


function handleDarkLightMode() {
    container.classList.toggle('active')
    btn.textContent = btn.textContent === 'Light' ? 'Dark' : 'Light'
    btn.classList.toggle('activeBtn')
}


input.addEventListener('change', () => {
    handleDarkLightMode()
})

btn.addEventListener('click', () => {
    input.checked = !input.checked
    handleDarkLightMode()
})

