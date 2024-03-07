//importar las paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/registrar';
import Sidepage from './pages/sidebar';
import './App.css'

function App() {
  return (

    <BrowserRouter>
        <Routes>
          {/* //Rutas disponibles */}
            <Route path="/" element ={<h2>pagina raiz</h2>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/registrar" element ={<Register/>}/>
            <Route path='/Side' element={<Sidepage/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
