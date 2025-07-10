function Parent(name) {
    this.name = name;

    this.getName = () => {
        console.log("Name =>", this.name)
        getNameAgain()
        getNameAgain2()
    }

    function getNameAgain() {
        console.log("Name Again 1 =>", this.name)
    }

    let getNameAgain2 = () => {
        console.log("Name Again 2 =>", this.name)
    }
}

Parent.prototype.getLastName = function (lastName) {
    console.log("LastName =>", lastName)
}

const child = new Parent("Nishchaya")
child.getName()


console.log(Parent.prototype === child.__proto__)



/* 
   | Function Type    | How`this` is determined |
   | ---------------- | -------------------------------------------------- |

   | Regular Function | Depends on how the function is called              |
   | Arrow Function   | Inherits`this` from the scope it's defined in      | 
*/
