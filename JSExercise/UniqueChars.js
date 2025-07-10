//1. Check if string if all unique chars
let str = "abbscd"

function uniqueChars(str) {
    let occ = {};

    for (let chars of str) {
        if (occ[chars]) return false;
        else occ[chars] = true
    }

    return true;
}

console.log(uniqueChars(str))

//1.1 

function uniqueChars1(str) {
    let occ = new Set();

    for (let chars of str) {
        if (occ.has(chars)) return false
        occ.add(chars)
    }

    return true;
}

console.log(uniqueChars1(str))


// 1.2 

function uniqueChars2(str) {
    return new Set(str).size === str.length
}

console.log(uniqueChars2(str))

