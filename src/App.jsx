
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import RegistroUser from './components/RegistroUser';
import MiCarrusel from './components/Carrusel';
import Sidebar from './components/MenuAdministrador';
import  Map  from './components/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
  return (
    

   <div>

    <Router>
    <NavBar />
  

      <Routes>
        <Route path="/" element={<MiCarrusel/>}/>
    <Route path="/otra" element={<Map/>} />
    </Routes>
   

    </Router>
    <BottomBar />
  </div>
 

  )
}


export default App
