import SidePage from "./sidebar";

function FlujoPage() {
    return (
        <div className="m-0 ">
            <h1 className="mr-64 text-xl flex justify-center">Flujo del Agua</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

            <div className="mt-1 flex justify-center">
                <div className="mt-24 ml-60 h-56 w-2/6 bg-black rounded-xl">
                <div>
                    <div className="mt-8 ml-auto mr-auto bg-sky-400 h-40 w-96  rounded-xl flex">
                        <div className="ml-auto mr-auto bg-lime-300 h-32 w-80 rounded-xl mt-3">
                            <h1 className="text-3xl mt-4">0.000 L</h1>
                            <h1>0.0</h1>
                            <h1>Reset total</h1>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    );
}

export default FlujoPage;
