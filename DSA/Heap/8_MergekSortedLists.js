/*
Merge k Sorted Lists:

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

const { llCreate } = require("../LinkedList/1_InsertAtHeadLinkedList");

let lists = [[1, 4, 5], [1, 3, 4], [2, 6]];

//Approach 1, Sequential Sort
//Approach 2, Using Heap, TC -> O(n log k), SC -> O(k)

class Heap {
    constructor() {
        this.h = [];
    }

    left(i) {
        return (2 * i) + 1;
    }

    right(i) {
        return (2 * i) + 2;
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    insert(x) {
        this.h.push(x);
        this.bubbleUp(this.h.length - 1);
    }

    bubbleUp(i) {
        while (i > 0 && this.h[i].data < this.h[this.parent(i)].data) {
            let p = this.parent(i);
            [this.h[i], this.h[p]] = [this.h[p], this.h[i]]
            i = p
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

    bubbleDown(i) {
        let n = this.h.length;
        while (true) {
            let smallest = i;

            let l = this.left(i);
            let r = this.right(i);

            if (l < n && this.h[smallest].data > this.h[l].data) smallest = l;
            if (r < n && this.h[smallest].data > this.h[r].data) smallest = r;

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

function mergeKSortedList_2(lists) {

    let head = [], n = lists.length;
    let heap = new Heap();

    for (let i = 0; i < n; i++) {
        head.push(llCreate(lists[i]));
    }

    for (let i = 0; i < n; i++) {
        heap.insert(head[i]);
    }

    let dummy = new llCreate(0, null);
    head = dummy;

    while (heap.size()) {
        let min = heap.extractMin()
        dummy.next = min;
        dummy = dummy.next;
        if (min.next) {
            heap.insert(min.next)
        }
    }
    dummy.next = null;

    return head.next;
}

console.log("Merge K Sorted List", mergeKSortedList_2(lists))


/*

Intuition

- Heap stores current active node
  from each linked list

- Smallest node among k lists
  is always at heap top

- After extracting minimum node,
  insert its next node from same list

Why Heap Size = k ?

- Heap stores only one active node
  per linked list

- So maximum heap nodes
  can only be k

Why not n ?

- Lists are already sorted

- We do not need all nodes at once

- After extracting one node,
  only its next node can become
  future candidate


Complexities

TC -> O(n log k)
SC -> O(k)

n -> total nodes
k -> total linked lists

*/