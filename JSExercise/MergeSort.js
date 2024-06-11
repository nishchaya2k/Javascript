// Q. Given 2 arrays that are sorted[0, 3, 4, 31] and[4, 6, 30].Merge them and sort[0, 3, 4, 4, 6, 30, 31] ?


let a = [0, 3, 4, 31]
let b = [4, 6, 30]

// 1st Approach: Merge in new Array
let c = []
let i = 0;
let j = 0;

enda = a.length;
endb = b.length;

while (starta < enda && startb < endb) {
    if (a[starta] <= b[startb]) {
        c.push(a[starta])
        starta++;
    }
    else {
        c.push(b[startb])
        startb++
    }
}

let remaining = starta < enda ? a.slice(starta) : b.slice(startb)
c = c.concat(remaining)
//or
// c = c.concat(a.slice(starta)).concat(b.slice(startb))

console.log(c)




/*
concat:  creates a new array that includes all elements from the original array followed by all elements from the provided arrays.

concat does not modify the original arrays but instead returns a new array.
*/
