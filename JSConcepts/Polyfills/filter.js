//Polyfill of Filter
//Filter -> Takes each Element in an array & it applies conditional against it, if condition true element pushed into output array  

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++){
        if(cb(this[i]))
            temp.push([this[i]])
    }
    return temp;
} 

const newFilterArray = arr.filter(num => (
    num>2
))
console.log(newFilterArray);
