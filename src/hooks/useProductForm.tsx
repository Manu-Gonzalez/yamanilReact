import { useRef, useState } from "react";
import type { Product } from "../types/Product";

export const useProductForm = (onAdd: (product: Product) => void) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLInputElement | null>(null);
  const abortController = useRef<AbortController | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cancelFetch = () => abortController.current?.abort();

  const addProduct = async () => {
    const nombre = inputRef.current?.value.trim();
    const precio_unidad = Number(priceRef.current?.value);
    const id_categoria = Number(categoryRef.current?.value);

    if (!nombre || isNaN(precio_unidad) || isNaN(id_categoria)) return;

    abortController.current = new AbortController();
    const signal = abortController.current.signal;

    setError(null);
    setLoading(true);

    try {
      // Simulación de delay
      await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, 2000);
        signal.addEventListener("abort", () => {
          clearTimeout(timer);
          reject(new DOMException("Aborted", "AbortError"));
        });
      });

      const response = await fetch("http://localhost:3000/products", {
        signal,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio_unidad, id_categoria }),
      });

      const newProduct: Product = await response.json();

      onAdd(newProduct); // actualiza el estado de productos en el hook padre

      if (inputRef.current) inputRef.current.value = "";
      if (priceRef.current) priceRef.current.value = "";
      if (categoryRef.current) categoryRef.current.value = "";
    } catch  {
      setError("Error no se pudo agregar el producto");
    } finally {
      setLoading(false);
    }
  };

  return { inputRef, priceRef, categoryRef, addProduct, loading, error, cancelFetch };
};
