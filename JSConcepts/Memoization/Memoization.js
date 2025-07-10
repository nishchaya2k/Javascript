// Memoization is an optimization technique that makes applications more efficient and hence faster, It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.


// ...............Exapmple 1.....................

let sum = 0;
const calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const memorize = (fun) => {
    let cache = {};
    return function (...args) {
        let n = args[0];

        if (n in cache) {
            console.log("cache")
            return cache[n]
        }
        else {
            console.log("calculating fist time")
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time();
const efficient = memorize(calc);
console.log(efficient(5));
console.timeEnd();