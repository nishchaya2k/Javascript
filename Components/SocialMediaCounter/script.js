const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"));
        const currentValue = Number(counter.innerHTML);
        const increment = Math.floor(target > 100 ? target / 100 : target % 100)  //what if any count value is below 100

        if (currentValue < target) {
            setTimeout(() => {
                counter.innerHTML = currentValue + increment;
                updateCounter();
            }, 2)   //we want to show data after 2 sec delay in that span we calculate all counts to show simultaneously
        }
    }
    updateCounter();
})

/*
1. we dont know the count values, it could be anything so why target/1000, and also below 1000 it does not calculate?
2. setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack
*/