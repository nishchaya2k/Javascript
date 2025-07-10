// find: Returns the first element in the array that satisfies a condition, else returns undefined

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

