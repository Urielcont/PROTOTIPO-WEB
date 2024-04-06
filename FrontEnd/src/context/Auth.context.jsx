import { createContext, useState, useContext, useEffect } from "react";
import { RegistrarUsuario, login, verifyTokenRequest, getUserRequest } from "../api/auth";

import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deberia estar dentro del provider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
   

    const getUser = async () => {
        try {
            const res = await getUserRequest();
            return res.data; // Devuelve los usuarios
        } catch (error) {
            console.error(error);
            return []; // En caso de error, devuelve un array vacío
        }
    };



    const signup = async (user) => {
        try {
            const res = await RegistrarUsuario(user);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data);
        }
    };

    const signin = async (user) => {
        try {
            const res = await login(user);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response.data.message]);
            }
        }
    };

    const logout = () => {
        Cookies.remove("token");
        setIsAuth(false);
        setUser(null);
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuth(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data) {
                    setIsAuth(false);
                    setLoading(false);
                    return;
                }

                setIsAuth(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuth(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin();
    }, []);




    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            getUser,

            user,
            isAuth,
            loading,
            errors,
            // Datos de la base de datos
           

        }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
