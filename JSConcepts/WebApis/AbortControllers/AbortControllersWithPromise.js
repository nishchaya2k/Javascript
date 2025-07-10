//how to cancel a promise

function makeCancellable(promise) {        //received the promise
    let cancel;

    const wrappedPromise = new Promise((resolve, reject) => {
        cancel = () => reject(new error("Promise Cancelled")); //if we cancel the just created promise, then passed promise get cancelled automatically
        promise.then(resolve).catch(reject)
    })

    return { promise: wrappedPromise, cancel };
}

const { promise, cancel } = makeCancellable(
    new Promise((resolve) =>
        setTimeout(() => {
            resolve("Data Loaded")
        }, 3000)
    )
)

promise.then(console.log).catch((err) => console.error(err.message))

// cancel the promise after 1 sec.
setTimeout(cancel, 1000)


// How to cancel promise using Abort Controller

function makeCancellableWithAbortController(asyncFunction) {
    const controller = new AbortController();

    const signal = controller.signal();
    const wrappedPromise = new Promise((resolve, reject) => {
        signal.addEventListner("abort", () => reject(new Error("Promise Cancelled")));
        asyncFunction(signal).then(resolve).catch(reject)
    })

    return { promise: wrappedPromise, cancel: () => controller.abort() };
}

const { _promise, _cancel } = makeCancellableWithAbortController((signal) => new Promise((resolve) => {
    const timeout = setTimeout(() => resolve("Data Loaded"), 3000);
    signal.addEventListner("abort", () => clearTimeout(timeout))
}))


_promise.then(console.log).catch((err) => console.error(err.message))