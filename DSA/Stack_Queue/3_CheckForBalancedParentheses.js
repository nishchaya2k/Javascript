/*
Check for Balanced Parentheses

Problem Statement: Check Balanced Parentheses. Given string str containing just the characters '(', ')', '{', '}', '[' and ']', check if the input string is valid and return true if the string is balanced otherwise return false. .

Note:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

let str = "()[{}()]"
let arr = ["[]", "{}", "()"]

function isOpenBracket(s) {
    if (s == '(' || s == '[' || s == '{') return true
    return false;
}

function checkP_1(str) {

    let st = []

    for (let i = 0; i < str.length; i++) {
        if (isOpenBracket(str[i])) {
            st.push(str[i])
        } else {
            if (st.length == 0) return false
            else {
                let top = st.pop();
                let bracket = top + str[i]
                if (!arr.includes(bracket)) return false;
            }
        }

    }
    return st.length == 0;
}

console.log("Check Parentheses", checkP_1(str))

function checkP_2(str) {

    let st = []

    for (let ch of str) {
        if (isOpenBracket(ch)) {
            st.push(ch)
        } else {
            if (st.length == 0) return false
            else {
                let top = st.pop();
                if ((ch === ')' && top === '(') ||
                    (ch === ']' && top === '[') ||
                    (ch === '}' && top === '{')) {
                    continue;
                } else {
                    return false;
                }
            }
        }

    }
    return st.length == 0;
}

console.log("Check Parentheses", checkP_2(str))