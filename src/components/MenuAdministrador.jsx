// Importa las bibliotecas necesarias
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  // Estado para controlar la visibilidad del sidebar
  const [collapsed, setCollapsed] = useState(false);

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/perfil">Perfil</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/configuracion">Configuración</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Contenido principal */}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className="trigger" onClick={toggleSidebar} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={toggleSidebar} />
          )}
        </Header>
        <Content style={{ margin: '16px' }}>
          {/* Contenido de tu aplicación */}
          {/* Puedes colocar tus rutas y componentes aquí */}
          Contenido de tu aplicación...
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
