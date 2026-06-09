/*
Minimum Cost to Connect Sticks:

You have some sticks with positive integer lengths. You can connect any two sticks together to form a longer stick by paying a cost equal to the sum of their lengths. You must connect all the sticks into one single stick.

Return the minimum cost of connecting all the sticks.
*/

const { MinHeap } = require("./2_MinHeap");

let arr = [4, 2, 7, 6, 9]

//Approach 1, TC: O(n log n), SC: O(n)
function minCostToConnectSticks_1(arr) {

    let n = arr.length;
    let heap = new MinHeap();

    for (let i = 0; i < n; i++) {
        heap.insert(arr[i]);
    }

    let sum = 0;

    while (heap.size() > 1) {
        let s1 = heap.extractMin();
        let s2 = heap.extractMin();

        sum += s1 + s2;
        heap.insert(s1 + s2);
    }

    return sum;
}

console.log(minCostToConnectSticks_1(arr))



/*
Intuition:

Whenever we connect two sticks,
their combined length becomes a new stick
that may participate in future merges again.

So if we create large sticks too early,
their large value gets added repeatedly in later operations,
increasing the total cost.

To minimize the final cost:
- always merge the two smallest sticks first
- this keeps larger merged values delayed toward the end

After merging:
- insert the new combined stick back
- because it must again compete with remaining sticks

A Min Heap helps efficiently:
- get the two smallest sticks
- maintain dynamic ordering after every merge

This follows the same greedy idea as:
- Huffman Coding
- Optimal Merge Pattern
*/