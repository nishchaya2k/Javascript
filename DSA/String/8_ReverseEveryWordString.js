/*
Reverse Every Word in A String

Problem Statement: Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space.
*/

let s = "the sky is blue   ";

//Approach 1, Brute Force, TC: O(n), SC: O(n)
function reverseWords1(s) {
    let start = 0, end = s.length - 1;

    // Trim leading and trailing spaces
    while (s[start] == ' ') start++;
    while (s[end] == ' ') end--;

    let temp = [];
    let word = '';

    // Iterate over the string to collect words
    while (start <= end) {
        if (s[start] != ' ') {
            word += s[start];
        } else if (word.length > 0) {
            temp.push(word);
            word = ''; // Reset for the next word
        }
        start++;
    }
    // Push the last word if any
    if (word.length > 0) temp.push(word);

    // Reverse the word array and join with spaces
    return temp.reverse().join(' ');
}

console.log("Reverse Words:", reverseWords1(s));


//Approach 2, Optimal

function reverseWords2(s) {
    let start = 0, end = s.length - 1;

    // Trim leading and trailing spaces
    while (s[start] == ' ') start++;
    while (s[end] == ' ') end--;

    let result = ''
    let word = ''

    while (end >= start) {
        if (s[end] !== ' ') {
            word = s[end] + word
        } else if (word.length > 0) {
            result = result ? result + ' ' + word : word
            word = ''
        }
        end--;
    }
    if (word.length > 0) {
        result = result ? result + ' ' + word : word
    }

    return result;
}

console.log("Reverse Words:", reverseWords2(s));
