import type { ProductByCategory } from "../../../types/Product";

export async function fetchProductsById(id: string | number): Promise<ProductByCategory> {
    const response = await fetch(`http://192.168.0.185:3000/products/${id}`);

    if (!response.ok) throw new Error("Error al obtener producto");

    return await response.json();

}
