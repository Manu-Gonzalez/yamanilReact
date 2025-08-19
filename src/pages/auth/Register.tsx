import { useState } from "react";
import { apiClient } from "../../../public/ApiClient";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); 
    try {
      const response = await apiClient("register", "POST", { username, email, password },);
      console.log("Usuario registrado:", response);
      alert("Registro exitoso");
    } catch (error) {
      alert(error instanceof Error ? error.message : String(error));
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Registrarse</h2>

      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div>
          <label htmlFor="username" className="block text-white font-semibold mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="Ingrese Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            type= "email"
            placeholder="Ingrese Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-white font-semibold mb-1">
            Contraseña
          </label>
          <input
            id="password"
            value={password}
            placeholder="Ingrese Contraseña"
            type = "password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md font-semibold hover:bg-indigo-400 transition-colors"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};
