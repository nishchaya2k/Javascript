// API's are Fired , if anyone succeed, cancel the second one


// Old way

let responseHandled = false;
function fetchData(url) {
    return fetch(url).then((response) => response.json()).then((data) => {
        if (!responseHandled) {
            responseHandled = true;
            console.log("Fastest Response", data);
        }
    }).catch(console.error)
}

fetchData("https://fast-api.com/data")
fetchData("https://slow-api.com/data")


// Using Abort Controller -> 1
const controller = new AbortController()
const signal = controller.signal;

Promise.race([
    fetch("https://fast-api.com/data",{signal}),
    fetch("https://slow-api.com/data", { signal })
]).then((response) => {
    controller.abort();
    return response.json()
}).then((data) => console.log("Winner", data)).catch(console.error)



// Q. Abort the API call, if its taking longer time then decided (5 sec), & retrigger the same API call, repeat the process untill we dont get data in 5 sec.



