import React from "react";
import "./EstiloGeneral.CSS";
import "./Integrantes.CSS";

export default function Integrantes() {
  return (
    <div className="page page--list">
      <h2>📒 Integrantes</h2>
      <hr />
      <p>Grupo:</p>
      <ul>
        <li>
          <p>Dennys Johanna Rubio illamizar</p>
        </li>
        <li>
          <p>Luis Mario Jerez Pabon</p>
        </li>
        <li>
          <p>Wilker Julián botello medina</p>
        </li>
        <li>
          <p>Juian Granados Mendez </p>
        </li>
      </ul>  
    </div>
  );
}