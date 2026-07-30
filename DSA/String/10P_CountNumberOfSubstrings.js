/*
Count Number of Substrings

Problem Statement: You are given a string s and a positive integer k.
Return the number of substrings that contain exactly k distinct characters.
*/

let s = "abcbaa", k = 3

function countSubstring_1(s, k) {

    let obj = {};
    let n = s.length;
    let str = "";
    let count = 0;
    let res = [];

    for (let i = 0; i < n; i++) {
        str = str + s[i]
        count++;
        obj[s[i]] = (obj[s[i]] || 0) + 1;
        if (count == k) res.push(str);
        else {
            for (let j = i + 1; j < n; j++) {

                if (count == k && !obj[s[j]]) break;
                str = str + s[j]
                if (!obj[s[j]]) {
                    obj[s[j]] = (obj[s[j]] || 0) + 1;
                    count++;
                }
                if (count == k && str.length !== n) res.push(str)
            }
        }
        count = 0;
        str = "";
        obj = {}
    }
    return res;
}

console.log("count Substring", countSubstring_1(s, k))