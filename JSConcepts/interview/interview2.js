
let a = [1, 2, [2, 3], [4, 5, [6, 7, [8]]]];



Array.prototype.myFlat = function (depth = 1) {

    let temp = [];

    // let loop = value === Infinity ? this.length : value;

    function expandArray(array, currentDept) {

        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i]) && currentDept < depth) expandArray(array[i], currentDept + 1)

            else temp.push(array[i])
        }

        return temp;
    }

    return expandArray(this, 1);
}


console.log(a.myFlat(2))


//call, bind, apply, filter, reduce, map, foreach




