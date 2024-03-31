import React, { useState, useEffect } from "react";
import SidePage from "../components/sidebar";
import { useAuth } from "../context/Auth.context";

function UsuariosPage() {
    const { getUser } = useAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getUser();
            setUsers(res.data);
            console.log(users)
        };

        fetchData();
    }, []);

    return (
        <div className="m-0">
                <div className="flex justify-between items-center mb-4">
                <h1 className="ml-96 text-4xl text-black">Usuarios</h1>
                <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600">
                    Eliminar
                </button>
            </div>
            <hr className="my-2 text-black" />
            <div>
                <SidePage />
            </div>
            <div className="grid ml-80 md:grid-cols-2">
                {users.map((user) => (
                                            <div key={user._id} className="bg-white rounded-lg shadow-md p-4 m-2 flex items-center justify-between">
                                            <div>
                                                <h1 className="text-xl font-semibold">{user.nombres} {user.apellidos}</h1>
                                                <p className="text-gray-600">{user.correo}</p>
                                                <p className="text-gray-600">{user.telefono}</p>
                                            </div>
                                            <input 
                                                type="checkbox" 
                                                
                                                className="rounded-xl"
                                            />
                
                                        </div>
                ))}
            </div>
        </div>
    );
}

export default UsuariosPage;
