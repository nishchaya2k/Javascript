/*
Dijkstra's Algorithm is a "greedy" graph search algorithm used to find the shortest path from a single source node to all other reachable nodes in a weighted graph


How It Works:

1. Assign a distance of 0 to the source node and ∞ (infinity) to all other nodes.
2. Mark all nodes as unvisited.
3. Select the unvisited node with the smallest tentative distance.
4. For each of its neighbors:
 -> Calculate the distance through the current node.
 -> If this distance is smaller than the neighbor's current distance, update it.
5. Mark the current node as visited.
6. Repeat until all nodes are visited or the destination is reached.



a. Limitations and Complexities:

Negative Weights: Dijkstra's algorithm cannot be used on graphs with negative edge weights. For those, algorithms like Bellman-Ford are required.

Time Complexity: Depending on the implementation, it can be O(V²) for simple array implementations or \(O((E + V) \log V)\) when using a Min-Heap/Priority Queue (where V is the number of vertices and E is the number of edges).
*/

let V = 3, edges = [[0, 1, 1], [1, 2, 3], [0, 2, 6]], src = 2

//Approach 1, TC: O(E log E), SC: O(V + E)
function dijkstra(v, edges, src) {
    //build adjacency list
    const graph = Array.from({ length: v }, () => []);

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, w]) //undirected graph
    }

    const dist = new Array(v).fill(Infinity);
    dist[src] = 0;


    //[distance,node]
    const pq = [[0, src]];

    while (pq.length > 0) {

        //always process the smallest distance, thats what dijkista states
        pq.sort((a, b) => a[0] - b[0]);

        const [currDist, node] = pq.shift();

        // Skip outdated entry
        if (currDist > dist[node]) continue;

        for (const [next, weight] of graph[node]) {
            const newDist = currDist + weight;
            if (newDist < dist[next]) {
                dist[next] = newDist;
                pq.push([newDist, next]);
            }
        }

    }
    return dist
}

console.log("Shortest Path",dijkstra(V, edges, src));