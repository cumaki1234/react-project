import React, { useState } from 'react';


import Box from '@mui/material/Box';
import { Form, Button } from 'react-bootstrap';

import '../RegistroUser.css';




const RegistrationForm2= () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    cedula: '',
    firstName: '',
    lastName: '',
    optionalFields: {
      razonSocial: '',
      ruc: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form data submitted:', formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="cedula">
        <Form.Label>Cedula</Form.Label>
        <Form.Control
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      {/* Optional fields */}
      <Form.Group controlId="razonSocial">
        <Form.Label>Razon Social (Optional)</Form.Label>
        <Form.Control
          type="text"
          name="optionalFields.razonSocial"
          value={formData.optionalFields.razonSocial}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="ruc">
        <Form.Label>RUC (Optional)</Form.Label>
        <Form.Control
          type="text"
          name="optionalFields.ruc"
          value={formData.optionalFields.ruc}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
s    </Form>
    

  );
};

export default RegistrationForm2;

