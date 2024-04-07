import { GraficaPh } from "../components/graficaph";
import SidePage from "./sidebar";
import { useContext } from "react";
import { SensoresContext } from "../context/sensores.context";
function PhPage() {
    // Obtener loos valores del contexto de ultimo dato en la base de datos
    const { nivelPh,historialPh } = useContext(SensoresContext);
    const ultimos10Registros = historialPh.slice(0, 10).reverse();

    return (
        <div className="m-0 ">
            <h1 className="text-xl flex justify-center mr-96">Registro de PH del agua</h1>
            <hr className="my-2 text-black" />
            <div>
                <SidePage />
            </div>
            {/*Primera seccion ph */}
            <h1 className="text-center font-semibold text-3xl ml-60">Datos del PH del agua </h1>
            <div className="flex justify-center mt-10">
                <div className="bg-slate-50 w-3/6 h-32 ml-80 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2  text-xl">Ph actual</h1>
                        <div className=" w-16 h-7 text-center">
                            <i className="bi-droplet-half" style={{ fontSize: '1.8rem' }}></i>
                        </div>
                    </div>
                    <hr className="bg-linea" />
                    <div className="ml-8 mt-3 bg-customBlue3 rounded-full border-none text-white w-2/6 h-2/6">
                        <h1 className="text-2xl m-3"> {nivelPh.nivel_ph}</h1>
                    </div>
                </div>

                <div className="bg-slate-50 w-3/5 h-32 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2 text-xl">Ph de esta semana </h1>
                        <div className=" w-16 h-7 text-center">
                            <i className="bi-droplet-half" style={{ fontSize: '1.8rem' }}></i>
                        </div>
                    </div>
                    <hr className="bg-linea" />
                    <div className="ml-8 mt-3 bg-customBlue3 rounded-full border-none text-white w-3/6 h-2/6">
                        <h1 className="text-2xl m-3"> 1.90</h1>
                    </div>
                </div>
            </div>
            {/*Implementacion de la grafica del ph del mes */}
            <div className="flex justify-center mt-10">
                <div className="bg-slate-50 w-4/6 h-1/6 ml-80 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <h1 className="font-semibold text-2xl text-center">Registro ph este mes</h1>
                    <GraficaPh></GraficaPh>
                </div>
            </div>

            <div className="flex justify-center ml-36 mt-12">
                <div className="w-8/12 mb-10">
                    <h1 className="text-center text-xl mb-3">Historial reciente de PH</h1>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border text-center border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Fecha</th>
                                    <th className="border border-gray-300 px-4 py-2">Cantidad de Salida (ml)</th>
                                    <th className="border border-gray-300 px-4 py-2">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ultimos10Registros.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                        <td className="border border-gray-300 px-4 py-2">{new Date(item.fecha).toLocaleDateString()}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.nivel_ph}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.estado}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            


        </div>

    );
}

export default PhPage;
