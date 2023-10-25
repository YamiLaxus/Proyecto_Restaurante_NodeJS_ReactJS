import React, { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

function RegisterPage() {
  //Estilos
  const styles = {
    card: {
      backgroundColor: "#1e272",
      padding: "1rem",
    },
    textField: {
      marginBottom: "1rem",
    },
    button: {
      marginTop: "1rem",
    },
  };

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Create a new user
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    nit: "",
    usuario: "",
    email: "",
    password: "",
    img_profile: "",
    rol_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/usuarios", {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    navigate("/login");
  };

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="flex min-h-screen bg-restaurant-blur justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Bienvenido</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-600">
                Nombre
              </label>
              <TextField
                variant="filled"
                label="Nombre"
                name="nombre"
                onChange={handleChange}
                sx={styles.textField}
                fullWidth
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apellido" className="block text-gray-600">
                Apellido
              </label>
              <TextField
                variant="filled"
                label="Apellido"
                name="apellido"
                onChange={handleChange}
                sx={styles.textField}
                fullWidth
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nit" className="block text-gray-600">
                NIT
              </label>
              <TextField
                variant="filled"
                label="No. NIT"
                name="nit"
                onChange={handleChange}
                sx={styles.textField}
                fullWidth
              />
            </div>
            <div className="mb-4">
              <label htmlFor="usuario" className="block text-gray-600">
                Usuario
              </label>
              <TextField
                variant="filled"
                label="Usuario"
                name="usuario"
                onChange={handleChange}
                sx={styles.textField}
                fullWidth
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <TextField
                variant="filled"
                label="Email"
                name="email"
                onChange={handleChange}
                sx={styles.textField}
                fullWidth
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Contraseña
              </label>
              <div className="relative">
                <TextField
                  variant="filled"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  sx={styles.textField}
                  fullWidth
                />
                <div className="mb-4">
                  <label htmlFor="img_profile" className="block text-gray-600">
                    Img Profile URL
                  </label>
                  <TextField
                    variant="filled"
                    label="Img URL"
                    name="img_profile"
                    onChange={handleChange}
                    sx={styles.textField}
                    fullWidth
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="img_profile" className="block text-gray-600">
                    Rol Id
                  </label>
                  <TextField
                    variant="filled"
                    label="Rol"
                    name="rol_id"
                    sx={styles.textField}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-2 right-2 text-gray-500"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition mr-4"
            >
              Registrar
            </button>
            <Link to="/login" className="text-blue-500 hover:underline">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
