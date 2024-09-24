const Countries = ['india', "germany", "france", "argentina", "colombia"]
const container = document.querySelector('.container')
const row = document.querySelector(".row");


document.addEventListener('dblclick', () => {

    removePreviousCountry();

    const country = getCountry();
    container.classList.add(`${country}`)
    addCountryName(country)
})


function removePreviousCountry() {
    container.className = 'container'
}

function getCountry() {
    return Countries[Math.floor(Math.random() * Countries.length)]
}

function addCountryName(country) {
    setTimeout(() => {
        row.classList.add('active')
        row.innerHTML = country.toUpperCase();
    }, 0)

    setTimeout(() => {
        row.classList.remove('active')
    }, 1000)
}