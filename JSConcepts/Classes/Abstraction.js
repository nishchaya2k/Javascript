// Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems.It hides the technical complexity of systems behind simpler APIs.

//Abstraction is about simplifying complex systems by providing a clear, simple interface to interact with while hiding the internal complexity.

class ImplementAbstraction {
    // method to set values of internal members
    set(x, y) {
        this.a = x;
        this.b = y;
    }

    display() {
        console.log(`a = ${this.a}`);
        console.log(`b = ${this.b}`);
    }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20