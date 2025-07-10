console.log("Start")

setTimeout(function cbT() {
    console.log("cb Timout")
}, 5000)

//untill promise fullfilled or rejected, .then will not execute 
fetch("https://www.google.com").then(function cbF() {
    console.log("cb google")
})

console.log("End")
