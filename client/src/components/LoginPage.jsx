import React, { useState } from "react";
import "./Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:8080";
const cookie = new Cookies();

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = async () => {
    await axios
      .get(baseUrl + "/login", {
        params: {
          email: form.email,
          password: form.password,
        },
      })
      .then((response) => {
        const user = response.data;
        if (user.usuario_id) {
          // User successfully logged in
          // Store user data in cookies or state as needed
          cookie.set("usuario_id", user.usuario_id, { path: "/" });
          cookie.set("nombre", user.nombre, { path: "/" });
          cookie.set("apellido", user.apellido, { path: "/" });
          cookie.set("nit", user.nit, { path: "/" });
          cookie.set("usuario", user.usuario, { path: "/" });
          cookie.set("email", user.email, { path: "/" });
          cookie.set("img_profile", user.img_profile, { path: "/" });
          cookie.set("rol", user.rol, { path: "/" });
          alert(`Bienvenido ${user.nombre} ${user.usuario}`);
          navigate("/home");
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };  

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
                name="email"
                className="w-full border rounded px-3 py-2 mt-1"
                placeholder="e-mail"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="w-full border rounded px-3 py-2 mt-1"
                  placeholder="Contraseña"
                  onChange={handleChange}
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
                Eres nuevo? Regístrate ahora!
              </Link>
            </div>
            <button
              type="button" // Change to button type
              className="bg-blue-500 text-white rounded px-4 py-2 hover-bg-blue-600 transition"
              onClick={iniciarSesion} // Call iniciarSesion function here
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
