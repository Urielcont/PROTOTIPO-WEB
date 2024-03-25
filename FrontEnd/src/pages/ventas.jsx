import SidePage from "./sidebar";
import { GraficaVentas } from "../components/graficaventas";


function VentasPage() {
    return (
        <div className="m-0 ">
            <h1 className="text-xl flex justify-center">Ventas del dia</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>
            {/*Primera seccion de ventas */}
            <div className="flex justify-center mt-10">
                <div className="bg-slate-50 w-full h-32 ml-80 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2 text-xl">Ventas del dia</h1>
                        <div className="bg-customBlue3 w-16 h-7 m-2 text-center font-semibold text-white rounded-xl ">
                            <h2>Hoy</h2>
                        </div>
                    </div>
                    <hr  className="bg-linea"/>
                    <h1 className="text-3xl m-3">$ 1,760</h1>
                </div>

                <div className="bg-slate-50 w-3/5 h-32 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2 text-xl">Periodo:</h1>
                    </div>
                    <hr  className="bg-linea"/>

                    <input type="date" name="" id=""  className="ml-8 mt-3 bg-customBlue3 rounded-xl border-none text-white w-5/6 "/>
                </div>
            </div>
            {/*Implementacion de la grafica de ventas del mes */}
            <div className="flex justify-center mt-10">
                <div className="bg-slate-50 w-full h-1/6 ml-80 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <h1 className="font-semibold text-2xl text-center">Ventas del mes</h1>
                    <GraficaVentas></GraficaVentas>
                </div>
            </div>
            {/*Ultima seccion de ventas */}
            <div className="flex justify-center mt-10 mb-10">
                <div className="bg-slate-50 w-full h-32 ml-80 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2 text-xl">Ventas esta semana</h1>
                        <div className="bg-customBlue3 w-28 h-7 m-2 text-center font-semibold text-white rounded-xl ">
                            <h2>Semanal</h2>
                        </div>
                    </div>
                    <hr  className="bg-linea"/>
                    <h1 className="text-3xl m-3">$ 2,102</h1>
                </div>

                <div className="bg-slate-50 w-full h-32 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2 text-xl">Ventas este mes</h1>
                        <div className="bg-customBlue3 w-28 h-7 m-2 text-center font-semibold text-white rounded-xl ">
                            <h2>Mensual</h2>
                        </div>
                    </div>
                    <hr  className="bg-linea"/>
                    <h1 className="text-3xl m-3">$ 4,902</h1>
                </div>
              
            </div>


            </div>
        
    );
}

export default VentasPage;
