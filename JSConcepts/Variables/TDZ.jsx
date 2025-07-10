/* 
TDZ: Temperal Dead Zone: The term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.

The temporal dead zone(TDZ) is a period in JavaScript during which a variable exists but cannot be accessed, Accessing the variable during the TDZ results in a ReferenceError
*/

// Example: 1

{
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    let age = 25; // Whew, we got there! No more TDZ
    console.log(age);
}


/* 
You can see above that if I accessed the age variable earlier than its declaration, it would throw a ReferenceError.Because of the TDZ.

The only difference between const and let is that when they are hoisted, their values don't get defaulted to undefined.
*/




// Example: 2

{
    console.log(typeof nonsenseThatDoesntExist);
    console.log(typeof name);
    let name = "Kealan";
}


/*
The above snippet is proof that let is clearly hoisted above where it was declared, as the engine alerts us to the fact. It knows name exists (it's declared), but we can't access it before it is initialized.
*/




// What is local and Global memory in context of let/const & Var ? 
