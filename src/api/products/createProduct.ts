import type { Product } from "../../types/Product";

export async function createProduct(newProduct: Omit<Product, "id">) {
    const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
        throw new Error("Error al crear producto");
    }

    return response.json();
}
