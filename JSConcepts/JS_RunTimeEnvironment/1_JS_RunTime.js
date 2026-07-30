/*
============================================================================
JAVASCRIPT ENGINE — COMPLETE NOTES (PART 1)
============================================================================


🔷 1. WHY DO WE EVEN NEED A JS ENGINE?
----------------------------------------------------------------------------

- Computers only understand machine-level instructions (0s and 1s).
- But developers write high-level JavaScript code.
- So something must convert JS code into machine code.

That component is:
→ JavaScript Engine


Definition:
JavaScript Engine is a program written in low-level languages
like C++ that parses, compiles, and executes JavaScript code.



============================================================================
🔷 2. WHAT ACTUALLY HAPPENS WHEN JS CODE RUNS?
============================================================================

JavaScript Code
      ↓
Parser checks syntax
      ↓
AST (Abstract Syntax Tree) created
      ↓
Interpreter starts execution
      ↓
Compiler optimizes hot code
      ↓
Machine code generated
      ↓
CPU executes instructions


Example:
console.log("Hello");


Important:
- JavaScript does NOT directly run in CPU.
- JS Engine acts as a bridge.



============================================================================
🔷 3. EXAMPLES OF JAVASCRIPT ENGINES
============================================================================

1. V8
   - Used in Chrome & Node.js

2. SpiderMonkey
   - Used in Firefox

3. JavaScriptCore
   - Used in Safari

4. Chakra
   - Used in old Microsoft Edge


Most famous:
→ V8 JavaScript engine



============================================================================
🔷 4. MAIN COMPONENTS INSIDE JS ENGINE
============================================================================

JS Engine
│
├── Parser
├── AST Generator
├── Interpreter
├── Compiler
├── Memory Heap
├── Call Stack
└── Garbage Collector


Each component has a specific responsibility.



============================================================================
🔷 5. PARSER
============================================================================

Definition:
Parser checks whether JavaScript syntax is valid or invalid.


Example:

let a = 10;   ✅ Valid

let = 10;     ❌ Invalid


Responsibilities:
- Syntax checking
- Tokenizing code
- Creating AST


If syntax is invalid:
→ SyntaxError occurs.



============================================================================
🔷 6. TOKENIZATION
============================================================================

Definition:
Tokenization means breaking code into smaller meaningful pieces
called tokens.


Example:

let a = 10;


Tokens:
- let
- a
- =
- 10
- ;


Important:
Parser first converts code into tokens,
then builds AST from those tokens.



============================================================================
🔷 7. AST (ABSTRACT SYNTAX TREE)
============================================================================

Definition:
AST is a tree-like structure representation of JavaScript code
which the engine understands internally.


Example:

let a = 10 + 20;


AST Rough Structure:

VariableDeclaration
   └── Identifier: a
   └── BinaryExpression (+)
          ├── 10
          └── 20


Important:
- Browser does NOT execute raw JS directly.
- It works internally using AST.



============================================================================
🔷 8. INTERPRETER
============================================================================

Definition:
Interpreter reads code line by line and executes it quickly.


Advantages:
- Fast startup time
- Immediate execution

Disadvantages:
- Less optimized
- Slower for repeated code execution


Important:
Interpreter is good for quick execution.



============================================================================
🔷 9. COMPILER
============================================================================

Definition:
Compiler converts JavaScript into optimized machine code
before execution.


Advantages:
- Faster execution
- Better performance

Disadvantages:
- Compilation takes time


Important:
Compiler is good for performance optimization.



============================================================================
🔷 10. JIT (JUST-IN-TIME) COMPILATION
============================================================================

Definition:
Modern JavaScript engines combine both Interpreter and Compiler
for better performance. This is called JIT Compilation.


Flow:

Code
 ↓
Parser
 ↓
AST
 ↓
Interpreter executes quickly
 ↓
Compiler optimizes frequently used code


Important:
- Modern engines like V8 use JIT Compilation.
- Combines fast startup + optimized execution.


============================================================================
END OF PART 1
NEXT:
- Memory Heap
- Call Stack
- Execution Context
- Garbage Collection
- Runtime Environment Intro
============================================================================
*/