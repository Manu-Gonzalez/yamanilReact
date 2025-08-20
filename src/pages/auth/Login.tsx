import { useState } from "react";
import { apiClient,  } from "../../../public/ApiClient"; // Asegúrate que esté en src/api

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await apiClient("auth/login", "POST",{ email, password });
      console.log("Usuario logueado:", response);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert(error instanceof Error ? error.message : String(error));
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8 ">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8 ">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Iniciar sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-white font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese Email"
              className="w-full rounded-md bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white font-semibold mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese Contraseña"
              className="w-full rounded-md bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md font-semibold hover:bg-indigo-400 transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
