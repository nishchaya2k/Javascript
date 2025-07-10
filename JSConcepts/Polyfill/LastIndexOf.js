// lastIndexOf(): method returns the last index(position) of a specified value.method returns - 1 if the value is not found.By default the search starts at the last element and ends at the first., if startIndex given we start from that index right to left


const LastIndexOf = [1, 2, 4, 5, 4, 3, 5, 4];

console.log("LastIndexOf", LastIndexOf.lastIndexOf(4, -9))


Array.prototype.myLastIndexOf = function (value, startIndex) {
    if (startIndex < -this.length) return -1;

    let startBackward = startIndex < 0 ? this.length + startIndex : startIndex

    if (startIndex >= this.length) startBackward = this.length - 1

    for (let i = startBackward; i >= 0; i--) {
        if (this[i] === value) return i;
    }

    return -1
}

console.log("LastIndexOf", LastIndexOf.myLastIndexOf(4, -9))