import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__first">
        <div className="header__balance">
          <div className="header__balance__1">Equivalente en </div>
          <div className="header__balance__2">ARS</div>
        </div>
        <div className="header__balance__3">$ 36674.92</div>
      </div>
      <div className="header__second">
        <div className="header__second__button1">Depositar</div>
        <div className="header__second__button2">Comprar</div>
      </div>
    </div>
  );
}

export default Header;
