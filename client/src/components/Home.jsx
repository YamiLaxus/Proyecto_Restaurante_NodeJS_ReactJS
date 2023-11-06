import * as React from "react";
import Card from "./Card.jsx";
import Chips from "./Chips.jsx";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Button } from "@mui/material";

const cookie = new Cookies();

export default function Home() {
  const [menus, setMenus] = useState([]);
  const fetchMenus = async () => {
    try {
      const response = await fetch("http://localhost:8080/menus/");
      const data = await response.json();
      console.log(data);
      setMenus(data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <>
      <div id="header" className="p-8 grid grid-cols-1">
        <Avatar
          alt="Imagen Profile Usuario"
          src={cookie.get("img_profile")}
          sx={{ width: 56, height: 56 }}
        />
        <span className="text-white-400">@{cookie.get("usuario")}</span>
        <span className="text-white-400">{cookie.get("rol")}</span>
        {cookie.get("rol") === "TOTAL ACCESS" ? ( // Conditionally render the button
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/insert_menu")}
            startIcon={<DashboardIcon />}
          >
            Dashboard
          </Button>
        ) : null}
      </div>

      <Chips />
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {menus.map((menu) => (
          <Card
            key={menu.id}
            nombre={menu.nombre}
            imagen={menu.imagen}
            descripcion={menu.descripcion}
            precio={menu.precio}
            estado={menu.estado}
          />
        ))}
      </div>
    </>
  );
}
