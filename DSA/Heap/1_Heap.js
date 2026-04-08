
/*
- Its a complete Binay Tree, that comes with heap order property
- binary tree in which all levels are completely filled, except possibly the last level & In the last level, all nodes are as left as possible
*/

class MinHeap {
    constructor() {
        this.h = []
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    left(i) { return (2 * i) + 1; }
    right(i) { return (2 * i) + 2; }


    swap(i, j) { [this.h[i], this.h[j]] = [this.h[j], this.h[i]]; }

    insert(x) {
        this.h.push(x);
        this.bubbleUp(this.h.length - 1);
    }

    getMin() {
        return this.h.length ? this.h[0] : null;
    }

    extractMin() {
        if (!this.h.length) return null;
        if (this.h.length == 1) return this.h.pop();

        let min = this.h[0]
        this.h[0] = this.h.pop();

        this.bubbleDown(0);
        return min;
    }

    bubbleDown(i) {
        let n = this.h.length;

        while (true) {
            let smallest = i;
            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.h[l] < this.h[smallest]) smallest = l;
            if (r < n && this.h[r] < this.h[smallest]) smallest = r;

            if (smallest === i) break;

            this.swap(i, smallest);
            i = smallest;
        }
    }

    bubbleUp(i) {
        while (i > 0 && this.h[this.parent(i)] > this.h[i]) {
            let p = this.parent(i);
            this.swap(i, p);
            i = p;
        }
    }

    size() {
        return this.h.length;
    }

    isEmpty() {
        return this.h.length === 0;
    }

    build(arr = []) {
        this.h = [...arr];

        for (let i = Math.floor(this.h.length / 2) - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
}

const heap = new MinHeap();
heap.build([20, 5, 10, 2]);

