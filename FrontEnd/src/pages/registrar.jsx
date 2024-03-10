import {useForm,} from "react-hook-form";
import { useAuth } from "../context/Auth.context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const {signup,errors: registerErrors,isAuth }=useAuth();
  const {register, handleSubmit, formState:{errors}}=useForm();

  const navigate = useNavigate();
  
  useEffect(()=>{
    if(isAuth) navigate('/login');
  },[isAuth]);

  const onSubmit=handleSubmit(async (values)=>{ 
    await signup(values);

    })
 
  return (
    <div className="flex">
      <div className="container">
      {registerErrors.map((error, i) => (
          <div className="errordiv" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>

          <h1 className="titulo">Registrar</h1>
          <div>
            <input className="input" id="nombres" type="text" placeholder="Nombre(s)" {...register('nombres',{required:true})}/>
            {errors.nombres && <p className="text-red-500">nombres es requerido</p>}
          </div>
          <div>
            <input className="input" id="telefono" type="text" placeholder="telefono"{...register('telefono',{required:true})}/> 
            {errors.telefono && <p className="text-red-500">telefono es requerido</p>}        
          </div>
          <div>
            <input className="input" id="correo" type="text" placeholder="correo"{...register('correo',{required:true})}/>
            {errors.correo && <p className="text-red-500">Correo es requerido</p>}
          </div>
          <div>
            <input className="input" id="password" type="password" placeholder="Contraseña"{...register('password',{required:true})}/>
            {errors.password && <p className="text-red-500">Contraseña es requerido</p>}
          </div>
          
          <div className='checkContainer'>
            <input className="checkbox" type="checkbox" />
            <span className="txt">Recuérdame</span>
          </div>
          <div className='separador'>
            <div className='linea1'></div>
            <p className='continuar'>O continua con: </p>
            <div className='linea2'></div>
          </div>
          <div className='redes'>
            <img className='redesLogos' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="facebook" />
            <img className='redesLogos' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="gmail" />
          </div>
          <button className="btn" type="submit">Entrar</button>
          <p className="txt">No tienes una cuenta aún? <a href="/registrarse">Registrate</a></p>
        </form>
      </div>
      <div className="aside">
        <div className='info'>
            <h1>Bienvenido</h1>
            <img src="../assets/logo.png" alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis fuga repudiandae nostrum exercitationem quo, fugit necessitatibus? Non vel reprehenderit architecto hic, explicabo dolorem autem minima aspernatur eum magnam id!</p>
        </div>
      </div>
    </div>
  );
}

export default Register;