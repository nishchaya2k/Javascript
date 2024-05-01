//Polyfill of Reduce
//Reduce -> Reduce method reduces array of values down to just 1 value, it also execute callback for each element, acc: accumulator is the result of previous computation

const array1 = [1, 2, 4, 5];

Array.prototype.myReduce = function (cb, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError("Reduce of empty array with no initial value");
    }

    index = 0;
    let accumulator;

    if (initialValue !== undefined) {
        // If an initial value is provided, start with it as the accumulator
        accumulator = initialValue;
    } else {
        // Otherwise, start with the first element in the array as the accumulator
        accumulator = this[0];
        index = 1; // Start iteration from the second element
    }
    for (let i = 0; i < this.length; i++) {
        cb(ans, this[i], index)
    }
}


const result = array1.myReduce((acc, curr) => acc + curr, 0);
console.log(result)
