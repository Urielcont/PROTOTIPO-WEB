import { createContext, useState, useContext, useEffect } from "react";
import { RegistrarUsuario, login, verifyTokenRequest, getUserRequest } from "../api/auth";
import axios from 'axios';

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
    const [nivelPh, setnivelPh] = useState(null); //Ultimo valor de ph en la base de datos
    const [nivelFlujo, setnivelFlujo] = useState(null);//Ultimo valor de Flujo en la base de datos
    const [nivelTurbidez, setnivelTurbidez] = useState(null);//Ultimo valor de Turbidez en la base de datos


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


// -------OBTENER ULTIMO DATO DE LA BASE DE DATOS DE SENSORES----


    try {
        useEffect(() => {
            // Función para obtener los últimos datos de cada sección
            const obtenerDatos = async () => {
                try {
                    // Hacer solicitudes HTTP para obtener los datos más recientes
                    const datosPh = await axios.get("http://localhost:4000/api/ph");
                    const datosFlujo = await axios.get("http://localhost:4000/api/flujo");
                    const datoTurbidez = await axios.get("http://localhost:4000/api/turbidez");

                    // Establecer los estados con los datos más recientes
                    // console.log("Ultimo PH:", datosPh.data);
                    setnivelPh(datosPh.data);
                    // Datos del flujo
                    // console.log("Ultimo dato de Flujo: ", datosFlujo.data)
                    setnivelFlujo(datosFlujo.data)
                    // Datos del Trubidez
                    // console.log("Ultimo dato de Turbidez: ", datoTurbidez.data)
                    setnivelTurbidez(datoTurbidez.data)
                } catch (error) {
                    console.error("Error al obtener los datos:", error);
                }
            };


            obtenerDatos();

            const interval = setInterval(obtenerDatos, 1000);


            return () => clearInterval(interval);
        }, []);
    } catch (error) {
        console.log("Error al llamar los datos", error)
    }

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
            nivelPh,
            nivelFlujo,
            nivelTurbidez

        }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
