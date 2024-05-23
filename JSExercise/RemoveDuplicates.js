// Q. Write a program to remove duplicates from an array ?

const arr = [2, 3, 4, 1, 4, 5, 6, 5, 3, 8];

// 1st Approach: using set
let new_arr = [...new Set(arr)]
console.log(new_arr)

//2nd Approach: filter ensures only the 1st occurrence of each element included in the result.
new_arr = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
})

console.log(new_arr)

// 3rd Approach: nested for loop, by tracking seen or not
let seen = new Array(arr.length).fill(false)
new_arr = [];

for (let i = 0; i < arr.length - 1; i++) {
    if (!seen[i])
        new_arr.push(arr[i])

    seen[i] = true;

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j])
            seen[j] = true;
    }
}

if (!seen[arr.length-1]) new_arr.push(arr[arr.length-1])
console.log(new_arr)
