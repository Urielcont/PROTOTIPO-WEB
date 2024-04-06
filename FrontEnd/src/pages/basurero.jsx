import React, { useState, useEffect } from "react";
import SidePage from "./sidebar";
import { getDeletedUsersRequest } from "../api/auth";

function UsuariosEliminadosPage() {
    const [deletedUsers, setDeletedUsers] = useState([]);

    useEffect(() => {
        const fetchDeletedUsers = async () => {
            try {
                const res = await getDeletedUsersRequest();
                setDeletedUsers(res.data);
            } catch (error) {
                console.error("Error al obtener los usuarios eliminados:", error);
            }
        };
        fetchDeletedUsers();
    }, []);

    return (
        <div className="m-0">
            <div className="flex justify-between items-center mb-4">
                <h1 className="ml-96 text-4xl text-black">Usuarios Eliminados</h1>
            </div>
            <hr className="my-2 text-black" />
            <div>
                <SidePage/>
            </div>
            <div className="ml-80">
                <table className="table-fixed border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="w-1/4 border border-gray-400 px-4 py-2">Nombre</th>
                            <th className="w-1/4 border border-gray-400 px-4 py-2">Apellido</th>
                            <th className="w-1/4 border border-gray-400 px-4 py-2">Correo</th>
                            <th className="w-1/4 border border-gray-400 px-4 py-2">Teléfono</th>
                            <th className="w-1/4 border border-gray-400 px-4 py-2">Fecha de Eliminación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deletedUsers && deletedUsers.map((user) => (
                            <tr key={user._id}>
                                <td className="border border-gray-400 px-4 py-2">{user.nombres}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.apellidos}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.correo}</td>
                                <td className="border border-gray-400 px-4 py-2">{user.telefono}</td>
                                <td className="border border-gray-400 px-4 py-2">{new Date(user.fechaEliminacion).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsuariosEliminadosPage;
