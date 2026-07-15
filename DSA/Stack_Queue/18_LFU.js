/*
LFU Cache

Problem Statement: Design and implement a data structure for a Least Frequently Used (LFU) cache.

Implement the LFUCache class with the following functions:

LFUCache(int capacity): Initialize the object with the specified capacity.

int get(int key): Retrieve the value of the key if it exists in the cache; otherwise, return -1.
void put(int key, int value): Update the value of the key if it is present in the cache, or insert the key if it is not already present. If the cache has reached its capacity, invalidate and remove the least frequently used key before inserting a new item. In case of a tie (i.e., two or more keys with the same frequency), invalidate the least recently used key.

A use counter is maintained for each key in the cache to determine the least frequently used key. The key with the smallest use counter is considered the least frequently used.

When a key is first inserted into the cache, its use counter is set to 1 due to the put operation. The use counter for a key in the cache is incremented whenever a get or put operation is called on it. Ensure that the functions get and put run in O(1) average time complexity.
*/

class Node {
    constructor(data) {
        this.count = 1;
        this.data = data;
        this.prev = null
        this.next = null;
    }
}

class LFUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.map = new Map();

        //dummy nodes
        this.head = new Node(0);
        this.tail = new Node(0);

        //linking dummy nodes
        this.tail.count = Infinity;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(id) {
        if (!this.map.has(id)) return -1;

        let node = this.map.get(id);
        node.count++;

        this.updateNode(node)
        return node.data;
    }
    put(data) {
        if (this.capacity === 0) return;
        if (this.map.has(data.id)) {
            let node = this.map.get(data.id);
            node.data = data;
            this.get(data.id)
        }
        else {
            this.manageSpace();
            let node = new Node(data);

            let temp = this.head.next;

            this.head.next = node;
            node.next = temp;
            temp.prev = node;
            node.prev = this.head

            this.map.set(data.id, node);
            this.size++;

            this.updateNode(node);
        }

    }
    updateNode(node) {
        // Save the next node before removing
        let temp = node.next;

        // Remove node from its current position
        node.prev.next = node.next;
        node.next.prev = node.prev;

        while (temp != this.tail && temp.count <= node.count) {
            temp = temp.next;
        }

        // insert before temp
        node.next = temp;
        node.prev = temp.prev;

        temp.prev.next = node;
        temp.prev = node;
    }


    manageSpace() {
        if (this.size < this.capacity) return;

        // First real node (LRU)
        let temp = this.head.next;
        this.map.delete(temp.data.id)

        this.head.next = temp.next;
        temp.next.prev = this.head;

        this.size--;
    }

}

const capacity = 5;
let container = new LFUCache(capacity)

container.put({ id: "2", name: "nishchaya" });
container.put({ id: "1", name: "narula" });
container.put({ id: "3", name: "jimmy" });