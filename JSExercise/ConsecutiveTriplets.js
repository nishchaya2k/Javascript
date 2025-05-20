// 1.  Find Consecutive Triplets with Unique Characters

// Type : 1

function ConsecutiveTripletsType1(str) {
    var n = str.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        if ((str[i] != str[i + 1]) && (str[i + 1] != str[i + 2]) && (str[i] != str[i + 2])) {
            count += 1;
        }
    }
    return count
}


console.log(ConsecutiveTripletsType1("abcabc"))



// Type : 2
function ConsecutiveTripletsType2(str) {
    let count = 0;

    for (let i = 0; i < str.length - 2; i++) {
        const triplet = str.slice(i, i + 3);
        const uniqueChar = new Set(triplet)
        if (uniqueChar.size == 3) {
            count++;
        }
    }
    return count;
}


console.log(ConsecutiveTripletsType2("abcabc"))

