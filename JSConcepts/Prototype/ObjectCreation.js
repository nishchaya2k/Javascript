//1. using proto (not good for JS engine code optimization)

let obj1 = {
    name: "nishchaya",
}

let obj2 = {
    name: "narula"
}

obj2.__proto__ = obj1   //set the prototype of obj2 is obj1;



//2. using setPrototypeOf (modern method)

let obj3 = {
    name: "Shiva",
}


Object.setPrototypeOf(obj3, obj2);  //set the prototype of obj3 is obj2


//3. using Object.create (modern method)

let obj4 = Object.create(obj3, {            //set the prototype of obj4 is obj3, with properties
    name: {
        value: "Mahadev"
    },
})

console.log("obj4", obj4)


//Prototype Chaining: obj4 -> obj3 -> obj2 -> obj1 -> Object.prototype -> null


//4.  Insert Prototype in-between 

let obj2_new = {
    name: "Mahakal"
}

/*
 OR

 Create a new object with obj2 as its prototype
 let newObj2 = Object.create(obj2);
*/

Object.setPrototypeOf(obj2_new, obj2)
Object.setPrototypeOf(obj3, obj2_new)


//Prototype Chaining: obj4 -> obj3 -> obj2_new -> obj2 -> obj1 -> Object.prototype -> null



//Q. can A prototype have multiple prototype? -> No


