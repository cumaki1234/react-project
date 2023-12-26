import React from 'react';
import { Card, Button } from 'react-bootstrap';
import god3 from '../assets/images/god3'
const LocationCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={go3} alt="Imagen del lugar" />
      <Card.Body>
        <Card.Title>Nombre del lugar</Card.Title>
        <Card.Text>
          Dirección del lugar y cualquier información adicional que desees.
        </Card.Text>
        <Button variant="primary">Encuéntranos</Button>
      </Card.Body>
    </Card>
  );
};

export default LocationCard;
