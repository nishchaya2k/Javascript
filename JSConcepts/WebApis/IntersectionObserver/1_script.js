import { fetchProducts } from "./api.js";

const productsContainer = document.getElementById("products");
const loader = document.getElementById("loader");

const LIMIT = 10;

let skip = 0;
let isLoading = false;

function renderProducts(products) {
    products.forEach(product => {
        const card = document.createElement("div");

        card.className = "product";

        card.innerHTML = `
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
        `;

        productsContainer.appendChild(card);
    });
}

async function loadProducts() {
    if (isLoading) return;

    isLoading = true;

    const products = await fetchProducts(skip, LIMIT);

    renderProducts(products);

    skip += LIMIT;

    isLoading = false;
}

loadProducts();

const observer = new IntersectionObserver((entries) => {
    console.log("entries", entries)
    if (entries[0].isIntersecting) {
        loadProducts();
    }
}, {
    rootMargin: "100px",
});

observer.observe(loader); //watching  -> 
