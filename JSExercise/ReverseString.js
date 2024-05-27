// Q. Program to find Reverse of a string without using built-in method ?

let string1 = "JavaScript" //
let string = [...string1]  //Spread operator

let end = string.length - 1
let start = 0

while (start <= end) {
    let temp = string[start]
    string[start] = string[end];
    string[end] = temp;

    start++;
    end--
}

let reversedString = ''
string.forEach(char => (
    reversedString += char
))
console.log(reversedString)




/*
Spread syntax:  "expands" an array into its elements, 
Rest syntax:    collects multiple elements and "condenses" them into a single element
*/
