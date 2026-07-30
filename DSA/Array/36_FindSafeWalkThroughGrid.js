/*
Find a Safe Walk Through a Grid

You are given an m x n binary matrix grid and an integer health.

You start on the upper-left corner (0, 0) and would like to get to the lower-right corner (m - 1, n - 1).

You can move up, down, left, or right from one cell to another adjacent cell as long as your health remains positive.

Cells (i, j) with grid[i][j] = 1 are considered unsafe and reduce your health by 1.

Return true if you can reach the final cell with a health value of 1 or more, and false otherwise.
*/

let grid = [[0, 1, 1, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 1, 1, 1, 0, 1], [0, 0, 1, 0, 1, 0]], health = 3

//Approach 1
function safeWalk_1(grid, health) {
    let n = grid.length;
    let m = grid[0].length, visited = Array.from({ length: n }, () => new Array(m).fill(0));

    function check(i, j, health) {

        //base case
        if (i < 0 || j >= m || j < 0 || i >= n) return false
        if (visited[i]?.[j] == 1) return false
        health -= grid[i][j];
        if (health < 1) return false;
        if (i == n - 1 && j == m - 1) return true;


        visited[i][j] = 1;
        let ans =
            check(i + 1, j, health) ||
            check(i, j + 1, health) ||
            check(i - 1, j, health) ||
            check(i, j - 1, health);

        visited[i][j] = 0;

        return ans;
    }

    return check(0, 0, health) ? true : false
}

console.log("Safe Walk", safeWalk_1(grid, health))


//Approach 2
function safeWalk_1(grid, health) {
   
}

console.log("Safe Walk", safeWalk_1(grid, health))
