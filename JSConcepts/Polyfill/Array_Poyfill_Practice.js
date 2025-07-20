// 1. Map:

const arr_1 = [1, 2, 4, 5];

const arr_2 = arr_1.map((arr, i, a) => arr);
console.log("arr_2", arr_2)



Array.prototype.myMap = function (callback, i) {
    let temp = [];

    if (!Array.isArray(this)) return null;
    if (!typeof callback === 'function') throw new TypeError("Not a Function")

    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i));
    }
    return temp
}


const arr_3 = arr_2.myMap((arr) => (arr))
console.log("arr_3", arr_3)


//2. Filter:
const filter_1 = [1, 2, 4, 1, 2, 5];

const filter_2 = filter_1.filter((filter) => {
    return filter > 3
})

console.log("filter_2", filter_2)

Array.prototype.myFilter = function (callback) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (callback[this[i]]) {
            temp.push(this[i])
        }
    }
}

const filter_3 = filter_2.filter((filter) => (filter > 3))

console.log("filter_3", filter_3)


//3. Reduce -> Accumulates elements into single value

const reduce_1 = [1, 2, 3, 4, 2, 1]

const reduce_2 = reduce_1.reduce((total, curr, index, a) => (curr + total), 2)

console.log("reduce_2", reduce_2)

Array.prototype.myReduce = function (callback, initialValue) {
    let result = initialValue ? initialValue : 0

    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i])
    }
    return result;
}


const reduce_3 = reduce_1.myReduce((total, curr) => (curr + total), 2)

console.log("reduce_3", reduce_3)


//4. myForEach: Iterate over an array
const forEach_1 = [1, 2, 4, 5];

forEach_1.forEach((arr) => (console.log("forEach_1", arr)))

Array.prototype.myForEach = function (callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}


forEach_1.myForEach((arr) => (console.log("forEach_2", arr)))

//5. find: Returns the first element in the array that satisfies a condition. else returns undefined

const find_1 = [1, 2, 4, 3, 6];

const found_1 = find_1.find((el) => (el > 6));

console.log("found_1", found_1)

Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}

const found_2 = find_1.myFind((el) => (el > 4))

console.log("found_2", found_2)

//6. Some: true if any of the aray elements pass the test, otherwise false.
const some_1 = [1, 2, 4, 3, 5, 6];

let some = some_1.some((el) => (el > 2))
console.log("some", some)


Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

some = some_1.mySome((el) => (el > 6))
console.log("some", some)


//7. Every: true if all elements pass the test, otherwise false.

const Every_1 = [2, 4, 5, 3, 6];
let every = Every_1.every((el) => (el >= 2))
console.log("every", every)

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

every = Every_1.myEvery((el) => (el > 2))
console.log("every", every)

//8. flat: 

const Flat_1 = [1, 2, [3, 4], [5, 6, [7, 8]], 9];
let flat = Flat_1.flat(1)
console.log("flat", flat)

Array.prototype.myFlat = function (depth = 1, finalArr = []) {

    if (depth < 0) {
        finalArr.push(this)
        return finalArr;
    }

    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            this[i].myFlat(depth - 1, finalArr)
        } else {
            finalArr.push(this[i])
        }
    }
    return finalArr
}

flat = Flat_1.myFlat(1)
console.log("flat", flat)


//9. at() -> method returns an indexed element from an array, & Negative index counts back from the end of the array. Always returns undefined if index < -array.length or index >= array.length without attempting to access the corresponding property.

const At_1 = [1, 2, 44, 5, 4, 2];

Array.prototype.myAt = function (index) {

    index = Math.trunc(index)  //converts to whole no., return integer part only

    if (index < 0) index = this.length + index;

    if (index < 0 || index >= this.length) return undefined

    return this[index]
}

console.log("at", At_1.myAt(5))

//10. The concat() function concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the type string, they are converted to string values before concatenating.

const Concat_1 = "hello"
console.log("concate", "".concat(['Hello', 'Hii', ' ', 'ok']))
console.log("concate", "".concat(...['Hello', 'Hii', ' ', 'ok']))

String.prototype.myConcat = function (...args) {

    let result = String(this);
    for (let arg of args) {
        result += String(arg)
    }
    return result
}

console.log("concat", "".myConcat({}))
console.log("concat", "".myConcat(['Hello', 'Hii', ' ', 'ok']))
console.log("concat", "".myConcat(...['Hello', 'Hii', ' ', 'ok']))

// 11.findIndex: method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const FindIndex_1 = [1, 2, 3, 4, 5, 7];

function functionCheckAge(val) {
    return val > 4
}


console.log("findIndex", FindIndex_1.findIndex(functionCheckAge))

// ???? pending 



//12. includes: method is used to determine whether an array or a string contains a specific value. It returns true if the value is found, and false otherwise.

const Includes = [1, 3, 4, 5, 6]

console.log("Includes", Includes.includes('4'))


Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return true;
    }
    return false
}

console.log("Includes", Includes.myIncludes('4'))


//13. join:  method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.

const Join = [12, 3, 4, 5, 3];


console.log("Join", Join.join('-'))

Array.prototype.myJoin = function (joined) {

    if (!Array.isArray(this)) throw new TypeError("Not a Function")

    if (this.length < 1) return ''

    let s = this[0];
    for (let i = 1; i < this.length; i++) {
        s = s + joined + this[i]
    }
    return s
}

console.log("Join", Join.myJoin('-'))


// 14. keys: method returns an Iterator object with the keys of an array.

const Keys = [1, 2, 3, 5, 6]

const Keys_Iterator = Keys.keys();  //returns object
console.log("Keys", Keys_Iterator.next())
console.log("Keys", ...Keys_Iterator)



//pending ???


//15. lastIndexOf(): method returns the last index (position) of a specified value.method returns -1 if the value is not found.By default the search starts at the last element and ends at the first., if startIndex given we start from that index right to left


const LastIndexOf = [1, 2, 4, 5, 4, 3, 5, 4];

console.log("LastIndexOf", LastIndexOf.lastIndexOf(4, 5))


Array.prototype.myLastIndexOf = function (value, startIndex) {
    if (startIndex < -this.length) return -1;

    let startBackward = startIndex < 0 ? this.length + startIndex : startIndex

    if (startIndex >= this.length) startBackward = this.length - 1

    for (let i = startBackward; i >= 0; i--) {
        if (this[i] === value) return i;
    }

    return -1
}

console.log("LastIndexOf", LastIndexOf.myLastIndexOf(4, -9))


//16. pop: method removes (pops) the last element of an array, it changes the original array, it returns the removed element.


let Pop = [1, 2, 3, 5, 6, 7];

console.log("POP", Pop.pop(), Pop)

Array.prototype.myPop = function () {
    if (!Array.isArray(this)) throw new TypeError("Not a array")

    if (this.length < 1) return undefined;

    let removedElement = this[this.length - 1];

    this.length -= 1
    return removedElement;
}

console.log("POP", Pop.myPop(), Pop)


// 17. push: method adds new items to the end of an array, it changes the length of the array, it returns the new length.

const PUSH = [1, 2, 3, 5, 6];
console.log("Push", PUSH.push(4), PUSH)

Array.prototype.myPush = function (value) {

    if (!Array.isArray(this)) throw new TypeError("Not a function")
    this.length += 1;

    this[this.length - 1] = value;

    return this.length
}

console.log("Push", PUSH.myPush(4), PUSH)



//18. shift: method removes the first item of an array, it changes the original array, it returns the shifted element.


const Shift = [1, 2, 3, 4, 5, 6, 7];

console.log("Shift", Shift.shift(), Shift)


Array.prototype.myShift = function () {
    if (!Array.isArray(this)) throw new TypeError('not a function')


    if (this.length < 1) return undefined

    const removedItem = this[0]


    for (let i = 0; i < this.length - 1; i++) {
        this[i] = this[i + 1]
    }

    this.length -= 1;
    return removedItem
}

console.log("shift", Shift.myShift(), Shift)

// 19. reverse: method reverses the order of the elements in an array,it overwrites the original array.

const Reverse = [1, 2, 3, 5, 6];

console.log("reverse", Reverse.reverse(), Reverse)

Array.prototype.myReverse = function () {

    let start = 0;
    let end = this.length - 1;

    while (start < end) {
        let temp = this[start]
        this[start] = this[end];
        this[end] = temp;
        start++;
        end--;
    }

    return this;
}

console.log("reverse", Reverse.myReverse(), Reverse)

//20. Call: Function Borrowing

let car = {
    color: 'red',
    comapany: 'ferrari'
}

function purchaseCar(currency, price) {
    console.log(`I have bought ${this.color} color ${this.comapany} of ${currency}${price}`)
}

purchaseCar.call(car, '$', 4000)

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "its not callable")
    }

    context.fn = this;
    context.fn(...args)
}

purchaseCar.myCall(car, '$', 3000)


//21. Apply:

Function.prototype.myApply = function (context = {}, args) {
    if (typeof this != 'function') {
        throw new Error(this + "its not callable")
    }

    if (!Array.isArray(args)) throw new TypeError("Not a Array")

    context.fn = this;
    context.fn(...args)
}

purchaseCar.myApply(car, ['$', 3000])

//22. Bind: Return function

const Bind = purchaseCar.bind(car)
Bind('$', 3500)


Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "cannot be bound as its not callable");
    }

    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs) //while calling bind, or when return fucntion being called, both times arguments can be passed
    }
}

const newFunc = purchaseCar.myBind(car)
newFunc("Rs", 500000)


//23. splice: The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

const Splice = [1, 2, 3, 5, 4];
console.log("splice", Splice.splice('1'), Splice);
Array.prototype.mySplice = function (index = undefined, remCount = undefined, ...items) {
    if (!Array.isArray()) return new TypeError('Not a Error')

    if (remCount == undefined && items.length == 0) return false

}

console.log("splice", Splice.mySplice(2, 2, 1), Splice)


//24. indexOf(): Returns the index of the first occurrence of a value. Returns -1 if not found.

const MyIndexOf = [10, 20, 20, 30];

console.log("indexOf", MyIndexOf.indexOf(20))


Array.prototype.myIndexOf = function (value) {

    for (let i = 0; i < this.length; i++) {
        if (this[i] == value) return i;
    }

    return -1
}

console.log("indexOf", MyIndexOf.myIndexOf(20))


