/*
Letter Combinations of a Phone number

Problem Statement: Given a string consisting of digits from 2 to 9 (inclusive). Return all possible letter combinations that the number can represent.
*/
const phoneLetters = [
    "",     // 0
    "",     // 1
    "abc",  // 2
    "def",  // 3
    "ghi",  // 4
    "jkl",  // 5
    "mno",  // 6
    "pqrs", // 7
    "tuv",  // 8
    "wxyz"  // 9
];

let digits = "67";

//Approach 1, TC: O(N* 4^N), SC: O(4^N);
function letterCombination(digits) {

    let res = [];
    let n = digits.length;

    function generate(str, index) {

        if (index == n) {
            res.push(str);
            return;
        }
        for (let i = 0; i < phoneLetters[digits[index]].length; i++) {
            generate(str + phoneLetters[digits[index]][i], index + 1)
        }
    }
    generate("", 0)
    return res;
}

console.log("letter Combination", letterCombination(digits))