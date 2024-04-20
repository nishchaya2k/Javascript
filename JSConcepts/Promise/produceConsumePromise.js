/*
Promise:  Promise object which represents eventual or final completion of an asynchronous operation and its resulting value
*/

const cart = ["shoes", "pants", "kurta"]

const promise = createOrder(cart)
console.log(promise)

/*
-   what ever you have resolved will be handled by 'then' using callback  , eg. resolve(orderId) from createOrder
-   what ever you have rejected will be handled by 'catch' using callback , eg. reject(err)
-   Promise Chaining, below code will be executed in sequence and also error will be handled by 'catch'
-   handled callback hell by 'then' and 'catch'
-   in Callback hell if any error occur in any callback it effects all callbacks, but in promise we can handle by catch

-   Consumer
*/
promise
    .then((orderId) => {
        console.log(orderId)
    })
    .then(() => {
        console.log(promise)
    })
    .catch((err) => console.log(err))
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => (
        console.log(paymentInfo)
    ))
    .catch((err) => console.log(err))


/*
-   Promise has resolve and reject is given by javascript to us
-   Producer
 */

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valild")
            reject(err);
        }

        const orderId = "123456";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId)
            }, 5000)
        }

    })
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Successful Payment")
    })
}

function validateCart(cart) {
    return true;
}
