//importar las paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import './App.css'

function App() {
  return (
   
    <BrowserRouter>
        <Routes>
          {/* //Rutas disponibles */}
            <Route path="/" element ={<h2>pagina raiz</h2>}/>
            <Route path="/login" element ={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
