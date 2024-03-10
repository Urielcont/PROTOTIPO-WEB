import SidePage from "./sidebar";
import hasbu from "../assets/images/hasbu.jpeg";


function PerfilPage() {
    return (
        <div className="m-0">
            <h1 className="mr-64 text-xl">Perfil</h1>
            <hr className="my-2 text-black" />
            <div>
            <SidePage />
            </div>

        <div className="mt-1 flex justify-center">
            <div className="ml-60">
                <div className="ml-10 mt-4 bg-customBlue h-24 w-96 m-6 rounded-full flex items-center justify-center">
                    <img className="w-28 h-28 mt-28 text-center rounded-full" src={hasbu} alt="" />
                </div>
            </div>
        </div>


        </div>
        
    );
}

export default PerfilPage;
