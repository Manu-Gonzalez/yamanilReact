import React, { useState } from "react";
import { useCreateProduct } from "../../hooks/useProductForm";

export const ProductForm: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [precio_unidad, setPrecio] = useState(0);
  const [id_categoria, setCategoria] = useState(0);

  const { mutate, isPending, isError, error, isSuccess } = useCreateProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ nombre, precio_unidad, id_categoria });
    setCategoria(0);
    setNombre("");
    setPrecio(0);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2 border rounded">
      <h2 className="text-lg font-bold">Agregar Producto</h2>

      <input
        type="text"
        placeholder="Nombre"
        onChange={(e) => setNombre(e.target.value)}
        className="border p-1 w-full"
        required
      />

      <input
        type="number"
        placeholder="Precio"
        onChange={(e) => setPrecio(Number(e.target.value))}
        className="border p-1 w-full"
        required
      />

      <input
        type="number"
        placeholder="ID Categoría"
        onChange={(e) => setCategoria(Number(e.target.value))}
        className="border p-1 w-full"
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        {isPending ? "Guardando..." : "Guardar Producto"}
      </button>

      {isError && <p className="text-red-500">{(error as Error).message}</p>}
      {isSuccess && <p className="text-green-500">Producto creado!</p>}
    </form>
  );
};
