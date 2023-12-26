import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import '../RegistroUser.css';

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    nombreusuario: '',
    contrasena: '',
    telefono: '',
    confirmarContrasena: '',
    identificacion: '',
    correo: '',
    nombre: '',
    apellido: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    

    // Limpiar los campos después de enviar el formulario
    setFormData({
      nombreusuario: '',
      contrasena: '',
      telefono: '',
      confirmarContrasena: '',
      identificacion: '',
      correo: '',
      nombre: '',
      apellido: '',
    });
  };

  const textFieldStyle = { marginBottom: '7px' }; // Ajusta este valor según sea necesario

  return (
    
    <Box className="container">
      <Box className="form-container">
        
        <form onSubmit={handleSubmit}>
          <TextField
            style={textFieldStyle}
            label="Nombre de Usuario"
            type="text"
            name="nombreusuario"
            value={formData.nombreusuario}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.nombreusuario) }}
          />

          <TextField
            style={textFieldStyle}
            label="Contraseña"
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.contrasena) }}
          />

          <TextField
            style={textFieldStyle}
            label="Confirmar Contraseña"
            type="password"
            name="confirmarContrasena"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.confirmarContrasena) }}
          />

          <TextField
            style={textFieldStyle}
            label="Nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.nombre) }}
          />

          <TextField
            style={textFieldStyle}
            label="Apellido"
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.apellido) }}
          />

          <TextField
            style={textFieldStyle}
            label="Correo"
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.correo) }}
          />

          <TextField
            style={textFieldStyle}
            label="Identificación"
            type="text"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.identificacion) }}
          />

          <TextField
            style={textFieldStyle}
            label="Teléfono"
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            fullWidth
            required
            InputLabelProps={{ shrink: Boolean(formData.telefono) }}
          />
          <Button type="submit" variant="contained" color="primary">
            Registrarse
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegistroUsuario;
