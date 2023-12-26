import React from 'react';
import { Card, Button, Row,Col,Container } from 'react-bootstrap';
import god from '../assets/images/god3.jpg';
import god2 from '../assets/images/god1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import '../card.css'
import { Link } from 'react-router-dom';


const LocationCard = () => {

  const cardImageStyle = {
    height: '150px', // Establece la altura fija que desees
    objectFit: 'cover', // Para cubrir la altura sin distorsionar la imagen
  };
  return (
    <Container>
      <Row>
        <Col>
    <Card style={{ width: '18rem', top:'30px',left:'10px'}}  >
      <Card.Img variant="top" src={god} alt="Imagen del lugar"
       style={cardImageStyle} />
      <Card.Body>
      <Card.Title>Quevedo, Avda Walter Andrade frente a la Gasolinera La Chiquita</Card.Title>
      <Card.Text>
          Dirección del lugar y cualquier información adicional que desees.
        </Card.Text>

        <Link to="/ubicacionS">
        <div className="text-center">
        <Button variant="primary" className="card-button">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Encuéntranos        </Button>
        </div>
        </Link>
      </Card.Body>
      
    </Card>
    </Col>


<Col>
<Card style={{ width: '18rem', top:'30px',left:'10px'}}  >
<Card.Img variant="top" src={god2} alt="Imagen del lugar" 
 style={cardImageStyle}/>
<Card.Body >
<Card.Title   >Quevedo, Avda Walter Andrade frente a la Gasolinera La Chiquita</Card.Title>
<Card.Text>
    Dirección del lugar y cualquier información adicional que desees.
  </Card.Text>

  <Link to="/ubicacionS">
  <div className="text-center">
  <Button variant="primary" className="card-button">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> Encuéntranos
  </Button>
</div>
</Link>

</Card.Body>


</Card>
</Col>

</Row>
</Container>
  );
};

export default LocationCard;
