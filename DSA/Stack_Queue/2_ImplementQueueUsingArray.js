/*
Problem Statement: Implement a First-In-First-Out (FIFO) queue using an array. The implemented queue should support the following operations: push, dequeue, pop, and isEmpty.

Implement the ArrayQueue class:

void push(int x): Adds element x to the end of the queue.
int pop(): Removes and returns the front element of the queue.
int peek(): Returns the front element of the queue without removing it.
boolean isEmpty(): Returns true if the queue is empty, false otherwise.
*/

class Queue {
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        if (this.isEmpty()) return undefined;
        return this.queue.shift(); //fifo
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.queue[0]
    }

    isEmpty() {
        return this.queue.length === 0
    }

}

const q1 = new Queue
const q2 = new Queue
q1.push(10)
q1.push(10)
q2.push(20)

console.log(q1.peek());   // 10
console.log(q1.pop());    // 10
console.log(q1.pop());    // 20
console.log(q1.isEmpty()); // true

console.log(q1.push === q2.push);
