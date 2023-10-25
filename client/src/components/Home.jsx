import * as React from "react";
import Card from "./Card.jsx";
import Chips from "./Chips.jsx";
import { useEffect, useState } from "react";

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
