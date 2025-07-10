// Currying: - its a technique of evaluating sequence of functions with single or multiple arguments

// Its a programming technique where you take a function with multiple arguments, and you turn it into smaller sequential functions where you pass one argument at a time.

//...................Example 1....................


function add(a, b) {
    return a + b;
}

console.log(add(5, 6));


function addition(a) {
    return (b) => {
        return a + b;
    }
}

console.log(addition(5)(6))


//.......................Example 2..................

const list = [
    {
        id: 1,
        name: 'Steve',
        email: 'steve@example.com',
    },
    {
        id: 2,
        name: 'John',
        email: 'john@example.com',
    },
    {
        id: 3,
        name: 'Pamela',
        email: 'pam@example.com',
    },
    {
        id: 4,
        name: 'Liz',
        email: 'liz@example.com',
    },
];


const noJohn = list.filter((item) => item.name !== 'John')
console.log("noJohn", noJohn)




//Resuable
function filterListByName(list, name) {
    return list.filter((item) => item.name !== name)
}

const nameFilteredList = filterListByName(list, 'Steve')
console.log("nameFilteredList", nameFilteredList)




// imagine that you are going to use the same filter function in two or more places in the same code, or maybe you want to keep the code DRY and you want to place the filtering in a variable on its own, here is where "currying" comes to action!

const filtering = (name) => (item) => item.name !== name;


function filterListByName_new(list, name) {
    return list.filter(filtering(name))
}

const nameFilteredList_new = filterListByName_new(list, 'Liz')

console.log("nameFilteredList_new", nameFilteredList_new)


/*

old fashion function syntax:

function filterByName(list, name) {
    return list.filter(function (nameToFilter) {
        // nameToFilter is declared at this point
        return function (item) {
            // item is declared here
            return item.name !== nameToFilter;
        }
    }(name));
  }
  
*/