// Q. Program to find longest word in a given sentence ?

let sentence = "JavaScript is a single threaded programming language"

//1st Approach 
let words = sentence.split(" ")  //return array of elements

let longestLength;
let longestString;

if (words[0]) {
    longestLength = words[0].length
    longestString = words[0]

    words.forEach(word => {
        if (word.length >= longestLength) {
            longestString = word;
            longestLength = word.length
        }
    })

    console.log(longestString)
}

else console.log("")


//2nd Approach
let longestString2 = sentence.split(" ").reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
}, "")

console.log(longestString2)







