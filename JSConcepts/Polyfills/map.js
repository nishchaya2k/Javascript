/*
1.  Map -> map method is used to create new array from existing one by applying function to each one
cb is a callback, it contains transform logic for an array*/
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i]))   //this[i] is the current element in the array
    }
    return temp;
}

//calling map function created as myMap
const newArr = arr.myMap((num) => (
    num * 2
))
console.log(newArr);
