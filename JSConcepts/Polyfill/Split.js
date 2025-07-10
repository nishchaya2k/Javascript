let s = 'My Name is Nishchaya'

String.prototype.mySplit = function (separator, limit = Infinity) {

    let res = [];
    word = "";
    let i = 0;

    if (limit === 0) return res;

    // Handle empty separator case 
    if (separator === '') {
        for (let j = 0; j < this.length; j++) {
            res.push(this[j]);
            limit--;

            if (limit === 0) return res;
        }
        return res;
    }


    while (i < this.length) {

        // Check if the current substring matches the separator
        if (this.substring(i, i + separator.length) === separator) {
            res.push(word)
            word = "";
            i += separator.length;

            limit--;
            if (limit === 0) return res;
        }

        else {
            word += this[i]
            i++;
        }

    }

    // Push any remaining word after loop
    if (word) res.push(word)

    return res;
}



console.log(s.mySplit('e', 1))

console.log(s.split('e', 1))
