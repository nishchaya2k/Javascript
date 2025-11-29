/*
Spiral Traversal of Matrix

Problem Statement: Given a Matrix, print the given matrix in spiral order.
*/

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

function increaseCol(matrix, start_i, start_j, end_j, temp) {
    for (let i = start_j; i < end_j; i++) {
        temp.push(matrix[start_i][i])
    }
}

function increaseRow(matrix, start_i, end_j, end_i, temp) {
    for (let i = start_i; i < end_i; i++) {
        temp.push(matrix[i][end_j - 1])
    }
}

function decreaseCol(matrix, end_i, end_j, start_j, temp) {
    for (let i = end_j - 1; i >= start_j; i--) {
        temp.push(matrix[end_i - 1][i])
    }
}

function decreaseRow(matrix, end_i, start_i, start_j, temp) {
    for (let i = end_i - 1; i >= start_i; i--) {
        temp.push(matrix[i][start_j])
    }
}

//Approach 1, TC: O(m*n), SC: O(m*n)
function spiralTraversal(matrix) {

    let n = matrix.length;
    let m = matrix[0].length
    let start_i = 0, end_i = n, start_j = 0, end_j = m;
    let temp = []

    while (start_j < end_j && start_i < end_i) {
        increaseCol(matrix, start_i, start_j, end_j, temp)
        start_i++;

        if (start_i >= end_i) break;
        increaseRow(matrix, start_i, end_j, end_i, temp)
        end_j--;

        if (start_j >= end_j) break;
        decreaseCol(matrix, end_i, end_j, start_j, temp)
        end_i--;

        decreaseRow(matrix, end_i, start_i, start_j, temp)
        start_j++;

    }
    return temp;
}

console.log("Spiral Traversal", spiralTraversal(matrix))