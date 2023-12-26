// Sidebar.js
import React, { useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import '../Sidebar.css'; // Importa el CSS del Sidebar

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card className="sidebar">
      <Card.Body>
        <Nav className="flex-column">
          <Nav.Link onClick={() => handleOptionClick('inventory')}>Gestión de Inventario</Nav.Link>
          <hr className="sidebar-divider" />
          <Nav.Link onClick={() => handleOptionClick('promotions')}>Gestión de Promociones</Nav.Link>
          <hr className="sidebar-divider" />
          <Nav.Link onClick={() => handleOptionClick('rewards')}>Gestión de Recompensas</Nav.Link>
          <hr className="sidebar-divider" />
          <Nav.Link onClick={() => handleOptionClick('products')}>Gestión de Productos</Nav.Link>
          <hr className="sidebar-divider" />
          <Nav.Link onClick={() => handleOptionClick('personnel')}>Gestión de Personal</Nav.Link>
        </Nav>
      </Card.Body>
    </Card>
  );
};

export default Sidebar;