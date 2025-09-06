/*
Problem Statment: Check if two Strings are anagrams of each other
*/

let s = 'CAT', r = 'ACT'

//Approach 1

function anagramString1(s, r) {
    if (s.length !== r.length) return false;

    let obj = {};
    let i = 0;
    let n = s.length

    while (i < n) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
        obj[r[i]] = (obj[r[i]] || 0) - 1;

        i++;
    }
    i = 0;
    while (i < n) {
        if (obj[s[i]] !== 0) return false

        i++;
    }
    return true;
}

console.log("is Anagram", anagramString1(s, r))

//Approach 1

function anagramString2(s, r) {
    if (s.length !== r.length) return false;

    return s.split('').sort().join('') === r.split('').sort().join('')
}

console.log("is Anagram", anagramString2(s, r))