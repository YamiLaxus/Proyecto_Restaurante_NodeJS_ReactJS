import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

export default function InsertMenu() {
  const [menu, setMenu] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
    estado_id: "",
    categoria_id: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await fetch("http://localhost:8080/menus", {
      method: "POST",
      body: JSON.stringify(menu),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    setLoading(false);
    navigate("/home");
  };

  const handleChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Card sx={{ mt: 5 }} style={styles.card}>
            <Typography variant="h5" textAlign="center" color="black">
              Agregar nuevo platillo
            </Typography>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="filled"
                  label="Nombre platillo"
                  name="nombre"
                  onChange={handleChange}
                  sx={styles.textField}
                  fullWidth // Use the full width of the container
                />

                <TextField
                  variant="filled"
                  label="Descripcion"
                  multiline
                  rows={4}
                  sx={styles.textField}
                  name="descripcion"
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  variant="filled"
                  label="Precio"
                  type="number"
                  sx={styles.textField}
                  name="precio"
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  variant="filled"
                  label="Estado"
                  sx={styles.textField}
                  name="estado_id"
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  variant="filled"
                  label="Imagen URL"
                  sx={styles.textField}
                  name="imagen"
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  variant="filled"
                  label="Categoria"
                  sx={styles.textField}
                  name="categoria_id"
                  onChange={handleChange}
                  fullWidth
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={
                    !menu.nombre ||
                    !menu.descripcion ||
                    !menu.precio ||
                    !menu.estado_id ||
                    !menu.categoria_id
                  }
                  sx={styles.button}
                  fullWidth
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Guardar"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
