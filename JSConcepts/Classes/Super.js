//Example 1

class Person {
    constructor() {
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat")
    }
}

class Engineer extends Person {
    constructor(branch) {
        super(); //to invoke parent class construtor
        this.branch = branch;
    }

    work() {
        console.log("solve problems, build something")
    }
}

let engObj = new Engineer("CSE");


//Example 2 -> 

class Person {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log("eat")
    }
}

class Engineer extends Person {
    constructor(name, branch) {
        super(name); //if u not pass name to parent constructor, name: undefined
        this.branch = branch;
    }

    work() {
        console.log("solve problems, build something")
    }
}

let engObj1 = new Engineer("Nishchaya", "CSE");


//Example 3 -> To invoke Methods of Parent Class

class Person {
    constructor(name) {
        this.name = name;
        console.log(this.name)
    }

    eat() {
        console.log("eat")
    }
}

class Engineer extends Person {
    constructor(name, branch) {
        super();
        this.branch = branch;
    }

    work() {
        // super.eat();  //give error if we direcly call, like eat();
        console.log("solve problems, build something")
    }
}

let engObj2 = new Engineer("Narula", "CSE");




// Prototype Chaining
//Engineer -> Person -> Object -> NULL