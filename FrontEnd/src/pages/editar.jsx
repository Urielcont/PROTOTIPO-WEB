import React, { useEffect, useState } from "react";
import 'tailwindcss/tailwind.css';
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { useAuth } from "../context/Auth.context";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

function Editar() {
  const navigate = useNavigate();
  const { setValue, register, handleSubmit } = useForm();
  const { getUsers, updateUser } = useAuth();
  const params = useParams();

  useEffect(() => {
    try {
      async function loadUser() {
        if (params.id) {
          const res = await getUsers(params.id);
          setValue("nombres", res.nombres);
          setValue("apellidos", res.apellidos);
          setValue("telefono", res.telefono);
          setValue("correo", res.correo);
        }
      }
      loadUser();
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  }, [params.id]);

  const onSubmit = handleSubmit(async (data) => {
    // Mostrar SweetAlert de confirmación
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: "¡Los cambios se guardarán!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar!'
    });

    if (confirmacion.isConfirmed) {
      try {
        await updateUser(params.id, data);
        // Mostrar SweetAlert de actualización exitosa
        
        Swal.fire({
          icon: 'success',
          title: '¡Actualización exitosa!',
          showConfirmButton: false,
          timer: 800,
        });
        navigate("/user");
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Hubo un error al actualizar el usuario!',
        });
      }
    }
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex">
        <div className="border-4 border-cyan-600 w-96 h-1/3 rounded-3xl justify-items-center mt-4">

          <form onSubmit={onSubmit} className="p-8 flex flex-col">
            <h1 className="text-2xl text-black-900 ml-28 mb-4">Editar</h1>
            <p className="mt-2">Nombre(s)</p>
            <input {...register("nombres")} className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid w-full`} autoFocus id="nombre" type="text" placeholder="Nombre(s)" />

            <p className="mt-2">Apellido(s)</p>
            <input {...register("apellidos")} className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid  w-full`} id="apellidos" type="text" placeholder="Apellido(s)" />

            <p className="mt-2">Correo electrónico</p>
            <input {...register("correo")} className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid w-full`} id="correo" type="text" placeholder="Correo electrónico" />

            <p className="mt-2">No. Teléfono</p>
            <input {...register("telefono")} maxLength={10} className={`border-l-transparent border-blue-500 border-r-transparent border-t-transparent border-b-2 border-solid w-full`} id="telefono" type="number" placeholder="No. Teléfono" />

            <button type="submit"
              id="botonActualizar"
              className={`mt-4 rounded-full self-center text-white p-2 w-36 bg-blue-500 hover:bg-blue-600`}
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editar;
