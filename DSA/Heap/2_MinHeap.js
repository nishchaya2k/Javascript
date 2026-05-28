/*

*/

class MinHeap {
    constructor() {
        this.h = [];
    }

    insert(x) {
        this.h.push(x)

        this.bubbleUp(this.h.length - 1);
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    bubbleUp(i) {
        while (i > 0 && this.h[this.parent(i)] > this.h[i]) {
            let p = this.parent(i);
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }

    extractMin() {
        if (this.h.length == 0) return null;
        if (this.h.length == 1) return this.h.pop();

        let min = this.h[0];
        this.h[0] = this.h.pop();
        this.bubbleDown(0);
        return min;
    }

    left(i) {
        return (i * 2) + 1
    }

    right(i) {
        return (i * 2) + 2;
    }

    bubbleDown(i) {
        let n = this.h.length;
        while (true) {
            let smallest = i;

            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.h[smallest] > this.h[l]) smallest = l;
            if (r < n && this.h[smallest] > this.h[r]) smallest = r;

            if (smallest == i) break;

            [this.h[smallest], this.h[i]] = [this.h[i], this.h[smallest]]
            i = smallest;
        }
    }
    size() {
        return this.h.length;
    }

    getMin() {
        return this.h[0];
    }
}

// const heap = new MinHeap()
// heap.insert(40)
// heap.insert(60)
// heap.insert(50)
// heap.insert(80)
// heap.insert(70)
// heap.insert(60)
// heap.insert(100)

// console.log(heap.h);
// console.log(heap.extractMin());
// console.log(heap.h);

module.exports = { MinHeap };


/*
Function Intuition

insert(x)
- New element always inserts at last
  to maintain Complete Binary Tree property
- Heap order may break
- bubbleUp fixes it

bubbleUp(i)
- Used after insertion
- If child is smaller than parent,
  move upward
- Keeps minimum element near root

extractMin()
- Root always contains minimum element
- Remove root
- Move last element to root
  to maintain Complete Binary Tree shape
- Heap order breaks
- bubbleDown fixes it

bubbleDown(i)
- Used after extractMin()
- Root may become bigger than children
- Move downward by swapping
  with smallest child
- Restores heap property


Complexities

insert()       -> O(log n)
extractMin()   -> O(log n)
bubbleUp()     -> O(log n)
bubbleDown()   -> O(log n)

Heap Space     -> O(n)

Why O(log n)?
- Heap height is log n
- Traversal happens only vertically

*/