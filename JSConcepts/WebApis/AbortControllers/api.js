export async function searchProducts(query, signal) {
    const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`,
        {
            signal,
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}