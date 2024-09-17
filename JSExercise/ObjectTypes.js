//The Object.prototype.toString.call() method in JavaScript is used to obtain a string representation of the type of an object.
//The method returns a string in the format "[object Type]", where Type represents the type of the value.

Object.prototype.toString.call()


console.log(Object.prototype.toString.call("Hello")); // "[object String]"
console.log(Object.prototype.toString.call(123));     // "[object Number]"
console.log(Object.prototype.toString.call(true));    // "[object Boolean]"
console.log(Object.prototype.toString.call(null));    // "[object Null]"
console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]"
console.log(Object.prototype.toString.call([1, 2, 3])); // "[object Array]"
console.log(Object.prototype.toString.call({ a: 1 })); // "[object Object]"
console.log(Object.prototype.toString.call(function () { })); // "[object Function]"
console.log(Object.prototype.toString.call(new Date())); // "[object Date]"
console.log(Object.prototype.toString.call(/abc/)); // "[object RegExp]"
