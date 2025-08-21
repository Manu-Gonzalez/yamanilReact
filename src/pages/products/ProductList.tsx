import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useDebounce } from "use-debounce";



export const ProductList: React.FC = () => {
  const { data: products, isLoading, isError, error } = useProducts();
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 2000); 

  if (isLoading) return <p className="text-gray-500">Cargando productos...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  const filteredProducts = products?.filter((p) =>
     p.nombre.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1>Gestión de Productos</h1>
      <div className="p-4">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />

        <ul className="mt-4">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <li key={p.id} className="border-b py-1">
                {p.nombre} - ${p.precio_unidad} (Categoría: {p.categoria.nombre})
              </li>
            ))
          ) : (
            <p className="text-gray-500">No se encontraron productos</p>
          )}
        </ul>
      </div>
    </div>
  );
};
