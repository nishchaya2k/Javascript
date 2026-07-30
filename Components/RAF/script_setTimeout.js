const box = document.querySelector(".box");
let x = 0;

function heavyWork() {
    const start = performance.now();
    while (performance.now() - start < 5) { }
}


function move() {
    heavyWork()
    x += 2;
    box.style.transform = `translateX(${x}px)`;
    setTimeout(move, 16);
}

move()