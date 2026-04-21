/*
Maximum Rectangle Area with all 1's | DP on Rectangles: DP 55

Problem Statement: Given a m x n binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
*/


let matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]];


//Approach 1,TC: O(N*(M+M)), SC: O(M)

function calculateMaxRect(row) {
    let stack = [];
    let max = 0

    for (let i = 0; i < row.length; i++) {
        while (stack.length && row[stack[stack.length - 1]] > row[i]) {
            let height = row[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, height * width);
        }

        stack.push(i)
    }
    // flush remaining
    let i = row.length;
    while (stack.length) {
        let height = row[stack.pop()];
        let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(max, height * width);
    }

    return max;
}

function maxRectange_1(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let max = 0

    //transformed
    for (let j = 0; j < m; j++) {
        for (let i = n - 2; i >= 0; i--) {
            matrix[i][j] = matrix[i][j] === 0 ? 0 : matrix[i][j] + matrix[i + 1][j];
        }
    }

    for (let i = 0; i < n; i++) {
        max = Math.max(max, calculateMaxRect(matrix[i]))
    }

    return max

}

console.log("Maximum Rectange", maxRectange_1(matrix))