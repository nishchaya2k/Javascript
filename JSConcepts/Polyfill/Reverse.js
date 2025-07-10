//reverse: method reverses the order of the elements in an array,it overwrites the original array.

const Reverse = [1, 2, 3, 5, 6];

console.log("reverse", Reverse.reverse(), Reverse)

Array.prototype.myReverse = function () {

    let start = 0;
    let end = this.length - 1;

    while (start < end) {
        let temp = this[start]
        this[start] = this[end];
        this[end] = temp;
        start++;
        end--;
    }

    return this;
}

console.log("reverse", Reverse.myReverse(), Reverse)