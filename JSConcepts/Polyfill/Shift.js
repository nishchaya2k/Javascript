// shift: method removes the first item of an array, it changes the original array, it returns the shifted element.


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