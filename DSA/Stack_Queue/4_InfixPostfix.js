/*
Infix to Postfix

Problem Statement: Given an infix expression, Your task is to convert the given infix expression to a postfix expression.
*/

let exp = " (p + q) * (m - n)  "

function precedence(op) {
    if (op === '^') return 3;
    if (op === '*' || op === '/') return 2;
    if (op === '+' || op === '-') return 1;
    return -1;
}


function isOperator(ch) {
    return ['+', '-', '*', '/', '^'].includes(ch);
}
//Approach 1
function infixToPostFix(exp) {

    exp = exp.replace(/\s+/g, '');

    let stack = [];
    let postfix = '';


    for (let ch of exp) {
        // Operand
        if (!isOperator(ch) && ch !== '(' && ch !== ')') {
            postfix += ch;
        }  // Opening bracket
        else if (ch === '(') {
            stack.push(ch);
        }  // Closing bracket
        else if (ch === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // remove '('
        }
        else {
            while (
                stack.length &&
                stack[stack.length - 1] !== '(' &&
                precedence(stack[stack.length - 1]) >= precedence(ch)
            ) {
                postfix += stack.pop();
            }
            stack.push(ch);
        }
    }
    // Remove remaining operators (ignore '(')
    while (stack.length) {
        let top = stack.pop();
        if (top !== '(') postfix += top;
    }

    return postfix;
}

console.log("Infix To PostFix", infixToPostFix(exp))




/*
========================================
WHY DO WE NEED INFIX → PREFIX / POSTFIX ?
========================================

1) HOW HUMANS VS MACHINES THINK
--------------------------------
- Humans write expressions in INFIX form:
    A + B
    (A + B) * C

- INFIX depends on:
    • Brackets ()
    • Operator precedence (* before +)
    • Associativity

- Machines do NOT naturally understand precedence or brackets.
  They need extra logic to interpret INFIX.


2) PROBLEM WITH INFIX EXPRESSIONS
---------------------------------
To evaluate INFIX, a machine must:
- Handle nested brackets
- Apply precedence rules (BODMAS)
- Look ahead / backtrack
- Use complex parsing logic

This makes direct evaluation:
- Complicated
- Error-prone
- Hard to optimize


3) WHY PREFIX / POSTFIX EXISTS
-------------------------------
Prefix ( + A B )
Postfix ( A B + )

Key idea:
→ Order of execution is already FIXED
→ No brackets needed
→ No precedence rules needed

Meaning:
- Operator tells EXACTLY when to apply
- Operands are already in correct order


4) CORE ADVANTAGE (MOST IMPORTANT)
----------------------------------
Prefix / Postfix can be evaluated using:
→ ONLY A STACK
→ ONE LEFT-TO-RIGHT PASS

Algorithm becomes:
- Push operands
- Pop operands when operator appears
- Apply operation
- Push result back

No confusion. No ambiguity.


5) RELATION WITH AST (COMPILER VIEW)
------------------------------------
- Compilers first convert INFIX code into AST
- AST structure encodes precedence automatically
- Postfix = Post-order traversal of AST

So:
INFIX → AST → POSTFIX / BYTECODE → EXECUTION


6) REAL-WORLD USAGE
-------------------
Prefix / Postfix concepts are used in:
- Compilers & interpreters
- Calculator engines
- Expression evaluators
- Virtual machines (stack-based execution)
- Rule engines & formula parsing

Even JavaScript engines do this internally.


7) WHY DSA TEACHES THIS TOPIC
-----------------------------
This topic trains:
- Stack mastery
- Parsing logic
- Operator precedence handling
- Expression evaluation
- Compiler-level thinking

You may not use it daily,
but it upgrades how you THINK as a developer.


8) ONE-LINE SUMMARY (REMEMBER THIS)
-----------------------------------
Humans write INFIX.
Compilers understand AST.
Machines execute PREFIX / POSTFIX.

========================================
END OF NOTES
========================================
*/
