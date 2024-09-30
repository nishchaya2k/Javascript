//Polyfill of Memorize function

//Example - 1

function myMemorize(fn) {
    const res = {}          //store the cache data

    return function (...args) {
        
        const argsCache = JSON.stringify(args);  //expect single element, can't write (...args) 

        if (!res[argsCache]) {
            res[argsCache] = fn.call(this, ...args);  //here is this is global object
        }
        return res[argsCache];
    }
}


const clumpsyProduct = (num1, num2) => {
    for (let i = 1; i < 10000000; i++) { }
    return num1 * num2
}

const cacheClumpsyProduct = myMemorize(clumpsyProduct)

console.time("First call")
console.log(cacheClumpsyProduct(9467, 7649));
console.timeEnd("First call")

console.time("Second call")
console.log(cacheClumpsyProduct(9467, 7649));
console.timeEnd("Second call")


/*
Notes:

1.  MyMemorize function:
    - we can replace fn.call(this, ...args) with fn(...args) & it will work, but what if the function which we wanted to memorize is from some object, so there we need to have the context also, so by using context we are making it work for all.
*/


//Example - 2, (Proof of above point)

const obj = {
    multiplier: 2,
    multiply: function (num1, num2) {
        return (num1 * num2) * this.multiplier;
    }
}

// const memorizeMultiply = myMemorize((num1, num2) => obj.multiply(num1, num2));
const memorizeMultiply = myMemorize(obj.multiply.bind(obj));


console.time("First call")
console.log(memorizeMultiply(2, 3))
console.timeEnd("First call")

console.time("Second call")
console.log(memorizeMultiply(2, 3))
console.timeEnd("Second call")



/*
Notes:

When dealing with object methods and memoization, maintaining the correct this context is crucial. You can use either Function.prototype.bind or an arrow function to ensure that the method has the correct this context


*/

