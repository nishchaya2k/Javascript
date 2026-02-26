/*
Word Search - Leetcode

Problem Statement: Given an m x n grid of characters board and a string word, return true if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

// Approach 1, Brute Force
let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
, word = "ABCD"

function isWordSearch(i, j, n, m, board, k, word, visited) {

    // base cases
    if (k === word.length) return true;
    if (i < 0 || j < 0 || i >= n || j >= m) return false;
    if (visited[`${i}${j}`]) return false;
    if (board[i][j] !== word[k - 1]) return false;

    visited[`${i}${j}`] = true;

    // check all directions
    if (
        isWordSearch(i + 1, j, n, m, board, k + 1, word, visited) ||
        isWordSearch(i, j + 1, n, m, board, k + 1, word, visited) ||
        isWordSearch(i, j - 1, n, m, board, k + 1, word, visited) ||
        isWordSearch(i - 1, j, n, m, board, k + 1, word, visited)
    ) {
        return true;
    }

    // backtrack
    visited[`${i}${j}`] = false;
    return false;
}

function wordSearch_1(board, word) {

    let n = board.length;
    let m = board[0].length;
    let visited = {}

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === word[0]) {
                if (isWordSearch(i, j, n, m, board, 1, word, visited)) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log("Word Search", wordSearch_1(board, word))