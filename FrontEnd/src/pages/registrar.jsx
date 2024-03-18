import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.context";
import { useNavigate } from "react-router-dom";
import 'tailwindcss/tailwind.css';
import Swal from 'sweetalert2';

import logo from "../assets/images/logo_copy.png"

function Register() {
  const { signup, errors: registerErrors, isAuth } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formCompleted, setFormCompleted] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true); // Estado para almacenar si las contraseñas coinciden

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate('/login');
  }, [isAuth]);

  const onSubmit = handleSubmit(async (values) => {
    if (values.password === values.password_confirm) {
      try {
        await signup(values);
        // Mostrar alerta de registro exitoso
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Tu cuenta ha sido creada correctamente',
        });
      } catch (error) {
        console.error('Error al registrar:', error);
        // Manejar error al registrar
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al registrar tu cuenta. Por favor, inténtalo de nuevo más tarde.',
        });
      }
    } else {
      setPasswordMatch(false); // Establece el estado de coincidencia de contraseña como falso si no coinciden
    }
  });

  const checkFormCompletion = () => {
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    setFormCompleted(correo !== "" && password !== "");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex">
        <div className="border-4 border-cyan-600 w-80 h-1/3 rounded-3xl justify-items-center ml-64 mt-4">
          {registerErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center m-2" key={i}>
              {error}
            </div>
          ))}
          <form onSubmit={onSubmit} onChange={checkFormCompletion} className="p-8 flex flex-col">
            <h1 className="text-2xl text-black-900 mb-4">Registrar</h1>
            <div className="mb-4">
              <input className="border-b-2 border-solid border-cyan-600 w-full" id="nombre" type="text" placeholder="Nombre(s)" {...register('nombres', { required: true })} />
              {errors.nombres && <p className="text-red-500">nombre es requerido</p>}
            </div>
            <div className="mb-4">
              <input className="border-b-2 border-solid border-cyan-600 w-full" id="apellidos" type="text" placeholder="Apellido(s)" {...register('apellidos', { required: true })} />
              {errors.apellidos && <p className="text-red-500">Los apellidos son requeridos</p>}
            </div>
            <div className="mb-4">
              <input maxLength={10} className="border-b-2 border-solid border-cyan-600 w-full" id="telefono" type="number" placeholder="telefono" {...register('telefono', { required: true })} />
              {errors.telefono && <p className="text-red-500">telefono es requerido</p>}
            </div>
            <div className="mb-4">
              <input className="border-b-2 border-solid border-cyan-600 w-full" id="correo" type="text" placeholder="correo" {...register('correo', { required: true })} />
              {errors.correo && <p className="text-red-500">Correo es requerido</p>}
            </div>
            <div className="mb-4">
              <input className="border-b-2 border-solid border-cyan-600 w-full" id="password" type="password" placeholder="Contraseña" {...register('password', { required: true })} />
              {errors.password && <p className="text-red-500">Contraseña es requerido</p>}
            </div>
            <div className="mb-4">
              <input className="border-b-2 border-solid border-cyan-600 w-full" id="password_confirm" type="password" placeholder="Confirnar Contraseña" {...register('password_confirm', { required: true })} />
              {errors.password_confirm && <p className="text-red-500">Contraseña es requerido</p>}
              {!passwordMatch && <p className="text-red-500">Las contraseñas no coinciden</p>} {/* Mensaje de error si las contraseñas no coinciden */}
            </div>
            <div className='mb-4 flex items-center'>
              <input className="border-b-2 border-solid border-cyan-600" type="checkbox" />
              <span className="ml-2 text-gray-700">Recuérdame</span>
            </div>
            <div className='separador mb-4 flex items-center'>
              <div className='flex-1 border-b border-gray-400'></div>
              <p className='mx-2 text-gray-700'>O continua con: </p>
              <div className='flex-1 border-b border-gray-400'></div>
            </div>
            <div className='flex justify-around mb-4'> {/* Cambiado para centrar las imágenes de redes sociales */}
              <img className='h-10 w-10 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="facebook" />
              <img className='h-10 w-10 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="gmail" />
            </div>
            {/* Botón de entrada centrado */}
            <button
              type="submit"
              disabled={!formCompleted}
              id="botonIngresar"
              className={`rounded-full self-center text-white p-2 w-36 ${
                formCompleted
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "disabled-button"
              }`}
            >
              Entrar
            </button>
            <p className="text-gray-700">Ya tienes una cuenta?<a href="/login" className="text-blue-500">Inicia sesión</a></p>
          </form>
        </div>
        <div className="flex-1 flex justify-end">
          <div className='bg-indigo-500 w-3/4 h-screen p-8 text-white bg-cover flex justify-center flex-col' style={{backgroundImage: "url('https://i.pinimg.com/564x/da/54/23/da542336e9bb92257fe2b2aedf30060a.jpg')"}}>
            <div className='text-center'>
              <h1 className="text-4xl text-gray-900 mb-4">Bienvenido</h1> {/* Cambiada la clase de tamaño de texto */}
              <img className="ml-56" src={logo} alt="logo" />
              <p className="mt-4 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis fuga repudiandae nostrum exercitationem quo, fugit necessitatibus? Non vel reprehenderit architecto hic, explicabo dolorem autem minima aspernatur eum magnam id!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

