/*
Pascal's Triangle

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/

const numRows = 5

//Approach 1, Brute Force
function pascalTriangle1(numRows) {

    let result = [];
    result.push([1]);

    if (numRows == 1) return result;

    for (let i = 1; i < numRows; i++) {
        let temp = [];
        let m = result[i - 1].length
        for (let j = 0; j <= m; j++) {
            if (j == 0 || j == m) temp.push(1);

            else temp.push(result[i - 1][j] + result[i - 1][j - 1])
        }
        result.push(temp)
    }

    return result;
}

console.log("Pascal Triangle", pascalTriangle1(numRows))

//Approach 2, Optimize, DIrectly getting particalur rows data, rather then getting from previous

function pascalTriangle2(numRows) {


    function generateRow(row) {
        let temp = [1];
        let ans = 1;

        for (let col = 1; col < row; col++) {
            ans = ans * (row - col);
            ans = Math.floor(ans / col);
            temp.push(ans)
        }

        return temp;
    }

    let result = [];

    for (let i = 1; i <= numRows; i++) {
        result.push(generateRow(i))
    }

    return result

}

console.log("Pascal Triangle", pascalTriangle2(numRows))

