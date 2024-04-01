import { GraficaPh } from "../components/graficaph";
import { GraficaTur } from "../components/graficaturbidez";
import SidePage from "./sidebar";

function CalidadPage() {
    return (
        <div className="m-0 ">
            <h1 className="text-xl flex justify-center mr-96">Registro de calidad del agua</h1>
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
                    <hr  className="bg-linea"/>
                    <div className="ml-8 mt-3 bg-customBlue3 rounded-full border-none text-white w-2/6 h-2/6">
                        <h1 className="text-2xl m-3"> 1.90</h1>
                    </div>
                </div>

                <div className="bg-slate-50 w-3/5 h-32 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2 text-xl">Ph de esta semana </h1>
                        <div className=" w-16 h-7 text-center">
                            <i className="bi-droplet-half" style={{ fontSize: '1.8rem' }}></i>
                        </div>
                    </div>
                    <hr  className="bg-linea"/>
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

            {/*Segunda seccion de turbidez */}
            <h1 className="text-center font-semibold text-3xl ml-60 mt-9">Datos de la Turbidez del agua</h1>
            <div className="flex justify-center mt-10">
                <div className="bg-slate-50 w-3/6 h-32 ml-80 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2  text-xl">Turbidez actual</h1>
                        <div className=" w-16 h-7 text-center">
                            <i className="bi-tsunami" style={{ fontSize: '1.8rem' }}></i>
                        </div>
                    </div>
                    <hr  className="bg-linea"/>
                    <div className="ml-8 mt-3 bg-customBlue3 rounded-full border-none text-white w-2/6 h-2/6">
                        <h1 className="text-2xl m-3"> 5 gotas</h1>
                    </div>
                </div>

                <div className="bg-slate-50 w-3/5 h-32 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <div className="flex justify-between ">
                        <h1 className="font-semibold m-2 text-xl">Turbidez esta semana</h1>
                        <div className=" w-16 h-7 text-center">
                            <i className="bi-tsunami" style={{ fontSize: '1.8rem' }}></i>
                        </div>
                    </div>
                    <hr  className="bg-linea"/>
                    <div className="ml-8 mt-3 bg-customBlue3 rounded-full border-none text-white w-3/6 h-2/6">
                        <h1 className="text-2xl m-3"> 20 gotas</h1>
                    </div>
                </div>
            </div>
            {/*Implementacion de la grafica del ph del mes */}
            <div className="flex justify-center mt-10">
                <div className="bg-slate-50 w-4/6 h-1/6 ml-80 mb-8 mr-10 rounded-xl shadow-md shadow-zinc-400 hover:shadow-customBlue3">
                    <h1 className="font-semibold text-2xl text-center">Registro turbidez este mes</h1>
                    <GraficaTur></GraficaTur>
                </div>
            </div>



            </div>
        
    );
}

export default CalidadPage;
