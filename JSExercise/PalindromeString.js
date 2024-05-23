// Q. How to check whether a string is palindrome or not 

let string1 = "abcdefr"
let string2 = "abccba"


// 1st Approach 
const checkPalindrome = (string) => {
    let end = string.length-1;
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
    // Reverse the string
    const reversedString = string.split('').reverse().join('');
    
    // Compare the original string with the reversed string
    return string === reversedString ? "Palindromic String" : "Not a Palindromic String";
}

console.log(checkPalindrome2(string2)); 
