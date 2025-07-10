// let arr = [1, 2, 3, 4];
// console.log(arr)

// let newarr = arr.map((a) => {
//     return a * 2
// })
// let obj6 = {
//     name1: "julie",
//     name2: "anna",
//     name3: "robert",
//     name4: "adam",
//     name: "satya",
// };

let inputArray = ["aman", "rahul", "shiva", "gautam"];

inputArray.forEach(toCapitalize)

function toCapitalize(item, index) {
    inputArray[index] = item[0].toUpperCase() + item.slice(1);
}

console.log(inputArray)

// let str = "narula"
// let s = str[0].toUpperCase() + str.slice(1, str.length);
// console.log(s)

// console.log(inputArray.slice(1, 4));
// console.log(inputArray.splice(1, 4));


// let a = 10;
// {
//     console.log("Start");  //start
//     console.log(a);         //reference error
//     console.log("End");
//     let a = 20;
// }

// let a = 10;
// {
//     console.log("Start");
//     console.log(a);
//     console.log("End");
//     var a = 20;
// }

// a = 10;
// {
//     console.log("Start");
//     console.log(a);
//     console.log("End");
//     let a = 20;
// } 

//1. Polyfill of Map -> always return new array
let arr = [3, 32, 42, 49, 34];

console.log(arr.map((e, i) => (e * i)))


Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i));
    }
    return temp;
}

console.log(arr.myMap((e, i) => (e * i)))



Array.prototype.newMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i]))
    }
    return temp;
}

console.log(arr.newMap((e) => (e * 3)))


//2. Polyfill of Filter -> always return new array

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) temp.push(this[i])

    }
    return temp;
}

console.log(arr.myFilter((e) => (e > 40)))

//3. Polyfill of Reduce -> returns accumulated result from last call of the callback function.

console.log(arr.reduce(((total, curr) => (total + curr)), 0));

Array.prototype.myReduce = function (cb, initialValue) {
    let total = initialValue !== undefined ? initialValue : 0;

    for (let i = 0; i < this.length; i++) {
        total = cb(total, this[i]);
    }
    return total;
}


console.log(arr.myReduce(((total, curr) => (total + curr)), 0))

//4. forEach Polyfill 


Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}


arr.myForEach((element) => console.log(element))




//5 Curring

//sum(1)(2)(3)(4).....()

function sum(a) {
    return (b) => {
        if (b)
            return sum(a + b)
        else return a;
    }
}

output = sum(1)(2)(3)(4)();
console.log(output);


// let sum = a => b => b ? sum(a + b) : a;
// output = sum(1)(2)(3)(4)(); 
// console.log(output);


function example() {
    let foo;
    console.log(foo);
    // undefined
    foo = "bar";
    console.log(foo);
    // "bar"
}
example()


//6. Async Await:

const p = new Promise((resolve, reject) => {
    return resolve('Hey I done this!')
})

async function handlePromise() {
    const val = await p;
    console.log(val);
    console.log("Namaste JavaScript")

}

async function handlePromise2() {
    return "I haven't done this"
}



// handlePromise()
// console.log("Namaste React")

// const data = handlePromise2();
// console.log(data);
// data.then((resolve) => (console.log(resolve)))


// 7. Promise Detailing:

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Taking 10 secs")
    }, 10000)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Taking 5 secs")
    }, 5000)
})

async function handlePromise_1() {

    const val4 = await p4
    console.log("after 5 secs")

    const val3 = await p3
    console.log("after 10 secs")

}

handlePromise_1()


//Closure:

function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    return y;
}

let z = x();
z();      //o/p : 10

//Constructor Function: 

let str = "q";
console.log(str.__proto__)

function Person(field) {
    this.field = field,
        this.getField = function () {
            console.log(this.field)
        }
}

const obj1 = new Person("Doctor");


//
function sum(a) {
    return function (b) {
        if (b) return sum(a + b);
        else return a;
    }
}

console.log(sum(5)(5)(4)(5)())



//Syllabus:

/*
1. Hoisting -> Done
2. Prototype -> Done
3. Constructor Function -> Done
4. Classes  -> Done
5. Closure -> Done
6. Currying -? 
7. Async Programming -> Done
8. Theory -> 
9. Polyfills -> map,reduce,foeach,filter
10. Browser Architecture -> 
11. Debouncing Throttling -> 
12. Array excercise and String Excercise -> 
*/