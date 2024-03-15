import { useState } from "react"; 
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.context";
import { useEffect } from "react";
import 'tailwindcss/tailwind.css';
import {useNavigate} from 'react-router-dom'

import logo from "../assets/images/logo_copy.png"

function Login() {
  const { signin, errors: loginErrors, isAuth} = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [formCompleted, setFormCompleted] = useState(false);

  useEffect(()=>{
      if (isAuth) navigate("/Inicio");
  }, [isAuth])
  const onSubmit= handleSubmit((data) => {
      signin(data);
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
      <form onSubmit={onSubmit} onChange={checkFormCompletion}  className="p-8 flex flex-col">
        <h1 className="text-2xl text-black-900 mb-4">Iniciar sesión</h1>


        <div className="mb-4">
          <input className="border-b-2 border-solid border-cyan-600 w-full" id="correo" type="email" placeholder="correo" {...register('correo', { required: true })} />
          {errors.correo && <p className="text-red-500">Correo es requerido</p>}
        </div>
        <div className="mb-4">
          <input className="border-b-2 border-solid border-cyan-600 w-full" id="password" type="password" placeholder="Contraseña" {...register('password', { required: true })} />
          {errors.password && <p className="text-red-500">Contraseña es requerido</p>}
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


        {/* <button className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white font-bold py-2 px-4 rounded-full mb-4 self-center border border-blue-700 hover:border-transparent" type="submit">Entrar</button> */}
        <p className="text-gray-700">No tienes una cuenta aún?<a href="/registrar" className="text-blue-500">Registrate</a></p>
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

export default Login;
