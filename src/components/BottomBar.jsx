import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUtensils} from '@fortawesome/free-solid-svg-icons'; // Puedes ajustar los íconos según tus necesidades
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../BottomBar.css';

const BottomBar = () => {
    return (
      <nav className="bottom-bar">
        <a href="/map" className="bottom-bar-item">
        
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div >Encuentranos</div>
      </a>
        <a href="/restaurants" className="bottom-bar-item">

        <FontAwesomeIcon icon={faUtensils} />
        <div >Hamburguesas para todos</div>
      </a>
       <div className='Redes'>
        
        <div className='className="social-icons-container'> 
        <a href="https://www.instagram.com/alcarbonquevedo?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" className="social-icon instagram">
        <FontAwesomeIcon icon={faInstagram} />
        
      </a>
      <a href="https://www.facebook.com/profile.php?id=100082952421573&locale=es_LA" className="social-icon facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      </div>
      <div className='RedesSocial'>Redes sociales</div>
      </div>
      </nav>
    );
  }
  
export default BottomBar;  