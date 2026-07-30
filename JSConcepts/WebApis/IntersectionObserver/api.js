const BASE_URL = "https://dummyjson.com/products";

export async function fetchProducts(skip, limit) {
    const response = await fetch(
        `${BASE_URL}?limit=${limit}&skip=${skip}&select=title,price`
    );

    const data = await response.json();

    return data.products;
}