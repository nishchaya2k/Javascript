const main_emoji = document.querySelector(".wrapper_emoji")
const emojis = document.querySelector(".wrapper_emojis")
const emojis_emoji = document.querySelectorAll(".wrapper_emojis-emoji")
const imageSelected = document.querySelector("#selectedImage")
const emojis_text = document.querySelectorAll(".text")

const hide = () => {
    emojis.classList.add('hide')
}
const show = () => {
    emojis.classList.remove('hide')
}

main_emoji.addEventListener('mouseover', () => {
    show();
})

main_emoji.addEventListener('mouseout', () => {
    hide()
})

emojis.addEventListener('mouseover', () => {
    emojis.classList.remove('hide')
})
emojis.addEventListener('mouseout', () => {
    hide()
})

//to show text
emojis_emoji.forEach((curr, index) => {
    curr.addEventListener('mouseover', () => {
        emojis_text[index].classList.remove('hide')
    })

    curr.addEventListener('mouseout', () => {
        emojis_text[index].classList.add('hide')
    })
})

emojis_emoji.forEach((curr) => {
    curr.addEventListener('click', (e) => {
        console.log(e.target)
        imageSelected.src = e.target.src
        hide();
    })

})

