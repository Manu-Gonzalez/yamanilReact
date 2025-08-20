import { useState } from "react";
import { useSearchProduct } from "../hooks/useSearchProduct";

export function ProductSearch() {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useSearchProduct(search);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />

      {isLoading && <p>Buscando producto...</p>}
      {error && <p className="text-red-500">{(error as Error).message}</p>}

      {data && (
        <ul className="mt-2">
          
            <li key={data.id}>Nombre: {data.nombre}</li>
            <li>Precio: {data.precio_unidad}</li>
            <li>Categoria: {data.categoria.nombre}</li>
        </ul>
      )}
    </div>
  );
}
