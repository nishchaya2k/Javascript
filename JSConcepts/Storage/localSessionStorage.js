/*
    1. Web Storage API: Used by developers to store some data in the web browser in key-value pairs.
    
    2. Two Mechanisms to store data:
        -> Local Storage
        -> Session Storage
    
    (i). Session Storage:
        - Data is persisted only for that particular session.
    
    What is a session?
        - Suppose a user visits a web app — as soon as the visit starts, a session is created.
        - Data stored in session storage will be available as long as the browser tab or window is open.
        - Once the window or tab is closed, the session ends and the data is lost.
    
    Why is it better than cookies?
        - Unlike cookies, data stored in session storage is **not sent to the server** with each request.
        - It also allows more storage space (around 5MB) compared to cookies (which allow only a few KBs).
    
    (ii). Local Storage:
        - Similar to session storage, **but data persists even after the window/tab is closed.**
        - Local storage offers **more capacity than session storage**.
        - Data remains until explicitly cleared (either by code or manually by the user).
        - Local storage is part of the `window` object.
    
    - **Important Point**: Local Storage only accepts strings!
    
    - You **cannot directly store objects** in local storage.  
    For example, this won't work correctly:
    ```javascript
    localStorage.setItem("user", {name: "nishchaya"}); // WRONG
    ````
    
    - Instead, you need to convert the object to a string using `JSON.stringify`:
    
    ```javascript
    localStorage.setItem("user", JSON.stringify({name: "nishchaya"}));
    ```
    
    And to retrieve and use it again as an object, you must parse it back:
    
    ```javascript
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.name); // Output: nishchaya
    ```
    
    Functions for LocalStorage:
    
    * `localStorage.setItem(key, value)` → Store data
    * `localStorage.getItem(key)` → Retrieve data
    * `localStorage.removeItem(key)` → Delete a key
    * `localStorage.clear()` → Clear all data
        
*/

        