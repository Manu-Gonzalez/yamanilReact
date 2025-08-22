import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../features/api/products/productsFetch";
import type { ProductByCategory } from "../types/Product";

export function useProducts() {
  return useQuery<ProductByCategory[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}