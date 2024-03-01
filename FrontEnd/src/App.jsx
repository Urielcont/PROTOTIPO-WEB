//importar las paginas
import Login from './pages/login';
import './App.css'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          //Rutas disponibles
            <Route path="/" element ={<h2>pagina raiz</h2>}/>
            <Route path="/login" element ={<Login/>}/>
        </Routes>
    </BrowserRouter>
</AuthProvider>
  )
}

export default App
