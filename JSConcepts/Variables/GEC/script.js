// var         a = 10;
// let b = 20;
// const c = 30;



// // Scope -> GS, FS, BS
// // Global (window) -> var
// // local (script) -> let, const


// // GEC - > Global(window) [var] + script [let, const]


function foo() {  // local foo
  // "use strict";
  console.log("this", this)
  var a = 300;
  var b = 40;
  let c = 100;
  function bar() { // local bar
    var b = 60;
    let c = 200;
    {
      let b = 50; // block
      console.log(a);
    }
  }
  bar();
  //   console.log(b); // 40
}

foo();
console.log(foo)
console.log(foo.prototype)
console.log(foo.__proto__)
console.log(Function.prototype)





// var [window], let, const [script]




// // fn declaration/statement
// function foo1() {
//     console.log('fn declaration/statement');
// }
// foo1();


// // fn Expression
// const foo2 = function () {
//     console.log('fn Expression');
// }
// foo2();
// console.log()


// var a = 10;
// let b = 20;
// const c = 30;


// EC [2 types]  -> 2 phases 1) MC 2) CE
// 1) GEC [anonymous]
// 2) FEC [fn name]