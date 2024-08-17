arr = [1, 2, 4, 22, 34,2];

// 1. push(): add element in start
arr.push(39)
console.log(arr);

//2. pop(): remove element from end
arr.pop()
console.log(arr);

//3. shift(): remove element from start
arr.shift()
console.log(arr);

//4. unshift(): add element in start
arr.unshift(1)
console.log(arr);

//5. splice(): add/remove element from array
//a. Remove 
arr.splice(1, 2)
console.log(arr);

//b. Add
arr.splice(1, 2, 2, 4, 22, 34)
console.log(arr);

//6 slice(): returns portion of array
console.log(arr.slice(1))

//7. concat(): Merges two or more arrays
arr_new = [56]
arr = arr.concat(arr_new);
console.log(arr);

//8. index.Of(): Returns the first Index of a value
console.log(arr.indexOf(2))

//9. includes(): check if an array contains value
console.log(arr.includes(2))

//10. forEach(): Executes a function on each array eleme
arr.forEach((element) => (
    console.log(element)
))

//11. map(): Creates a new array with the result of a function
console.log(arr.map((element) => (
    element * 2
)))

//12. filter(): Creates a new array with elements thats passes the test
console.log(arr.filter((element) => (
    element > 10))
)

//13. reduce(): Reduces an array into single value
console.log(arr.reduce((total, currentValue) => (total + currentValue), 0));

//14. find(): Returns the first element that passes the test
console.log(arr.find((element) => (element === 2)))

// 15. findIndex(): Returns the index of first element that passes a test
console.log(arr.findIndex((element) => (element === 2)))

//16. sort(): sorts array element in place
console.log(arr.sort())

//17. reverse(): reverse array element in place
console.log(arr.reverse())

//18. toReversed() & toSorted():  creates a new array, keeping the original array unchanged

//19. join(): Join array elements into string
console.log(arr.join('-'))

// 20. every(): Checks if all elements pass a test
console.log(arr.every((element) => (element >= 1)))

//21: some(): Checks if any element pass a test
console.log(arr.some((element) => (element < 1)))


