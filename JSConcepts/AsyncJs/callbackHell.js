/*
Callback Hell:- As more nested callbacks are added, the code becomes harder to read, maintain, and reason about. This can lead to bugs and difficulties in debugging.

*/


/*Async Js:
-   Callbacks are super powerful way to handle aysnc operations in javascript
-   aysnc programming is exist in js bcoz callback exist
-   Issue we face with use of callback is:
-   Callback hell
-   Inversion control 
*/

// Example:
setTimeout(() => {
    console.log("JavaScript")
}, 5000);

// Example:  Shopping-Cart
const cart = ["shoes,pants,kurta"]

//order then payment then summary
api.createOrder()
api.proceedToPayment()
api.showOrderSummary()


//what we will do, we use callback, bcoz first we need api to create order, then proceed to payment & then show order summary & then update wallet. so,

//thats how we will handle aysnc operation
api.createOrder(cart, function (orderId) {
    return api.proceedToPayment(function (orderInfo) {
        return api.showOrderSummary(function (paymentInfo) {
            return api.updateWalletBalance(paymentInfo)
        })
    })
})


//Here you see, api's are dependent on one another so we end up falling in callback hell, means one callback inside another api, then next callback again in other api & it goes on and on

// this code is unmaintable and unreadable, bcoz code is extending in horizontal direction rather then vertical direction

//Pyramood of Doom: Callback Hell structure


//inversion control
//When we loose the control on code, when we are using callback

api.createOrder(cart, function () {
    api.proceedToPayment()
})

//we dont know createOrder will execute our callback function or not which contain proceedToPayment function, may be createOrder calls callback function twice, bcoz we dont know, what issues we can face by giving control of our piece of code of executing callback which contain proceedToPayment.


//when we are passing callback function to someother function, we are giving control of our piecce of code or our function to some other function and then we dont know what happen behind the scene now

//the first part of our program that executes now and the second part that executes in the callback and when we give that callback to someone else(like, for example, an external API). That’s what inverts the control and puts them in charge of executing the second part of our program .”


// Example 2:

const cart_2 = ["shoes", "jeans", "watch"];

api.createOrder(cart_2, function (response) {
    return api.proceedToPayment(response, function (response1) {
        return api.showOrderSummary(response1, function (response2) {
            return api.updateWalletBalance(response2);
        })
    })
})

// Callback hell -> function can be called mulitple times, as its dependent on createOrder response, while promises can't be settled more than once, so only time then will be trigger.


// Doubt? ->
// 1. we say that we're giving control of code in cb hell, but thats what we are doing in promise like then block
// 2. is it necessary for functions to be async for causing callback hell 