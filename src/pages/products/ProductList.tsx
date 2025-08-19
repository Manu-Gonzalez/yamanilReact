import React from "react";
import { useProduct } from "../../hooks/useProducts";
import { useProductForm } from "../../hooks/useProductForm";
import type { Product } from "../../types/Product";

export const ProductList: React.FC = () => {
  const {
    products,
    setProducts,
    loading: loadingProducts,
    error: errorProducts,
    cancelFetch: cancelFetchProducts,
  } = useProduct();

  const {
    inputRef,
    priceRef,
    categoryRef,
    addProduct,
    loading: loadingForm,
    error: errorForm,
    cancelFetch: cancelFetchForm,
  } = useProductForm((newProduct: Product) =>
    setProducts((prev) => [...prev, newProduct])
  );

  const isLoading = loadingProducts || loadingForm;

  return (
    <div className="p-4">
      <h1>Gestión de Productos</h1>

      <div className="mb-4 flex items-center gap-2">
        <input ref={inputRef} type="text" placeholder="Nombre" className="border p-2" />
        <input ref={priceRef} type="number" placeholder="Precio" className="border p-2" />
        <input ref={categoryRef} type="number" placeholder="ID Categoría" className="border p-2" />
        <button
          onClick={addProduct}
          className="p-2 bg-blue-500 text-white"
          disabled={loadingForm}
        >
          Agregar
        </button>
        {isLoading && (
          <button
            onClick={() => {
              cancelFetchProducts();
              cancelFetchForm();
            }}
            className="p-2 bg-red-500 text-white"
          >
            Cancelar
          </button>
        )}
      </div>

      {isLoading && <p className="text-gray-500 mb-2">Cargando productos...</p>}
      {errorProducts && <p className="text-red-500 mb-2">{errorProducts}</p>}
      {errorForm && <p className="text-red-500 mb-2">{errorForm}</p>}
      {!isLoading && !errorProducts && !errorForm && products.length > 0 && (
        <p className="text-green-500 mb-2">Todo fue bien</p>
      )}

      <ul className="mt-4">
        {products.map((p) => (
          <li key={p.id} className="border-b py-1">
            {p.nombre} - ${p.precio_unidad} (Categoría: {p.id_categoria})
          </li>
        ))}
      </ul>
    </div>
  );
};
