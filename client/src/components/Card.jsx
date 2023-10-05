import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Card = (props) => {
  const { imagen, descripcion, precio, estado } = props;

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={imagen}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
        alt="Menu Image"
      />
      <p className="text-xl">{descripcion}</p>
      <span className="text-gray-400">Q.{precio}</span>
      <p className="text-gray-600">{estado}</p>
      
      {/* Favorite icon */}
      <FavoriteIcon style={{ color: "red", fontSize: 30 }} />

      {/* Buy button */}
      <button className="bg-orange-600 text-white p-2 rounded-md hover:bg-green-700">
        <AddShoppingCartIcon /> Ordenar Ahora
      </button>
    </div>
  );
};

export default Card;