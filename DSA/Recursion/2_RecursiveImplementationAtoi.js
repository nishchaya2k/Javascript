/*
Recursive Implementation of atoi()

Problem Statement: Implement the function myAtoi(s) which converts the given string s to a 32-bit signed integer (similar to the C/C++ atoi function).

Steps to Implement: 1. First, ignore any leading whitespace characters ' ' until the first non-whitespace character is found.
2. Check the next character to determine the sign. If it’s a '-', the number should be negative. If it’s a '+', the number should be positive. If neither is found, assume the number is positive.
3. Read the digits and convert them into a number. Stop reading once a non-digit character is encountered or the end of the string is reached. Leading zeros should be ignored during conversion.
4. The result should be clamped within the 32-bit signed integer range: [-2147483648, 2147483647]. If the computed number is outside this range, return -2147483648 if the number is less than -2147483648, or return 2147483647 if the number is greater than 2147483647.
5. Finally, return the computed number after applying all the above steps.
*/

let s = "4193 with words"

const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

function helper(s, i, num, sign) {
    if (i >= s.length || (isNaN(Number(s[i])) || s[i] == ' '))
        return sign * num;

    num = num * 10 + Number(s[i]);

    if (sign * num <= INT_MIN) return INT_MIN;
    if (sign * num >= INT_MAX) return INT_MAX;

    return helper(s, i + 1, num, sign)

}

function atoi(s) {

    let i = 0;
    while (i < s.length && s[i] === ' ') i++;

    let sign = 1;
    if (i < s.length && (s[i] == '+' || s[i] == '-')) {
        sign = s[i] === '+' ? 1 : -1
        i++
    }
    return helper(s, i, 0, sign);
}

console.log("atoi", atoi(s))