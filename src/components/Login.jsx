import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [infoVisible, setInfoVisible] = useState(null); // null = menú principal

  const handleShowInfo = (id) => {
    setInfoVisible(id); // mostrar info1, info2 o info3
  };

  const handleBack = () => {
    setInfoVisible(null); // volver al menú principal
  };

  return (
    <div className="login-container">
      <h1>BIENVENIDO A MI PÁGINA</h1>

      {infoVisible === null && (
        <div className="card-container">
          <div className="info-card" onClick={() => handleShowInfo(1)}>
            <h2>MISION 1</h2>
            <p>plantaeamiento, creacion de interfas y funcionalidad del proyecto</p>
          </div>
          <div className="info-card" onClick={() => handleShowInfo(2)}>
            <h2>MISION 2</h2>
            <p>Aplicacion de ,MYSQL</p>
          </div>
          <div className="info-card" onClick={() => handleShowInfo(3)}>
            <h2>MISION3</h2>
            <p>RESULTADO FINAL</p>
          </div>
        </div>
      )}

      {infoVisible === 1 && (
        <div className="info-page">
          <h2>Detalles del sistema de parqueo</h2>

                     <h2>Visualizacion de la interfas donde se solicita el tipo de vehiculo,placa 
                      y a su vez se muestra el numero de cupos tanto usados como disponibles de cada uno </h2>
          <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128692/WhatsApp_Image_2025-06-28_at_11.36.21_AM_1_wpzfd7.jpg"
            alt="Parqueo"
            className="info-img"
            
          />
                    <h2>se crea el vehiculo con funciones para ver editar o eliminar</h2>

                    <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128686/WhatsApp_Image_2025-06-28_at_11.37.02_AM_jcqs2h.jpg"
            alt="Parqueo"
            className="info-img"
          />


                         <h2>al eliminar el vehiculo se le da salida y a su vez muestra la factura</h2>

                    <img
            src="https://res.cloudinary.com/dso63qdie/image/upload/v1751128678/WhatsApp_Image_2025-06-28_at_11.37.29_AM_1_xidmoq.jpg"
            alt="Parqueo"
            className="info-img"
          />
          

          <p>
            Este sistema permite registrar vehículos al momento de ingresar, especificando su placa, tipo (carro, moto o camión) y color.
            El sistema controla automáticamente la capacidad máxima disponible para cada tipo de vehículo, evitando ingresos cuando los cupos están llenos.
            Cada vehículo tiene asociada una hora de ingreso, y al momento de la salida, se calcula el tiempo total de permanencia en minutos, multiplicado por una tarifa definida por minuto.
            Si el vehículo está marcado como afiliado, se le aplica un descuento del 5%.
               </p>
          <button className="btn-back" onClick={handleBack}>Volver</button>
        </div>
      )}

      {infoVisible === 2 && (
        <div className="info-page">
          <h2>Horarios y tarifas</h2>
          <img
            src="https://via.placeholder.com/400x200?text=Horarios"
            alt="Horarios"
            className="info-img"
          />
          <p>Consulta aquí los horarios de funcionamiento y tarifas aplicables.</p>
          <button className="btn-back" onClick={handleBack}>Volver</button>
        </div>
      )}

      {infoVisible === 3 && (
        <div className="info-page">
          <h2>Normas de uso y contacto</h2>
          <img
            src="https://via.placeholder.com/400x200?text=Normas"
            alt="Normas"
            className="info-img"
          />
          <p>Revisa las normas de uso del servicio y la información de contacto.</p>
          <button className="btn-back" onClick={handleBack}>Volver</button>
        </div>
      )}
    </div>
  );
}