import React, { useState } from 'react';
import { Card, Button, Row,Col,Container } from 'react-bootstrap';
import god from '../assets/images/god3.jpg';
import god2 from '../assets/images/god1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import '../card.css'
import { Link } from 'react-router-dom';
import MapUbiS from '../components/MapaUbicacion';



const LocationCard = () => {
  const [markerCoordinates, setMarkerCoordinates] = useState(null);

  const handleMarkerClick = (coordinates) => {
    setMarkerCoordinates(coordinates);
  };

  const cardImageStyle = {
    height: '150px', // Establece la altura fija que desees
    objectFit: 'cover', // Para cubrir la altura sin distorsionar la imagen
  };
  return (
    <Container className="location-card-container">
      <div className="location-card-scroll">
 <div className="location-card">
    <Card style={{width: '18rem', margin: '10px'}} >
      <Card.Img variant="top" src={god} alt="Imagen del lugar"
       style={cardImageStyle} />
      <Card.Body>
      <Card.Title>Quevedo, Avda Walter Andrade frente a la Gasolinera La Chiquita</Card.Title>
      <Card.Text>
          Dirección del lugar y cualquier información adicional que desees.
        </Card.Text>

       
        <div className="text-center">
        <Button variant="primary" className="card-button" onClick={() => handleMarkerClick([-1.0156184261766825, -79.46708471010693])}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Encuéntranos        </Button>
        </div>
        
      </Card.Body>
      
    </Card>
  
<Card style={{ width: '18rem', margin: '10px'}}   >
<Card.Img variant="top" src={god2} alt="Imagen del lugar" 
 style={cardImageStyle}/>
<Card.Body >
<Card.Title   >Quevedo, Avda Walter Andrade frente a la Gasolinera La Chiquita</Card.Title>
<Card.Text>
    Dirección del lugar y cualquier información adicional que desees.
  </Card.Text>


  <div className="text-center">
  <Button variant="primary" className="card-button" onClick={() => handleMarkerClick([-1.0156184261766825, -79.46708471010693])}>
    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Encuéntranos
  </Button>
</div>


</Card.Body>
</Card>
<Card style={{ width: '18rem', margin: '10px'}}   >
<Card.Img variant="top" src={god2} alt="Imagen del lugar" 
 style={cardImageStyle}/>
<Card.Body >
<Card.Title   >Quevedo, Avda Walter Andrade frente a la Gasolinera La Chiquita</Card.Title>
<Card.Text>
    Dirección del lugar y cualquier información adicional que desees.
  </Card.Text>


  <div className="text-center">
  <Button variant="primary" className="card-button" onClick={() => handleMarkerClick([-1.0156184261766825, -79.46708471010693])}>
    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Encuéntranos
  </Button>
</div>


</Card.Body>

</Card>
</div>
</div>
{/* Sección del mapa */}
<div className="location-map">
        <MapUbiS markerCoordinates={markerCoordinates}/>
      </div>

</Container>
  );
};

export default LocationCard;
