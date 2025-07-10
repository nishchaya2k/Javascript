//Example 1

class Person {  //base

    constructor() {
        this.species = "homo sapiens"
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {   //derived
    work() {
        console.log("solve problems, build something")
    }
}







class Doctor extends Person {
    work() {
        console.log("solve problems, build something")
    }
}

let nishchaya = new Engineer();
nishchaya.sleep();


//Prototype chaining
//nishchaya ->  Person -> Object -> null
