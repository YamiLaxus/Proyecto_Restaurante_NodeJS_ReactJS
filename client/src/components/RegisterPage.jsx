import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

function RegisterPage() {
  // Estilos
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
    },
    formContainer: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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
    <Container maxWidth="xs" sx={styles.container}>
      <Box sx={styles.formContainer}>
        <Typography variant="h5" component="h2" gutterBottom>
          Bienvenido
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="filled"
            label="Nombre"
            name="nombre"
            onChange={handleChange}
            sx={styles.textField}
            fullWidth
          />
          <TextField
            variant="filled"
            label="Apellido"
            name="apellido"
            onChange={handleChange}
            sx={styles.textField}
            fullWidth
          />
          <TextField
            variant="filled"
            label="No. NIT"
            name="nit"
            onChange={handleChange}
            sx={styles.textField}
            fullWidth
          />
          <TextField
            variant="filled"
            label="Usuario"
            name="usuario"
            onChange={handleChange}
            sx={styles.textField}
            fullWidth
          />
          <TextField
            variant="filled"
            label="Email"
            name="email"
            onChange={handleChange}
            sx={styles.textField}
            type="email"
            fullWidth
          />
          <div className="relative">
            <TextField
              variant="filled"
              label="Contraseña"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              sx={styles.textField}
              fullWidth
            />
            <TextField
              variant="filled"
              label="Img URL"
              name="img_profile"
              onChange={handleChange}
              sx={styles.textField}
              fullWidth
            />
            <TextField
              variant="filled"
              label="Rol"
              name="rol_id"
              sx={styles.textField}
              onChange={handleChange}
              type="number"
              fullWidth
            />
            <Button
              onClick={togglePasswordVisibility}
              sx={{
                position: "absolute",
                top: "20px",
                right: "20px",
                color: "gray",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </Button>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.button}
          >
            Registrar
          </Button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button color="primary">Cancelar</Button>
          </Link>
        </form>
      </Box>
    </Container>
  );
}

export default RegisterPage;
