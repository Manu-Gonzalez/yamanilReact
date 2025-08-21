import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useDebounce } from "use-debounce";

export const ProductList: React.FC = () => {
  const { data: products, isLoading, isError, error } = useProducts();
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 300);

  const [currentPage, setCurrentPage] = useState(1);
  const itemByPage = 5;

  if (isLoading) return <p className="text-gray-500">Cargando productos...</p>;
  if (isError) return <p className="text-red-500">{error.message}</p>;

  const filteredProducts = products?.filter((p) =>
    p.nombre.toLowerCase().includes(debouncedSearch.toLowerCase())
  ) || [];

  const totalPages = Math.ceil(filteredProducts.length / itemByPage);
  const startIndex = (currentPage - 1) * itemByPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemByPage
  );
  
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gestión de Productos</h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); 
        }}
        className="border p-2 rounded w-full md:w-1/2"
      />

      <ul className="mt-4">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((p) => (
            <li key={p.id} className="border-b py-2">
              {p.nombre} - ${p.precio_unidad} 
              <span className="text-gray-500">
                {" "}({p.categoria.nombre})
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No se encontraron productos</p>
        )}
      </ul>

      {totalPages > 1 && (
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Anterior
          </button>
          
          <span>
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};
