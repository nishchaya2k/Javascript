const obj = {
    name: "nishchaya",
    lastName: null,
    address: {
        permanent: {
            house_no: 39,
            city: "Gurugram"
        }
    }
}


// 1. Shallow Copy -> by spread or can be done by Object.assign({},obj) 

const shallowCopy = { ...obj };
shallowCopy.address.permanent.city = "Delhi";
console.log("checkingOriginal", obj.address.permanent.city);
console.log("ShallowCopied", shallowCopy)



// 2. Deep Copy

const deepCopyObject = function (obj) {

    if (typeof obj !== 'object' || obj === null) return obj;


    const keys = Object.keys(obj);
    const copiedValue = Array.isArray(obj) ? [] : {};

    for (let i = 0; i < keys.length; i++) {
        copiedValue[keys[i]] = deepCopyObject(obj[keys[i]])
    }

    return copiedValue;
}

console.log("DeepCopied", deepCopyObject(obj))