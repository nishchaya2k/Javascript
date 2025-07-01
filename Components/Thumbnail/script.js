const selected = document.querySelector('.selected')
const images = document.querySelectorAll('.image')
const sideBar = document.querySelector('.sideBar')
const modalWrapper = document.querySelector('.modalWrapper')
const modalBody = document.querySelector('.modalBody')

// Brute Force

// images?.forEach((image) => (
//     image.addEventListener('click', (() => {

//         //Reseting
//         images.forEach((image) => (
//             image.classList.remove('active')
//         ))
//         selected.innerHTML = ''


//         // Updating
//         let img = document.createElement('img')
//         img.src = image.src;
//         selected.appendChild(img)
//         image.classList.add('active')
//     }))
// ))



// Write using delegation, thumbnail selection

sideBar.addEventListener('click', (event) => {
    console.log("event", event.target)

    const clickedImage = event.target

    sideBar.querySelectorAll('.image').forEach((img) => {
        img.classList.remove('active')
    })

    selected.innerHTML = '';
    const img = document.createElement('img');
    img.src = clickedImage.src;
    selected.appendChild(img);

    clickedImage.classList.add('active');

    selected.addEventListener('click', () => {
        modalWrapper.classList.add('modalWrapperOpen')
    })
})

// to open the modal

selected.addEventListener('click', () => {
    const selectedImg = selected.querySelector('img');
    if (selectedImg) {
        modalWrapper.classList.add('modalWrapperOpen');

        modalBody.innerHTML = ''; // Clear modal
        console.log("selectedImg", selectedImg)
        const modalImg = document.createElement('img');
        modalImg.src = selectedImg.src;
        modalBody.appendChild(modalImg);
    }
});


// To close the Modal

// modalBody.addEventListener('click', (event) => {
//     event.stopPropagation();
// });

modalWrapper.addEventListener('click', (event) => {
    if (event.target === modalWrapper) {
        modalWrapper.classList.remove('modalWrapperOpen');
    }
})



// to show first selected image
window.addEventListener('DOMContentLoaded', () => {
    const firstImage = sideBar.querySelector('.image'); //gives you first element

    if (firstImage) {
        firstImage.classList.add('active');
        const img = document.createElement('img')
        img.src = firstImage.src
        selected.appendChild(img);
    }
})


