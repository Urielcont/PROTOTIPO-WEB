import 'bootstrap-icons/font/bootstrap-icons.css';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";

function Sidepage() {

  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    document.querySelector('.sidebar').classList.toggle('left-[-300px]')
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div>
      <button className="absolute text-white text-4xl top-5 left-4 cursor-pointer" onClick={toggleSidebar}>
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </button>
      <div className={`sidebar fixed top-0 bottom-0 lg:left-0 duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-white shadow h-screen`}>
        <div className="text-black text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md">
            <a href='/Side'>
              <img className="w-16" src={Logo} alt="" />
            </a>
            <i className="bi bi-x ml-44 cursor-pointer lg:hidden" onClick={toggleSidebar}style={{ fontSize: '2rem' }}></i>
          </div>

          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer ">
            <i className="bi bi-house-door-fill hover:text-blue-700"></i>
            <h1 className="text-[17px] ml-4 text-black hover:text-blue-700">Inicio</h1>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <i className="bi bi-droplet-half hover:text-blue-700"></i>
            <span className="text-[17px] ml-4 text-black hover:text-blue-700">Calidad</span>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <i className="bi bi-arrow-left-right hover:text-blue-700 "></i>
            <span className="text-[17px] ml-4 text-black hover:text-blue-700">Flujo</span>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <i className="bi bi-graph-up-arrow hover:text-blue-700"></i>
            <span className="text-[17px] ml-4 text-black hover:text-blue-700">Ventas</span>
          </div>
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <i className="bi bi-person-circle hover:text-blue-700"></i>
            <span className="text-[17px] ml-4 text-black hover:text-blue-700">Perfil</span>
          </div>

          <hr className="my-4 text-gray-600" />
          <div className="p-2 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer" onClick={toggleSubmenu}>
            <i className="bi bi-chat-left-text-fill hover:text-blue-700"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[17px] ml-4 text-black hover:text-blue-700">Mas</span>
              <span className={`text-sm ${submenuOpen ? 'rotate-180' : ''}`}>
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${submenuOpen ? '' : 'hidden'}`}>
            <h1 className="cursor-pointer p-2 ">Social</h1>
            <h1 className="cursor-pointer p-2 ">Personal</h1>
          </div>
          <hr className="my-4 text-gray-600" />
          
          <div className="p-2 mt-24 flex items-center rounded-md px-4 duration-300 cursor-pointer">
            <i className="bi bi-box-arrow-in-right hover:text-blue-700"></i>
            <span className="text-[17px] ml-4 text-black hover:text-blue-700">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidepage;
