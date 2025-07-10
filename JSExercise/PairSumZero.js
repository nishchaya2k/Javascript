//Find a first pair whose sum is zero without using undexing

// 1. - Complexity -> O(n^2)

let arr = [12, 2, 33, -1, -2, 1];


function pairSum(a) {

    for (let i = 0; i < a.length - 1; i++) {
        let f = a[i];
        for (let j = i + 1; j < a.length; j++) {
            if (f + a[j] === 0) return [f, a[j]];
        }
    }

    return [];
}

console.log(pairSum(arr))


//1.1  -  Complexity -> O(n)

function pairSum1(a) {
    let seen = new Set();

    for (let num of a) {
        if (seen.has(-num)) return [-num, num]
        seen.add(num)
    }

    return [];
}

console.log(pairSum1(arr))
