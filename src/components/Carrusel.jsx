import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import burguerImage from '../assets/images/burguer.png';
import nose from '../assets/images/god1.jpg';
import bestia from '../assets/images/prueba.jpg';
import BottomBar2 from './BottomBar2';
import MyNavbar from './NavBar2';
import '../MiCarrusel.css';

function MiCarrusel() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        
        <div>
             <MyNavbar/>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={burguerImage}
                        alt="Primer slide"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Primer slide</h3>
                        <p>Descripción del primer slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={nose}
                        alt="Segundo slide"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Segundo slide</h3>
                        <p>Descripción del Segundo slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bestia}
                        alt="Tercer slide"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Tercer slide</h3>
                        <p>Descripción del Tercer slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Agregar más elementos Carousel.Item según sea necesario */}
            </Carousel>

            {/* Cards debajo del carrusel en fila */}
            <div className="card-container">
                <Card
                    className={`custom-card ${hoveredCard === 1 ? 'hovered' : ''}`}
                    onMouseOver={() => setHoveredCard(1)}
                    onMouseOut={() => setHoveredCard(null)}
                >
                    <Card.Img
                        variant="top"
                        src={burguerImage}
                        alt="Ejemplo 1"
                        className="card-image"
                    />
                    <Card.Body>
                    <Card.Text className="card-text">Ejemplo 1</Card.Text>
                    </Card.Body>
                </Card>

                <Card
                    className={`custom-card ${hoveredCard === 2 ? 'hovered' : ''}`}
                    onMouseOver={() => setHoveredCard(2)}
                    onMouseOut={() => setHoveredCard(null)}
                >
                    <Card.Img
                        variant="top"
                        src={nose}
                        alt="Ejemplo 2"
                        className="card-image"
                    />
                    <Card.Body>
                    <Card.Text className="card-text">Ejemplo 2</Card.Text>
                    </Card.Body>
                </Card>

                <Card
                    className={`custom-card ${hoveredCard === 3 ? 'hovered' : ''}`}
                    onMouseOver={() => setHoveredCard(3)}
                    onMouseOut={() => setHoveredCard(null)}
                >
                    <Card.Img
                        variant="top"
                        src={bestia}
                        alt="Ejemplo 3"
                        className="card-image"
                    />
                    <Card.Body>
                    <Card.Text className="card-text">Ejemplo 3</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {/* Fin de Cards */}
        <BottomBar2/>
        </div>
    );
}

export default MiCarrusel;
