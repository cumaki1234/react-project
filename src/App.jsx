
import RegistroUser from './components/RegistroUser';
import Carousel from './components/Carrusel';
import Sidebar from './components/MenuAdministrador';
import Map from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import RegistrationForm from './components/Registrousuario2'
import LocationCard from './components/cards';
/*import BottomBar2 from './components/BottomBar2';*/
import MapComponent from './components/MapaUbicacion';
import EditarUser from './components/EditarUser';
import RegistrationForm2 from './components/RegistroUser';
import MyNavbar from './components/NavBar2';
import BottomBar2 from './components/BottomBar2';
import { Layout, Menu, Row, Col, Image, Dropdown, Button, Badge, theme, Breadcrumb,Tooltip } from 'antd';
import CrearMesas from './components/CrearMesas';
import AvisosPrincipalesAdmin from './components/AvisosPrincipalesAdmin';
import CrearCategoria from './components/CrearCategoria';
import CrearTipoProducto from './components/CrearTipoProducto'
import Admin from './components/admin';
import LoginForm from './components/Login';
import Registro from './components/registro'
const { Header , Content, Footer } = Layout;
import logo from './assets/images/descargar.jpg';
import xd from './assets/images/xd.jpg';
import god from './assets/images/god1.jpg';




function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

;
  
  return (


    
    <Router>
      < MyNavbar/>
      <Layout>
      <Content >
      
      <div
        
        
      >
    
    
          <Routes>
          
          <Route path="/" element={< Carousel/>}/>
          <Route path="/Mapa" element={<MapComponent/>} />
          <Route path='/Registro' element={<RegistrationForm2 />} />
          <Route path='/ubicacion' element={<LocationCard />} />
          
          <Route path='/Perfil' element={<EditarUser />} />
          </Routes>
          </div>
        </Content>
        
      </Layout>
      
    </Router>
    
  )
}
export default App
