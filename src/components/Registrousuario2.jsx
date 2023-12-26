import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    idCard: '',
    firstName: '',
    lastName: '',
    businessName: '',
    ruc: '',
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
    // Aquí puedes realizar cualquier lógica adicional, como enviar los datos a un servidor, etc.
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de Usuario:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Teléfono:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Cédula:
        <input
          type="text"
          name="idCard"
          value={formData.idCard}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Nombre:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Apellido:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Razón Social (opcional):
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
        />
      </label>

      <label>
        RUC (opcional):
        <input
          type="text"
          name="ruc"
          value={formData.ruc}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default RegistrationForm;
