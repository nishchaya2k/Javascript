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