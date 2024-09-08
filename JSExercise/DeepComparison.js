//Deep Comparison Between two Values to determine if they are equivalent

let obj1 = {
    user: {
        id: 1,
        name: "John Doe",
        details: {
            age: 28,
            address: {
                city: "Seattle",
                zip: "98101"
            }
        },
        hobbies: ["cycling", "photography"],
        friends: [
            {
                name: "Jane",
                contact: {
                    email: "jane@example.com"
                }
            }
        ]
    },
    active: true
}

let obj2 = {
    user: {
        id: 1,
        name: "John Doe",
        details: {
            age: 28,
            address: {
                city: "Seattle",
                zip: "98101"
            }
        },
        hobbies: ["cycling", "photography"],
        friends: [
            {
                name: "Jane",
                contact: {
                    email: "jane@example.com"
                }
            }
        ]
    },
    active: true
}


function typeCheck(v1, v2) {
    return (Object.prototype.toString.call(v1) === Object.prototype.toString.call(v2))
}


function compare(obj1, obj2) {

    //type check
    if (!typeCheck(obj1, obj2)) return false


    // Handle objects
    if (Object.prototype.toString.call(obj1) === '[object Object]') {
        var keys1 = Object.keys(obj1)
        var keys2 = Object.keys(obj2)

        if (keys1.length !== keys2.length) return false;

        for (const key of keys1) {
            if (!keys2.includes(key) || !compare(obj1[key], obj2[key])) return false
        }

        return true;

    }

    // Handle arrays
    if (Object.prototype.toString.call(obj1) === '[object Array]') {
        if (obj1.length !== obj2.length) return false;

        for (let i = 0; i < obj1.length; i++) {
            if (!compare(obj1[i], obj2[i])) return false;
        }
        return true;

    }

    // Handle primitive values
    return obj1 === obj2;
}

console.log(compare(obj1, obj2))


/*
In JavaScript, the order of keys in objects does not affect equality. As long as the objects have the same keys with the same values, they are considered equal in a deep comparison.

eg. Keys can be in any order, for below eg. we return true

let obj1 = {
    user: {
        id: 1,
        name: "John Doe"
    },
    active: true
};

let obj2 = {
    active: true,
    user: {
        id: 1,
        name: "John Doe"
    }
};

*/
