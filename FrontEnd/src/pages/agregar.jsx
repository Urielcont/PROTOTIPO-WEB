import React from "react";
import SidePage from "./sidebar";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.context";
import Swal from 'sweetalert2';

function AgregarPage() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { agregarUsers, errors: registerErrors } = useAuth();

    const onSubmit = handleSubmit((data) => {
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
