/*
============================================================================
MEMORY HEAP & CALL STACK — COMPLETE NOTES (PART 1)
============================================================================


🔷 1. WHY ARE HEAP & CALL STACK NEEDED?
----------------------------------------------------------------------------

When JavaScript runs, engine mainly needs to manage 2 things:

1. Data Storage
2. Code Execution


Examples:

// Data
const user = {
   name: "Nishchaya"
};

// Execution
greet();


So JS Engine mainly uses:
1. Memory Heap
2. Call Stack



============================================================================
🔷 2. MEMORY HEAP
============================================================================

Definition:
Memory Heap is a large, flexible, unstructured memory region
used to store dynamic data during JavaScript execution.


Heap mainly stores:
- Objects
- Arrays
- Functions
- Closures
- Complex reference data


Example:

const user = {
   name: "Nishchaya"
};

const arr = [1,2,3];


Important:
Objects and arrays are stored inside Heap memory.



============================================================================
🔷 3. WHY HEAP EXISTS
============================================================================

Objects are:
- dynamic
- flexible
- unpredictable in size


Example:

const user = {};

user.name = "N";
user.age = 22;
user.city = "YNR";


Object size keeps changing dynamically.

Stack memory is:
- small
- ordered
- limited

So Stack is not good for flexible large storage.

Heap provides:
→ large flexible memory allocation.



============================================================================
🔷 4. IMPORTANT CLARIFICATION
============================================================================

Heap in JavaScript Internals:
❌ NOT:
- Min Heap
- Max Heap
- Priority Queue

Those are:
→ Data Structures

This Heap is:
→ Memory Region


Important Doubt Clarification:
When hearing "Heap", many developers initially connect it with
Min Heap / Max Heap from DSA.

But both are completely different concepts.



============================================================================
🔷 5. CAN WE SEE HEAP MEMORY?
============================================================================

YES — partially through Chrome DevTools.


Steps:
1. Open Chrome DevTools
2. Go to Memory tab
3. Click "Take Snapshot"


Heap Snapshot shows:
- objects
- arrays
- functions
- memory allocations
- retained memory


Important:
Heap is huge and dynamic,
so browser shows snapshots instead of live neat structure.



============================================================================
🔷 6. CALL STACK
============================================================================

Definition:
Call Stack is a stack data structure used by JavaScript Engine
to track function execution and execution contexts.


Call Stack answers:
→ What should execute right now?



============================================================================
🔷 7. WHY CALL STACK EXISTS
============================================================================

Example:

function a() {
   b();
}

function b() {
   c();
}

function c() {
   console.log("Hi");
}

a();


Engine must track:
- current executing function
- who called whom
- what finishes next

This is Call Stack’s responsibility.



============================================================================
🔷 8. CALL STACK FOLLOWS LIFO
============================================================================

LIFO:
→ Last In First Out

Like stacked plates.

Last added item gets removed first.



============================================================================
🔷 9. STEP-BY-STEP STACK FLOW
============================================================================

Initial Stack:

Global()


When a() executes:

Global()
a()


When b() executes:

Global()
a()
b()


When c() executes:

Global()
a()
b()
c()


After c() finishes:

Global()
a()
b()


Then:

Global()
a()


Finally:

Global()



============================================================================
🔷 10. IMPORTANT UNDERSTANDING
============================================================================

Heap
→ Stores actual data

Call Stack
→ Tracks execution flow


Better Understanding:
❌ Incorrect:
"Heap and Stack run parallelly"

✅ Correct:
"Heap and Call Stack work together during execution."


JavaScript is still:
→ Single Threaded



============================================================================
🔷 11. REAL CONNECTION BETWEEN STACK & HEAP
============================================================================

Example:

const user = {
   name: "N"
};


Simplified Internal Understanding:

Heap:
{
   name: "N"
}


Stack / Execution Context:
user → reference to Heap object


Important:
- Actual object stored in Heap
- Stack stores reference/access information



============================================================================
🔷 12. IMPORTANT INTERVIEW QUESTION
============================================================================

Q. What is the difference between Heap and Call Stack?

Answer:

Heap
→ Stores dynamic data like objects and arrays.

Call Stack
→ Tracks function execution and execution contexts.



============================================================================
🔷 13. IMPORTANT DOUBT CLARIFICATION
============================================================================

Q. Does Call Stack directly store objects?

Answer:
No.

Simplified understanding:
- Objects mostly stored in Heap
- Stack stores references to those objects



============================================================================
🔷 14. IMPORTANT CPU UNDERSTANDING
============================================================================

Q. Does Heap execute code?

Answer:
No.

Heap only stores data.

Execution flow is managed through:
→ Call Stack
→ JS Engine
→ CPU



============================================================================
🔷 15. FINAL UNDERSTANDING
============================================================================

Memory Heap
→ Large flexible storage area for dynamic data

Call Stack
→ Tracks execution order of JavaScript code

Connection:
→ Stack contexts use/access data stored in Heap


Both work together during JavaScript execution.



============================================================================
END OF PART 1
NEXT:
- Execution Context
- Global Execution Context
- Function Execution Context
- Stack Overflow
- Single Threaded Nature
- Garbage Collection
============================================================================
*/