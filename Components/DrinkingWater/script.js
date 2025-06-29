const glasses = document.querySelectorAll(".glass")
const container = document.querySelector(".container")

glasses.forEach((glass, index) => {
    glass.addEventListener('click', () => {
        deleteExistingGlassesWater();
        deleteExistingContainerWater();
        fillGlasses(index);
        fillContainer(index);
    })
})

function deleteExistingGlassesWater() {
    glasses.forEach((glass) => {
        if (glass.firstChild) {
            glass.removeChild(glass.firstChild);
        }
    })
}

function deleteExistingContainerWater() {
    if (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function fillGlasses(index) {
    for (let i = 0; i < index + 1; i++) {
        const filledGlass = document.createElement('div');
        filledGlass.classList.add('glass-water')
        glasses[i].appendChild(filledGlass);

    }
}

function fillContainer(index) {

    const containerWater = document.createElement('div');
    containerWater.classList.add('container-water')
    containerWater.style.height = `${((index + 1) * 30)}px` //increase the water acc. to index
    container.appendChild(containerWater);

}