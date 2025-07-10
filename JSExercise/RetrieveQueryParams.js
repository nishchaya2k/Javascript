// Write a function to retrieve query parameters from a URL String


const url = 'https://example.com?page=1&sort=desc&search=javascript';


const urlObject = new URL(url);

const searchParams = new URLSearchParams(urlObject.search);

console.log(urlObject.search)
console.log(searchParams)

let params = {};
searchParams.forEach((value, key) => {
    params[key] = value;
});

console.log(params);

