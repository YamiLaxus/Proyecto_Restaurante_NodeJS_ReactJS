import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InsertMenu() {
  const [menu, setMenu] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    estado: "",
    imagen: "",
    categoriaId: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    const res = await fetch("http://localhost:8080/api/menu", {
      method: "POST",
      body: JSON.stringify(menu),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    setLoading(false)
    navigate('/');
  };

  const handleChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1e272",
            padding: "1rem",
          }}
        >
          <Typography variant="5" textAlign="center" color="white">
            Agregar nuevo platillo
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Nombre platillo"
                name="nombre"
                onChange={handleChange}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
              />

              <TextField
                variant="filled"
                label="Descripcion"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="descripcion"
                onChange={handleChange}
              />

              <TextField
                variant="filled"
                label="Precio"
                type="double"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="precio"
                onChange={handleChange}
              />

              <TextField
                variant="filled"
                label="Estado"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="estado"
                onChange={handleChange}
              />

              <TextField
                variant="filled"
                label="Imagen URL"
                type="double"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="imagen"
                onChange={handleChange}
              />

              <TextField
                variant="filled"
                label="Categoria"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="categoriaId"
                onChange={handleChange}
              />

              <Button variant="contained" color="primary" type="submit" disabled={!menu.nombre || !menu.descripcion || !menu.precio || !menu.estado || !menu.categoriaId}>
                { loading ? <CircularProgress color="inherit" size={24} /> : 'Guardar'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
