//importar las paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/login';
import Register from './pages/registrar';
import './App.css'
import { AuthProvider } from './context/Auth.context';
// import { AuthProvider } from './context/Auth.context';

function App() {
  return (
<AuthProvider>
<BrowserRouter>
        <Routes>
          {/* //Rutas disponibles */}
            <Route path="/" element ={<h2>pagina raiz</h2>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/registrar" element ={<Register/>}/>
        </Routes>
      </BrowserRouter>
</AuthProvider>
    )
}

export default App
