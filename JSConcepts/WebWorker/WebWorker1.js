
// Create a new Worker and link to worker.js
const worker = new Worker('./worker.js');

const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

sumButton.addEventListener("click", () => {
    // Send a message to the worker to start the sum calculation
    worker.postMessage("start sum");
});

worker.onmessage = function (message) {
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

/*
/*
Summary & Key Points:

1. You create a Web Worker instance by providing the path to the worker script (e.g., worker.js).

2. To send data to the worker, use the postMessage API, which triggers an event the worker listens to.

3. Inside worker.js, you set up an event listener to handle messages sent from the main thread.

4. Messages can be passed both ways: from main thread to worker and from worker to main thread.

5. postMessage() is used to send messages.

6. onmessage is used to receive messages.
*/

