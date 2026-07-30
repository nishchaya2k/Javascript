function test() {
    console.log(this.innerText)
}

function myDebounce(test, timer) {
    let timeId;
    return function (...args) {
        clearTimeout(timeId);
        timeId = setTimeout(() => {
            test.call(this, ...args)
        }, timer)
    }

}

const debounceFn = myDebounce(test, 5000);

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener('click', debounceFn)
})
