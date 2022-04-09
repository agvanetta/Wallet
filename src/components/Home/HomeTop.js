import React from "react";
import Chart2 from "./Chart2";
import "./HomeTop.css";

function HomeTop() {
  return (
    <div className="hometop">
      <div className="hometop__title">Billetera</div>
      <div className="hometop__1__">
        <div className="hometop__left">
          <div className="hometop__1__letters">
            <div className="hometop__detail">Efectivo</div>
            <div className="hometop__detail">FCI</div>
            <div className="hometop__detail">Dolares</div>
            <div className="hometop__detail">Acciones</div>
            <div className="hometop__detail">Criptomonedas</div>
            <div className="hometop__total">Total</div>
          </div>
          <div className="hometop__1__numbers">
            <div className="hometop__detail">$ 31.341,36</div>
            <div className="hometop__detail">$ 10.447,12</div>
            <div className="hometop__detail">$ 20.894,24</div>
            <div className="hometop__detail">$ 31.341,36</div>
            <div className="hometop__detail">$ 10.447,12</div>
            <div className="hometop__total" >$ 104.471,20</div>
          </div>
        </div>
        <div className="hometop__chart">
        <Chart2/>
        <div className="hometop__chart__legend">Detalle en %</div>
        </div>
      </div>
    </div>
  );
}
export default HomeTop;
