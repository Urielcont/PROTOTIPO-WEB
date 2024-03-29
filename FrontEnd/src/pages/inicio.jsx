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
        <div>
            <SidePage />
        </div>
        
        <div className="flex justify-center ml-72">
            {/* Seccion del ph */
            <div className="bg-[url('src/assets/images/inicio_img1.png')] w-[300px] h-[708px] justify-center flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-center mb-3">Nivel del agua</h1>
                <div className="bg-white shadow-xl shadow-customBlue3 hover:shadow-white h-40 w-6/12 m-6 rounded-[50px] content-center flex flex-col items-center">
                    <i className="bi-droplet-half" style={{ fontSize: '3.2rem' }}></i>
                    <div className="bg-customBlue3 h-1/4 w-4/6 rounded-full mt-2 text-center text-xl">{nivelPh}</div>
                </div>
            </div>}
            {/* Seccion de la turbidez */
            <div className="bg-[url('src/assets/images/inicio_img2.png')] w-[300px] h-[708px] justify-center flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-center mb-3">Turbidez del agua</h1>
            <div className="bg-white shadow-xl shadow-customBlue3 hover:shadow-white h-40 w-6/12 m-6 rounded-[50px] content-center flex flex-col items-center">
                <i className="bi-tsunami" style={{ fontSize: '3.2rem' }}></i>
                <div className="bg-customBlue3 h-1/4 w-4/6 rounded-full mt-2 text-center text-xl">{nivelTurbidez}</div>
            </div>
            </div>}
            {/* Seccion del flujo del agua */
            <div className="bg-[url('src/assets/images/inicio_img3.png')] w-[300px] h-[708px] justify-center flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-center mb-3">Flujo del agua</h1>
                <div className="bg-white shadow-xl shadow-customBlue3 hover:shadow-white h-40 w-6/12 m-6 rounded-[50px] content-center flex flex-col items-center">
                    <i className="bi-water" style={{ fontSize: '3.2rem' }}></i>
                    <div className="bg-customBlue3 h-1/4 w-4/6 rounded-full mt-2 text-center text-xl">{nivelFlujo}</div>
                </div>
            </div>}
            {/* Seccion de las ventas */
            <div className="bg-[url('src/assets/images/inicio_img4.png')] w-[300px] h-[708px] justify-center flex flex-col items-center">
                <h1 className="text-3xl font-semibold text-center mb-3">Total de ventas</h1>
                <div className="bg-white shadow-xl shadow-customBlue3 hover:shadow-white h-40 w-6/12 m-6 rounded-[50px] content-center flex flex-col items-center">
                    <i className="bi-cash-coin" style={{ fontSize: '3.2rem' }}></i>
                    <div className="bg-customBlue3 h-1/4 w-4/6 rounded-full mt-2 text-center text-xl">$1,202</div>
                </div>
            </div>}

         </div>

    </div>

    );
}

export default InicioPage;
