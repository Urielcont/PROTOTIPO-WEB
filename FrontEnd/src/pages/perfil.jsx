import SidePage from "./sidebar";
import hasbu from "../assets/images/hasbu.jpeg";

import { useAuth } from "../context/Auth.context";

function PerfilPage() {

    const {isAuth,user}=useAuth();
    console.log(user);
    return (
        <div className="m-0">
            <h1 className="mr-96 flex justify-center text-4xl text-black text-">Perfil</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

        <div className="mt-1 flex justify-center">
                <div className="ml-80 mt-2 bg-customBlue3 h-36 w-3/6 m-6 rounded-full flex items-center justify-center shadow">
                    <img className="w-3/12 h-full mt-28 text-center rounded-full" src={hasbu} alt="" />
                </div>
        </div>

        <div className="flex justify-center mb-10">

        <form className="bg-slate-50 mt-16 w-5/12 ml-80 border rounded py-10 px-10 text-gray-700 shadow-xl shadow-zinc-400 hover:shadow-customBlue3">
    <div className="mb-4">
        {isAuth ? (
            <>
        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2" htmlFor="nombre"> Nombre(s): </label>
        <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.nombres}</label>

        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="apellido"> Apellidos: </label>
        <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.apellidos}</label>

        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="email"> Correo Electronico: </label>
        <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.correo}</label>

        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="telefono"> No. Telefono: </label>
        <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.telefono}</label>
            </>
        ) : (
            <>
            <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2" htmlFor="nombre">
            Nombre(s):
        </label>
        <input
            className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue"
            id="nombre"
            value="Usaurio no logeado"
            type="text"
        />
            </>
        )}        
    </div>
    {/* <div className="flex items-center justify-center">
        <button
            className="bg-customBlue2 hover:bg-customBlue mr-5 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button">
            Guardar
        </button>
        <button
            className="bg-gray-500 hover:bg-red-700 text-white ml-5 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button">
            Cancelar
        </button>
    </div> */}
</form>
</div>

        </div>
        
    );
}

export default PerfilPage;
