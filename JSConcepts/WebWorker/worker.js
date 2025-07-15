/*
1. Created a new event handler for the 'onmessage' event in the worker.
2. 'self' refers to the worker global scope, which has its own 'onmessage' event listener.
3. In a worker script, 'self' is the global object representing the worker thread.
4. Heavy computation is performed inside the worker to avoid blocking the main thread.
5. 'postMessage' API is used by the worker to send data (like the computed sum) back to the main script.
*/

// Worker script example:
onmessage = function (message) {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) {
        sum += i;
    }
    postMessage(sum);  // Send result back to main thread
    // console.log(message) // message received from main thread
}