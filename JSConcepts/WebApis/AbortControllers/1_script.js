const input = document.getElementById("search");
const productsContainer = document.getElementById("products");
const status = document.getElementById("status");

input.addEventListener("input", (e) => {
    const query = e.target.value;

    if (!query) {
        productsContainer.innerHTML = "";
        return;
    }

    searchProducts(query);
});

async function searchProducts(query) {

    status.textContent = "Loading...";

    const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
    );

    const data = await response.json();

    displayProducts(data.products);

    status.textContent = "";
}

function displayProducts(products) {

    productsContainer.innerHTML = "";

    products.forEach(product => {

        productsContainer.innerHTML += `
            <div class="card">
                <img src="${product.thumbnail}">
                <div>
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                </div>
            </div>
        `;

    });

}