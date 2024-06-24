// Given two strings.Find if one string can be formed by rearranging the letters of other string.


//eg. s1 = afbc, s2 = bcaf check if s1 and s2 have same charcaters


let s1 = 'afbc'
let s2 = 'cbfa'

function checkAnagram() {

    if (s1.length !== s2.length) return false;

    const map = new Map();

    for (let element of s1) {
        map.set(element, (map.get(element) || 0) + 1)
    };
    for (let element of s2) {
        if (!map.get(element)) {
            return false
        }

        else {
            map.set(element, map.get(element) - 1);
            if (map.get(element) < 0) {
                return false
            }
        }
    }

    for (let values of map.values()) {
        if (values !== 0) {
            return false
        }
    }
    return true;


}

console.log(checkAnagram() ? 'True' : 'False')
