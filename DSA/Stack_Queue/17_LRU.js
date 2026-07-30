/*
Program for Least Recently Used (LRU) Page Replacement Algorithm


Problem Statement: Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity): Initialize the LRU cache with positive size capacity.
int get(int key): Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value): Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.
*/


class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


//Approach 1, Without Dummy Node, TC: O(1)
class LRUCache {
    constructor(x) {
        this.capacity = x
        this.size = 0;
        this.map = new Map()
        this.head = null;
        this.tail = null;
    }

    get(id) {
        if (!this.map.has(id)) return -1;

        let node = this.map.get(id);

        // Already MRU
        if (node !== this.tail) {

            // Remove node
            if (node === this.head) {
                this.head = node.next;
                this.head.prev = null;
            } else {
                node.prev.next = node.next;
                node.next.prev = node.prev;
            }

            // Add at tail
            node.prev = this.tail;
            node.next = null;
            this.tail.next = node;
            this.tail = node;
        }

        return node.data;
    }


    put(x) {
        if (this.capacity <= 0) return;

        if (this.map.has(x.id)) {
            let node = this.map.get(x.id);
            node.data = x;
            this.get(x.id);      // Move to tail
            return;
        }

        this.manageContainerSpace()

        let temp = new Node(x);
        if (!this.head) {
            this.head = temp;
            this.tail = temp
        } else {
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
        }

        this.size++;
        this.map.set(x.id, temp);
    }

    manageContainerSpace() {

        if (this.size < this.capacity) return


        let temp = this.head
        this.map.delete(temp.data.id)

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;

    }
}

let container = new LRUCache(3)
container.get('1')
container.put({ id: '2', name: 'nishchaya' })
container.put({ id: '1', name: 'narula' })
container.put({ id: '3', name: 'jimmy' })
container.put({ id: '4', name: 'tiger' })





//Approach 2, With Dummy Node, TC: O(1)

class LRUCache {
    constructor(x) {
        this.capacity = x;
        this.size = 0;
        this.map = new Map();

        // Dummy Nodes
        this.head = new Node(null);
        this.tail = new Node(null);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(id) {
        if (!this.map.has(id)) return -1;

        let node = this.map.get(id);

        // Remove from current position
        node.prev.next = node.next;
        node.next.prev = node.prev;

        // Insert before tail (Most Recently Used)
        node.prev = this.tail.prev;
        node.next = this.tail;

        this.tail.prev.next = node;
        this.tail.prev = node;

        return node.data;
    }

    put(x) {

        if (this.capacity <= 0) return;

        // Update existing node
        if (this.map.has(x.id)) {
            let node = this.map.get(x.id);
            node.data = x;
            this.get(x.id);      // Move to MRU
            return;
        }

        this.manageContainerSpace();

        let temp = new Node(x);

        // Insert before tail
        temp.prev = this.tail.prev;
        temp.next = this.tail;

        this.tail.prev.next = temp;
        this.tail.prev = temp;

        this.map.set(x.id, temp);
        this.size++;
    }

    manageContainerSpace() {

        if (this.size < this.capacity) return;

        // First real node (LRU)
        let temp = this.head.next;

        this.map.delete(temp.data.id);

        this.head.next = temp.next;
        temp.next.prev = this.head;

        this.size--;
    }
}



let container = new LRUCache(3);

container.put({ id: "2", name: "nishchaya" });
container.put({ id: "1", name: "narula" });
container.put({ id: "3", name: "jimmy" });

console.log(container.get("1"));

container.put({ id: "4", name: "tiger" });

console.log(container.get("2")); // -1
console.log(container.get("3"));
console.log(container.get("4"));