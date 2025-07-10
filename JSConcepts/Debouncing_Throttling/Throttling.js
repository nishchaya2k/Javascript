// const myThrottle = (fn, d) => {
//     return function (...args) {     //...args is a rest operator
//         document.getElementById("my-id").disabled = true
//         setTimeout(() => {
//             fn();
//         }, d);
//     }
// }


// const func = myThrottle(() => {
//     document.getElementById("my-id").disabled = false
//     console.log("User Clicked.!!")
// }, 1000)



// const myThrottle = (fn, d) => {
//   let last = 0;
//   return function (...args) {
//     let now = Date.now();

//     if (now - last >= d) {
//       last = now;
//       fn.call(this, ...args)
//     }
//   }
// }


/*
1. Throttling: 

Throttling is a technique used to control no. of times a function is executed over a period of time.

It ensures that a function is not called more frequent than a specified interval, even if it is triggered muliple times within that period.

A lot of times function is called based on event triggered by the user eg. by scrolling the window, or entering input in a form field etc

so throttling can be used to control the frequency of function call in such scenario.


Example: 

    Consider you've an infinite scroll page, which load more search result, as the user scrolls the search page.

    for loading the search result, the function calls an api first and then does DOM rendering

    since api call is expensive in our case, you want to load new results after every 300ms, regardless of how much faster the user scrolls

*/