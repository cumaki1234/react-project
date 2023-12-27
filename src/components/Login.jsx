import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import '../EstiloLogin.css';
import BottomBar2 from './BottomBar2';
import MyNavbar from './NavBar2'

const Login = () => {
  const [formData, setFormData] = useState({
    correo: '', // Cambié "nombre" y "apellido" a "correo" y "contraseña"
    contraseña: '', // Cambié "nombre" y "apellido" a "correo" y "contraseña"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para guardar los datos del empleado
    console.log('Datos del empleado:', formData);
    // Luego puedes enviar los datos a tu backend o realizar las acciones necesarias
  };

  return (
    <Card className="form-card">
      <Card.Body>
        <Card.Title>Inicio de Sesión</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCorreo">
            <Form.Label>Usuario/Telefono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su usuario o número de teléfono"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContraseña">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password" // Cambié a "password" para ocultar la contraseña
              placeholder="Ingrese su contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
