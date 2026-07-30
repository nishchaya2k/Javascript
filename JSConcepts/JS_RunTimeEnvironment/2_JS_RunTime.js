/*
============================================================================
INTERPRETER vs COMPILER vs JIT — FINAL NOTES
============================================================================


🔷 1. WHY DO WE NEED THEM?
----------------------------------------------------------------------------

- Computers only understand machine-level instructions.
- JavaScript is a high-level language.
- So JS code must be converted into machine code before CPU can execute it.

This conversion is handled using:
1. Interpreter
2. Compiler
3. JIT Compilation



============================================================================
🔷 2. IMPORTANT REALITY
============================================================================

Very Important:
→ CPU is ALWAYS the final executor.

Neither Interpreter nor Compiler directly execute on hardware.

They help by:
- translating code
- preparing executable instructions
- coordinating execution flow



============================================================================
🔷 3. INTERPRETER
============================================================================

Definition:
Interpreter reads code line-by-line, converts small chunks into
machine instructions, and immediately sends them for execution.


Flow:

Code
 ↓
Read small part
 ↓
Convert
 ↓
CPU executes immediately
 ↓
Move to next line


Example:

console.log("A");
console.log("B");


Important:
- Translation + execution happen together.
- No full optimization before execution.



============================================================================
🔷 4. ADVANTAGES OF INTERPRETER
============================================================================

1. Fast startup
2. Immediate execution
3. Good for browsers
4. Better initial page loading


Important:
- Browser can start running JS quickly.



============================================================================
🔷 5. DISADVANTAGES OF INTERPRETER
============================================================================

1. Slower repeated execution
2. Repeated translation overhead
3. Less optimized


Example:

for(let i = 0; i < 1000000; i++) {
   total += i;
}


Interpreter repeatedly:
- reads
- converts
- executes

again and again.



============================================================================
🔷 6. COMPILER
============================================================================

Definition:
Compiler converts larger sections of code into optimized machine
code before execution starts.


Flow:

Code
 ↓
Compile entire code / larger sections
 ↓
Generate optimized machine code
 ↓
CPU executes optimized code


Important:
- Conversion happens first.
- Execution happens later.



============================================================================
🔷 7. ADVANTAGES OF COMPILER
============================================================================

1. Faster execution
2. Optimized machine code
3. Better performance
4. Efficient for loops and repeated operations



============================================================================
🔷 8. DISADVANTAGES OF COMPILER
============================================================================

1. Slower startup
2. Compilation takes time
3. Not ideal for immediate execution


Important:
- User may wait before code starts running.



============================================================================
🔷 9. INTERPRETER vs COMPILER
============================================================================

| Interpreter                          | Compiler                          |
|-------------------------------------|-----------------------------------|
| Converts small chunks               | Converts larger code sections     |
| Translation + execution together    | Converts first, executes later    |
| Faster startup                      | Slower startup                    |
| Less optimized                      | Highly optimized                  |
| Slower repeated execution           | Faster execution                  |



============================================================================
🔷 10. WHY JIT WAS INTRODUCED
============================================================================

Problem:
- Interpreter → fast initially but slower later
- Compiler → optimized but slower initially

Modern engines needed:
1. Fast startup
2. Fast execution

Solution:
→ JIT Compilation



============================================================================
🔷 11. JIT (JUST-IN-TIME) COMPILATION
============================================================================

Definition:
JIT is a modern technique where JavaScript engines use both
Interpreter and Compiler together.


Flow:

Code
 ↓
Parser
 ↓
AST
 ↓
Interpreter starts execution quickly
 ↓
Engine monitors frequently used code
 ↓
Compiler optimizes hot code
 ↓
CPU executes optimized machine code


Important:
- Frequently used code is called Hot Code.
- Modern engines like V8 use JIT Compilation.



============================================================================
🔷 12. HOT CODE
============================================================================

Definition:
Hot Code means code that runs repeatedly or very frequently.


Example:

function add(a, b) {
   return a + b;
}

for(let i = 0; i < 100000; i++) {
   add(1, 2);
}


Engine detects:
→ add() is heavily used

Then:
→ Compiler optimizes it.



============================================================================
🔷 13. WHO DECIDES INTERPRETER OR COMPILER?
============================================================================

Important:
- Developers do NOT manually choose.
- JavaScript Engine dynamically decides.


Modern Flow:

1. Interpreter starts first
2. Engine monitors code behavior
3. Frequently used code sent to Compiler
4. Optimized machine code gets executed


Important:
JIT coordinates both Interpreter and Compiler together.



============================================================================
🔷 14. DEOPTIMIZATION
============================================================================

Definition:
If engine assumptions become invalid,
optimized code may be discarded.


Example:

Initially:
add(1, 2)

Later:
add("a", "b")


Optimization assumptions change,
so engine may fallback and reoptimize again.


Modern engines continuously:
- optimize
- deoptimize
- reoptimize



============================================================================
🔷 15. FINAL UNDERSTANDING
============================================================================

Interpreter
→ Converts small parts and immediately executes them.

Compiler
→ Generates optimized machine code before execution.

JIT
→ Uses Interpreter + Compiler together for fast startup
  and optimized performance.

CPU
→ Always performs the final hardware execution.


============================================================================
END
============================================================================
*/