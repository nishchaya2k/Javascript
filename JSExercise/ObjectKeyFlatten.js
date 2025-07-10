let inputObj = {
    city: {
        indore: {
            area: "Vijay Nagar",
            cafe: {
                farzi: "farzi",
                revolution: "revolution",
            },
            ward: 21,
        },
        bangalore: {
            area: "Indira Nagar",
            cafe: {
                daddyBLR: "daddy BLR",
                toit: "toit",
            },
        },
    },
};


const flattenObject = (obj) => {

    var s = "";
    var flatOjbect = {};

    function checkObject(obj, oldStr) {

        const keys = Object.keys(obj);

        for (let i = 0; i < keys.length; i++) {
            s = oldStr + keys[i];

            if (obj[keys[i]] === null || typeof obj[keys[i]] !== 'object') {
                flatOjbect[s] = obj[keys[i]]
            }

            else checkObject(obj[keys[i]], s + '_') //city indore cafe
        }

    }

    checkObject(obj, "")
    console.log(flatOjbect);
}


let flattenObj = flattenObject(inputObj);



// {
//   city_bangalore_area: "Indira Nagar";
//   city_bangalore_cafe_daddyBLR: "daddy BLR";
//   city_bangalore_cafe_toit: "toit";
//   city_indore_area: "Vijay Nagar";
//   city_indore_cafe_farzi: "farzi";
//   city_indore_cafe_revolution: "revolution";
//   city_indore_ward: 21;
// }

