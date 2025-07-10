function foo() {  // foo is in global scope
    var a = 300;
    var b = 40;
    let c = 100;

    function bar() { // bar is in foo's local scope
        var b = 60;
        let c = 200;

        {
            let b = 50; // block scoped
            console.log(a);
        }
    }

    bar();
}

foo();
  


/*

-> Understand the Flow of code: (Depends on browser as well how to show)

 a). foo is a global function → so its name (foo) lives in the Global Execution Context (GEC).

 b). When you call foo(), a new Execution Context is created for foo — this is called the Local Execution Context of foo.

 c). Inside this local context, variables like a, b, c, and function bar are created.

 d). in the debugger, you'll see:
    - foo as a global function.
    - But a, b, c, and bar are local to foo, hence appear in its local scope during debugging

 e). Calling bar() inside foo
    - Another Local Execution Context is created (for bar).
    - Inside bar, new b and c are created.
    - And inside the block {}, another b is created with block scope.

 f). console.log(a) inside bar
    - It can't find a in bar or the block, so it looks up the scope chain and finds a = 300 in foo.

*/

/*
Q. Why foo is in this.window
Q. Why two prototypes are there, in foo(), as I have studied, only 1 will attched to a object

*/