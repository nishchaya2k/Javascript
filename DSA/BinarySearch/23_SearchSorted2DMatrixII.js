/*
Search in a row and column-wise sorted matrix

Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. The elements of each row and each column are sorted in non-decreasing order. But, the first element of a row is not necessarily greater than the last element of the previous row (if it exists). You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.
*/

//Approach 1: Brute Force
//Approach 2: Optimal Binary Search

let mat = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]]
    , target = 5;

function searchIn2D_2(mat, target) {
    let n = mat.length;
    let m = mat[0].length;

    for (let i = 0; i < n; i++) {
        if (mat[i][0] > target || mat[i][m - 1] < target) continue;

        let low = 0;
        high = m - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (mat[i][mid] == target) return true;
            else if (mat[i][mid] > target) high = mid - 1;
            else low = mid + 1;
        }

    }
    return false;
}

console.log("Search In 2D", searchIn2D_2(mat, target))


function searchIn2D_3(mat, target) {
    let n = mat.length;
    let m = mat[0].length;

    let row = 0;
    let col = m - 1;

    while (row < n || col >= 0) {
        if (mat[row][col] == target) return true;

        else if (mat[row][col] > target) col--;

        else row++;
    }
    return false;
}

console.log("Search In 2D", searchIn2D_3(mat, target))


/*
Algorithm:

1. As we are starting from the cell (0, m-1), the two variables i.e. ‘row’ and ‘col’ will point to 0 and m-1 respectively.

2. We will do the following steps until row < n and col >= 0(i.e. while(row < n && col >= 0)):
If matrix[row][col] == target: We have found the target and so we will return true.
3. If matrix[row][col] > target: We need the smaller elements to reach the target. But the column is in increasing order and so it contains only greater elements. So, we will eliminate the column by decreasing the current column value by 1(i.e. col--) and thus we will move row-wise.

If matrix[row][col] < target: In this case, We need the bigger elements to reach the target. But the row is in decreasing order and so it contains only smaller elements. So, we will eliminate the row by increasing the current row value by 1(i.e. row++) and thus we will move column-wise.

If we are outside the loop without getting any matching element, we will return false.
*/