/*
N Queen Problem | Return all Distinct Solutions to the N-Queens Puzzle

Problem Statement: The n-queens is the problem of placing n queens on n × n chessboard such that no two queens can attack each other. Given an integer n, return all distinct solutions to the n -queens puzzle. Each solution contains a distinct boards configuration of the queen's placement, where ‘Q’ and ‘.’ indicate queen and empty space respectively.
*/


let n = 4;

function buildSolution(n, sol) {
    let board = [];
    for (let i = 0; i < n; i++) {
        let arr = new Array(n).fill('.');
        for (let j = 0; j < n; j++) {
            if (sol[j].i == i) {
                arr[sol[j].j] = 'Q';
                break;
            }
        }
        board.push(arr.join(''))
    }
    return board
}

function checkPosition_1(i, j, visited) {
    for (let k = 0; k < visited.length; k++) {
        let r = visited[k].i - i;
        let c = visited[k].j - j;

        if (Math.abs(r) == Math.abs(c) || i == visited[k].i || j == visited[k].j) return false;
    }
    return true;
}

//Approch 1, Recursion, TC: O(N! × N), SC: O(N)
function nQueenProblem_1(n) {
    let res = [];
    let visited = []

    function generate(j, queen) {

        if (queen == n) {
            res.push([...visited])
            return
        }

        for (let i = 0; i < n; i++) {
            if (checkPosition_1(i, j, visited)) {
                visited.push({ i, j })
                generate(j + 1, queen + 1);
                visited.pop()
            }
        }
    }


    generate(0, 0)

    return res.map((sol) => buildSolution(n, sol))
}

console.log("N Queen Problem", nQueenProblem_1(n))



function checkPosition_2(i, j, board, n) {
    let row = i;
    let col = j;

    while (row >= 0 && col >= 0) {
        if (board[row][col] === 'Q') return false;
        row--;
        col--;
    }

    row = i;
    col = j;

    while (col >= 0) {
        if (board[row][col] == 'Q') return false;
        col--;
    }


    row = i;
    col = j;

    while (row < n && col >= 0) {
        if (board[row][col] === 'Q') return false;
        row++;
        col--;
    }

    return true;
}



//Approch 2, Recursion, TC: O(N! × N), SC: O(N²)
function nQueenProblem_2(n) {
    let res = [];
    let board = []

    function generate(j) {

        if (j == n) {
            res.push(board.map(row => [...row]))
            return
        }

        for (let i = 0; i < n; i++) {
            if (checkPosition_2(i, j, board, n)) {
                board[i][j] = 'Q'
                generate(j + 1);
                board[i][j] = '.'
            }
        }
    }

    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.')
    }


    generate(0)

    return res;
}

console.log("N Queen Problem", nQueenProblem_2(n))





//Approch 3, Recursion, TC: O(N!), SC: O(N²)
function nQueenProblem_3(n) {
    let res = [];
    let board = [];
    let upperDiagonal = new Array((2 * n) - 1).fill(0);
    let lowerDiagonal = new Array((2 * n) - 1).fill(0);
    let leftRow = new Array(n).fill(0);

    function generate(j) {
        if (j == n) {
            res.push(board.map(row => [...row].join('')))
            return
        }

        for (let i = 0; i < n; i++) {
            if (leftRow[i] == 0 && lowerDiagonal[i + j] == 0 && upperDiagonal[n - 1 + j - i] == 0) {
                board[i][j] = 'Q';

                leftRow[i] = 1;
                lowerDiagonal[i + j] = 1;
                upperDiagonal[n - 1 + j - i] = 1;

                generate(j + 1);

                board[i][j] = '.';
                leftRow[i] = 0;
                lowerDiagonal[i + j] = 0;
                upperDiagonal[n - 1 + j - i] = 0;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.')
    }


    generate(0)

    return res;
}

console.log("N Queen Problem", nQueenProblem_3(n))







