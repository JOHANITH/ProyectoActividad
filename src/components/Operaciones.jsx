import React from "react";
import { useNavigate } from "react-router-dom";
import "./operaciones.css";
import "./EstiloGeneral.css";

export default function Operaciones() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>OPERACIONES DE PRUEBA</h1>

      <div className="image-row">
        <img 
          src=""
          alt="Modelo ER 1"
          className="image"
        />
        <img 
          src=""
          alt="Modelo ER 2"
          className="image"
        />
        <img 
          src=""
          alt="Modelo ER 3"
          className="image"
        />
      </div>
    </div>
  );
}