let secs = document.querySelector(".timer_secs-value")
let mins = document.querySelector(".timer_mins-value")
let hrs = document.querySelector(".timer_hours-value")
let inputs = document.querySelectorAll(".Timevalue")
let start = document.querySelector(".buttons_start")
let pause = document.querySelector(".buttons_pause")
let reset = document.querySelector(".buttons_reset")


let intervalId;

function updateTime() {

    if (mins.value != 0) {

        mins.value -= 1;
        if (mins.value == 0 && hrs.value != 0) {
            hrs.value -= 1;
            mins.value = 59;
        }
    }

    else {
        hrs.value -= 1;
        mins.value = 59;
    }

    secs.value = 59;

    runTime();
}

function stopInterval(states) {
    start.innerHTML = states === 'pause' ? 'Continue' : 'Start';
    start.style.display = "initial";
    pause.style.display = "none";
    clearInterval(intervalId)
}

function runTime() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(() => {
        secs.value != 0 && (secs.value = `${secs.value <= 10 ? "0" : ""}${secs.value - 1}`);

        if (secs.value <= 0) {
            clearInterval(intervalId);
            if (secs.value <= 0 && mins.value <= 0 && hrs.value <= 0) resetTimer()
            else
                updateTime();
        }

    }, 1000)

}


function formatTime() {

    let extraMins = Math.floor(secs.value / 60);
    secs.value = secs.value % 60;

    let extraHrs = Math.floor((extraMins + mins.value) / 60);


    if (extraMins || mins.value)
        mins.value = (extraMins + mins.value) % 60;


    if (extraHrs || hrs.value)
        hrs.value = extraHrs ? extraHrs + hrs.value : hrs.value; //avoid 0 concatenate of extraHrs

    runTime();

}


start.addEventListener('click', () => {
    if (secs.value == 0 && mins.value == 0 && hrs.value == 0) return;
    start.style.display = "none";
    pause.style.display = "initial";
    inputs.forEach(input => {
        input.disabled = true;
    });
    formatTime()
})

pause.addEventListener('click', () => {
    stopInterval('pause')
})


function resetTimer() {
    secs.value = null;
    mins.value = null;
    hrs.value = null;
    stopInterval();
    inputs.forEach(input => {
        input.disabled = false;
    });
}

reset.addEventListener('click', () => {
    resetTimer()
})
