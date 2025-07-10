//Fibonacci Sequence: Each element is the sum of previous two


const fib = n => {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}
const fibSeq = fib(4);

console.log("fibonacci Sequence", fibSeq)

// Using Memorization:



const fibNew = (n, memo) => {
    memo = memo || {};

    if (memo[n]) return memo[n];

    if (n <= 1) return n;

    return memo[n] = fibNew(n - 1, memo) + fibNew(n - 2, memo)
}

const fibSeqNew = fibNew(6, {});

console.log("fibonacci Sequence", fibSeqNew)

//0,1,1,2,3,5,8,13,21 