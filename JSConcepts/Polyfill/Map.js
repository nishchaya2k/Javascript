
// let arr = [1, 2, 4, 5];

// // let mapArr = arr.map((num) => {
// //     return num * 2;
// // })


// // console.log(mapArr);

// //Polyfill of Map

// // Array.prototype.myMap = function (callback) {
// //     let temp = [];          //map return new, 
// //     for (let i = 0; i < this.length; i++){
// //         temp.push(callback(this[i], i, this));
// //     }
// // }


// /*
// 1.  Map -> map method is used to create new array from existing one by applying function to each one
// cb is a callback, it contains transform logic for an array*/
// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i]))   //this[i] is the current element in the array
//     }
//     return temp;
// }

// //calling map function created as myMap
// const newArr = arr.myMap((num) => (
//     num * 2
// ))
// console.log(newArr);


// //Polyfill of Filter
// //Filter -> Takes each Element in an array & it applies conditional against it, if condition true element pushed into output array  

// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i]))
//             temp.push([this[i]])
//     }
//     return temp;
// }

// const newFilterArray = arr.myFilter(num => (
//     num > 2
// ))
// console.log(newFilterArray);





// // Practice

// Array.prototype.myMaps = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i]));
//     }

//     return temp
// }

// let a = [1, 2, 4]
// console.log(a.myMaps((num) => num * 2))


// Array.prototype.myFilters = function (cb) {
//     let temp = [];

//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i])) temp.push(this[i])
//     }

//     return temp;
// }

// console.log(a.myFilters((num) => num > 2));

// Array.prototype.myreduce = function (cb, initial) {
//     let ans = initial === undefined ? 0 : initial;

//     for (let i = 0; i < this.length; i++) {
//         ans = cb(ans, this[i]);
//     }
//     return ans;
// }


// console.log(a.myreduce((total, curr) => (curr + total), 0))


const object = {
    first: "Nishcaya",
    last: "Narula",
}


function greet(no1, no2) {
    console.log(this.first, this.last, no1, no2)
}


Function.prototype.myCall = function (object, ...args) {

    object.tempFn = this;
    const result = object.tempFn(...args);

    delete object.tempFn
    return result;


}

greet.call(object)
greet.myCall(object, "2", "2")


// Function.prototype.myBind = function (context, args) {
//     const fn = this;

//     return function (...arg) {
//         return fn.apply(context, [...arg, ...args]) //spread all the value merge in single array
//     }

// }

// const fn = greet.myBind(object, ["name", "mera"])
// fn();