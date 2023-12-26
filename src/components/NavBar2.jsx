import React, { useState } from 'react';
import logo from '../assets/images/descargar.jpg';
import "../NavBar2.css"
import { faUser, faBell,faShoppingCart,faMap, faBars   } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal,Card, Alert   } from 'react-bootstrap';

const MyNavbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showProfileCard, setShowProfileCard] = useState(false);
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleLoginClick = () => {

    setShowLoginModal(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };


  const handleLogin = (e) => {
    e.preventDefault(); // Previene la recarga de la página por defecto


    if (!username || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }


    // Aquí deberías implementar la lógica de autenticación, por ejemplo, verificar con una base de datos.
    // Simplemente marcaré al usuario como "iniciado sesión" en este ejemplo.
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');

    handleLoginModalClose();
  };




  const handleProfileClick = () => {
    setShowProfileCard(!showProfileCard);
  };

  const handleProfileCardClose = () => {
    setShowProfileCard(false);
  };


const RegistrarUsuario=()=>{
  history('/Registro')
}

  const handleNavigateToProfile = () => {
    handleProfileCardClose();
    history('/Perfil'); // Reemplaza con la ruta de tu perfil
  };

  const handleLogoutFromProfile = () => {
    setLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
   // Obtén la ruta actual
    const currentPath = window.location.pathname;
  

  // Redirige solo si no estás en la página principal
  if (currentPath !== "/") {
 

    history('/');
  } 
    
  };

  return (
    <>
      <Navbar className="my-custom-navbar" expand="lg">
        <Navbar.Brand href="/" >
          <img
            src={logo}
            width="30"
            height="30"
            className="logo"
            alt="Company Logo"
          />
     
        </Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        <div className="icon-container">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
       
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#reservaciones">Reservaciones</Nav.Link>
            <Nav.Link href="#puntos">Puntos</Nav.Link>
        
       
        
          <Nav.Link href="#carrito" className="mr-2">
            <div className="icon-container">
              <FontAwesomeIcon icon={faShoppingCart}/>
            </div>
          </Nav.Link>
         
         <Nav.Link onClick={isLoggedIn ? handleProfileClick : handleLoginClick} className="mr-2">
            <FontAwesomeIcon icon={faUser} />
            {isLoggedIn ? ' Perfil' : ' Iniciar Sesión'}
          </Nav.Link>
            
            {isLoggedIn && <Nav.Link href="/Mapa" className="mr-2">
              <FontAwesomeIcon icon={faMap} />
            </Nav.Link>}
          
          <div className="icon-container">
            <Nav.Link href="#campanita" className="mr-2">
            
              <FontAwesomeIcon icon={faBell} />
           
            </Nav.Link>
          </div>
        
        </Navbar.Collapse>
      
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Agrega aquí los campos para iniciar sesión */}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form >
            <Form.Group controlId="formBasicUser">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control  
           type="text"
           placeholder="Ingrese su nombre de usuario"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
               />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleLogin}>
              Iniciar Sesión
            </Button>

            <Button variant="secondary" type="submit" onClick={RegistrarUsuario}>
              Registrarse
            </Button>
          </Form>
        </Modal.Body>
      </Modal>


        {/* Profile Card */}
        {isLoggedIn && (
        <Modal show={showProfileCard} onHide={handleProfileCardClose}>
          <Modal.Header closeButton>
            <Modal.Title>Perfil de Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card>
              {/* Agrega aquí los detalles del perfil del usuario */}
              <Card.Title>Bienvenido, Nombre de Usuario</Card.Title>
              {/* Agrega otros detalles del perfil aquí según tus necesidades */}
              <Button variant="primary" onClick={handleNavigateToProfile}>
                Ir a Perfil
              </Button>
              <Button variant="danger" onClick={handleLogoutFromProfile}>
                Cerrar Sesion 
              </Button>
            </Card>
          </Modal.Body>
        </Modal>
        )}
    </>
  );
};

export default MyNavbar;
