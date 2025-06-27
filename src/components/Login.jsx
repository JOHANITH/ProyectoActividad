import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./EstiloGeneral.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h1>BIENVENIDO A MI PÁGINA</h1>
      <div className="card-container">
        <div className="info-card" onClick={() => navigate("/info1")}>
          <h2>Información 1</h2>
          <p>Conoce los detalles del sistema de parqueo.</p>
        </div>
        <div className="info-card" onClick={() => navigate("/info2")}>
          <h2>Información 2</h2>
          <p>Horarios de funcionamiento y tarifas.</p>
        </div>
        <div className="info-card" onClick={() => navigate("/info3")}>
          <h2>Información 3</h2>
          <p>Normas de uso y contacto.</p>
        </div>
      </div>
    </div>
  );
}