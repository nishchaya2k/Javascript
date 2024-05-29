//Q. Find the max count of consecutive 1’s in an array ?

const arr = [0, 1, 1, 0, 0, 1, 1, 1]

// 1st Approach, Iterating Array + Used String Cancatenate
let ones = ''
let count = 0
arr.forEach(Element => {
    return Element === 1 ? (
        ones += Element,
        count = Math.max(ones.length,count)
    ) : ones = ''
})

console.log(count)


// 2nd Approach, Iterating Array
let ones1 = 0
let count1 = 0
arr.forEach(Element => {
    return Element === 1 ? (
        ones1 += 1,
        count1 = Math.max(ones1, count1)
    ) : ones1 = 0
})

console.log(count1)
