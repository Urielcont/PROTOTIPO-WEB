import { useState } from "react"; 
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.context";
import { useEffect } from "react";
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import logo from "../assets/images/logo_copy.png";

function Login() {
  const { signin, errors: loginErrors } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(() => {
    // Si hay errores de inicio de sesión, mostrar la alerta de error
    if (loginErrors.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Usuario inexistente',
        text: loginErrors.join(', '), // Mostrar todos los errores
      });
    }
  }, [loginErrors]);

  const onSubmit = handleSubmit(async (data) => {
    // Realizar el inicio de sesión
    const user = await signin(data);

    // Verificar si el usuario fue encontrado y su rol no es false
    if (user && user.rol !== false) {
      // Después del inicio de sesión, redirigir si es necesario
      navigate("/Inicio");
      // Mostrar alerta de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        text: 'Bienvenido de vuelta',
      });
    } else {
      // Mostrar alerta de usuario inválido si el rol es false
      Swal.fire({
        icon: 'error',
        title: 'Usuario inválido',
        text: 'No tiene permiso para iniciar sesión',
      });
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
        <div className="border-4 border-cyan-600 w-80 h-1/3 rounded-3xl justify-items-center ml-64 mt-16">
          {loginErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center m-2" key={i}>
              {error}
            </div>
          ))}
          <form onSubmit={onSubmit} onChange={checkFormCompletion} className="p-8 flex flex-col">
            <h1 className="text-2xl text-black-900 mb-4">Iniciar sesión</h1>

            <div className="mb-4">
              <input className="border-b-2 border-solid border-cyan-600 w-full" id="correo" type="email" placeholder="correo" {...register('correo', { required: true })} />
              {errors.correo && <p className="text-red-500">Correo es requerido</p>}
            </div>
            <div className="mb-4">
              <input className="border-b-2 border-solid border-cyan-600 w-full" id="password" type="password" placeholder="Contraseña" {...register('password', { required: true })} />
              {errors.password && <p className="text-red-500">Contraseña es requerido</p>}
            </div>
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

          </form>
        </div>
        <div className="flex-1 flex justify-end">
          <div className='bg-indigo-500 w-3/4 h-screen p-8 text-white bg-cover flex justify-center flex-col' style={{backgroundImage: "url('https://i.pinimg.com/564x/da/54/23/da542336e9bb92257fe2b2aedf30060a.jpg')"}}>
            <div className='text-center'>
              <h1 className="text-7xl text-gray-900 mb-4">Bienvenido</h1>
              <img className="ml-56" src={logo} alt="logo" />
              <p className="mt-4 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis fuga repudiandae nostrum exercitationem quo, fugit necessitatibus? Non vel reprehenderit architecto hic, explicabo dolorem autem minima aspernatur eum magnam id!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
