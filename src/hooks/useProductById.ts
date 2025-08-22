import { useQuery } from "@tanstack/react-query";
import type { ProductByCategory } from "../types/Product";
import { fetchProductsById } from "../features/api/products/productsByIdFetch";

export function useProductById(id: string | string[] | undefined) {
    return useQuery<ProductByCategory, Error>({
        queryKey: ["product", id],
        queryFn: () => {
            if (!id) throw new Error("No ID provided");
            const productId = Array.isArray(id) ? id[0] : id;
            return fetchProductsById(productId);
        },
        enabled: !!id,
    });
}
