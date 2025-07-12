// 1. assign() :  method copies properties from one or more source objects to a target object., Object.assign(target, source(s)), final result will exclude the key of target or override by source if it matches



const Assign1 = { a: 1, b: { a: { c: 1 } } };
const Assign2 = { b: 2 };
const Assign = Object.assign(Assign1, Assign2);
console.log("Assign", Assign)

Object.prototype.myAssign = function (target, source) {

    if (!target && !source) throw TypeError("Cannot convert undefined or null to object")


    if (!target) return source;
    if (!source) return target;

    const sourceArrayKey = Object.keys(source);

    for (let i = 0; i < sourceArrayKey.length; i++) {
        const key = sourceArrayKey[i];
        target[key] = source[key];
    }

    return target;
};

const Assign3 = { c: { c1: 4 } }

console.log("Assign", Object.myAssign(Assign1, Assign3))
console.log("Assign", Assign1)


// 2. entries(): -> static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

const person1 = [{ firstName: "John" }]
console.log(Object.entries("ddd"))

Object.prototype.myEntries = function (data) {
    const type = Object.prototype.toString.call(data);

    if (type !== "[object String]" && type !== "[object Array]" && type !== "[object Object]") return [];

    let result = [];

    if (type === "[object String]") {
        for (let i = 0; i < data.length; i++) {
            result.push([i, data[i]]);
        }
        return result;
    }


    if (type === "[object Array]") {
        for (let i = 0; i < data.length; i++) {
            result.push([i, data[i]]);
        }
        return result;
    }

    if (type === "[object Object]") {
        const keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            result.push([keys[i], data[keys[i]]])
        }
        return result;
    }

    return [];

}


console.log("Entries", Object.myEntries(person))


//3. values(): method returns an array of the property values of an object, method does not change the original object. its Optional An object as paramter, will works for string, array as well

const Values = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log("Values", Object.values(Values))

Object.prototype.myValues = function () {
    const type = Object.prototype.toString.call(data)
    if (type !== "[object String" && type !== "[object Array]" && type !== "[object Array]") {
        return [];
    }

    if (type === "[object String]") {
        for (let i = 0; i < data.length; i++) {
            result.push([data[i]]);
        }
        return result;
    }

    if (type === "[object Array]") {
        for (let i = 0; i < data.length; i++) {
            result.push([data[i]]);
        }
        return result;
    }

    if (type === "[object Object]") {
        const keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            result.push([data[keys[i]]])
        }
        return result;
    }
}

console.log("Values", Object.values(Values))


//4. Keys():  method returns an array with the keys of an object. method does not change the original object. its Optional An object as paramter, will works for string, array as well

const Keys = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log("Keys", Object.keys(Keys))


Object.prototype.myKeys = function (data = undefined) {

    if (!data) throw TypeError("Can't Convert Undefined or null to object")


    const type = Object.prototype.toString.call(data);
    if (type !== "[object String]" && type !== "[object Object]" && type !== "[object Array]") {
        return [];
    }
    const result = [];
    if (type == "[object String]" || type == "[object Array]") {
        for (let i = 0; i < data.length; i++) {
            result.push(String(i))
        }
    }
    if (type == "[object Object]") {

        const keys = Object.keys(data)
        for (let i = 0; i < keys.length; i++) {
            result.push(keys[i])
        }
    }
    return result;
}

console.log("Keys", Object.myKeys(Keys))
