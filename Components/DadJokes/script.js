const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector("button")


const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept': 'application/json'
        }
    })

    console.log(response);
    const data = await response.json();
    jokeContainer.innerHTML = data.joke

}


btn.addEventListener('click', getJoke)