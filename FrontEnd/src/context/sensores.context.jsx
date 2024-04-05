import { createContext, useState, useEffect } from "react";
// import { RegistrarUsuario, login, verifyTokenRequest, getUserRequest } from "../api/auth";
import axios from 'axios';

import PropTypes from 'prop-types';


export const SensoresContext = createContext();


export const SensorProvider = ({ children }) => {
    const [historialPh, setHistorialPh] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/mostrarFlujo");
        setHistorialPh(response.data.map(item => ({...item, fecha: new Date(item.fecha).toLocaleString()}))); // Formatear la fecha
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <SensoresContext.Provider value={{
        historialPh
    }}>
        {children}
    </SensoresContext.Provider>
);
}

SensorProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
