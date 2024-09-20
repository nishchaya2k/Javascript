// Check if an object is empty

let a = {};

console.log(Object.keys(a).length === 0)

console.log(Object.getOwnPropertyNames(a).length === 0)

console.log(JSON.stringify(a) === '{}')

console.log(Object.entries(a).length === 0)



/*
Non-enumerable properties in JavaScript are properties that are not included in certain enumeration methods, such as for...in loops or Object.keys(). Despite being part of an object, these properties do not show up in typical property lists or iteration over object properties

Object.keys only returns the object's enumerable properties. This means that if an object has non-enumerable properties or inherited properties from its prototype chain, Object.keys will not count these.

So, can use ->Checking All Own Properties (Including Non-Enumerable) by 
Object.getOwnPropertyNames:
*/
