//3. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

let obj = {
    name: 'nishchaya',
    address: {
        city: 'Rewari',
        pincode: 123401,
        location: {
            latitude: 28.2292,
            longitude: 76.6094,
        }
    }
}



const copyObject = (obj) => {

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let copiedVal = Array.isArray(obj) ? [] : {}
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        copiedVal[keys[i]] = copyObject(obj[keys[i]])
    }

    return copiedVal;

}

let new_obj = copyObject(obj)

new_obj.name = "narula";
console.log(new_obj)
console.log(obj)












