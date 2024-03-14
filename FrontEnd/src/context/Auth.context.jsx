import { createContext, useState,useContext, useEffect} from "react";
import { RegistrarUsuario, login } from "../api/auth";
import PropTypes from 'prop-types';

export const AuthContext=createContext();

export const useAuth=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw new Error("useAuth deberia estar dentro del provider")
    }
    return context;
}
export const AuthProvider=({ children })=>{

    const [user,setUser]=useState(null)
    const [isAuth,setIsAuth]=useState(false);
    const [errors, setErrors]=useState([]);
    
    const signup = async (user) => {
        try {
            const res= await RegistrarUsuario(user);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data)
        }
    };
    const signin = async (user) => {
        try{
            const res= await login(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuth(true);
        }catch(error){
            if(Array.isArray(error.response.data)){
             return   setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }};

        useEffect(()=>{
            if(errors.length > 0){
                const timer= setTimeout(()=>{
                    setErrors([])

                },5000)
                return ()=>clearTimeout(timer)
            }
        },[errors])
    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuth,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

