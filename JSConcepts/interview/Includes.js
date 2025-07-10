// includes: method is used to determine whether an array or a string contains a specific value. It returns true if the value is found, and false otherwise.

const Includes = [1, 3, 4, 5, 6]

console.log("Includes", Includes.includes('4'))


Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return true;
    }
    return false
}

console.log("Includes", Includes.myIncludes('4'))