import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/products/CreateProduct";
import type { Product } from "../types/Product";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProduct: Omit<Product, "id">) => createProduct(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
