const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

sumButton.addEventListener("click", (event) => {
    let sum = 0;
    for (let i = 0; i < 1000000000000; i++) {
        sum += i;
    }
    alert(`The final sum is ${sum}`);
});

bgButton.addEventListener('click', () => {
    // Toggle background color without UI blocking
    if (document.body.style.background !== "green") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "blue";
    }
});



/*
Summary & Key Points:

1. The sum operation is computationally expensive. When you click the sum button,
   the main thread locks up in the for loop because JS is single-threaded.
   This blocking means other UI actions (like clicking "Change Background") won’t respond.

2. Web Workers solve this by offloading CPU-intensive tasks to a background thread,
   preventing the main thread from blocking and keeping the UI responsive.

*/