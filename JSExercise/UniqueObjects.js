// Write logic to get unique objects from below array ? 

Input = [
    { name: "sai" },
    { name: "Nang" },
    { name: "sai" },
    { name: "Nang" },
    { name: "111111" },
];

const ans_unique = new Array();
const ans_common = new Array();

function checkUniqueObjects() {
    const map = new Map()
    Input.forEach(element => {
        map.set(element.name, (map.get(element.name) || 0) + 1)
    });

    for (let element of map) {
        if (element[1] === 1)
            ans_unique.push({ name: element[0] });  //for the unique output array
    }

    for (let element of map) {
        ans_common.push({ name: element[0] })   //for common output array
    }
}

checkUniqueObjects()
console.log(ans_unique)
console.log(ans_common)
