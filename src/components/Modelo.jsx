import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./EstiloGeneral.css";
import "./Modelo.css"

export default function Modelo() {
  return (
    <div className="page page--wide">
      <h1>Modelo Entidad-Relación</h1>
      <iframe
        src="https://dbdocs.io/marezrioje/Parqueadero_ParkingApp?view=relationships"
        width="100%"
        height="640"
        style={{ border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        title="Diagrama ER - ParkingApp"
        allowFullScreen
      />      
      <Outlet />  
    </div>
  );
}