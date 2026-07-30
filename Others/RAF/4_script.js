const box = document.querySelector(".box");
const freezeCTA = document.getElementById("freeze");

let pos = 0;

function animate() {
    pos += 4;
    box.style.transform = `translateX(${pos}px)`;

    // setTimeout(animate, 16);
    requestAnimationFrame(animate)
}

animate();

freezeCTA.addEventListener("click", () => {
    const start = performance.now();

    while (performance.now() - start < 3000) {
        // block main thread for 3 sec
    }
});