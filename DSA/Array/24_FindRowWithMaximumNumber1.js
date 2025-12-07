/*
Find the row with maximum number of 1's

Problem Statement: You have been given a non-empty grid ‘mat’ with 'n' rows and 'm' columns consisting of only 0s and 1s. All the rows are sorted in ascending order. Your task is to find the index of the row with the maximum number of ones. Note: If two rows have the same number of ones, consider the one with a smaller index. If there's no row with at least 1 zero, return -1
*/

let mat = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

//Approach 1
function rowWithMaximumNumber_1(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let maxCount_Row = -1;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < m; j++) {
            if (mat[i][j] == 1) {
                count = m - j;
                break
            }
        }
        if (count !== 0) {
            maxCount_Row = Math.max(count, maxCount_Row)
            if (maxCount_Row == m) {
                maxCount_Row = i
                break
            }
        }

    }

    return maxCount_Row
}

console.log("Row Maximum No.", rowWithMaximumNumber_1(mat))

//Approach 2
function rowWithMaximumNumber_2(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let maxOnes = -1;
    let row = -1;

    for (let i = 0; i < n; i++) {
        let start = 0, end = m - 1;
        let index_1 = -1

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (mat[i][mid] == 1) {
                end = mid - 1;
                index_1 = mid;
            } else {
                start = mid + 1;
            }
        }
        if (index_1 != -1) {
            if (maxOnes > (m - index_1)) {
                row = i;
                if (maxOnes == m) {
                    break
                }
            }

        }
    }
    return row

}
    console.log("Row Maximum No.", rowWithMaximumNumber_2(mat)) 
