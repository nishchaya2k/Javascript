let s1 = "nish";
let s2 = "chaya";

// Extend String.prototype with a custom method
String.prototype.myConcat = function (str) {
    return this + str;
}

// Use the native concat method
const result = s1.concat(s2);  // "nishchaya"

// Use the custom method
const result_polyfill = s1.myConcat(s2); // "nishchaya"

// Output results
console.log(result);          // Outputs: "nishchaya"
console.log(result_polyfill); // Outputs: "nishchaya"
