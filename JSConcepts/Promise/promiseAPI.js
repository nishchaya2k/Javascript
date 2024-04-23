/*
1. Promise.all() ->  Suppose if u have to make parallel apis call & get the results
eg. 10 ids,  want to results for 10 different ids
used to handle multiple promises together
Takes array of promises as an input
or iterables, bcoz there are multiple iterables in javascript other than array

eg. promise.all([p1,p2,p3]) -> 3 parallel apis call

suppose x time to get results
p1 -> 3 secs 
p2 -> 1 secs
p3 -> 2 secs
 
result -> [op1,op2,op3]
total time -> 3 secs
it will wait for all of them to finish

eg. what if any of the promise rejected?

suppose x time to get results
p1 -> 3 secs
p2 -> rejected
p3 -> 2 secs

result -> 'error'

after 1 sec, it will print 'error'

eg. what if I want results from api which get resolved, like from p1 and p3, so for this scenerio we will use
we also call it 'fail fast', it quickly fails as one of api rejected why to wait to get settle for all apis

2. Promise.allSettled() -> wait for all the results to settle, and best method to look for

eg. promise.all([p1,p2,p3]) -> wait for all the results to settle

suppose x time to get results
p1 -> 3 secs 
p2 -> rejected
p3 -> 2 secs

** even if all the promises get rejected we will get response in .then() (no use of .catch() in 'allsettled' method)
Above one of the promise rejected.

still, it will wait for all of them to settle
after 3 secs,
 result -> [op1,error,op3] 

3. Promise.race() -> promise who settled first out of all will be result

eg. promise.race([p1,p2,p3]) -> Result will be the first settled promise. 

suppose x time to get results
p1 -> 3 secs
p2 -> 1 secs
p3 -> 2 secs

as soon as first promise settle, it will print the result

after 1 sec,
result -> op2

what if p2 fails ?
result -> 'error'

it will not wait for other api's response to settle, just give o/p out of all api's as soon as possible.
irrespective of whether you have success or failure you show the result of first settled promise 


4. Promise.any() -> wait for first promise to be settled as success or fullfilled

eg. promise.any([p1,p2,p3]) -> Result will the first settled success promise.

suppose x time to get results
p1 -> 3 secs
p2 -> rejected
p3 -> 2 secs

After 2 secs,
result -> op3

what if everything fail?
result will be aggregate error,means 
array of errors
result -> [error1,error2,error3]


Settle can be -> 
-   resove or reject
-   success or failure
-   fullfilled or rejected



*/

//  1.  Promise.all() -> 

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 Success"), 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 Success"), 1000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 Success"), 2000)
},)

Promise.all([p1, p2, p3]).then((res) => {
    console.log(res)
})
    .catch((err) => console.error(err))


//  2.  Promise.allSettled() ->

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p4 Success"), 3000)
})

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p5 failed"), 1000)
})

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p6 Success"), 2000)
},)

Promise.allSettled([p4, p5, p6]).then((res) => {
    console.log(res)
})
    .catch((err) => console.error(err))

// 3.   Promise.race() -> 


const p7 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p7 Success"), 3000)
})

const p8 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p8 failed"), 1000)
})

const p9 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p9 Success"), 2000)
},)

Promise.race([p7, p8, p9]).then((res) => {
    console.log(res)
})
    .catch((err) => console.error(err))



//  4.  Promise.any() ->

const p10 = new Promise((resolve, reject) => {
    setTimeout(() => reject("10 Success"), 3000)
})

const p11 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p11 failed"), 1000)
})

const p12 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p12 Success"), 2000)
},)

Promise.any([p10, p11, p12]).then((res) => {
    console.log(res)
})
    .catch((err) => {
        console.error(err)
        console.log(err.errors) // all the aggregate errors in form of list
    })

//with reject all, why promise state is fullfilled
//what is aggregate error?
