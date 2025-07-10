//Call Method : Function Borrowing

let Name = {
    firstName: "Nishchaya",
    LastName: "Narula",

    print: function (firstName,lastName) {                 // Reusable 
        console.log(this.firstName ,this.LastName)
    }
}

let new_Name = {
    firstName: "Nishtha",
    LastName: "Narula",
}

Name.print()                // output: Nishchaya Narula
Name.print.call(new_Name)   // output: Nishtha Narula
