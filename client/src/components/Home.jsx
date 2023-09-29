import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";

export default function Home() {
  //setting the state variable
  const [menus, setMenus] = useState([]);

  const fetchMenus = async () => {
    const response = await fetch("http://localhost:8080/api/menu/");
    const data = await response.json();
    console.log(data);
    setMenus(data);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <>
      <h1>Menus de hoy!</h1>
      {menus.map((menus) => {
        <Card>
          <CardContent>
            <Typography>{menus.nombre}</Typography>
            <Typography>{menus.descripcion}</Typography>
          </CardContent>
        </Card>
      })}
    </>
  );
}
