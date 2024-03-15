import SidePage from "./sidebar";
import hasbu from "../assets/images/hasbu.jpeg";


function PerfilPage() {
    return (
        <div className="m-0">
            <h1 className="mr-96 text-xl flex justify-center">Perfil</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

        <div className="mt-1 flex justify-center">
                <div className="ml-60 mt-2 bg-customBlue h-36 w-4/12 m-6 rounded-full flex items-center justify-center">
                    <img className="w-4/12 h-4/12 mt-28 text-center rounded-full" src={hasbu} alt="" />
                </div>
        </div>

        <div className="flex justify-center mb-10">

        <form className="mt-16 w-5/12 ml-60 border rounded py-10 px-10 text-gray-700 shadow ">
    <div className="mb-4">
        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2" htmlFor="nombre">
            Nombre(s):
        </label>
        <input
            className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue"
            id="nombre"
            type="text"
        />

        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="apellido">
            Apellidos:
        </label>
        <input
            className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue"
            id="apellido"
            type="text"
        />
        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="edad">
            Edad:
        </label>
        <input
            className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue"
            id="edad"
            type="number"
        />
        <label className=" text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="email">
            Correo Electronico:
        </label>
        <input
            className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue"
            id="email"
            type="email"
        />
        
    </div>
    <div className="flex items-center justify-center">
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
    </div>
</form>
</div>

        </div>
        
    );
}

export default PerfilPage;
