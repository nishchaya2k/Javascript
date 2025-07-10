// push: method adds new items to the end of an array, it changes the length of the array, it returns the new length.

const PUSH = [1, 2, 3, 5, 6];
console.log("Push", PUSH.push(4), PUSH)

Array.prototype.myPush = function (value) {

    if (!Array.isArray(this)) throw new TypeError("Not a function")
    this.length += 1;

    this[this.length - 1] = value;

    return this.length
}

console.log("Push", PUSH.myPush(4), PUSH)