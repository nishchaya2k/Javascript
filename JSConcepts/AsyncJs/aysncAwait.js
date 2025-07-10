/*
What is Aysnc? 
-> its a keyword used to create async function
-> this async function always return promise

What is Await?
-> await is a keyword that can only be used inside async function
-> what is async operation: 
-> if you return a promise its fine but if you return a value it will wrap up in a promise and return a promise eventually
*/



//Example 1 -> How Async Await Operation Works?

const p = new Promise((resolve, reject) => {     //Return a promise
    resolve("Promise Resolved Value")
})

async function getData() {
    return "JavaScript"    //Returned value will wrapped in a promise, ATE returned promise
}

const data = getData()
console.log(data);
data.then((res) => console.log(res))



//Example 2 -> Promise produce

const p1 = new Promise((resolve, reject) => {   
    resolve("P1 Promise Resolved")
})

async function handlePromise() {
    // const val = p; storing promise object itself without await rather than resolved value.
    const val = await p;    //pause the execution in the function, untill promise resolves.
    console.log(val) 
    console.log("Namaste JavaScript") 
}

handlePromise();




//async and await combo used to handle promise but before async await how do we handle promise, and why we need them now

//Example 3 -> Handling promise in a normal way without async await when we dont have async await
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved")
    }, 10000)
})

//interpreter register the promise and keep it outside, meanwhile it will continue the execution, 
// function getData() {
//     // JS Engine will not wait for promise to resolve
//     p2.then((res) => console.log(res))
//     console.log("Namaste JavaScript")
// }

// getData();


//now async await come into picture
async function handlePromise() {

    //Js Engine waiting for promise to get resolved, pause the execution in the function
    const val = await p2;
    console.log("Namaste JavaScript")
    console.log(val)
}
handlePromise();


//Example 4 -> what if we have 2 responses
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved")
    }, 10000)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 4 Resolved")
    }, 5000)
})

async function handlePromise() {
    const val = await p4;  //Time: 5 secs
    console.log("Reactjs")
    console.log(val) 

    const val2 = await p3  //Time: 10 secs 
    console.log("JavaScript")
    console.log(val2)


}

handlePromise()

//timer will be attached at memory phase
/* 
P4 -> 5 secs to execute, in between when timer attached to callback in webapi, execution paused

P5 -> 10 secs to execute, 5 secs aleady we have paused the function for p4, so again 10-5 =  5 secs to pause
*/


//Example 5 -> what if we have 2 responses

async function handlePromise() {

    const val2 = await p2  //Time: 10 secs
    console.log("JavaScript")
    console.log(val2)

    const val = await p4;  //Time: 5 secs
    console.log("Reactjs")
    console.log(val)

}

handlePromise()
// after a pause of 10 sec. p2 & p4 in respective order simultenously


//Example 6 -> what if we have 2 responses

async function handlePromise() {

    const val = await p4;  //Time: 5 secs
    console.log("Reactjs")
    console.log(val)

    const val2 = await p2  //Time: 10 secs
    console.log("JavaScript")
    console.log(val2)
}
console.log("HI")
handlePromise()

//JavaScript is a synchronous single threaded language

//handle promise suspends the execution of that function when encounter await in it, and continue execution from the same spot after promise resolved

//Doubt?
/*
p2 and p4, are promises

p2 -> 10sec
p4 -> 5sec

as we say,  An async method runs synchronously until it reaches its first await expression, at which point the method exection is suspended until the awaited task is complete

then why in total 10 sec only, we get both p2 and p4, but acc. to definition, p4 should resolve 5sec. after p2, so total p2 and p4 should take 15secs   
why p4 not taking its 5 sec. separately, it seems tht p2 and p4 execute in parallel
I am thinking on basis of webapi, how it works

->  may be this could be the reason that js engines start settling all the promise in the method, but execute in the sequence order only, but then why we say it suspends the function when encounter await keyword

-> await only pauses the function’s execution. It does not block other asynchronous operations that are running concurrently.
Timers run concurrently: p2 and p4 timers are running in parallel

//check your doubt with promise.then



*/

//How fetch works?
const API_URL = "https://api.github.com/users/nishchaya2k"

async function handlePromise() {

    //fetch return promise
    const data = await fetch(API_URL);

    //.json() also return a promise
    const result = await data.json();
    console.log(result);
}

handlePromise();

//how to handle errors
const New_API_URL = "https://api.github.com/users/nishchaya2k"

async function handlePromise() {

    try {
        const data = await fetch(API_URL);
        const result = await data.json();
        console.log(result);
    } catch {
        console.error(err)
    }
}
handlePromise();

//async function returns a promsise always
handlePromise().catch((err) => console.log(err)) 

// What to use Async Await or Promise.then/.catch?

//Basically, async await is the syntacticall sugar of then and catch
//means its just are syntax types we are using, behind the js handling them in different way, what way ?


/* Interview: Question
1.  What is async?
2.  What is await?
3.  How async await works behind the scenes
4.  Examples of using async/await
5.  Error Handling
6.  Interviews
7.  Async Await vs Promise.then/.catch
*/