import SidePage from "./sidebar";

function InicioPage() {
    return (
        <div className="m-0">
            <h1 className="mr-56 text-xl" >Resumen del Dia</h1>
            <hr className="my-2 text-gray-600" />
            <div>
            <SidePage />
            </div>

            <div className="mt-1 flex justify-center ">
                <br />
                <div className="ml-60">
                    {/* Seccion del ph */
                    <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md">
                        <i className="bi-droplet-half ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Nivel del PH del Agua</p>
                    </div>}
                    {/* Seccion del flujo del agua */
                    <div className="ml-10 mt-16 bg-customBlue h-40 w-64 m-6">
                    <i className="bi-water ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Flujo del Agua</p>
                    </div>}

                </div>
                <div>
                    {/* Seccion de las ventas */
                    <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6">
                    <i className="bi-cash-coin ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Total de Ventas</p>
                    </div>}
                    {/* Seccion de la turbidez */
                    <div className="ml-10 mt-16 bg-customBlue h-40 w-64 m-6">
                    <i className="bi-tsunami ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Turbidez del Agua</p>
                    </div>}
                </div>
            </div>


        </div>
        
    );
}

export default InicioPage;
