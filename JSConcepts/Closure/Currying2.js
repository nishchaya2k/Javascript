//Practice Question:

//1. Addition

function Sum1(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const r1 = Sum1(2)  //receiving function
const r2 = r1(3);       //receiving function
const r3 = r2(4);       //receiving valiue
console.log(r3);


//2. ES6+ Arrow function

const Sum2 = (a) => (b) => (c) => (a + b + c);

const r = Sum2(3)(4)(5) // creates a chain of function calls, which expect arguments accordingy
console.log(r)

//3. Infinite Sum

//recursive way
const Sum3 = function (a) {
    return function (b) {
        if (b) return Sum3(a + b)
        else return a;                   //contains commulative sum
    }
}

const r4 = Sum3(4)(5)(5)(3)();
console.log(r4)

//ES6
const Sum3_1 = (a) => {
    return b => {
        if (b) return Sum3_1(a + b)
        else return a;
    }
}

const r4_1 = Sum3_1(4)(5)(5)(3)();
console.log(r4_1)

//single line
const Sum3_2 = a => b => b ? Sum3_2(a + b) : a
console.log(Sum3_2(4)(5)(5)(3)())


//4. sum(1,2)(3,4)


const Sum4 = (a, b) => {
    return function (c, d) {
        return a + b + c + d;
    }
}

console.log(Sum4(1, 2)(3, 4))

//5. sum(1,2..n)(5,6…n)…(n)()


//6. 

