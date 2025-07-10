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