//importar las paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/registrar';
import InicioPage from './pages/inicio';
import CalidadPage from './pages/calidad';
import FlujoPage from './pages/flujo';
import VentasPage from './pages/ventas';
import PerfilPage from './pages/perfil';
import { AuthProvider } from './context/Auth.context';
import ProtectedRoute from "./protectedRoutes";
// import { AuthProvider } from './context/Auth.context';

function App() {
  return (
<AuthProvider>
<BrowserRouter>
        <Routes>
          {/* //Rutas disponibles */}
            <Route path="/" element ={<Login/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/registrar" element ={<Register/>}/>

            <Route element={<ProtectedRoute />}>
              <Route path='/Inicio' element={<InicioPage/>}></Route>
              <Route path='/Calidad' element={<CalidadPage/>}></Route>
              <Route path='/Flujo' element={<FlujoPage/>}></Route>
              <Route path='/Ventas' element={<VentasPage/>}></Route>
              <Route path='/Perfil' element={<PerfilPage/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
</AuthProvider>
    )
}

export default App
