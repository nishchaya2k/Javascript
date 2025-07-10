//How to Cancel a timeout

let timeoutId;

function startTimeout() {
    timeoutId = setTimeout(() => {
        console.log("Timeout finished")
    }, 3000)
}

function cacelTimeout() {
    clearTimeout(timeoutId);
    console.log("Timeout Cancelled")
}

startTimeout();

setTimeout(cacelTimeout, 1000)



//By using Abort Controller

const controller = new AbortController();
const signal = controller.signal;

function startTimeout() {
    const timeoutId = setTimeout(() => {
        if (!signal.aborted) {
            console.log("Timeout Finished");
        } else {
            console.log("Do not execute");
        }
    }, 3000)

    //listener for abort signal, when we aborted this, event listener called to clear timout
    signal.addEventListener("abort", () => {
        clearTimeout(timeoutId);
        console.log("Timeout cancelled")
    })
}

startTimeout()
setTimeout(() => controller.abort(), 1000);




//when we have multple timeouts, & then we need to create multiple timeoutIds if have to cancell them, but by using abort controller, we can cancell all timeouts by using a signal