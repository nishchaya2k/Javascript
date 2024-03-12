const boxes = document.querySelectorAll(".boxes")
let arr = []


boxes.forEach((box) => {
    box.addEventListener('click', function (event) {
        this.classList.add("newBgColor")
        arr.push(this);
        defaultBgColor()
    })
})

function defaultBgColor() {
    let totalBgColor = document.querySelectorAll('.newBgColor')  //all new background boxes 
    console.log(totalBgColor.length);
    let n = arr.length;

    if (totalBgColor.length === boxes.length)   //if we have all
        setTimeout(() => {
            for (let i = 0; i < n; i++) {    //n, becoz arr.length also changing, bzcoz of shift

                setTimeout(() => {    //to avoid sudden removal of every bg, used for animation

                    // let box = arr.pop(); for reverse order undo background color
                    let box = arr.shift();
                    box.classList.remove('newBgColor');
                }, i * 2000)
            }
        }, 2000)                        //after 2 sec start undo the bg-color
}



