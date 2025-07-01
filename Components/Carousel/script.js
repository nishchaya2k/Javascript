const imgContainer = document.querySelector('.images');
const images = document.querySelectorAll('.img');
const radioBtns = document.querySelectorAll('.radioBtn');



for (let i = 0; i < images.length; i++) {
    slideShow()
}



function slideShow() {
    // setInterval(() => {
    let scrollAmount = imgContainer.scrollLeft + (imgContainer.clientWidth + 8);

    if (imgContainer.scrollLeft + imgContainer.clientWidth >= imgContainer.scrollWidth) {

        imgContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        imgContainer.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
    // }, 2000);
}

// document.addEventListener('DOMContentLoaded', () => {
//     slideShow();
// });
