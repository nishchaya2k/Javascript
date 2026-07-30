/*
Dijkstra's Algorithm is a greedy graph algorithm used to find the shortest
distance from a single source node to all other reachable nodes in a weighted graph
(with non-negative edge weights).

How It Works:

1. Assign a distance of 0 to the source node and ∞ (Infinity) to all other nodes.

2. Insert the source node into the Priority Queue with distance 0.

3. Repeatedly remove the node having the smallest current distance.
   (Greedy Choice)

4. For each neighbour:
   -> newDistance = currentDistance + edgeWeight
   -> If newDistance < current shortest distance,
      update the neighbour's distance and push it into the Priority Queue.
   (This process is called Relaxation.)

5. Example:

      A ----4----> B

      A ----1----> C ----2----> B

   Current shortest distance to B = 4

   New distance via C = 1 + 2 = 3

   Since 3 < 4,
   update dist[B] = 3 and push B into the Priority Queue again.

6. Continue until the Priority Queue becomes empty.
   At this point, every node contains its shortest distance from the source.


Limitations:

1. Works only for non-negative edge weights.
2. Negative edge weights can produce a shorter path after a node has already
   been processed, breaking Dijkstra's greedy assumption.
3. For graphs with negative edge weights, use Bellman-Ford.
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