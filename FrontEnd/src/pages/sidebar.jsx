import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from "../assets/images/logo.png";
import { useAuth } from '../context/Auth.context';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Sidepage() {
  const {logout, user}= useAuth();

  const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Seguro de salir?',
      text: "Estás a punto de cerrar sesión",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  return (
    <div>
      <button className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={toggleSidebar}>
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </button>
      <div className={`sidebar fixed top-0 bottom-0 left-0 lg:left-0 duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-white shadow h-screen`}>
        <div className="text-black text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md">
            <Link to='/Inicio'>
              <img className="w-16" src={Logo} alt="" />
            </Link>
            <i className="bi bi-x ml-44 cursor-pointer lg:hidden" onClick={toggleSidebar} style={{ fontSize: '2rem' }}></i>
          </div>

          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer ">
            <Link to="/Inicio"><i className="bi bi-house-door-fill hover:text-blue-700"></i></Link>
            <Link to="/Inicio"><h1 className="text-[17px] ml-4 text-black hover:text-blue-700">Inicio</h1></Link>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <Link to="/Calidad"><i className="bi bi-droplet-half hover:text-blue-700"></i></Link>
            <Link to="/Calidad"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Calidad</span></Link>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <Link to="/Ph"><i className="bi bi-moisture hover:text-blue-700"></i></Link>
            <Link to="/Ph"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Ph</span></Link>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <Link to="/Flujo"><i className="bi bi-arrow-left-right hover:text-blue-700 "></i></Link>
            <Link to="/Flujo"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Flujo</span></Link>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <Link to="/Ventas"><i className="bi bi-graph-up-arrow hover:text-blue-700"></i></Link>
            <Link to="/Ventas"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Ventas</span></Link>
          </div>
          {user.rol === true ? 
          (
          <>
            <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <Link to="/user"><i className="bi bi-people  hover:text-blue-700"></i></Link>
            <Link to="/user"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Usuarios</span></Link>
            </div>
          </>
          ):(
          <></>
          )
          }
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <Link to="/Perfil"><i className="bi bi-person-circle hover:text-blue-700"></i></Link>
            <Link to="/Perfil"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Perfil</span></Link>
          </div>
          

          <hr className="my-4 text-gray-600" />
          <div className="p-2 mt-10 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <i className="bi bi-box-arrow-in-right hover:text-blue-700"></i>
            <span className="text-[17px] ml-4 text-black hover:text-blue-700" onClick={handleLogout}>Salir</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidepage;
