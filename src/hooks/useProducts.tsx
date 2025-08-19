import { useRef, useState, useEffect } from "react";

export interface Product {
  id: number;
  nombre: string;
  precio_unidad: number;
  id_categoria: number;
}

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const abortController = useRef<AbortController | null>(null);

  const cancelFetch = () => {
    abortController.current?.abort();
  };

  const fetchProducts = async () => {
    abortController.current = new AbortController();
    const signal = abortController.current.signal;

    setError(null);
    setLoading(true);

    try {
      await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, 2000);
        signal.addEventListener("abort", () => {
          clearTimeout(timer);
          reject(new DOMException("Aborted", "AbortError"));
        });
      });

      const response = await fetch("http://localhost:3000/products", { signal });
      const data: Product[] = await response.json();

      setProducts(data);
      setError(null)
    } catch {
      setError("Error al obtener productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    return () => cancelFetch();
  }, []);

  return { products, setProducts, loading, error, cancelFetch };
};
