/*
Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.
*/


let str = "ABCDCBA"


//Approach 1, time complexity -> O(n)

function checkPalindrome1(str) {
    let temp = str.split('');
    temp.reverse();
    return temp.join('');
}


console.log("is Palindrome", checkPalindrome1(str) === str)


//Approach 2, time complexity -> O(n/2)

function checkPalindrome2(str) {

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) return false
        start++;
        end--;
    }

    return true;
}

console.log("is Palindrome", checkPalindrome2(str))


//Approach 3, recursively hit from reverse array
