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

//Approach 1, TC: O(n)
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





//Approach 2, TC: O(1) Optimal Approach - Avoid (n) to O(1) by creating freq. of DLL
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;

        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.size = 0;
    }

    addLast(node) {
        let prev = this.tail.prev;

        prev.next = node;
        node.prev = prev;

        node.next = this.tail;
        this.tail.prev = node;

        this.size++;
    }

    remove(node) {

        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = null;
        node.next = null;

        this.size--;
    }

    removeFirst() {

        if (this.size === 0) return null;

        let node = this.head.next;

        this.remove(node);

        return node;
    }

    isEmpty() {
        return this.size === 0;
    }
}

class LFUCache {

    constructor(capacity) {

        this.capacity = capacity;
        this.size = 0;

        // key -> node
        this.keyNodeMap = new Map();

        // freq -> DLL
        this.freqMap = new Map();

        this.minFreq = 0;
    }

    updateFrequency(node) {

        let oldFreq = node.freq;

        let oldList = this.freqMap.get(oldFreq);

        oldList.remove(node);

        if (oldList.isEmpty()) {

            this.freqMap.delete(oldFreq);

            if (this.minFreq === oldFreq) {
                this.minFreq++;
            }
        }

        node.freq++;

        if (!this.freqMap.has(node.freq)) {
            this.freqMap.set(node.freq, new DoublyLinkedList());
        }

        this.freqMap.get(node.freq).addLast(node);
    }

    get(key) {

        if (!this.keyNodeMap.has(key)) {
            return -1;
        }

        let node = this.keyNodeMap.get(key);

        this.updateFrequency(node);

        return node.value;
    }

    put(key, value) {

        if (this.capacity === 0) return;

        // Key already exists
        if (this.keyNodeMap.has(key)) {

            let node = this.keyNodeMap.get(key);

            node.value = value;

            this.updateFrequency(node);

            return;
        }

        // Cache full
        if (this.size === this.capacity) {

            let minFreqList = this.freqMap.get(this.minFreq);

            let nodeToRemove = minFreqList.removeFirst();

            this.keyNodeMap.delete(nodeToRemove.key);

            if (minFreqList.isEmpty()) {
                this.freqMap.delete(this.minFreq);
            }

            this.size--;
        }

        // Create new node
        let newNode = new Node(key, value);

        this.minFreq = 1;

        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new DoublyLinkedList());
        }

        this.freqMap.get(1).addLast(newNode);

        this.keyNodeMap.set(key, newNode);

        this.size++;
    }
}

const cache = new LFUCache(2);

cache.put(1, 10);
cache.put(2, 20);

console.log(cache.get(1)); // 10

cache.put(3, 30); // removes key 2

console.log(cache.get(2)); // -1
console.log(cache.get(3)); // 30

cache.put(4, 40); // removes key 1

console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 30
console.log(cache.get(4)); // 40