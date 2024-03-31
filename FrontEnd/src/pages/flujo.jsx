import SidePage from "./sidebar";

function FlujoPage() {
    return (
        <div className="m-0 ">
            <h1 className="mr-64 text-xl flex justify-center">Flujo del Agua</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

    <div className="mt-1 flex justify-center">
        <div className="mt-24 ml-60 h-56 w-2/6 bg-gray-400 rounded-xl">
            <div className="mt-10 mx-auto my-auto bg-stone-950 h-32 w-80 rounded-xl">
                <h1 className="font-semibold text-5xl mt-4 m-auto text-center text-red-600 mb-3">0.000 L</h1>
                <h1 className=" font-medium text-center text-lime-500 mb-2 text-xl">0.0</h1>
                <h1 className="text-center text-white ">Reset total</h1>
            </div>
        </div>
    </div>

            <div className="flex justify-center mb-10">
                <div className="mt-14 w-5/12 ml-60 border rounded-2xl py-10 px-1 shadow ">
                    <h1 className="text-center text-xl mb-3">Historial de reviciones</h1>
                    <hr className="w-full" />
                    <div className="mt-4 flex justify-between mb-3">
                        <h2 className="ml-6">Fecha </h2>
                        <h2>Nivel de PH</h2>
                        <h2 className="mr-6">Estado</h2>
                    </div>
                    <hr />
                    <div className="mt-4 flex justify-between mb-3">
                        <h2>21/03/2024</h2>
                        <h2>666</h2>
                        <h2 >Base</h2>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default FlujoPage;
