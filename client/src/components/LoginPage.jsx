import React, { useState } from "react";
import "./Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container">
      <div className="flex min-h-screen bg-restaurant-blur justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Inicio de sesión</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Correo/Usuario
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="e-mail"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between 'password' and 'text'
                  id="password"
                  className="w-full border rounded px-3 py-2 mt-1"
                  placeholder="Contraseña"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-2 right-2 text-gray-500"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>
              <Link to="/siginup" style={{ textDecoration: "none" }}>
                Eres nuevo? Registrate ahora!
              </Link>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
