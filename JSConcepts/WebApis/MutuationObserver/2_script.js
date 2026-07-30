const parent = document.getElementById("parent");

const observer = new MutationObserver((mutations) => {

    mutations.forEach((mutation) => {
        alert(`Type: ${mutation.type}`);
    });

});

observer.observe(parent, { //target
    childList: true 
});

function addChild() {

    const div = document.createElement("div");
    div.className = "child";
    div.textContent = "New Child";

    parent.appendChild(div);
}

function removeLastChild() {
    if (parent.lastElementChild) {
        parent.lastElementChild.remove();
    }
}