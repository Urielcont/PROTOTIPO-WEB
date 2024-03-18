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
        <h1 className="mr-56 text-xl" >Resumen del Dia</h1>
        <hr className="my-2 text-black" />
        <div>
            <SidePage />
        </div>

        <div className="mt-1 flex justify-center ">

            <div className="ml-60">
                {/* Seccion del ph */
                    <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md">
                        <i className="bi-droplet-half ml-28" style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-24">{nivelPh}</div>
                        <p className="text-zinc-950 mt-2 ml-10">Nivel del PH del Agua</p>
                    </div>}
                {/* Seccion del flujo del agua */
                    <div className="ml-10 mt-16 bg-customBlue h-40 w-64 m-6 rounded-md">
                        <i className="bi-water ml-28" style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-24">{nivelFlujo}</div>
                        <p className="text-zinc-950 mt-2 ml-20">Flujo del Agua</p>
                    </div>}

            </div>
            <div>
                {/* Seccion de las ventas */
                    <div className="ml-10 mt-10 bg-customBlue h-40 w-64 m-6 rounded-md">
                        <i className="bi-cash-coin ml-28" style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-24">7</div>
                        <p className="text-zinc-950 mt-2 ml-20" >Total de Ventas</p>
                    </div>}
                {/* Seccion de la turbidez */
                    <div className="ml-10 mt-16 bg-customBlue h-40 w-64 m-6 rounded-md">
                        <i className="bi-tsunami ml-28" style={{ fontSize: '2.5rem' }}></i>
                        <div className="bg-customBlue2 h-8 w-20 rounded-md ml-24">{nivelTurbidez}</div>
                        <p className="text-zinc-950 mt-2 ml-16">Turbidez del Agua</p>
                    </div>}
            </div>
        </div>


    </div>

    );
}

export default InicioPage;
