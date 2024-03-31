import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";
import { useAuth } from '../context/Auth.context';
import Swal from 'sweetalert2';


function Sidepage() {
  const {logout, user}= useAuth();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
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
            <a href='/Inicio'>
              <img className="w-16" src={Logo} alt="" />
            </a>
            <i className="bi bi-x ml-44 cursor-pointer lg:hidden" onClick={toggleSidebar}style={{ fontSize: '2rem' }}></i>
          </div>

          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer ">
            <a href="/Inicio"><i className="bi bi-house-door-fill hover:text-blue-700"></i></a>
            <a href="/Inicio"><h1 className="text-[17px] ml-4 text-black hover:text-blue-700">Inicio</h1></a>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <a href="/Calidad"><i className="bi bi-droplet-half hover:text-blue-700"></i></a>
            <a href="/Calidad"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Calidad</span></a>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <a href="/Flujo"><i className="bi bi-arrow-left-right hover:text-blue-700 "></i></a>
            <a href="/Flujo"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Flujo</span></a>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <a href="/Ventas"><i className="bi bi-graph-up-arrow hover:text-blue-700"></i></a>
            <a href="/Ventas"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Ventas</span></a>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <a href="/Perfil"><i className="bi bi-person-circle hover:text-blue-700"></i></a>
            <a href="/Perfil"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Perfil</span></a>
          </div>
          {user.correo ==="root@gmail.com" ? 
          (
          <>
            <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <a href="/Usuarios"><i className="bi bi-people  hover:text-blue-700"></i></a>
 
            <a href="/Usuarios"><span className="text-[17px] ml-4 text-black hover:text-blue-700">Usuarios</span></a>
            </div>
          </>
          ):(
          <>
          </>
          )
          }


          <hr className="my-4 text-gray-600" />
          <div className="p-2 mt-10 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <i className="bi bi-box-arrow-in-right hover:text-blue-700"></i>
            <span className="text-[17px] ml-4 text-black hover:text-blue-700" onClick={handleLogout}>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidepage;
