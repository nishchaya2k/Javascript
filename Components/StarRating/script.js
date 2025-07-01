const smileys = ['😢', '😞', '😐', '😀', '😎'];

const starCont = document.querySelector('.container-star');
const smiley = document.querySelector('.container-smiley');
const stars = document.querySelectorAll('.star')

stars.forEach((star, index) => star.addEventListener('click', () => {

    //reset
    for (let j = 0; j < stars.length; j++) {
        stars[j].classList.remove('active')
    }

    //add
    for (let j = 0; j <= index; j++) {
        stars[j].classList.add('active')

        if (j == index) {
            smiley.textContent = smileys[j]
        }
    }

}))

