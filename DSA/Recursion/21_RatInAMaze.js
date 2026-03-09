/*
Rat in a Maze

Problem Statement: Given a grid of dimensions n x n. A rat is placed at coordinates (0, 0) and wants to reach at coordinates (n-1, n-1). Find all possible paths that rat can take to travel from (0, 0) to (n-1, n-1). The directions in which rat can move are 'U' (up) , 'D' (down) , 'L' (left) , 'R' (right).
The value 0 in grid denotes that the cell is blocked and rat cannot use that cell for travelling, whereas value 1 represents that rat can travel through the cell. If the cell (0, 0) has 0 value, then mouse cannot move to any other cell.
*/

let n = 5, grid = [
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1]
]

//Approach 1, TC: O(4^(N*N)). SC: O(N*N)

function ratInMaze_1(grid, n) {

    let res = [];
    let visited =  Array.from({ length: n }, () => Array(n).fill(false));
    function generate(i, j, str) {

        //base case
        if (i < 0 || j < 0 || i >= n || j >= n || grid[i][j] == 0 || visited[i][j]) return;

        if (i == n - 1 && j == n - 1) {
            res.push(str)
            return;
        }

        visited[i][j] = true;

        generate(i + 1, j, str + 'D')
        generate(i, j + 1, str + 'R')
        generate(i, j - 1, str + 'L')
        generate(i - 1, j, str + 'U')

        visited[i][j] = false;
    }


    generate(0, 0, "")
    return res;
}

console.log("Rat in a maze", ratInMaze_1(grid, n))

