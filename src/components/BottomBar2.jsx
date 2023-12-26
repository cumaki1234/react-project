import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Container, Navbar,  OverlayTrigger, Tooltip } from 'react-bootstrap';
import "../BottomBar2.css"

const BottomBar2 = () => {
  const renderTooltip = (text) => (
    <Tooltip id="tooltip">{text}</Tooltip>
  );
  return (
    <Navbar fixed="bottom" className="bottom-bar">
    <Container>
      <Navbar.Brand className="bottom-bar-brand">
      <OverlayTrigger
            placement="top"
            overlay={renderTooltip('Síguenos en Intagram')}
          >
            <a
              href="https://www.instagram.com/alcarbonquevedo/"
              target="_blank"
              rel="noopener noreferrer"
            >
        <FontAwesomeIcon icon={faInstagram}  className="bottom-bar-icon"/>
        </a>
        </OverlayTrigger>
      </Navbar.Brand>
      <Navbar.Brand className="bottom-bar-brand">
      <OverlayTrigger
            placement="top"
            overlay={renderTooltip('Síguenos en Facebook')}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100082952421573&locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
            >
        <FontAwesomeIcon icon={faFacebook} className="bottom-bar-icon"/>
        </a>
        </OverlayTrigger>
      </Navbar.Brand>
      <Navbar.Brand className="bottom-bar-brand flex-fill text-center">
      <OverlayTrigger
            placement="top"
            overlay={renderTooltip('Descargar menú')}
          >
        <FontAwesomeIcon icon={faUtensils} className="bottom-bar-icon"/>

        </OverlayTrigger>
      </Navbar.Brand>
      <Navbar.Brand className="bottom-bar-brand text-end">
      <OverlayTrigger
            placement="top"
            overlay={renderTooltip('Encuéntranos')}
          >
      <a href="/ubicacion">
      
        <FontAwesomeIcon icon={faMapMarkerAlt} className="bottom-bar-icon"/>
      </a>
      </OverlayTrigger>
      </Navbar.Brand>
      
    </Container>
  </Navbar>
  );
};

export default BottomBar2;
