import SidePage from "./sidebar";
import { useState, useEffect } from "react";
// import { verPh } from "../api/sensors.js";
import axios from 'axios';

function InicioPage() {

    const [nivelPh, setnivelPh] = useState(null);
    const [nivelFlujo, setnivelFlujo] = useState(null);
    const [nivelTurbidez, setnivelTurbidez] = useState(null);


    try {
        useEffect(() => {
            // Función para obtener los últimos datos de cada sección
            const obtenerDatos = async () => {
                try {
                    // Hacer solicitudes HTTP para obtener los datos más recientes
                    const datosPh = await axios.get("http://localhost:4000/api/ph");
                    const datosFlujo = await axios.get("http://localhost:4000/api/flujo");
                    const datoTurbidez = await axios.get("http://localhost:4000/api/turbidez");

                    // Establecer los estados con los datos más recientes
                    // console.log("Ultimo PH:", datosPh.data);
                    setnivelPh(datosPh.data);
                    // Datos del flujo
                    // console.log("Ultimo dato de Flujo: ", datosFlujo.data)
                    setnivelFlujo(datosFlujo.data)
                    // Datos del Trubidez
                    // console.log("Ultimo dato de Turbidez: ", datoTurbidez.data)
                    setnivelTurbidez(datoTurbidez.data)
                } catch (error) {
                    console.error("Error al obtener los datos:", error);
                }
            };


            obtenerDatos();

            const interval = setInterval(obtenerDatos, 1000);


            return () => clearInterval(interval);
        }, []);
    } catch (error) {
        console.log("Error al llamar los datos", error)
    }

    return (
        <div className="m-0">
            <h1 className="mr-96 text-xl flex justify-center" >Resumen del Dia</h1>
            <hr className="my-2 text-black" />
            <div>
                <SidePage />
            </div>

            <div className="mt-1 flex justify-center ">

                <div className="ml-60">
                    {/* Seccion del ph */
<<<<<<< HEAD
                    <div className="ml-10 mt-10 bg-customBlue h-52 w-80 m-6 rounded-md">
                        <i className="bi-droplet-half ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Nivel del PH del Agua</p>
                    </div>}
                    {/* Seccion del flujo del agua */
                    <div className="ml-10 mt-16 bg-customBlue h-52 w-80 m-6 rounded-md">
                    <i className="bi-water ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Flujo del Agua</p>
                    </div>}
=======
                        <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md">
                            <i className="bi-droplet-half ml-28" style={{ fontSize: '2.5rem' }}></i>
                            <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">{nivelPh}</div>
                            <p className="text-zinc-950 mt-2">Nivel del PH del Agua</p>
                        </div>}
                    {/* Seccion del flujo del agua */
                        <div className="ml-10 mt-16 bg-customBlue h-40 w-64 m-6 rounded-md">
                            <i className="bi-water ml-28" style={{ fontSize: '2.5rem' }}></i>
                            <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">{nivelFlujo}</div>
                            <p className="text-zinc-950 mt-2">Flujo del Agua</p>
                        </div>}
>>>>>>> b65a3a76d57bacaa554b8ca5e7028a143ded3a6b

                </div>
                <div>
                    {/* Seccion de las ventas */
<<<<<<< HEAD
                    <div className="ml-10 mt-10 bg-customBlue h-52 w-80 m-6 rounded-md">
                    <i className="bi-cash-coin ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Total de Ventas</p>
                    </div>}
                    {/* Seccion de la turbidez */
                    <div className="ml-10 mt-16 bg-customBlue h-52 w-80 m-6 rounded-md">
                    <i className="bi-tsunami ml-28"style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                        <p className="text-zinc-950 mt-2">Turbidez del Agua</p>
                    </div>}
=======
                        <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md">
                            <i className="bi-cash-coin ml-28" style={{ fontSize: '2.5rem' }}></i>
                            <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">7</div>
                            <p className="text-zinc-950 mt-2">Total de Ventas</p>
                        </div>}
                    {/* Seccion de la turbidez */
                        <div className="ml-10 mt-16 bg-customBlue h-40 w-64 m-6 rounded-md">
                            <i className="bi-tsunami ml-28" style={{ fontSize: '2.5rem' }}></i>
                            <div className="bg-customBlue2 h-8 w-20 rounded-md ml-7">{nivelTurbidez}</div>
                            <p className="text-zinc-950 mt-2">Turbidez del Agua</p>
                        </div>}
>>>>>>> b65a3a76d57bacaa554b8ca5e7028a143ded3a6b
                </div>
            </div>


        </div>

    );
}

export default InicioPage;
