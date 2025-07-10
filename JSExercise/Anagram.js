//1. Check if two strings are anagram

function isAnagram(a, b) {
    let occ = {};


    for (let chars of a) {
        occ[chars] = (occ[chars] || 0) + 1;
    }

    for (let chars of b) {
        if (!occ[chars]) return false;
        else occ[chars] -= 1;
    }

    // for (let key in occ) {
    //     if (occ[key] !== 0) return false
    // }

    // return true

    return Object.values(occ).every((count) => count === 0)

}

console.log(isAnagram("super", "supe"))