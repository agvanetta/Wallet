import React from "react";
import "./HomeTop.css";

function HomeTop() {
  return (
    <div className="hometop">
      <div className="hometop__1"> Billetera </div>
      <div className="hometop__1__">
        <div className="hometop__1__letters">
          <div>Disponible</div>
          <div>Inversiones</div>
          <div>Total</div>
        </div>
        <div className="hometop__1__numbers">
          <div>$ 36.742,92</div>
          <div>$ 52.352,20</div>
          <div>$ 89.095,12</div>
        </div>
      </div>
    </div>
  );
}
export default HomeTop;
