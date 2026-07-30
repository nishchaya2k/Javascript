const card = document.querySelector(".card");

const observer = new ResizeObserver((entries) => {

    const entry = entries[0];

    if (entry.contentRect.width < 300) {

        entry.target.style.flexDirection = "column";

    } else {

        entry.target.style.flexDirection = "row";

    }

});

observer.observe(card);