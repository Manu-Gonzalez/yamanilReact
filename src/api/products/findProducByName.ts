import type { ProductByCategory } from "../../types/Product";

export async function fetchProductByName(nameProduct: string): Promise<ProductByCategory> {
    const response = await fetch(`http://localhost:3000/products/${nameProduct}`);

    if (!response.ok) throw new Error("Error al obtener producto puede que el producto no exista");

    return await response.json();

}
