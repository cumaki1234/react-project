import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../RegistroUser.css'

const RegistroUsuario = () => {
    const [formData, setFormData] = useState({
        identificacion: '',
        correo: '',
        nombre: '',
        apellido: '',
        telefono: '',
        contrasena: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        
      
      toast.success('Ingreso exitoso', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000000, // Cierra automáticamente el toast después de 2000 milisegundos (2 segundos)
      });
  
      // Restablece los campos del formulario después del envío exitoso (puedes ajustar esto según tus necesidades)
      setFormData({
        identificacion: '',
        correo: '',
        nombre: '',
        apellido: '',
        telefono: '',
        contrasena: '',
      });
    };
    return (
        <div className="container">
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Identificación:
          <input
            type="text"
            name="identificacion"
            value={formData.identificacion}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </label>
  
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />
        </label>
  
        <button type="submit">Registrarse</button>
      </form>
      </div>
      </div>
    );
  };
  
  export default RegistroUsuario;