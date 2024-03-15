import SidePage from "./sidebar";

function VentasPage() {
    return (
        <div className="m-0 ">
            <h1 className="mr-96 text-xl flex justify-center">Ventas del dia</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

            <div className="mt-1 flex justify-center">
                
                <div className="ml-60">
                    {/* Seccion del ph */
                    <div className="mr-3 mt-10 bg-customBlue h-18 w-24 m-6 rounded-md">
                        <i className="bi-pencil-square"style={{ fontSize: '1.9rem' }}></i>
                    </div>}
                </div>
                <div>
                    {/* Seccion del ph */
                    <div className="mr-10 mt-10 bg-customBlue h-18 w-48 m-6 rounded-md p-2">
                    <a href="" className="text-xl">Cierre de Caja</a>
                </div>}
                </div>
                </div>

                <div className="mt-1 flex justify-center">
                    <div className="ml-56 mt-10 bg-customBlue h-44 w-96 m-6 rounded-md p-2">
                        <h1 className="text-3xl text-white">Total:</h1>
                        <div className="ml-10 mt-2 bg-white h-24 w-72 rounded-md">
                            <h1 className="text-4xl">$300.00</h1>
                        </div>
                    </div>
                </div>

            </div>
        
    );
}

export default VentasPage;
