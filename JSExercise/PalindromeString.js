// Q. How to check whether a string is palindrome or not 

let string1 = "abcdefr"
let string2 = "abccba"


// 1st Approach 
const checkPalindrome = (string) => {
    let end = string.length - 1;
    let start = 0;

    while (start <= end) {
        if (string[start] !== string[end]) {
            return "Not a Palindromic String";
        }
        start++;
        end--;
    }

    return "Palindromic String";
}

console.log(checkPalindrome(string1))


// 2nd Approach


const checkPalindrome2 = (string) => {
    const reverseString = string.split('').reverse().join('');
    return reverseString === string ? "Palindromic String" : "Not Palindromic String"
}

console.log(checkPalindrome2(string2))
