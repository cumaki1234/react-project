import React, { useState } from 'react';
import logo from '../assets/images/descargar.jpg';
import {faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBell,faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "../NavBar.css"
import { Link } from 'react-router-dom';



const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

    return (
      
    <nav  className={`navbar ${menuVisible ? 'menu-visible' : ''}`}>
      <div> <img src={logo} alt="Logo" className="logo" /></div>
      <div className="company-name">Hamburguesas al Carbon</div>
      <div className={`menu-items ${menuVisible ? 'menu-visible' : ''}`}>
        <button className="menu-button">Menú</button>
        <button className="menu-button">Reservaciones</button>
        <button className="menu-button">Puntos</button>
        <a href="tu-enlace-de-WhatsApp" className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
        <button className="menu-button">
        <FontAwesomeIcon icon={faShoppingCart} className='cart-icon'/>
        </button>

        <Link to="/otra">
        <button className="menu-button">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        </button>
        </Link>

        <button className="menu-button">
        <FontAwesomeIcon icon={faBell} className="bell-icon" />
        </button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuVisible ? 'Cerrar' : 'Menú'}
      </button>
    </nav>
    );
  }
  
export default NavBar; 