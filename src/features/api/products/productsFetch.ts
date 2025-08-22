import type { ProductByCategory } from "../../../types/Product";

export async function fetchProducts(): Promise<ProductByCategory[]> {
  const response = await fetch("http://192.168.0.185:3000/products");

  if (!response.ok) throw new Error("Error al obtener productos");

  return await response.json();

}
