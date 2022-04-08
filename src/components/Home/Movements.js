import React from "react";
import "./Movements.css";


function Movements() {
  return (
    <div className="movements">
      <div className="movements__title"> Ultimos movimientos de dinero</div>
      <div className="movements__title2">Conoce el detalle de las operaciones que impactan en tu Dinero disponible.</div>
      <div className="movements__details">
        <div>Deposito</div>
        <div className="movements__date">
          <div className="movements__money">$10.000,00</div>
          <div className="movements__day">Ayer</div>
        </div>
      </div>

      <div className="movements__details">
        <div>Compra TSLA</div>
        <div className="movements__date">
          <div className="movements__money">-$13.050,10</div>
          <div className="movements__day">Martes</div>
        </div>
      </div>

      <div className="movements__details">
        <div>Transferencia</div>
        <div className="movements__date">
          <div className="movements__money">$1.000,00</div>
          <div className="movements__day">Lunes</div>
        </div>
      </div>

      <div className="movements__details">
        <div>Retiro</div>
        <div className="movements__date">
          <div className="movements__money">-$3.500,00</div>
          <div className="movements__day">10 de abril</div>
        </div>
      </div>

      <div className="movements__details">
        <div>Retiro</div>
        <div className="movements__date">
          <div className="movements__money">-$2.300,00</div>
          <div className="movements__day">1 de abril</div>
        </div>
      </div>

      <div className="movements__details">
        <div>Venta AAPL</div>
        <div className="movements__date">
          <div className="movements__money">$2.700,50</div>
          <div className="movements__day">29 de Marzo</div>
        </div>
      </div>

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
