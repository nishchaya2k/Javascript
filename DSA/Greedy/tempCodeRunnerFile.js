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