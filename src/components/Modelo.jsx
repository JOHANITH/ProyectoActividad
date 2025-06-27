import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./EstiloGeneral.css";

export default function Modelo() {
  return (
    <div className="page">
      <h1>Modelo Entidad-Relación</h1>
      <p>
        El modelo entidad-relación (ER) es una técnica de modelado de datos que
        se utiliza para representar la estructura lógica de una base de datos.
        Consiste en identificar las entidades, sus atributos y las relaciones
        entre ellas.
      </p>
      <Outlet />
    </div>
  );
}