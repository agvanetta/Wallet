import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BsHouse, BsCash, BsGraphUp, BsPersonDash, BsNewspaper } from "react-icons/bs";
import Name from "./Name";

function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebar__img">
          <img 
          className="image"
          src="https://static.vecteezy.com/system/resources/previews/005/950/866/large_2x/male-avatar-with-coins-investor-icon-vector.jpg" 
          alt="perfil"></img> 
          <Name/>
          </div>
       <div className="sidebar__mainpanel">
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsHouse/></div><span >Inicio</span></div></Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsCash/></div><span >Billetera</span></div></Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsGraphUp/></div><span >Cotizaciones</span></div> </Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsNewspaper/></div><span >Noticias</span></div> </Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsPersonDash/></div><span >Perfil</span></div> </Link>
       </div>
    </div>
  );
}

export default Sidebar;
