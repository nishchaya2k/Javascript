// pop: method removes (pops) the last element of an array, it changes the original array, it returns the removed element.


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