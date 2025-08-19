import { useState } from "react";
import './App.css';
import { Login } from "./components/authComponents/login";
import { Register } from './components/authComponents/Register';
import { ProductList } from "./components/Products/ProductList";
export default function App() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 font-semibold rounded-t-xl ${
              isLogin ? "bg-indigo-500 text-white" : "bg-gray-700 text-gray-400"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 font-semibold rounded-t-xl ${
              !isLogin ? "bg-indigo-500 text-white" : "bg-gray-700 text-gray-400"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
           <button
            className={`flex-1 py-2 font-semibold rounded-t-xl ${
              !isLogin ? "bg-indigo-500 text-white" : "bg-gray-700 text-gray-400"
            }`}
          >
            Products
            </button>
        </div>

        <div>
          {isLogin ? <Login /> : <Register />}

          <ProductList />
        </div>
      </div>
    </main>
  );
}
