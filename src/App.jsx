
import RegistroUser from './components/RegistroUser';
import MiCarrusel from './components/Carrusel';
import Sidebar from './components/MenuAdministrador';
import  Map  from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MyNavbar from './components/NavBar2';
import RegistrationForm from './components/Registrousuario2'
import LocationCard from './components/cards';
import BottomBar2 from './components/BottomBar2';
import MapUbiS from './components/MapaUbicacion';
import EditarUser from './components/EditarUser';
import RegistrationForm2 from './components/RegistroUser';

function App() {
  return (
    

   <div>

    <Router>
 
    <MyNavbar/>
      <Routes>
        <Route path="/" element={<MiCarrusel/>}/>
        <Route path="/Mapa" element={<Map/>} />
        <Route path='/Registro' element={<RegistrationForm2/>}/>
        <Route path='/ubicacion' element={<LocationCard/>}/>
        <Route path='/ubicacionS' element={<MapUbiS/>}/>
        <Route path='/Perfil' element={<EditarUser/>}/>
    </Routes>
    <BottomBar2/>

    </Router>
   
  </div>
 

  )
}


export default App
