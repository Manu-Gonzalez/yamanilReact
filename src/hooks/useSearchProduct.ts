import { useQuery } from "@tanstack/react-query";
import { fetchProductByName } from "../api/products/findProducByName";

export function useSearchProduct(name: string) {
    return useQuery({
        queryKey: ["productSearch", name],
        queryFn: () => fetchProductByName(name),

    });
}
