import logo from '../assets/images/descargar.jpg';
import {faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBell,faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "../NavBar.css"
const NavBar = () => {
    return (
      
    <div className="navbar">
    <div> <img src={logo} alt="Logo" className="logo" /></div>
    <div className="company-name">Hamburguesas al Carbon</div>
    <div className="menu-items">
      <button className="menu-button">Menú</button>
      <button className="menu-button">Reservaciones</button>
      <button className="menu-button">Puntos</button>
      <a href="tu-enlace-de-WhatsApp" className="whatsapp-button">
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </a>
      <button className="menu-button">
      <FontAwesomeIcon icon={faShoppingCart} className='cart-icon'/>
    </button>
      <button className="menu-button">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
   
      </button>
      <button className="menu-button">
        <FontAwesomeIcon icon={faBell} className="bell-icon" />
      
      </button>
    </div>
    </div>
    );
  }
  
export default NavBar; 