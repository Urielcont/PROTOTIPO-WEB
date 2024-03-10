import SidePage from "./sidebar";
import hasbu from "../assets/images/hasbu.jpeg";


function PerfilPage() {
    return (
        <div className="m-0">
            <h1 className="mr-64 text-xl">Perfil</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

        <div className="mt-1 flex justify-center">
            <div className="ml-60">
                <div className="ml-10 mt-4 bg-customBlue h-24 w-96 m-6 rounded-full flex items-center justify-center">
                    <img className="w-28 h-28 mt-28 text-center rounded-full" src={hasbu} alt="" />
                </div>
            </div>
        </div>

        <form className="mt-16 w-96 ml-96 border rounded py-5 px-5 text-gray-700 shadow mx-auto">
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-" htmlFor="nombre">
            Nombre(s):
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre(s)"
        />
    </div>
    <div className="flex items-center justify-between">
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
            Guardar
        </button>
        <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
        >
            Cancelar
        </button>
    </div>
</form>


        </div>
        
    );
}

export default PerfilPage;
