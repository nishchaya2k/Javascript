let arr = ["a", "b", "c"];

function fun() {

}

console.log(arr.length)
console.log(arr.__proto__.length)


/*

How can we do arr.length, from where .length comes from & How are we getting access of this? 
- Here Comes Prototype

a). So Whenever u create js object, js engine automatically attaches your object with some hidden properties & functions Or js engine automatically attaches your object with hidden object which contain properties and then you can access them

b). Every object in JavaScript has a built-in property, which is called its prototype

c). The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain

d). The chain ends when we reach a prototype that has null for its own prototype



*/



