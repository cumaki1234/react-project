
import Navbar from './components/NavBar';
import BottomBar from './components/BottomBar';
import RegistroUser from './components/RegistroUser';
import MiCarrusel from './components/Carrusel';
import Sidebar from './components/MenuAdministrador';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <Navbar />
    <Sidebar/>
    <BottomBar />
  </div>
  )
}
/* <RegistroUser/> */

export default App
