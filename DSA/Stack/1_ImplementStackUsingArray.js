/*
Implement Stack using Array

Problem Statement: Implement a Last-In-First-Out (LIFO) stack using an array. 
The stack should support push, pop, top, and isEmpty.
*/

//  Approach 1: Using Dynamic JS Array 
class ArrayStack1 {
    constructor() {
        this.stack = [];
    }

    push(x) {
        this.stack.push(x);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stack.pop();
    }

    top() {
        if (this.isEmpty()) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

// Testing Approach 1
console.log("=== Approach 1 ===");
const stack1 = new ArrayStack1();
stack1.push(10);
stack1.push(20);
stack1.push(30);

console.log(stack1.top());    // 30
console.log(stack1.pop());    // 30
console.log(stack1.isEmpty()); // false
console.log(stack1.pop());    // 20
console.log(stack1.pop());    // 10
console.log(stack1.isEmpty()); // true


//  Approach 2: Using Fixed-Size Array 
class ArrayStack2 {
    constructor(size = 1000) {
        this.stackArray = new Array(size); // fixed size array
        this.capacity = size;               // maximum capacity
        this.topIndex = -1;                 // -1 means empty stack
    }

    push(x) {
        if (this.topIndex >= this.capacity - 1) {
            console.log("Stack overflow");
            return;
        }
        this.stackArray[++this.topIndex] = x;
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.stackArray[this.topIndex--];
    }

    top() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.stackArray[this.topIndex];
    }

    isEmpty() {
        return this.topIndex === -1;
    }
}

// Testing Approach 2
console.log("\n=== Approach 2 ===");
const stack2 = new ArrayStack2(5);
stack2.push(5);
stack2.push(10);
stack2.push(15);

console.log(stack2.top());     // 15
console.log(stack2.pop());     // 15
console.log(stack2.isEmpty()); // false
console.log(stack2.pop());     // 10
console.log(stack2.pop());     // 5
console.log(stack2.isEmpty()); // true
stack2.pop();                  // Stack is empty
stack2.push(1);
stack2.push(2);
stack2.push(3);
stack2.push(4);
stack2.push(5);
stack2.push(6);                // Stack overflow
