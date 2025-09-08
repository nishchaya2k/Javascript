/*
The beauty of a string is defined as the difference between the frequency of the most frequent character and the least frequent character (excluding characters that do not appear) in that string.

Given a string s, return the sum of beauty values of all possible substrings of s.
*/

let str = "aabcbaa";


// Approach 1, Brute Force, TC -> O(n^2)
function getAllSubstrings1(str) {
    let beautyNumber = 0;

    for (let start = 0; start < str.length; start++) {
        let temp = '';
        let freq = {};
        let max = 0;
        let min = Number.MAX_SAFE_INTEGER;
        for (let end = start; end < str.length; end++) {
            temp += str[end]; // Build substring character by character
            freq[str[end]] = (freq[str[end]] || 0) + 1;

            if (freq[str[end]] > max) {
                max = freq[str[end]]
            }
            if (freq[str[end]] < min) {
                min = freq[str[end]]
            }

            let valuesArr = Object.values(freq);
            max = Math.max(...valuesArr);
            min = Math.min(...valuesArr.filter(v => v > 0))


            beautyNumber += max - min
        }
    }

    return beautyNumber;
}

console.log("Beauty Number", getAllSubstrings1(str))

// Approach 2

