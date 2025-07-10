// -> Infinite currying



//....................Example 1.....................

function sum(a) {
    return (b) => {
        if (b) return sum(a + b);
        else return a;
    }
}

console.log("Sum", sum(5)(6)(3)(2)())


//....................Example 2.....ES6 Way.........

const addition = a => b => b !== undefined ? addition(a + b) : a;

console.log("addition", addition(5)(6)(7)())



//




