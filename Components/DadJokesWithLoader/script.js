const jokes = document.querySelector('.jokes')
const btn = document.querySelector('.btn')
const barLoader = document.querySelector('.barLoader')

const URL = "https://icanhazdadjoke.com/";

async function fetchJokes() {
    barLoader.classList.add('active')

    try {
        const res = await fetch(URL, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })

        const data = await res.json();
        jokes.textContent = data.joke
        barLoader.classList.remove('active')
    } catch (err) {
        console.log(err)
    }
}


document.addEventListener('DOMContentLoaded', fetchJokes)
btn.addEventListener('click', () => {
    fetchJokes()
})