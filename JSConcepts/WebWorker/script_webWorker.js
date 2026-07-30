
// Create a new Worker and link to worker.js
const worker = new Worker('./worker.js');

const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

sumButton.addEventListener("click", () => {
    // Send a message to the worker to start the sum calculation
    worker.postMessage("start sum");   //sending a message
});

worker.onmessage = function (message) {  //listen
    console.log("Sum from worker:", message.data);
    // we can also show the result here
};

bgButton.addEventListener('click', () => {
    // Toggle background color without blocking UI
    if (document.body.style.background !== "green") {
        document.body.style.background = "green";
    } else {
        document.body.style.background = "blue";
    }
});
