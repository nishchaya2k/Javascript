/*
M - Coloring Problem

Problem Statement: Given an undirected graph and a number m, determine if the graph can be colored with at most m colors such that no two adjacent vertices of the graph are colored with the same color.
*/

let v = 4, edges = [[0, 1], [1, 3], [2, 3], [3, 0], [0, 2]], m = 3;

//Approach 1, TC: O(m^n), SC: O(n)
function mColoringProblem_1(v, edges, m) {

    const mapAdj = new Map();
    const colorNode = new Map();

    for (let [u, v] of edges) {

        if (!mapAdj.has(u)) mapAdj.set(u, []);
        mapAdj.get(u).push(v);

        if (!mapAdj.has(v)) mapAdj.set(v, []);
        mapAdj.get(v).push(u);
    }

    // Take nodes dynamically from graph
    const nodes = [...mapAdj.keys()];


    function checkCurrentNode(node, color) {
        for (let neighbor of mapAdj.get(node)) {
            if (colorNode.get(neighbor) == color) return false;
        }
        return true;
    }

    function generate(index) {

        if (index == nodes.length) return true;

        let node = nodes[index];

        for (let c = 1; c <= m; c++) {
            if (checkCurrentNode(node, c)) {
                colorNode.set(node, c);
                if (generate(index + 1)) return true;

                colorNode.delete(node)
            }
        }
    }

    return generate(0) ? 1 : 0
}

console.log("M Coloring Problem", mColoringProblem_1(v, edges, m))


/**
 Intuition (How to Think)

 We need to assign a color to each node such that:
 no two adjacent nodes have the same color,
 and we use at most m colors.

 For each node, we have m possible color choices.
 But a color is valid only if none of its neighbors already use it.

 The difficulty is that a choice that looks valid now
 may cause a conflict for future nodes.

 So we cannot make a final decision greedily.

 Approach:
 For each node:
   try a color from 1 to m
   check if it is safe (no neighbor has same color)
   if safe, assign it and move to next node
   if later it fails, undo the assignment and try another color

 Core idea:
 Try all possible valid assignments and backtrack whenever a conflict occurs.

 One-line intuition:
 Try a color, move forward, and backtrack if it leads to a conflict.
*/