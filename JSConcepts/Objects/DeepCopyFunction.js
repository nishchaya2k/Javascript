//Q. Deep Copy without JSON.parse(JSON.stringify)

//Shallow Copy -> Failed when we deal when the change is in nested object

const userDetails = {
    name: "nishchaya",
    address: {
        house_no: 39,
        city: "Gurugram"
    }
}

const user1 = { ...userDetails }
const user2 = Object.assign({}, userDetails)

user1.name = "nishu"            //this change will show in user1 only
user1.address.city = "Jaipur"   //this change will show in user2 & userDetails as well

console.log(user1)        //{ name: 'nishu', address: { house_no: 39, city: 'Jaipur' } }
console.log(user2)        //{ name: 'nishchaya', address: { house_no: 39, city: 'Jaipur' }}
console.log(userDetails)  //{ name: 'nishchaya', address: { house_no: 39, city: 'Jaipur' }}






// Example 1 -> 
function makeDeepCopy(obj) {

    // only go deep with array and objects, typeof null is also object & we avoid it 
    if (typeof obj !== 'object' || obj === null) return obj;  

    var copiedVal = Array.isArray(obj) ? [] : {};
    var keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return copiedVal;
}

console.log(makeDeepCopy({
    name: "nishchaya",
    aga: 20,
    address: {
        house: 839,
        city: "rewari"
    }
}))


console.log(makeDeepCopy([1, 2, 3, 4]))



//Example 2:
