//Poyfil of Bind 

const object = {
    first: "Nishcaya",
    last: "Narula",

}

let print = function (city, country, state) {
    console.log(this.first, this.last, city, country, state)
}

const output1 = print.bind(object, "Rewari", "India");
output1("Haryana");

Function.prototype.myBind = function (...args) {
    let obj = this  //print is access by this
    params = args.slice(1)
    return function (...args2) {    //bind function returns function we know that
        obj.apply(args[0], [...params, ...args2])  //print is called in returned function 
    }
}

const output2 = print.myBind(object, "Rewari", "India");
output2("Haryana")



/*
Special case: 

- what if print method have few other arguments also like city or country we need to extract them as well from ...args in params(in form of array)


- what if we send parameters in output1 and output2, then output2 gives undefined for that parameter, to handle that we need to accept that parameter in args2, & concatenate with param

*/
