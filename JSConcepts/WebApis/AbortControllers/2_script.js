import { searchProducts } from "./api.js";

const input = document.getElementById("search");
const productsContainer = document.getElementById("products");
const status = document.getElementById("status");

let controller = null;

input.addEventListener("input", async (e) => {
    const query = e.target.value.trim();

    if (!query) {
        productsContainer.innerHTML = "";
        status.textContent = "";

        if (controller) controller.abort();

        return;
    }

    if (controller) controller.abort();

    controller = new AbortController();


    try {
        status.textContent = `Searching "${query}"...`;
        console.log(controller.signal)
        const data = await searchProducts(
            query,
            controller.signal
        );

        displayProducts(data.products);

        status.textContent = `Results for "${query}"`;

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Previous request aborted.");
            return;
        }

        console.error(error);
        status.textContent = "Something went wrong.";
    }
});

function displayProducts(products) {

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        productsContainer.innerHTML = "<h3>No Products Found</h3>";
        return;
    }

    products.forEach((product) => {

        productsContainer.innerHTML += `
            <div class="card">
                <img src="${product.thumbnail}" alt="${product.title}">
                <div>
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                </div>
            </div>
        `;

    });

}

/*
Create controller
        │
        ▼
controller.signal.aborted = false
        │
        ▼
Pass signal to fetch()
        │
        ▼
fetch starts listening to the signal
        │
        ▼
controller.abort()
        │
        ▼
signal.aborted = true
        │
        ▼
fetch receives the abort event
        │
        ▼
Request is cancelled
        │
        ▼
Promise rejects with AbortError

*/