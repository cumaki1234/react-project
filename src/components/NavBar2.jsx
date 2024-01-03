import React, { useState } from 'react';
import { Layout, Menu,Drawer, Badge, Modal, Space, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuOutlined,
  ShoppingOutlined,
  BellOutlined,
  UserOutlined,
} from '@ant-design/icons';
import LoginForm from './Login';
import logo from '../assets/images/descargar.jpg';

const { Header } = Layout;

const Navbar = ({ cartTotal } ) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const handleLogin = (userData) => {
    // Manejar la lógica de inicio de sesión y establecer isLoggedIn en true
    setIsLoggedIn(true);
    // Puedes realizar otras acciones necesarias después del inicio de sesión
    console.log('Usuario ha iniciado sesión:', userData);
  };


  const [cart, setCart] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const handleAddToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
};


  return (
    <Layout>
      {/* NavBar */}
      <Header className="flex items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: '32px', margin: '16px', borderRadius: '50%' }}
            />
          </Link>
          <span className="text-white">Hamburguesas al carbón</span>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          className="flex-1 min-w-0 justify-end"
        >
          <Menu.Item key="1">Menú</Menu.Item>
          <Menu.Item key="2">Reservaciones</Menu.Item>
          <Menu.Item key="3" onClick={showDrawer}>
            <Badge count={cartTotal} size="small">
              <ShoppingOutlined className="text-white" />
            </Badge>
          </Menu.Item>
          <Menu.Item key="4">
            <BellOutlined className="text-white" />
          </Menu.Item>
          <Menu.Item key="5" onClick={showModal}>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <span>Iniciar Sesión</span>
            </Space>
          </Menu.Item>
          {isLoggedIn && (
          <>
            <Menu.Item key="6">
              <Link to="/perfil">
                <UserOutlined className="text-white" />
                <span>Perfil</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/configuracion">
                <SettingOutlined className="text-white" />
                <span>Configuración</span>
              </Link>
            </Menu.Item>
            </>
        )}
        {console.log(isLoggedIn)}
        </Menu>
      </Header>

      {/* Agregar el modal */}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="400px"
        
      >
        {/* Agregar el contenido del modal aquí */}
        {/* Puedes incluir formularios, campos de usuario y contraseña, etc. */}
        <LoginForm />
      </Modal>

 {/* Drawer para mostrar los detalles del carrito */}
 <Drawer
        title="Detalles del Carrito"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
      >
        {/* Aquí puedes mostrar los detalles del carrito */}
        {cart.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio unitario: ${product.price.toFixed(2)}</p>
            {/* Agrega más detalles según sea necesario */}
          </div>
        ))}
        {/* Puedes mostrar el total, botones de checkout, etc. */}
        <p>Total: ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</p>
        <button onClick={onClose}>Cerrar</button>
      </Drawer>


      
    </Layout>
  );
};

export default Navbar;
