// //Promise Polyfill -> Work only with Async (when setTimeout removed it will give error)

// const { reject } = require("lodash");
// const { resolve } = require("path-browserify");

// function Promise_Polyfill_Async(executor) {
//     let onResolve, onReject;

//     function resolve(value) {
//         onResolve(value)
//     }

//     function reject(value) {
//         onReject(value)
//     }


//     this.then = function (callback) {
//         onResolve = callback;   //first callback assigned
//         return this;
//     }

//     this.catch = function (callback) {
//         return this;
//     }

//     executor(resolve, reject);
// }

// const p1 = new Promise_Polyfill_Async((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//     }, 1000)
// })

// p1.then((res) => {
//     console.log(res)
// }).catch((err) => { console.log(err) })

//Promise Polyfill -> Work for Sync as well as Async (for all)


function Promise_Polyfill(executor) {

    let onResolve, onReject, isFullfilled = false, isRejected = false, isCalled = false, value;

    function resolve(val) {
        isFullfilled = true;
        value = val

        //then gets callback aleady or promise have timeout to get resolve 
        if ((typeof onResolve === "function")) {   
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;
        if ((typeof onReject === "function")) {
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function (callback) {    //promise settled already if(true)
        onResolve = callback;   //onResolve a function so that we can call when resolve settled

        if (isFullfilled && !isCalled) {  
            isCalled = true;
            onResolve(value);
        }
        return this;
    }

    this.catch = function (callback) {
        onReject = callback;

        if (isRejected && !isCalled) {
            isCalled = true
            onReject(value)
        }
        return this;
    }

    try {
        executor(resolve, reject)   //will run resolve or reject whichever mention in callback
    } catch (error){
        reject(error)
    }
    
}

const p2 = new Promise_Polyfill((resolve, reject) => {
    resolve(2);
})

p2.then((res) => {
    console.log(res)
}).catch((err) => { console.log(err) })


//** Important **
// executer = (resolve,reject) => {
//     resolve(2)
// }
// executer(resolve,reject), its a function call, resolve(2) function call inside it
/*

Can be Two way Sync or Async Execution, Flow of promise execution will be different in each case

Sync: resolve || reject -> .then & .catch

Async: .then  ->  resolve || reject   (eg. when used setTimeout around resolve or reject)

*/
