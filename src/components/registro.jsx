import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [telefono, setTelefono] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [tipoCliente, setTipoCliente] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [rucCedula, setRucCedula] = useState('');
  const [correoRecuperacion, setCorreoRecuperacion] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud a la API para crear un nuevo usuario
      const response = await fetch('http://127.0.0.1:8000/Login/crear/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombreusuario: nombreUsuario,
          contrasenia: contrasenia,
          ctelefono: telefono,
          crazon_social: razonSocial,
          tipocliente: tipoCliente,
          snombre: nombre,
          capellido: apellido,
          ruc_cedula: rucCedula,
          correorecuperacion: correoRecuperacion,
          ubicacion: ubicacion,
        }),
      });

      const data = await response.json();

      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        // Manejar el éxito (puedes redirigir al usuario a otra página, mostrar un mensaje, etc.)
        console.log('Usuario creado con éxito:', data.mensaje);
      } else {
        // Manejar errores de registro
        console.error('Error en el registro:', data.error);
      }
    } catch (error) {
      console.error('Error en la solicitud de registro:', error);
    }
  };

  return (
    <div>






      <h2>Registro</h2>
      
      
      
      
      
      
      <form onSubmit={handleRegistro}>
        {/* Agrega los campos del formulario */}
        <div>
          <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
          <input
            type="text"
            id="nombreUsuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contrasenia">Contraseña:</label>
          <input
            type="password"
            id="contrasenia"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="razonSocial">Razón Social:</label>
          <input
            type="text"
            id="razonSocial"
            value={razonSocial}
            onChange={(e) => setRazonSocial(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tipoCliente">Tipo de Cliente:</label>
          <input
            type="text"
            id="tipoCliente"
            value={tipoCliente}
            onChange={(e) => setTipoCliente(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rucCedula">RUC/Cédula:</label>
          <input
            type="text"
            id="rucCedula"
            value={rucCedula}
            onChange={(e) => setRucCedula(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="correoRecuperacion">Correo de Recuperación:</label>
          <input
            type="email"
            id="correoRecuperacion"
            value={correoRecuperacion}
            onChange={(e) => setCorreoRecuperacion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
      <div>
        ¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link>
      </div>
    </div>
  );
};

export default Registro;
