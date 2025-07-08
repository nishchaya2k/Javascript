//1. The concat() function concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the type string, they are converted to string values before concatenating.

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