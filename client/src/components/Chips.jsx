import React from "react";
import { Chip } from "@mui/material";

const chipStyle = {
    backgroundColor: "#FF5733", // Replace with your desired background color
    color: "#FFFFFF", // Optionally, set text color
};

export default function Chips() {
    return (
        <>
            <div className="p-9 flex space-x-4 flex-wrap gap-2">
                <Chip
                    label="Bebida fria"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    style={chipStyle}
                />
                <Chip
                    label="Bebida caliente"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    style={chipStyle}
                />
                <Chip
                    label="Comida rapida"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    style={chipStyle}
                />
                <Chip
                    label="Refacciones"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    style={chipStyle}
                />
                <Chip
                    label="Postres"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                    style={chipStyle}
                />
            </div>
        </>
    )
}