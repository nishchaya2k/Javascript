/*
1.  Prototype Chain:
    - In JavaScript, every object inherits from another object, which is known as its prototype. The chain of prototypes ultimately leads up to Object.prototype, which is at the top of the prototype chain.
    
    - Object.prototype is the prototype object of all JavaScript objects. It provides default implementations of methods and properties (such as toString, hasOwnProperty, etc.) that are inherited by all objects.

    - When you create an object or any constructor function, it inherits from Object.prototype

    - You can access the prototype of an object using Object.getPrototypeOf() or the __proto__ property 

    - the prototype of {} is Object.prototype.

    - The prototype of Object.prototype is null

    - Object is a constructor function, and in JavaScript, all functions inherit from Function.prototype

    - Object.__proto__ is essentially pointing to Function.prototype.

    - Object.prototype is the prototype object that is used as the prototype for all objects created by Object.

    - Function.prototype is the prototype object for all functions.

    - Object is itself a function, and thus its prototype is Function.prototype. Function.prototype is the prototype object that all functions inherit from. This includes methods such as call(), apply(), and bind()

    - Function.prototype is the prototype object for all function objects, including Object.
*/

//Example 1: 

let obj = {} // obj inherits from Object.prototype
//OR 
//let obj = new Object() 
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__.__proto__ === Function.prototype);




console.log(Object.getPrototypeOf({})); // [object Object] (i.e., Object.prototype)
console.log(Object.getPrototypeOf(Object.getPrototypeOf({}))); // null


console.log(Object.__proto__ === Object.prototype) //false
console.log(Object.__proto__ === Function.prototype) //true
console.log(Object.prototype === Function.prototype) //false
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Function.prototype.__proto__)


/*

obj(created with new Object() or { })
│
├── __proto__(Object.prototype)
    │
    └── __proto__(null)  // End of chain for objects




Object(constructor function)
│
└── __proto__(Function.prototype)
    │
    └── __proto__(Object.prototype) // Function.prototype's prototype is Object.prototype



Object (constructor function)
  └─ .__proto__ → Function.prototype
            └─ .__proto__ → Object.prototype
                        └─ .__proto__ → null

*/