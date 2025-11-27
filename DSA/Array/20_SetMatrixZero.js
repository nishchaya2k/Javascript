/*
Set Matrix Zero

Problem Statement: Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix..
*/

let matrix = [[1, - 1, 1], [-1, 0, 1], [1, -1, 1]]

//Approach 1

function updatedWithZero(matrix, i, j, n, m, visited) {
    for (let k = 0; k < n; k++) {
        if (matrix[k][j] !== 0) {
            matrix[k][j] = 0;   // column assign to zero
            visited[`${k},${j}`] = true
        }
    }

    for (let k = 0; k < m; k++) {
        if (matrix[i][k] !== 0) {
            matrix[i][k] = 0;  // row assign to zero
            visited[`${i},${k}`] = true
        }
    }
}

function setMatrixZero_1(matrix) {
    let visited = {};
    let n = matrix.length;
    let m = matrix[0].length;


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 0 && !visited[`${i},${j}`]) {
                updatedWithZero(matrix, i, j, n, m, visited)
                visited[`${i},${j}`] = true
            }
        }
    }
    return matrix
}

console.log("Set Matrix zero", setMatrixZero_1(matrix))


//Approach 2
function setMatrixZero_2(matrix) {
    let visited = {};
    let n = matrix.length;
    let m = matrix[0].length;


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                visited[`${i},row`] = true
                visited[`${j},col`] = true
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] != 0 && (visited[`${i},row`] || visited[`${j},col`])) {
                matrix[i][j] = 0
            }
        }
    }


    return matrix
}

console.log("Set Matrix zero", setMatrixZero_2([[1, - 1, 1], [-1, 0, 1], [1, -1, 1]]))


//Approach 3, Making 1st row & Col as a tracker, Optimized Approach
function setMatrixZero_3(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let firstRow = false;
    let firstCol = false;

    for (let i = 0; i < n; i++) {
        if (matrix[i][0] == 0) {
            firstCol = true
            break;
        }
    }

    for (let j = 0; j < m; j++) {
        if (matrix[0][j] == 0) {
            firstRow = true
            break;
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[0][j] == 0 || matrix[i][0] == 0) {
                matrix[i][j] = 0
            }
        }
    }

    if (firstCol) {
        for (let i = 0; i < n; i++) {
            matrix[i][0] = 0;
        }
    }

    if (firstRow) {
        for (let j = 0; j < m; j++) {
            matrix[0][j] = 0;
        }
    }
    


    return matrix
}

console.log("Set Matrix zero", setMatrixZero_3([[1, - 1, 1], [-1, 0, 1], [1, -1, 1]]))