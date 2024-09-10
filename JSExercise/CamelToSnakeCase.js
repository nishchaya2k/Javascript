// Convert CamelCase to Snake Case

function camelToSnake(s) {

    let ans = "";

    for (let i = 0; i < s.length; i++) {

        if (s[i].toUpperCase() === s[i] && s[i] !== '_') {
            ans += "_"
            ans += s[i].toLowerCase()
        }
        else {
            ans += s[i];
        }
    }

    return ans

}

let str = "thisIsCamelCase"
console.log(camelToSnake(str))
