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