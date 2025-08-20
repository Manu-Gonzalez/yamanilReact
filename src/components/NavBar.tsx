import { Link } from "@tanstack/react-router";

export function NavBar() {
  return (
    <nav className="flex gap-4 p-2 bg-gray-200">
      <Link to="/">Home</Link>
      <Link to="/products">Productos</Link>
      <Link to="/products/add">Agregar</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
    </nav>
  );
}
