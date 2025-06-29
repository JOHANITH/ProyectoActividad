import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./EstiloGeneral.css";

export default function Modelo() {
  return (
    <div className="page">
      <h1>Modelo Entidad-Relación</h1>
      <img 
       src="https://res.cloudinary.com/dso63qdie/image/upload/v1751123929/WhatsApp_Image_2025-06-28_at_10.13.42_AM_qp8btd.jpg"
       alt="Modelo Entidad-Relación"
       className="image-modelo"
        />
      <Outlet />
    </div>
  );
}