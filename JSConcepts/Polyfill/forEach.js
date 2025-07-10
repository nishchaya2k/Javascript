// Q. Polyfill for Array.forEach()


const arr = [1, 3, 4, 5, 5, 6];

Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

//calback is receving element and index, it iterates over the over

arr.myForEach((element) => {
    console.log(element);
})