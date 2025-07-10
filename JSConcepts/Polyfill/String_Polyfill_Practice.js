//1. endsWith(): is a built-in method of String values that determines whether a string ends with the characters of a specified search string. It returns true if the string ends with the specified characters, and false, it also takes length parameter as otpional

const EndsWith = "Nishchaya";

console.log("endsWith", EndsWith.endsWith("ya"))

String.prototype.myEndsWith = function (searchValue, length = undefined) {
    if (typeof searchValue !== 'string') throw new TypeError("not a string")

    if (length < 1 || searchValue.length > this.length) return false

    const sizeOfString = length ? this.length < length ? this.length : length : this.length
    const sizeOfSearch = searchValue.length


    for (let i = 0; i < sizeOfSearch; i++) {
        if (this[sizeOfString - sizeOfSearch + i] !== searchValue[i]) {
            return false;
        }
    }

    return true;
}


console.log("endsWith", EndsWith.endsWith("ya"))



// 2. concat: method joins two or more strings,method does not change the existing strings, method returns a new string, how will concation happen depend on the type of calling function, it can be arrray,string.


const Concat = 'sirname';
console.log("concate", Concat.concat(['narula']))

String.prototype.myConcat = function (value) {

}

//1. String + object, string/value inside array,
//2. Array + inside it array expand


// 3. startsWith: method returns True if the string starts with the specified value, otherwise False., string.startswith(value, start, end), start and end are optional, passed index


const StartsWith = "Hello"

console.log("startsWith", StartsWith.startsWith("H", -1))


String.prototype.myStartsWith = function (searchValue, position = undefined) {

    if (typeof searchValue !== 'string') throw new TypeError("Not a string")

    let start = position >= 0 ? position : 0

    if (start + searchValue.length > this.length) {
        return false;
    }

    for (let i = 0; i < searchValue.length; i++) {
        if (this[start + i] !== searchValue[i]) return false;
    }

    return true

}

console.log("startsWith", StartsWith.myStartsWith("H", -1))



// 4. at: A single character.,The character in the given position(index) in the string.

const At = "abcdefg";

console.log("at", At.at(-7))

String.prototype.myAt = function (index) {
    if (Object.prototype.toString.call(this) !== "[object String]") {
        throw new TypeError("Not a String");
    }

    if (index < 0) {
        index += this.length;
    }

    if (index < 0 || index >= this.length) {
        return undefined;
    }

    return this[index]
}

console.log("at", At.myAt(-2))


//5. toUpperCase:The string converted to uppercase.

const Uppercase = "Hello a"

console.log("Uppercase", Uppercase.toUpperCase())


String.prototype.myToUpperCase = function () {
    if (Object.prototype.toString.call(this) != "[object String]") throw new TypeError("Not a string")

    let result = ""

    for (let i = 0; i < this.length; i++) {
        let char = this[i];

        let code = char.charCodeAt(0);

        if (code <= 122 && code >= 97) {
            char = String.fromCharCode(code - 32) //Converts code to character, takes One or more Unicode values as coma separated
        }
        result += char;
    }

    return result
}


console.log("Uppercase", Uppercase.myToUpperCase())

//6. toLowerCase:The string converted to lowercase.

const Lowercase = "HELLO A"

console.log("Lowercase", Uppercase.toLowerCase())

String.prototype.myToLowerCase = function () {
    if (Object.prototype.toString.call(this) != "[object String]") throw new TypeError("Not a string")

    let result = ""

    for (let i = 0; i < this.length; i++) {
        let char = this[i];

        let code = char.charCodeAt(0);

        if (code <= 90 && code >= 65) {
            char = String.fromCharCode(code + 32) //Converts code to character, takes One or more Unicode values as coma separated
        }
        result += char;
    }

    return result
}


console.log("Lowercase", Lowercase.myToLowerCase())


//7. trim: method removes whitespace from both sides of a string. method does not change the original string.

const Trim = "   abcdefgh.  "

console.log("Trim", Trim.trim(), Trim)

String.prototype.myTrim = function () {
    if (this.length === 0) return '';

    let temp = '';
    let start = 0;
    let end = this.length - 1;

    while (start <= end && this[start] === ' ') {
        start++;
    }

    while (end >= start && this[end] === ' ') {
        end--;
    }

    for (let i = start; i <= end; i++) {
        temp += this[i];
    }

    return temp;
};


console.log("Trim", Trim.myTrim(), Trim)


//8: split: method splits a string into an array of substrings,  method returns the new array, method does not change the original string. If (" ") is used as separator, the string is split between words.


const Split = "How are you doing today?"
console.log("split", Split.split(''))

String.prototype.mySplit = function (separater, length = undefined) {

    let temp = [];

}

console.log("split", Split.mySplit(''))


// 9. repeat(): method returns a string with a number of copies of a string & it returns a new string & does not change the original string.

let Repeat = "Hello World!"

console.log("Repeat", Repeat.repeat(3))

String.prototype.myRepeat = function (count = 0) {
    if (count <= 0) return ''

    let result = ''
    while (count > 0) {
        result += this;
        count--;
    }

    return result;
}

console.log("Repeat", Repeat.myRepeat(3))


//10. substring: method extracts characters, between two indices (positions), from a string, and returns the substring. it extracts characters from start to end (exclusive). & it does not change the original string.If start is greater than end, arguments are swapped: (4, 1) = (1, 4). Start or end values less than 0, are treated as 0.

let Substring = "hello world!"

console.log("Substr", Substring.substring(13, 13))

String.prototype.mySubstring = function (start = 0, end = this.length) {
    if (start > end) {
        let temp = start;
        start = end;
        end = temp
    }

    if (start < 0) start = 0;
    if (end < 0) end = 0;

    if (start > this.length) start = this.length;
    if (end > this.length) end = this.length;

    let result = '';

    for (let i = start; i < end; i++) {
        result += this[i];
    }

    return result;
}

console.log("Substring", Substring.mySubstring(-1, -1))


// 11. substr(): method extracts a part of a string.method begins at a specified position, and returns a specified number of characters. method does not change the original string.To extract characters from the end of the string, use a negative start position.

const Substr = "hello India!"

console.log("Substr", Substr.substr(-1, 2))


String.prototype.mySubstr = function (start, length) {
    if (start > this.length) return '';
    if (length <= 0) return '';

    start = start < 0 ? (this.length + start) : start;
    let end = (start + length) < this.length ? start + length : this.length
    let result = ''

    for (let i = start; i < end; i++) {
        result += this[i];
    }

    return result

}

console.log("Substr", Substr.mySubstr(-1, 2))



// 12. replace: 