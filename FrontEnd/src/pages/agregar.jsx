import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/Auth.context";

function AgregarPage() {
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const { agregarUsers } = useAuth();

    const onSubmit = handleSubmit((data) => {
        agregarUsers(data)
    })
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="flex">
        <div className=" border-4 bg-white border-cyan-600 w-96 h-1/3 rounded-3xl justify-items-center mt-4">

          <form onSubmit={onSubmit} className="p-8 flex flex-col">
            <div className="flex justify-between mb-4">
              <button className=" bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 flex items-center" onClick={() => navigate("/user")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <h1 className="mr-20 text-2xl text-black-900">Agregar Usuario</h1>
            </div>
            <p className="mt-2">Nombre(s)</p>
            <input className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid w-full`} {...register('nombres')} autoFocus id="nombre" type="text" placeholder="Nombre(s)" />

            <p className="mt-2">Apellido(s)</p>
            <input  className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid  w-full`} {...register('apellidos')} id="apellidos" type="text" placeholder="Apellido(s)" />

            <p className="mt-2">Correo electrónico</p>
            <input className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid w-full`}  {...register('correo')} id="correo" type="text" placeholder="Correo electrónico" />

            <p className="mt-2">No. Teléfono</p>
            <input maxLength={10} className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid w-full`} {...register('telefono')} id="telefono" type="number" placeholder="No. Teléfono" />

            <p className="mt-2">Contraseña</p>
            <input className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid w-full`} {...register('password')} id="password" type="password" placeholder="Contraseña"  />

            <button type="submit" id="botonAgregar" className={`mt-4 rounded-full self-center text-white p-2 w-36 bg-blue-500 hover:bg-blue-600`}>
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AgregarPage;
