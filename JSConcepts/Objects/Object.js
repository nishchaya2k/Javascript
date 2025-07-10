// Q. Sometime we want to show the updated value of object, but sometimes we try to put that change in another copied object rather than directly change the 'original object'. lets see how we gonna deal with it.

/*
- Assignment operator for copy: will not copy rather pass the reference of original array

- Shallow Copy: 
When Object get copied with the help of Object.assign() or spread operator methods, in these methods only top level properties get copied but the nested properties passed as a reference.

- Deep Copy: 
When Object get copied with the help of JSON.parse(JSON.stringify) in this no matter how deep object is nested it will get copied.
*/


const userDetails = {
    name: "nishchaya",
    age: 20
}

const user1 = userDetails;
user1.name = "nishu"  //updated in copied object

console.log(user1) //{ name: 'nishu', age: 20 } 
console.log(userDetails) //{ name: 'nishu', age: 20 } -> Change affected original object also
console.log(user1 === userDetails)  //true: point to same memory location

//What if we edit the user1 object, will that update be reflected in userDetails?
//yes, bcoz objects are reference types

user1.name = "nishu"
console.log(userDetails)

//what but we want is -> we want to store an object's value in a new object and manipulate the value in the new object without affecting the original array.




/* 3  methods we have to achieve this.  */

/* 1st Method: Spread Operator, 

Note: You can only use the spread syntax to make a shallow copy of an object while deeper objects are referenced.*/

let user2 = { ...userDetails }
console.log(user2 === userDetails)   //false: point to different memory location



/* 2nd Method: Object.assign() 

Note: You can only use the Object.assign() syntax to make a shallow copy of an object while deeper objects are referenced.*/


let user3 = Object.assign({}, userDetails)
console.log(user3 === userDetails)   //false: point to different memory location


/* 3rd Method: JSON.parse(JSON.stringify) 

JSON.stringify convert the object into string, so no reference of object now as its string now,
JSON.parse we then get the object back by using this function, 


Note: You can use this to deeply clone, but it has some downsides
Also, just like the previous methods, this is no longer referenced. This means that you can change a value in the new object without affecting the original object.
*/

let user4 = JSON.parse(JSON.stringify(userDetails))
console.log(user4 === userDetails)   //false: point to different memory location



/*
Shallow Clone vs. Deep Clone:

So far, the example used in this article is a basic object with only one level. This means that we have only performed shallow clone(s). But when an object has more than one level, then you will be required to perform a deep clone.
*/

// Shallow object: one level object
const shallow_Object = {
    name: "John Doe",
    age: 14,
    verified: false
};

// Deep object: object can have as many levels as you want.
const deep_Object = {
    name: "John Doe",
    age: 14,
    status: {
        title: undefined,
        verified: false,
    }
};


const user5 = { ...deep_Object }
const user6 = JSON.parse(JSON.stringify(deep_Object))

user5.status.verified = true;
console.log(deep_Object)
console.log(user6)



/*
- When you use the spread operator or Object.assign() method to clone a deep object, the deeper objects will be referenced means original object also get affected.
*/



/*
How can you fix this issue
You can use the JSON.parse() method to clone, and everything will work fine


But there is an issue with this method.The issue is that you can lose your data.How ?

For example, it does not work with functions, symbols, or undefined values. It also changes other values like Nan and Infinity to null, breaking your code. When you have a function, symbol, or undefined value, it will return an empty key-value pair and skip it.
*/



/*
This means you need to be careful. The best option to implement deep cloning will be to use 

1. Lodash (js library). You can then be sure that none of your data will be lost.

const userDetails = {
  name: "John Doe",
  age: 14,
  status: {
    verified: false,
    method: Symbol(),
    title: undefined
  }
};

console.log(_.cloneDeep(userDetails));

2. console.log(Window.structuredClone(obj))

*/


//https://www.freecodecamp.org/news/clone-an-object-in-javascript/


// ✨ Want to Copy Object Without Affecting the Original ? Here's how:

// ❌Mistake Should Avoid While Copying
// ➔  Using( =) :  Passes reference, not a copy

//  Original array also get affected by using( =) for copy, values get updated in original array also.