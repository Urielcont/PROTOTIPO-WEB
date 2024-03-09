//importar las paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/registrar';
import InicioPage from './pages/inicio';
import './App.css'

function App() {
  return (

    <BrowserRouter>
        <Routes>
          {/* //Rutas disponibles */}
            <Route path="/" element ={<h2>pagina raiz</h2>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/registrar" element ={<Register/>}/>
            <Route path='/Inicio' element={<InicioPage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
