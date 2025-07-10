//What are Classes ?
//Its a syntactic sugar of Constructor function
//basically, classes are constructor function behind the scenes, only there is different way to write its code, otherwise both are same.

//Explanation:
//When JavaScript Introduced, there is only contructor function in the existance, but people objects that its not a oop language, so just for the sake of people or to show them they introduced classes. but behind the scenes classes also behave like a contructor function

//Classes are a modern way to show constructor function

class ToyotaCar {
    constructor(brand) {
        this.brandName = brand;  //if brand have nothing, brandName  = undefined
    }

    start() {
        console.log("start");
    }

    setBrand(brand) {
        this.brand = brand;
    }
    static setName = function (name) {  //will attach to ToyotaCar constructor
        this.name = name;
    }
    // setName = function (name) {  //will attach to instance
    //     this.name = name;
    // }

    // setName (name) {  //will attach to instance 
    //     this.name = name;
    // }
}

let fortuner = new ToyotaCar("fortuner");
fortuner.brandName;  //fortuner
fortuner.setName("Hulk");  //fortuner
// let lexus = new ToyotaCar();
// lexus.brandName;
// fortuner.brandName = "lexus"


//typeof(class) -> function
//Prototype Chaining
//fortuner -> ToyotaCar -> Object -> null





