function createQueue() {
    return {
        queue: [],
        push(x) {
            this.queue.push(x)
        },
        pop() {
            return this.queue.shift();
        }
    }
}

const q1 = createQueue();
const q2 = createQueue();

console.log(q1.push === q2.push);  // false

/*
======================== DETAILED NOTES ========================

1. WHAT IS HAPPENING HERE (HIGH LEVEL)
------------------------------------------------
- createQueue() is a FACTORY FUNCTION
- Every time you call createQueue(), it RETURNS a NEW OBJECT
- That object contains:
  - its own `queue` array
  - its own `push` function
  - its own `pop` function

So:
- q1 and q2 are COMPLETELY SEPARATE objects
- No sharing happens automatically


2. WHY `q1.push === q2.push` IS FALSE
------------------------------------------------
- Functions in JavaScript are OBJECTS in memory
- Each time createQueue() runs:
    - a NEW `push` function object is created
    - a NEW `pop` function object is created

Memory picture:

q1:
{
  queue: [],
  push: function A,
  pop:  function B
}

q2:
{
  queue: [],
  push: function C,   // ❌ different from function A
  pop:  function D
}

So:
q1.push === q2.push  → false


3. WHY THIS IS A PROBLEM (MEMORY WASTE)
------------------------------------------------
- If you create 10,000 queues:
    - 10,000 copies of `push`
    - 10,000 copies of `pop`
- But `push` and `pop` logic is IDENTICAL
- This wastes memory and is NOT scalable

This is the CORE problem that constructor + prototype solves.


4. IMPORTANT REALIZATION (KEY TURNING POINT)
------------------------------------------------
Ask this question:
❓ Does `push` depend on unique data?
❌ No — logic is same for all queues

❓ Does `queue` depend on unique data?
✅ Yes — every queue needs its own array

So:
- Data should be per object
- Behavior should be shared


5. WHY PROTOTYPE EXISTS
------------------------------------------------
Prototype exists to solve EXACTLY this problem:
👉 Share methods without copying them

Instead of:
- Each object OWNS its own push function

We want:
- All objects POINT to ONE shared push function


6. HOW CONSTRUCTOR + PROTOTYPE FIXES THIS
------------------------------------------------
Example:

function Queue() {
  this.queue = [];
}

Queue.prototype.push = function (x) {
  this.queue.push(x);
};

Queue.prototype.pop = function () {
  return this.queue.shift();
};

const q1 = new Queue();
const q2 = new Queue();

Now memory looks like:

Queue.prototype:
  push -> ONE function
  pop  -> ONE function

q1:
  queue: []
  [[Prototype]] ---> Queue.prototype

q2:
  queue: []
  [[Prototype]] ---> Queue.prototype

So:
q1.push === q2.push  → true ✅


7. WHAT `new` KEYWORD REALLY DOES
------------------------------------------------
When you do:
const q1 = new Queue();

JavaScript internally:
1. Creates an empty object {}
2. Sets q1.__proto__ = Queue.prototype
3. Calls Queue() with this = q1
4. Returns q1

This automatic prototype linking is WHY sharing works.


8. WHY `class` EXISTS
------------------------------------------------
`class` is NOT new behavior.
It is SYNTAX SUGAR over constructor + prototype.

class Queue {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);
  }
}

Internally becomes the same prototype-based code.


9. CAN WE STILL CREATE NON-SHARED FUNCTIONS?
------------------------------------------------
YES — if we define functions inside constructor:

function Queue() {
  this.queue = [];
  this.push = function(x) {
    this.queue.push(x);
  };
}

Now:
q1.push === q2.push  → false ❌

This is allowed, but usually BAD for memory.


10. WHEN NON-SHARED FUNCTIONS ARE ACTUALLY OK
------------------------------------------------
When you need PRIVATE DATA (closure):

function Counter() {
  let count = 0; // private

  this.increment = function () {
    count++;
    return count;
  };
}

Prototype methods CANNOT access `count`.
So constructor functions are used intentionally here.


11. FINAL RULES TO REMEMBER (VERY IMPORTANT)
------------------------------------------------
- Factory function → ❌ no sharing by default
- Constructor + prototype → ✅ shared methods
- Constructor creates DATA
- Prototype provides BEHAVIOR
- class is just cleaner syntax
- Functions inside constructor = NOT shared
- Functions on prototype = SHARED


12. ONE-LINE SUMMARY (LOCK THIS IN)
------------------------------------------------
"Constructor creates per-object data, prototype shares behavior to save memory."

================================================
*/
