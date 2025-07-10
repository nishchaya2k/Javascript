// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];


const sorting = (arr, key) => {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    })
}

console.log(sorting(data, 'age'))