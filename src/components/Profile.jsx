import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./EstiloGeneral.css";

export default function Profile() {
  return (
    <div className="page">
      <h1>Modelo </h1>
     
      <Outlet />
    </div>
  );
}