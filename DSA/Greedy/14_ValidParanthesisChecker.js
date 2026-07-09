/*
Valid Paranthesis Checker

Problem Statement: Find the validity of an input string s that only contains the letters '(', ')' and '*'. A string entered is legitimate if

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
*/

let s = "**()))()"

//Approach 1, Recursion, TC: O(3^n), SC: O(n)
function validParenth_1(s) {
    let n = s.length;

    function generateSolution(i, count) {

        //base case

        if (count < 0) return false;
        if (i === n)
            return count === 0;


        if (s[i] === '(')
            return generateSolution(i + 1, count + 1);

        if (s[i] === ')')
            return generateSolution(i + 1, count - 1);

        return (
            generateSolution(i + 1, count + 1) || // (
            generateSolution(i + 1, count - 1) || // )
            generateSolution(i + 1, count)        // empty
        );
    }

    return generateSolution(0, 0)
}

console.log("Valid Parenthesis", validParenth_1(s))


//Approach 2, DP + Recursion, TC: O(n^2), SC: O(n^2)
function validParenth_2(s) {
    let n = s.length;
    let dp = Array(n + 1).fill(null).map(() => Array(n + 1))

    function generateSolution(i, count) {

        //base case
        if (count < 0) return false;        
        if (i === n)
            return count === 0;
        if (dp[i][count] !== undefined) return dp[i][count]

        if (s[i] === '(')
            return dp[i][count] = generateSolution(i + 1, count + 1);

        if (s[i] === ')')
            return dp[i][count] = generateSolution(i + 1, count - 1);

        return dp[i][count] = (
            generateSolution(i + 1, count + 1) || // (
            generateSolution(i + 1, count - 1) || // )
            generateSolution(i + 1, count)        // empty
        );
    }

    return generateSolution(0, 0)
}

console.log("Valid Parenthesis", validParenth_2(s))


