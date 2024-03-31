
import Sidepage from "./sidebar";
import { useAuth } from "../context/Auth.context";
import { useEffect } from "react";

function PerfilPage() {
    const { user} = useAuth();


    useEffect(() => {
        if (user.correo !== "root@gmail.com") {
            const nombreCompleto = user.nombres;
            const primerNombre = nombreCompleto.split(" ")[0];
            const primeraLetra = primerNombre.charAt(0);
            document.getElementById("userInitial").textContent = primeraLetra;
        }
    }, [user.correo, user.nombres]);

    return (
        <div className="m-0">
            <h1 className="mr-96 flex justify-center text-4xl text-black text-">Perfil</h1>
            <hr className="my-2 text-black" />
            <div>
                <Sidepage/>
            </div>

            <div className="mt-1 flex justify-center">
                <div className="ml-60 mt-2 bg-customBlue h-36 w-4/12 m-6 rounded-full flex items-center justify-center">
                    <div className="rounded-full h-28 w-28 bg-blue-200 flex items-center justify-center">
                        <p className="text-gray-800 text-3xl font-semibold" id="userInitial">
                            {user.correo === "root@gmail.com" ? "Admin" : ""}
                        </p>
                    </div>

        <div className="mt-1 flex justify-center">
                <div className="ml-80 mt-2 bg-customBlue3 h-36 w-3/6 m-6 rounded-full flex items-center justify-center shadow">
                    <img className="w-3/12 h-full mt-28 text-center rounded-full" src={hasbu} alt="" />

                </div>
            </div>

            <div className="flex justify-center mb-10">
                <form className="mt-16 w-5/12 ml-60 border rounded py-10 px-10 text-gray-700 shadow ">
                    <div className="mb-4">

                                <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2" htmlFor="nombre"> Nombre(s): </label>
                                <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.nombres}</label>

                                <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="apellido"> Apellidos: </label>
                                <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.apellidos}</label>

                                <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="email"> Correo Electronico: </label>
                                <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.correo}</label>

                                <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="telefono"> No. Telefono: </label>
                                <label className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue">{user.telefono}</label>
                    </div>
                </form>
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
</div>
    );
}

export default PerfilPage;