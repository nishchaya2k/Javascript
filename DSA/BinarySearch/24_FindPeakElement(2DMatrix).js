/*
Find Peak Element (2D Matrix)

Problem Statement: Given a 0-indexed n x m matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the array [i, j]. A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbours to the left, right, top, and bottom.

Assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

Note: As there can be many peak values, 1 is given as output if the returned index is a peak number, otherwise 0.
*/

let mat = [[5, 10, 8], [4, 25, 7], [3, 9, 6]]

//Approach 1
function PeakElement_1(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let result = [-1, -1]
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < m; i++) {
        let currentMax = Number.MIN_SAFE_INTEGER;
        let currMaxIndex = []
        let j = 0;
        for (j = 0; j < n; j++) {
            if (currentMax < mat[i][j]) {
                currentMax = mat[i][j];
                currMaxIndex = [i, j]
            }
        }
        if (max < currentMax) {
            max = currentMax
            result = currMaxIndex
        }
    }
    return result
}

console.log("Peak Element", PeakElement_1(mat))

function findMaxIndex(mat, n, m, mid) {
    let maxValue = -1;
    let index = -1;

    for (let i = 0; i < n; i++) {
        if (mat[i][mid] > maxValue) {
            maxValue = mat[i][mid];
            index = i;
        }
    }
    return index;
}

//Approach 2
function PeakElement_2(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let low = 0, high = m - 1;

    while (low <= high) {
        let mid = Math.floor((mid + high) / 2);
        let maxRowIdex = findMaxIndex(mat, n, m, mid)

        let left = mid - 1 >= 0 ? mat[maxRowIdex][mid - 1] : -1;
        let right = mid + 1 < m ? mat[maxRowIdex][mid + 1] : -1;

        if (mat[maxRowIdex][mid] > left && mat[maxRowIdex][mid] > right) {
            return { maxRowIdex, mid }
        } else if (mat[maxRowIdex][mid] < left) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    return [-1, -1]
}

console.log("Peak Element", PeakElement_2(mat))

