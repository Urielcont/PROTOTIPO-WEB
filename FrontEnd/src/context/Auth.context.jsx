import { createContext, useState,useContext} from "react";
import { RegistrarUsuario } from "../api/auth";
export const AuthContext=createContext()

export const useAuth=()=>{
    const context=useContext(AuthContext)
    if(!context){
        throw new Error("useAuth deberia estar dentro del provider")
    }
    return context;
}
export const AuthProvider=({children})=>{

    const [user,setUser]=useState(null)
    const [isAuth,setIsAuth]=useState(false);
    const [errors, setErrors]=useState([]);
    const signup=async(user)=>{
        try {
            const res= await RegistrarUsuario(user);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {

            setErrors(error.response.data)
        }
    };
    return(
        <AuthContext.Provider value={{
            signup,
            user,
            isAuth,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}