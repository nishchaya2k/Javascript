// at() -> method returns an indexed element from an array, & Negative index counts back from the end of the array. Always returns undefined if index < -array.length or index >= array.length without attempting to access the corresponding property.

const At_1 = [1, 2, 44, 5, 4, 2];

Array.prototype.myAt = function (index) {

    index = Math.trunc(index)

    if (index < 0) index = this.length + index;

    if (index < 0 || index >= this.length) return undefined

    return this[index]
}

console.log("at", At_1.myAt(5))
