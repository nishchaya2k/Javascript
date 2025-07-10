//Example 1:

function Parent(name) {
    this.name = name;

    this.showname = () => {
        console.log(this.name)
    }

    // let showname = () => {   `showname` scoped to the constructor function
    //     console.log(this.name)
    // }
}

let child = new Parent("Nishchaya");
child.showname()


//Example 2: Memory Saved as Showname is now present in prototye of Parent1 

function Parent1(name) {
    this.name = name;
}

Parent1.prototype.showname = function () {
    console.log(this.name)
}

let child1 = new Parent1("Narula");

//Example 3: Can't access as property becomes private

function Parent2(name) {
    this.name = name;
}

Parent2.showname = function () { //static method
    console.log(this.name);
}

let child2 = new Parent2("Nishchaya")

/*
1.  Static Function: A static method is a function that is defined on a constructor function 
    rather than on instances created by that constructor.
    Static methods are called directly on the constructor itself, not on instances of the constructor.

    - Parent2.showname is a static method, meaning it's attached to the constructor function itself, not to instances of Parent2.

    - Parent2.showname() is how you would call this method. However, in the static method showname, this refers to Parent2, not an instance of Parent2.

    - Parent2 itself does not have a name property, this.name will be undefined when you call Parent2.showname().

    - Within the static method, this refers to Parent2 itself, the constructor function.
*/