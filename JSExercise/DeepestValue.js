//Get the deepest value from an object using a string

//1. Considering only Objects


function deepest(obj) {
    var maxDepth = -1;
    var deepestValue;

    function traverse(obj, currentDepth) {

        let keys = Object.keys(obj)

        for (let i = 0; i < keys.length; i++) {
            if (obj[keys[i]] !== null && Object.prototype.toString.call(obj[keys[i]]) === '[object Object]') {
                traverse(obj[keys[i]], currentDepth + 1);
            } else {
                if (maxDepth < currentDepth) {
                    deepestValue = obj[keys[i]]
                    maxDepth = currentDepth;
                }
            }
        }
    }

    traverse(obj, 0)
    return deepestValue;
}


let inputObj = {
    city: {
        indore: {
            area: "Vijay Nagar",
            cafe: {
                farzi: {
                    address: "lal gali, No. 4"
                }
            },
            pincode: "123333",
            ward: 21,
        }
    },
};

console.log(deepest(inputObj))


//1.1 Consider Object and Array both as nested

function deepest1(obj) {
    let maxDepth = -1;
    let deepestValue;

    function traverse(o, currentDepth) {
        if (Array.isArray(o)) {
            // Traverse through each element of the array
            for (let i = 0; i < o.length; i++) {
                traverse(o[i], currentDepth + 1); // Increase depth for array elements
            }
        } else if (o !== null && typeof o === 'object') {
            // Traverse through each property of the object
            let keys = Object.keys(o);
            for (let i = 0; i < keys.length; i++) {
                traverse(o[keys[i]], currentDepth + 1); // Increase depth for nested objects
            }
        } else {
            // For primitive values, update if the current depth is the greatest
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
                deepestValue = o;
            }
        }
    }

    traverse(obj, 0); // Start traversal with depth 0
    return deepestValue; // Return the deepest value found
}

// Example usage with the provided object
let inputObj1 = {
    city: {
        indore: {
            area: "Vijay Nagar",
            cafe: {
                farzi: {
                    address: "lal gali, No. 4",
                    details: {
                        specialities: ["coffee", { snacks: "smosa" }]
                    }
                }
            },
            ward: 21,
            landmarks: [
                {
                    name: "Landmark 1",
                    coordinates: { lat: 22.7196, long: 75.8577 },
                    reviews: [
                        { user: "User2", rating: 3 } 
                    ]
                }
            ]
        }
    }
};

console.log(deepest1(inputObj1)); 


/*
Note: 
Primitive values of array considered to be at same level, if found nested object inside it then level of depth increases
*/
