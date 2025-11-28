/*
Rotate Image by 90 degree

Problem Statement: Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise. The rotation must be done in place, meaning the input 2D matrix must be modified directly..
*/

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

//Approach 2, Brute Force
function rotateBy90Degree_1(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let matrix_new = Array.from({ length: n }, () => Array(n).fill(0))

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            matrix_new[j][n - i - 1] = matrix[i][j];
        }
    }

    return matrix_new
}

console.log("Rotate By 90 Degree", rotateBy90Degree_1(matrix))

//Approach 2, Optimize
function rotateBy90Degree_2(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < m; j++) {
            let temp = matrix[j][i]
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    for (let j = 0; j < Math.floor(m/2); j++) {
        for (let i = 0; i < n; i++) {
            let temp = matrix[i][m - 1 - j]
            matrix[i][m - 1 - j] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    return matrix
}

console.log("Rotate By 90 Degree", rotateBy90Degree_2(matrix))