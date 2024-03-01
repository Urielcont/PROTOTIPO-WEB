import { useForm } from 'react-hook-form';

function Login() {
    const { register,formState: { errors } } = useForm();
   
    return (
        <div className='flex justify-center items-center '>
            <form  className='bg-slate-400 shadow-md rounded px-8 pt-6 pm-3 w-200'>
                <h2 className='text-4xl text-center font-bold mb-4 text-black'>Login</h2>

                <div className='mb-4'>
                    <label className='bloc font-bold mb-2' htmlFor='username'>Username</label>
                    <input type='text' {...register('username', { required: true })} id='username' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Username'/>
                    {
                    errors.username && (
                        <p className='text-red-500'>Username es Requerido</p>
                    )
                }
                </div>

                
                <div className='mb-6'>
                    <label className='block' htmlFor='password'>Contraseña</label>
                    <input type='password' {...register('password', { required: true })} id='password' className={` border  rounded w-full py-2 bg-sky-200 text-gray-700 `} placeholder='Contraseña'/>
                    {
                    errors.password && (
                        <p className='text-red-500'>Contraseña es Requerido</p>
                    )
                }
                </div>
                
                <div className='flex items-center justify-center'>
                    <button type='submit' className= ''>Registrarse</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
