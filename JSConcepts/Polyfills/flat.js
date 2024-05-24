// flat() method of Array instances creates a new array with all sub - array elements concatenated into it recursively up to the specified depth.

// A new array with the sub-array elements concatenated into it.


// Depth level specifying how deep a nested array structure should be flattened. byDefault (1)


const arr2 = [0, 1, [2, [3, [4, 5]]]];


// console.log(arr2.flat())         // output: [ 0, 1, 2, [ 3, [ 4, 5 ] ] ]  byDefault(1) Depth

// console.log(arr2.flat(1))        // output: [ 0, 1, 2, [ 3, [ 4, 5 ] ] ]

// console.log(arr2.flat(2))        // output: [ 0, 1, 2, 3, [ 4, 5 ] ]

// console.log(arr2.flat(Infinity)) // output: [ 0, 1, 2, 3, 4, 5 ]



Array.prototype.myFlat = function (depth = 1, temp = []) {

    //edge case, when depth <= 0
    if (depth <= 0) {
        temp.push(this)
        return temp;
    }
    else {
        for (const item of this) {
            if (Array.isArray(item) && depth !== 0) {  //handling infinity we add depth !== 0
                item.myFlat(depth - 1, temp)       //flattening
            } else {
                temp.push(item)
            }

        }
    }
    return temp
}
let depth = 3
// let depth = Infinity
console.log(arr2.myFlat(depth))

