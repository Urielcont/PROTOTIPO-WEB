import { GraficaLineal } from "../components/graficachart";
import SidePage from "./sidebar";

function CalidadPage() {
    return (
        <div className="m-0">
            <h1 className="mr-96 text-xl flex justify-center" >Registro de calidad del agua</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

            <div className="mt-1 flex justify-center ">
                <br />
                <div className="ml-60 ">
                    {/* Seccion del ph */
                    <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md ">
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
                <h1 className="ml-64 flex justify-center">Registro</h1>
            </div>

            <div className="flex justify-center ml-24 mt-5 w-full h-full">
            <div className="flex justify-center w-7/12 h-2/5">
                <GraficaLineal></GraficaLineal>
            </div>
            </div>

        </div>
        
    );
}

export default CalidadPage;
