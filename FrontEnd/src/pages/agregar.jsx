import React, { useState, useEffect } from "react";
import SidePage from "./sidebar";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.context";
import Swal from 'sweetalert2';

function AgregarPage() {
    const { users, agregarUsers, errors: registerErrors } = useAuth();
    const [existingEmails, setExistingEmails] = useState([]);
    const [existingPhones, setExistingPhones] = useState([]);
    const [existingPasswords, setExistingPasswords] = useState([]);
    const [rolValue, setRolValue] = useState(false); // Valor por defecto para empleado

    useEffect(() => {
        if (users) {
            const emails = users.map(user => user.correo);
            setExistingEmails(emails);
            const phones = users.map(user => user.telefono);
            setExistingPhones(phones);
            const passwords = users.map(user => user.password);
            setExistingPasswords(passwords);
        }
    }, [users]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        // Verificar si el correo ya existe
        if (existingEmails.includes(data.correo)) {
            Swal.fire({
                title: 'Error',
                text: 'Este correo electrónico ya está registrado',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        // Verificar si el teléfono ya existe
        if (existingPhones.includes(data.telefono)) {
            Swal.fire({
                title: 'Error',
                text: 'Este número de teléfono ya está registrado',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        // Verificar si la contraseña ya existe
        if (existingPasswords.includes(data.password)) {
            Swal.fire({
                title: 'Error',
                text: 'Esta contraseña ya está registrada',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
            });
            return;
        }

        // Si no hay duplicados, agregar el usuario
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una vez agregado, no podrás deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, agregarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Convertir el valor de rol a booleano
                data.rol = rolValue;
                agregarUsers(data);
                reset(); // Reinicia el formulario después de agregar el usuario
                Swal.fire({
                    title: 'Usuario agregado',
                    text: 'El usuario se ha agregado exitosamente',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    });

    return (
        <div className="flex">
            <SidePage />
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="mr-96 flex justify-center text-4xl text-black text-">Agregar Usuario</h1>
                <hr className="my-2 text-black" />
                <div>
                    <SidePage />
                </div>
                <div className="flex justify-center mb-10">
                    {/* Muestra los errores de registro */}
                    {registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white text-center m-2" key={i}>
                            {error}
                        </div>
                    ))}
                    <form onSubmit={onSubmit} className="bg-slate-50 mt-16 w-5/12 ml-80 border rounded py-10 px-10 text-gray-700 shadow-xl shadow-zinc-400 hover:shadow-customBlue3">
                        <div className="mb-4">
                            <label className="text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2" htmlFor="nombre"> Nombre(s): </label>
                            <input className={`${errors.nombres ? 'border-red-500' : 'border-cyan-600'} shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue`} {...register('nombres', { required: true })} autoFocus id="nombre" type="text" />
                            {errors.nombres && <p className="text-red-500">Nombre es requerido</p>}

                            <label className="text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="apellido"> Apellidos: </label>
                            <input className={`${errors.apellidos ? 'border-red-500' : 'border-cyan-600'} shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue`} {...register('apellidos', { required: true })} id="apellidos" type="text" />
                            {errors.apellidos && <p className="text-red-500">Apellidos es requerido</p>}

                            <label className="text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="email"> Correo Electrónico: </label>
                            <input className={`${errors.correo ? 'border-red-500' : 'border-cyan-600'} shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue`} {...register('correo', { required: true })} id="correo" type="email" />
                            {errors.correo && <p className="text-red-500">Correo es requerido</p>}

                            <label className="text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="telefono"> No. Teléfono: </label>
                            <input maxLength={10} className={`${errors.telefono ? 'border-red-500' : 'border-cyan-600'} shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue`} {...register('telefono', { required: true })} id="telefono" type="tel" />
                            {errors.telefono && <p className="text-red-500">Telefono es requerido</p>}

                            <label className="text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="password"> Contraseña: </label>
                            <input className={`${errors.password ? 'border-red-500' : 'border-cyan-600'} shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue`} {...register('password', { required: true })} id="password" type="password" />
                            {errors.password && <p className="text-red-500">Contraseña es requerido</p>}

                            <label className="text-customBlue2 font-semibold border-dashed text-base mb-1 ml-2 mt-2" htmlFor="rol"> Rol: </label>
                            <select className="shadow border rounded w-full py-2 px-3 text-black leading-tight border-blue" value={rolValue ? "administrador" : "empleado"} onChange={(e) => setRolValue(e.target.value === "administrador")} id="rol">
                                <option value="administrador">Administrador</option>
                                <option value="empleado">Empleado</option>
                            </select>
                            {errors.rol && <p className="text-red-500">Rol es requerido</p>}
                        </div>
                        <button type="submit" id="botonAgregar" className="mt-4 rounded-full self-center text-white p-2 w-36 bg-blue-500 hover:bg-blue-600">
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AgregarPage;
