/* Promise: - A object which represents eventual or final completion of an asynchronous operation and its resulting value

 States of Promise:
    - Pending
    - fullfilled
    - Rejected
final state of pending can be fulfilled or rejected with a reason

Promise Builds trust in the transaction bcoz it gives you an assurity to run only once

Promise objects are immutable in nature once created it cannot be changed

Is Promise is a contructor function ? -> yes
*/
//Solution for inversion control

//example:

// const cart = ["shoes", "pants", "kurta"]

// passing callback function earliar
// createOrder(cart, function () {
//     proceedToPayment(orderId);
// })

//attaching callback function using promise, here controll is in our hand, bcoz api is working on createOrder only no work to call proceedToPayment, once we get data in promise, promise object will call proceedToPayment only once, earlier we are afraid of this proceedToPayment to be called more than once


// const promise =  createOrder(cart);
// promise.then(function () {
//     proceedToPayment(orderId);
// })


const GITHUB_API = "https://api.github.com/users/nishchaya2k";

const user = fetch(GITHUB_API);
// so basically fetch return promise of pending state, & it take time for data to be filled in user object, untill its in pending state

//shows promise state pending initially bcoz data is not recieved in user, once recieved shows fullfilled
console.log(user)

user.then(function (data) {
    console.log(data);
})

//code readability and maintainability, increases which is main problem in callback hell, can use arrow function instead of callback in promises always RETURN callback function so data flow in promise chaining


//Callback Hell
api.createOrder(cart, function (orderId) {
    api.proceedToPayment(function (orderInfo) {
        api.showOrderSummary(function (paymentInfo) {
            api.updateWalletBalance(paymentInfo)
        })
    })
})

//Promise
api.createOrder(cart)
    .then(function (orderId) {
        return api.proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return api.showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return api.updateWalletBalance(paymentInfo)
    })

// Or
api.createOrder(cart)
    .then(orderId => api.proceedToPayment(orderId))
    .then(paymentInfo => api.showOrderSummary(paymentInfo))
    .then(paymentInfo => api.updateWalletBalance(paymentInfo))

//How to Produce a promise ?:
// produce

let p1 = new Promise(function (resolve, reject) {
    let obj = {
        name: "WORLD",
        lastName: "HELLO"
    }

    setTimeout(() => {
        resolve(obj);
    }, 5000);
});

