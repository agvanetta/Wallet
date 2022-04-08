import React from "react";
import "./Movements.css";
import "./Movdetails"
import Movdetails from "./Movdetails";

function Movements() {
  return (
    <div className="movements">
      <div className="movements__title"> Ultimos movimientos de dinero</div>
      <div className="movements__title2">Conoce el detalle de las operaciones que impactan en tu Dinero disponible.</div>
      <Movdetails movement="Deposito" amount="$10.000,00" date="Ayer"/>
      <Movdetails movement="Compra TSLA" amount="-$13.050,10" date="Martes"/>
      <Movdetails movement="Transferencia" amount="$1.000,00" date="Lunes"/>
      <Movdetails movement="Retiro" amount="-$3.500,00" date="10 de abril"/>
      <Movdetails movement="Pago dividendos" amount="$450,00" date="5 de abril"/>
      <Movdetails movement="Retiro" amount="-$2.300,00" date="1 de abril"/>
      <Movdetails movement="Venta AAPL" amount="$2.700,50" date="29 de Marzo"/>

      <div className="movements__details2">
        <div>Ver todos mis movimientos</div>
        <div className="movements__date">
          <div className="movements__money"> X</div>
        </div>
      </div>
     
    </div>
  );
}

export default Movements;
