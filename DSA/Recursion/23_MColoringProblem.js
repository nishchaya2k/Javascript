/*
M - Coloring Problem

Problem Statement: Given an undirected graph and a number m, determine if the graph can be colored with at most m colors such that no two adjacent vertices of the graph are colored with the same color.
*/

let v = 4, edges = [[0, 1], [1, 3], [2, 3], [3, 0], [0, 2]], m = 3;

function mColoringProblem_1(v, edges, m) {

    const mapAdj = new Map();
    const colorNode = new Map();

    function generate(color) {

        for (let [u, v] of edges) {

            if (!mapAdj.has(u)) mapAdj.set(u, []);
            mapAdj.get(u).push(v);

            if (!mapAdj.has(v)) mapAdj.set(v, []);
            mapAdj.get(v).push(u);

            colorNode.set(u, color)

        }

    }

    generate(1)
}

console.log("M Coloring Problem", mColoringProblem_1(v, edges, m))