import SidePage from "./sidebar";

function CalidadPage() {
    return (
        <div className="m-0">
            <h1 className="mr-56 text-xl" >Registro de calidad del agua</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

            <div className="mt-1 flex justify-center ">
                <br />
                <div className="ml-60 ">
                    {/* Seccion del ph */
                    <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md">
                        <i className="bi-droplet-half "style={{ fontSize: '2.5rem' }}></i>
                        <p className="text-zinc-950 mt-2">PH Actual </p>
                        <div className=" bg-gray-200 h-8 w-32 rounded-full ml-14 mt-3"></div>
                    </div>}
                </div>
                <div>
                    {/* Seccion de la turbidez */
                    <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md">
                    <i className="bi-tsunami"style={{ fontSize: '2.5rem' }}></i>
                    <p className="text-zinc-950 mt-2">Turbidez Actual</p>
                    <div className=" bg-gray-200 h-8 w-32 rounded-full ml-14 mt-3"></div>
                    </div>}
                </div>
            </div>

            <div>
                <h1 className="ml-64">Registro</h1>
            </div>


        </div>
        
    );
}

export default CalidadPage;
