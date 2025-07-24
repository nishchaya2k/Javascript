// Web Worker Overview:
// It's a JS process that runs in the background of a webpage.
// JS by default is single-threaded, with one execution context called the main thread,
// which runs all JS for the webpage.
// A Web Worker is a separate JS thread that allows parallel execution of JS.
// Instead of the main thread doing heavy lifting, a Web Worker offloads expensive work,
// so the main thread doesn’t get blocked and can continue executing other code.
// One main difference: Web Workers cannot perform DOM manipulation.

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

3. You create a Web Worker instance by providing the path to the worker script (e.g., worker.js).

4. To send data to the worker, use the postMessage API, which triggers an event the worker listens to.

5. Inside worker.js, you set up an event listener to handle messages sent from the main thread.

6. Messages can be passed both ways: from main thread to worker and from worker to main thread.

7. postMessage() is used to send messages.

8. onmessage is used to receive messages.
*/



// Doubt -> Real Time Use Case: ?