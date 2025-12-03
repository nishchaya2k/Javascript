/*

Problem Statement: You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. The elements of each row are sorted in non-decreasing order. Moreover, the first element of a row is greater than the last element of the previous row (if it exists). You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.
*/

let mat = [[1, 2, 4], [6, 7, 8], [9, 10, 34]], target = 88;
//Approach 1


//Approach 2, TC: O(nlogm)

function searchIn2D_2(mat, target) {
    let n = mat.length;
    let m = mat[0].length;

    for (let i = 0; i < n; i++) {
        if (mat[i][m - 1] < target) continue;

        let start = 0
        let end = mat[i].length - 1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (mat[i][mid] == target) return true;
            else if (mat[i][mid] < target) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return false;
}


console.log("Search in 2D", searchIn2D_2(mat, target))


//Approach 3, TC: O(nlogm)

function searchIn2D_3(mat, target) {
    let n = mat.length;
    let m = mat[0].length;
    let row = -1

    for (let i = 0; i < n; i++) {
        if (mat[i][0] <= target && target <= mat[i][m - 1]) {
            row = i;
            break;
        }
    }

    if (row == -1) return false;

    let start = 0;
    let end = m - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (mat[row][mid] == target) return true;
        else if (mat[row][mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return false;
}


console.log("Search in 2D", searchIn2D_3(mat, target))


//Approach 4, flat the 2D Matrix & then search, in that SC will O(n*m),TC: O(lognm)


//Approach 5, 

function searchIn2D_4(mat, target) {
    let n = mat.length;
    let m = mat[0].length;

    let low = 0;
    high = n * m - 1;


    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let row = Math.floor(mid / m)
        let col = mid % m;

        if (mat[row][col] == target) return true;
        else if (mat[row][col] < target) low = mid + 1;
        else high = mid - 1;
    }


    return false;
}


console.log("Search in 2D", searchIn2D_4(mat, target))

/*

Approach Explanations:

---------------------------------------------------------
Approach 2 — Row-wise Binary Search  
Time Complexity: O(n log m)  
Space Complexity: O(1)

Algorithm:
1. Loop through each row.
2. If the last element of a row is < target → skip (target can’t be inside).
3. Otherwise perform a binary search on that row.
4. If found return true, else continue.
5. If no match found → return false.

---------------------------------------------------------
Approach 3 — Find Correct Row + Binary Search  
Time Complexity: O(n + log m)  
Space Complexity: O(1)

Algorithm:
1. Identify the only row where the target *could* exist:
      mat[i][0] ≤ target ≤ mat[i][m−1].
2. If no such row exists, return false.
3. Perform one binary search on that row.
4. Return true if found, otherwise false.

---------------------------------------------------------
Approach 4 — Treat the 2D Matrix as a 1D Sorted Array  
Time Complexity: O(log(n*m))  
Space Complexity: O(1)

Algorithm:
1. Use index range: 0 → (n*m - 1).
2. Convert mid index back into 2D form:
      row = mid / m
      col = mid % m
3. Compare mat[row][col] with target:
      If equal → return true
      If smaller → search right half
      If larger → search left half
4. If loop ends, return false.

---------------------------------------------------------

*/
