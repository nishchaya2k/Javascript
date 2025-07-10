// String Compression


//1
function compress(s) {

    let count = 1;
    let ans = ""
    let i = 0;
    while (i < s.length) {

        let curr = s[i];
        i++;
        while (i < s.length && s[i] === curr) {
            count++;
            i++;
        }

        ans += curr + count;
        count = 1;
    }

    return ans
}

let str = 'aaasssasaa'
console.log(compress(str))


//1.1  Avoid Repeated String Concatenation which is generally more efficient.

function compress1(s) {


    let i = 1;
    let count = 1;
    let ans = [];

    while (i <= s.length) {

        if (i < s.length && s[i] === s[i - 1]) {
            count++;
        } else {
            ans.push(s[i - 1] + count)
            count = 1;
        }
        i++;
    }

    return ans.join('')
}

let str1 = 'aaasssasaa'
console.log(compress1(str))



/*
//Example
uncompress('3(ab)'); // 'ababab'
uncompress('3(ab2(c))'); // 'abccabccabcc'


// Test
console.log(uncompress('3(ab)')); // 'ababab'
console.log(uncompress('3(ab2(c))')); // 'abccabccabcc'
console.log(uncompress('5(5(ab)2(c)))')); // 'abababababccabababababccabababababccabababababccabababababcc'
*/