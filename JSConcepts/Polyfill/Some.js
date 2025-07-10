// Some: true if any of the aray elements pass the test, otherwise false.
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

some = some_1.mySome((el) => (el > 3))
console.log("some", some)