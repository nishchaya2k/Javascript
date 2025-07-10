let counter = 0;
function getData() {
  console.log("fetching Data" + counter++)
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {  
    if (timer) clearTimeout(timer); //we reset the timer, if you type again without completing d, wait again untill timer is not empty
    timer = setTimeout(() => {
      call()
    }, d);
  }
}

const BetterFunction = myDebounce(getData, 1000)



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
1. Debouncing:

Debouncing ensures that a function is called only once after a specified period of inactivity

The function execution is delayed untill no new events are triggered within the delay period

- executes the function only once after delay milliseconds of inactivity.

- prevents the function from being called repeatedy in quick succession.


Example: 

consider, you've an auto-complete field, which loads the values of the dropdown as user provides the input

for loading the dropdown, you call an external API to get the values and do DOM rendering.

since the API calls are expensive, you'd like to delay the API request by a time interval after the user has entered the input
*/










/*
Debouncing:- 

1.  JS doesn't provide this, we achieve this by using set time out web api.

2.  Achieve this concept with the use of searchBar, scroll, resizing window and at that time, 
    unwanted function call happen which effect app performance & to stop that we use debouncing

3.  So, we write code in a way where we want function call happen, after specific time interval
    or also at that time user is not bzy in sending requests

4.  if you start typing again after a gap and delay time is not complete, timer again start from 0
*/





/*
Debouncing and Throttling difference:

->  Debouncing
1.  Limit the rate of api calls

2.  Only make the api call if the difference between 2 keypress or anyother events is greater 
    then certain limit (eg. d = 3000ms).

3.  used in searchBars, scrolling, Resizing window, 

->  Throttling
1.  if difference b/w last function call and current function call is greater then equal to
    certain limit (eg. d = 3000ms) then only make the function call so basically here we igonore
    all key events upto 3000ms acc. to eg. we have taken here, So after 3000ms function call occur 
    Here, we are not depending on key events, we just call the function after limit we set.

2.   used in Resizing window, scolling, shooting game from gun


->  which is better throttling and debouncing ?
    it depends totally on the scenerio what are you trying to achieve what's your expectation.

    

*/