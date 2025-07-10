/*
Fetch API: It provides an interface for fetching resources.
-   It uses Response and Request Object
-   for making a request or fetching a resource use the fetch() method, its a global method
-   fetch() takes 1 mandatory argument, the path to the resource you want to fetch & returns a  promise, fetch method always return Promise
-   once a response is retrieved as a response we can say, there are methods or properties of Promise which is used to Perform actions on response

    Methods of Promise:
    -   then()
    -   catch()
    -   finally()

As these methods also return promises, they can be chained
-   all the async functions always take callback function
-   the callback function passed inside finally() will not contain any arguments it will remain empty always

 */


