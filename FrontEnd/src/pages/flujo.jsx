import { useContext } from "react";
import SidePage from "./sidebar";
import { SensoresContext } from "../context/sensores.context";

function FlujoPage() {
    const { historialFlujo,nivelFlujo } = useContext(SensoresContext);

    const ultimos10Registros = historialFlujo.slice(0, 10).reverse();

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
                        <h1 className="font-semibold text-5xl mt-4 m-auto text-center text-red-600 mb-3">
                            {nivelFlujo.mlSalidos} L
                        </h1>
                        <h1 className="text-center text-white ">
                            {nivelFlujo.fecha}
                        </h1>
                        <h1 className=" font-medium text-center text-lime-500 mb-2 text-xl">
                           Flujo Acumulado: {nivelFlujo.FlujoAcumulado}
                        </h1>
                       
                    </div>
                </div>
            </div>

            <div className="flex justify-center ml-36 mt-12">
                <div className="w-8/12">
                    <h1 className="text-center text-xl mb-3">Historial de Flujo</h1>
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
                                        <td className="border border-gray-300 px-4 py-2">{item.fecha}</td>
                                        <td className="border border-gray-300 px-4 py-2">{item.mlSalidos}</td>
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

export default FlujoPage;
