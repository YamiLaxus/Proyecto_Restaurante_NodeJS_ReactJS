import * as React from "react";
import Card from "./Card.jsx";
import Chips from "./Chips.jsx";
import { useEffect, useState } from "react";

export default function Home() {
  // Setting the state variable
  const [menus, setMenus] = useState([]);

  const fetchMenus = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/menu/");
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
          // Use menu instead of menus inside map
          <Card
            key={menu.id} // Add a unique key
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
