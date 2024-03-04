import { useForm } from 'react-hook-form';

function Login() {
  return (
    <div className="flex">
      <div className="container">
        <form>
          <h1 className="titulo">Iniciar sesión</h1>
          <div>
            <input className="input" id="username" type="text" placeholder="Nombre(s)" />
          </div>
          <div>
            <input className="input" id="password" type="password" placeholder="Contraseña" />
          </div>
          <div class='checkContainer'>
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
          <p className="txt">No tienes una cuenta aún? <a href="/register">Registrate</a></p>
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

export default Login;