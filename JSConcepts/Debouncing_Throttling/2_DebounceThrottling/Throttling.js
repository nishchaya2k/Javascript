
function test() {
    console.log(this.innerText)
}

function myThrottle(test, timer) {
    let last = 0
    return function (...args) {
        console.log(timer, last)
        let now = Date.now()
        if (now - last >= timer) {
            last = now;
            test.call(this, ...args)
        }
    }

}

const throttledFn = myThrottle(test, 5000);
console.log(throttledFn)

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener('click', throttledFn)
})





